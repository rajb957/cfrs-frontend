// app/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
// Handle GET requests to fetch blogs
export async function GET(request:NextRequest) {
  const page = request.nextUrl.searchParams.get('page');
  const pageNumber = page ? parseInt(page, 10) : 1;
  const blogs = await fetchBlogsFromDatabase(pageNumber); // Replace with your data fetching logic
  return NextResponse.json(blogs);
}

// Handle POST requests to add a new blog
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = await saveBlogToDatabase(data); // Replace with your data-saving logic
  return NextResponse.json(newBlog, { status: 201 });
}

// Mock functions to demonstrate functionality
  async function fetchBlogsFromDatabase(page: number) {
  const data = await fetch(process.env.BACKEND_URL + '/?page=' + page)
  const blogs = await data.json()
  return blogs
}

async function saveBlogToDatabase(data: any) {
  return { id: 3, title: data.title };
}
