import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const accessToken = req.cookies.get("access_token");

    // Allow access to public routes
    const publicPaths = ["/login", "/signup","/api/auth/signup","/api/auth/login", "/_next", "/static", "/favicon.ico"];
    const isPublicPath = publicPaths.some((path) => req.nextUrl.pathname.startsWith(path));

    if (isPublicPath) {
        return NextResponse.next(); // Let the request proceed for public paths
    }

    // If no token, redirect to login page
    if (!accessToken) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
    matcher: "/:path*", // Match all paths
};
