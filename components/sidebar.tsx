import Link from "next/link"
import { Home, BookOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <nav className="p-4 space-y-4">
      <Link href="/" passHref>
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link href="/reading-list" passHref>
        <Button variant="ghost" className="w-full justify-start">
          <BookOpen className="mr-2 h-4 w-4" />
          Reading List
        </Button>
      </Link>
      <Link href="/profile" passHref>
        <Button variant="ghost" className="w-full justify-start">
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>
      </Link>
    </nav>
  )
}