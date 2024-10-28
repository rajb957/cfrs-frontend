import { useState } from "react"
import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface BlogCardProps {
  id: number
  title?: string
  author?: string
  authorId?: string
  category?: string
  readTime?: string
}

export function BlogCard({ id, title, author, authorId,   category, readTime }: BlogCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const { toast } = useToast()

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the save button
    setIsSaved(!isSaved)
    toast({
      title: isSaved ? "Removed from reading list" : "Saved to reading list",
      description: isSaved 
        ? "The article has been removed from your reading list." 
        : "The article has been added to your reading list.",
    })
  }

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow duration-200">
      <Link href={`/blog/${id}`}>
        <CardHeader>
          <CardTitle>{title || 'Untitled Article'}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <Link href={`/blog/${id}`}>
          <p className="text-muted-foreground mb-4">
            {category || 'Uncategorized'} • {readTime || 'Unknown'} read
          </p>
        </Link>
          <Link href={`/author/${authorId}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${author || 'Unknown'}`} />
                <AvatarFallback>{author ? author.split(' ').map(n => n[0]).join('') : 'U'}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hover:underline">{author || 'Unknown Author'}</span>
            </div>
          </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/blog/${id}`}>Read More</Link>
        </Button>
        <Button variant="ghost" size="icon" onClick={handleSave}>
          <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          <span className="sr-only">{isSaved ? 'Remove from reading list' : 'Save for later'}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}