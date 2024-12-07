'use client'
import { useState, useEffect } from "react"
import { Layout } from "@/ui/layout/NormalLayout"
import { BlogCard } from "@/ui/secondary-components/blog-card"
import AuthGuard from "@/context/auth-guard"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/ui/components/button"

interface Blog {
  id: number
  title?: string
  content?: string
  author?: string
  authorId?: string
  category?: string
  blog_link?: string
}

export default function Page() {
  const [recommendedBlogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false);
    // Fetch data from the API route at /blogs
    fetch(`/api/blog?page=`+page,{method: 'GET',headers: {'Content-Type': 'application/json'},})
      .then((res) => res.json())
      .then((data) => {console.log(data);setBlogs(data);setLoading(true);})
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [page]);
  if (!loading) {
    return (
      <Layout searchPlaceholder="Search Blogs...">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6">Loading...</h2>
        </div>
      </Layout>
    )
  }
  return (
    <AuthGuard>
      <Layout searchPlaceholder="Search Blogs...">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Recommended for You</h2>
          <Button onClick={() => setPage(page + 1)} className="flex items-center">
            Next Page
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
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