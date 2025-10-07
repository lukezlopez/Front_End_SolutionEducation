import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function EditPost() {
    const { id } = useParams();
    const [form, setForm] = useState({ title: "", author: "", content: "" });
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/posts/${id}`).then(res => setForm(res.data));
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/posts/${id}`, form);
            navigate("/");
        } catch {
            alert("Erro ao salvar");
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={submit} className="card">
                <h2 className="text-2xl font-semibold mb-4">Editar Post</h2>

                <label className="text-textSecondary text-sm mb-1">Título</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />

                <label className="text-textSecondary text-sm mb-1">Autor</label>
                <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />

                <label className="text-textSecondary text-sm mb-1">Conteúdo</label>
                <textarea rows={10} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />

                <div className="flex gap-3 mt-4">
                    <button type="submit">Salvar</button>
                    <button
                        type="button"
                        className="bg-transparent border border-borderColor text-textSecondary px-4 py-2 rounded-lg"
                        onClick={() => navigate("/")} // ← Alterado também para voltar para a Home
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}
