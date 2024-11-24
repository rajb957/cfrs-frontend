// app/blogs/route.ts
import { NextResponse } from "next/server";
// Handle GET requests to fetch blogs
export async function GET() {
  const blogs = await fetchBlogsFromDatabase(); // Replace with your data fetching logic
  return NextResponse.json(blogs);
}

// Handle POST requests to add a new blog
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = await saveBlogToDatabase(data); // Replace with your data-saving logic
  return NextResponse.json(newBlog, { status: 201 });
}

// Mock functions to demonstrate functionality
  async function fetchBlogsFromDatabase() {
  const data = await fetch(process.env.BACKEND_URL + '/')
  const blogs = await data.json()
  return blogs
}

async function saveBlogToDatabase(data: any) {
  return { id: 3, title: data.title };
}
