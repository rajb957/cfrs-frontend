import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Login successful",data);
    console.log();
    // cookies().set("access_token", data.access_token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "strict",
    //   path: "/",
    // });
    return NextResponse.json({ message: "Login successful" });
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}