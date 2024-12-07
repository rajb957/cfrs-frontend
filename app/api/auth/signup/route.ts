import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, username, password } = await req.json();
  const response = await fetch(`${process.env.BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, username, password }),
  });

  if (response.ok) {
    const {access_token,refresh_token} = await response.json();
    const nextResponse = NextResponse.json({ message: "Login successful",access_token: access_token }, { status: 200 });
    nextResponse.cookies.set("access_token", access_token, {
      // httpOnly: true,
      // secure: true,
      sameSite: "strict",
      path: "/",
    }); 
    nextResponse.cookies.set("refresh_token", refresh_token, {
      // httpOnly: true,
      // secure: true,
      // sameSite: "strict",
      path: "/",
    });
    console.log("Cookies:", nextResponse.cookies.getAll());
    return nextResponse;
    }
}