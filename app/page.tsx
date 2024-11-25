'use client'
import { useState, useEffect } from "react"
import { Layout } from "@/ui/layout/NormalLayout"
import { BlogCard } from "@/ui/secondary-components/blog-card"
import AuthGuard from "@/context/auth-guard"

export default function Page() {
  const [recommendedBlogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the API route at /blogs
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <AuthGuard>
      <Layout searchPlaceholder="Search Blogs...">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </Layout>
    </AuthGuard>
  )
}