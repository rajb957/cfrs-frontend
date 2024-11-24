"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      // Simulate token validation (you can replace this with an actual API call if needed)
      const token = document.cookie.includes("access_token");
      if (!token) {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
}
