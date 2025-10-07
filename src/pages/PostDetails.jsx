import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const { role } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/posts/${id}`);
                setPost(res.data);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if (loading) return <div className="card text-center">Carregando...</div>;
    if (!post) return <div className="card text-center">Post não encontrado.</div>;

    return (
        <div className="card relative">
            <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
            <div className="text-sm text-textSecondary mb-6">
                Por {post.author || "Anônimo"} •{" "}
                {new Date(post.createdAt || Date.now()).toLocaleString("pt-BR")}
            </div>
            <p className="text-textPrimary whitespace-pre-wrap leading-relaxed">
                {post.content}
            </p>

            <button
                onClick={() => navigate("/")}
                className="mt-8 px-4 py-2 bg-muted text-textPrimary rounded-lg hover:bg-muted/80 transition"
            >
                Voltar
            </button>

            {role === "professor" && (
                <button
                    onClick={() => navigate(`/edit/${post._id}`)}
                    className="mt-4 ml-4 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition"
                >
                    Editar Post
                </button>
            )}
        </div>
    );
}
