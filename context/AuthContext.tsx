import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(null);

    const login = async (username: string, password: string) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        setToken(data.access_token);
    };

    return (
        <AuthContext.Provider value={{ token, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
