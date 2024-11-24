"use client"; 

import { createContext, useState, useContext, ReactNode } from "react";
import { login } from "../lib/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    try {
      var response = await login(username, password);
      console.log("Login successful",response);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}