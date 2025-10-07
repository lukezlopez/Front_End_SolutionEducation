import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="post/:id" element={<PostDetails />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="create"
                                element={
                                    <ProtectedRoute>
                                        <CreatePost />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="edit/:id"
                                element={
                                    <ProtectedRoute>
                                        <EditPost />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="admin"
                                element={
                                    <ProtectedRoute>
                                        <Admin />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="*"
                                element={
                                    <div className="p-8 text-center text-textSecondary">
                                        Página não encontrada 😕
                                    </div>
                                }
                            />
                        </Route>
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}
