'use client'
import { Button } from "@/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/components/card";


export default function Logout() {
    const handleLogout = async () => {
        const res = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
        });
        if (res.ok) {
        window.location.href = "/login";
        } else {
        alert("Logout failed");
        }
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
            <CardHeader>
            <CardTitle>Logout</CardTitle>
            <CardDescription>Are you sure you want to logout?</CardDescription>
            </CardHeader>
            <CardContent>
            <Button onClick={handleLogout}>Logout</Button>
            </CardContent>
        </Card>
        </div>
    );
}