import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { id } = await req.json();
    const authorization = req.headers.get("access_token") || "";
    const response = await fetch(`${process.env.BACKEND_URL}/bookmark`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": authorization 
        },
        body: JSON.stringify({ id }),
    });

  if (response.ok) {
    const nextResponse = NextResponse.json({ message: "Bookmarked" }, { status: 200 });
    return nextResponse;
    }
}