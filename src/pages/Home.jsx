import { useEffect, useState } from "react";
import { api } from "../services/api";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { role } = useAuth();

    const load = async () => {
        setLoading(true);
        try {
            const res = await api.get("/posts");
            const sortedPosts = res.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );

            setPosts(sortedPosts);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const filtered = posts.filter(p =>
        (p.title + p.author + (p.description || p.content || ""))
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
                q.toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
            )
    );

    return (
        <div>
            <div className="mb-6 flex gap-4 items-center">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Buscar posts por título, autor ou conteúdo..."
                    className="bg-surface border border-borderColor text-textPrimary rounded-lg px-4 py-2 flex-1"
                />
                <button className="px-4 py-2 rounded-lg">Buscar</button>
            </div>

            {loading ? (
                <div className="card text-center">Carregando...</div>
            ) : (
                <motion.section layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(post => <PostCard key={post._id} post={post} />)}
                </motion.section>
            )}

            {role === "professor" && (
                <button
                    onClick={() => navigate("/create")}
                    className="fixed bottom-8 right-8 bg-accent text-white w-14 h-14 rounded-full shadow-lg hover:scale-105 transition text-2xl flex items-center justify-center"
                    title="Criar novo post"
                >
                    +
                </button>
            )}
        </div>
    );
}
