import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // Send a next response deleting the access_token cookie
    const nextResponse = NextResponse.json({ message : "Logout successful" }, { status: 200 });
    nextResponse.cookies.delete("access_token");

    return nextResponse;
}