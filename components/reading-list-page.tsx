'use client'

import { useState, useEffect } from "react"
import { Menu, Search, Settings, BookOpen, Home, X, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SettingsPanel from "./settings"
import Link from "next/link"

interface SavedArticle {
  id: number
  title: string
  author: string
  category: string
  readTime: string
}

export function ReadingListPageComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [savedArticles, setSavedArticles] = useState<SavedArticle[]>([
    { id: 1, title: "Introduction to Machine Learning", author: "Alice Johnson", category: "Technology", readTime: "5 min" },
    { id: 2, title: "The Art of Baking Sourdough", author: "Bob Smith", category: "Food", readTime: "8 min" },
    { id: 3, title: "Sustainable Living: Small Changes, Big Impact", author: "Carol White", category: "Lifestyle", readTime: "6 min" },
  ])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const removeArticle = (id: number) => {
    setSavedArticles(savedArticles.filter(article => article.id !== id))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-20 bg-background border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-2xl font-bold">Reading List</h1>
          </div>
          <div className="flex-1 max-w-sm mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search saved articles..." className="pl-8" />
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-6 w-6" />
                <span className="sr-only">Open settings</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SettingsPanel />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for larger screens */}
        <aside className="bg-muted w-64 p-4 hidden md:block">
          <nav className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/reading-list" className="flex items-center space-x-2 text-primary">
              <BookOpen className="h-5 w-5" />
              <span>Reading List</span>
            </Link>
          </nav>
        </aside>

        {/* Sidebar for smaller screens */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-background p-4 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="space-y-4">
                <Link href="/" className="flex items-center space-x-2 text-primary">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link href="/reading-list" className="flex items-center space-x-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <span>Reading List</span>
                </Link>
              </nav>
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6">Your Reading List</h2>
          {savedArticles.length === 0 ? (
            <p className="text-center text-muted-foreground">Your reading list is empty.</p>
          ) : (
            <ul className="space-y-4">
              {savedArticles.map((article) => (
                <li key={article.id} className="flex justify-between items-center p-4 bg-card rounded-lg shadow">
                  <div>
                    <h3 className="font-medium">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.author} • {article.category} • {article.readTime} read</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeArticle(article.id)}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove from reading list</span>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 BlogRecommender. All rights reserved.
        </div>
      </footer>
    </div>
  )
}