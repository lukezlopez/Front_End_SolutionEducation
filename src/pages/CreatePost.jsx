import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await api.post("/posts", { title, content, author });
            const newId = res.data._id || res.data.id;

            setTitle("");
            setContent("");
            setAuthor("");

            if (newId) {
                navigate(`/post/${newId}`, { state: { fromCreate: true } }); 
            } else {
                navigate("/admin");
            }
        } catch (err) {
            console.error("Erro ao criar post", err);
            alert("Erro ao criar post");
        }
    }

    return (
        <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Criar Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Autor"
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={8}
                    placeholder="Conteúdo"
                    className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700"
                />
                <div>
                    <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-lg">
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    );
}
