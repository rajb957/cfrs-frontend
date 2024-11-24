import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const refreshToken = cookies().get("refresh_token");
  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token provided" }, { status: 401 });
  }

  const response = await fetch(`${process.env.BACKEND_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: refreshToken.value }),
  });

  if (response.ok) {
    const data = await response.json();
    cookies().set("access_token", data.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });
    return NextResponse.json({ message: "Token refreshed" });
  } else {
    return NextResponse.json({ error: "Unable to refresh token" }, { status: 401 });
  }
}
