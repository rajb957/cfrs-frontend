import { ArrowLeft, BookmarkPlus, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

interface BlogPageProps {
  id: string
  title: string
  author: string
  date: string
  content: string
  readTime: string
  category: string
}

export default function BlogPage({ id, title, author, date, content, readTime, category }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Back to home</span>
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <BookmarkPlus className="h-5 w-5" />
              <span className="sr-only">Save article</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share article</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <article className="prose lg:prose-xl dark:prose-invert">
          <h1 className="mb-4">{title}</h1>
          <div className="flex items-center space-x-4 mb-8">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`} />
              <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{date} • {readTime} read • {category}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 BlogRecommender. All rights reserved.
        </div>
      </footer>
    </div>
  )
}