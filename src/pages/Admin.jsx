import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Admin() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const res = await api.get("/posts");
                const sortedPosts = res.data.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );

                setPosts(sortedPosts);
            } catch (err) {
                console.error("Erro ao carregar posts:", err);
                alert("Erro ao carregar posts.");
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    const handleDeletePost = async (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja deletar este post?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/posts/${id}`);
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
            alert("Post deletado com sucesso ✅");
        } catch (error) {
            console.error("Erro ao deletar post:", error);
            alert("Erro ao deletar o post ❌");
        }
    };

    if (loading) {
        return <div className="p-8 text-center">Carregando posts...</div>;
    }

    if (!posts.length) {
        return <div className="p-8 text-center">Nenhum post encontrado.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Administração de Posts</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post._id} className="p-4 border rounded shadow flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-sm text-textSecondary">
                                Por {post.author || "Anônimo"} em{" "}
                                {new Date(post.createdAt).toLocaleString("pt-BR")}
                            </p>
                        </div>
                        <button
                            onClick={() => handleDeletePost(post._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
