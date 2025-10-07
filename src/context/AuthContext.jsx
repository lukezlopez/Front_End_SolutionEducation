import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);

    function loginAsProfessor() {
        setRole("professor");
        setToken("Bearer professor-token");
    }

    function loginAsAluno() {
        setRole("aluno");
        setToken("Bearer aluno-token");
    }

    function logout() {
        setRole(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{ role, token, loginAsProfessor, loginAsAluno, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
