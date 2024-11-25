'use client'

import { useState } from "react"
import { Layout } from "@/ui/layout/NormalLayout"
import { Button } from "@/ui/components/button"
import { Trash2 } from "lucide-react"

interface SavedArticle {
  id: number
  title: string
  author: string
  authorId: string
  category: string
  readTime: string
}

export default function ReadingListPage() {
  const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([
    { id: 1, title: "Introduction to Machine Learning", author: "Alice Johnson", authorId: "alice", category: "Technology", readTime: "5 min" },
    { id: 2, title: "The Art of Baking Sourdough", author: "Bob Smith", authorId: "bob", category: "Food", readTime: "8 min" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", author: "Carol White", authorId: "carol", category: "Lifestyle", readTime: "6 min" },
  ])

  const removeArticle = (id: number) => {
    setSavedArticles(savedArticles.filter(article => article.id !== id))
  }

  return (
    <Layout searchPlaceholder="Search List...">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Reading List</h2>
        {savedArticles.length === 0 ? (
          <p className="text-center text-muted-foreground">Your reading list is empty.</p>
        ) : (
          <ul className="space-y-4">
            {savedArticles.map((article) => (
              <li key={article.id} className="flex justify-between items-center p-4 bg-card rounded-lg shadow">
                <div>
                  <h3 className="font-medium">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {article.author} • {article.category} • {article.readTime} read
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeArticle(article.id)}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove from reading list</span>
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  )
}