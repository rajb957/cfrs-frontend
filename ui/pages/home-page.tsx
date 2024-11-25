'use client'

import { Layout } from "@/ui/layout/NormalLayout"
import { BlogCard } from "@/ui/secondary-components/blog-card"

export default function HomePage() {
  const recommendedBlogs = [
    { id: 1, title: "Introduction to Machine Learning", author: "Alice Johnson", authorId: "alice", category: "Technology", readTime: "5 min" },
    { id: 2, title: "The Art of Baking Sourdough", author: "Bob Smith", authorId: "bob", category: "Food", readTime: "8 min" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", author: "Carol White", authorId: "carol", category: "Lifestyle", readTime: "6 min" },
    { id: 4, title: "Financial Planning for Millennials", author: "David Brown", authorId: "david", category: "Finance", readTime: "7 min" },
    { id: 5, title: "The Rise of Remote Work", author: "Eva Green", authorId: "eva", category: "Business", readTime: "5 min" },
    { id: 6, title: "Exploring the Wonders of Deep Sea", author: "Frank Ocean", authorId: "frank", category: "Science", readTime: "10 min" },
  ]

  return (
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
  )
}