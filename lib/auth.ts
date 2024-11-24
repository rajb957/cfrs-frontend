export async function login(username: string, password: string) 
{
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "username":username,"password": password }),
    });
    console.log(res);
    if (!res.ok) {
        throw new Error("Login failed");
    }
    return res.json();
}

export async function refreshToken() 
{
    const res = await fetch("/api/auth/refresh", { method: "POST" });
    if (!res.ok) {
        throw new Error("Token refresh failed");
    }
    return res.json();
}