import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, User, LogOut } from "lucide-react";

export default function Layout() {
    const { role, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-textPrimary transition-colors duration-300">
            <header className="bg-surface border-b border-borderColor shadow-soft">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accentHover flex items-center justify-center text-white font-bold">S</div>
                        <div>
                            <h1 className="text-lg font-semibold">SolutionEducation</h1>
                            <div className="text-xs text-textSecondary">Blogging</div>
                        </div>
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link className="text-sm hover:text-accent" to="/">Home</Link>
                        <button className="text-sm hover:text-accent" onClick={() => navigate("/admin")}>Admin</button>
                        <button className="text-sm hover:text-accent" onClick={() => navigate("/create")}>Novo</button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-surface border border-borderColor hover:bg-accent/10 transition-all"
                            title="Alternar tema"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="text-sm text-textSecondary">Usuário: <span className="font-semibold ml-1">{role ?? "convidado"}</span></div>
                            {role ? (
                                <button onClick={logout} className="ml-2 text-sm text-textSecondary hover:text-accent flex items-center gap-2">
                                    <LogOut size={16} /> Sair
                                </button>
                            ) : (
                                <Link to="/login" className="ml-2 text-sm text-textSecondary hover:text-accent flex items-center gap-2">
                                    <User size={16} /> Entrar
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                <Outlet />
            </main>

            <footer className="mt-12 border-t border-borderColor bg-surface py-6 text-center text-textSecondary">
                © {new Date().getFullYear()} MyBlog
            </footer>
        </div>
    );
}
