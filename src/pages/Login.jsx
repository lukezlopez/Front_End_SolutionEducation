import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { loginAsProfessor, loginAsAluno } = useAuth();
    const navigate = useNavigate();

    function handleLogin(role) {
        if (role === "professor") {
            loginAsProfessor();
        } else {
            loginAsAluno();
        }
        navigate("/");
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black text-white">
            <h1 className="text-4xl font-bold mb-10">Entrar como</h1>
            <div className="flex gap-8">
                <button
                    onClick={() => handleLogin("professor")}
                    className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
                >
                    Professor
                </button>
                <button
                    onClick={() => handleLogin("aluno")}
                    className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
                >
                    Aluno
                </button>
            </div>
        </div>
    );
}
