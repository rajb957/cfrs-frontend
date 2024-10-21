'use client'

import Link from "next/link"
import { Home, BookOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isMobile: boolean
  closeSidebar?: () => void
}

export function Sidebar({ isMobile, closeSidebar }: SidebarProps) {
  const handleLinkClick = () => {
    if (isMobile && closeSidebar) {
      closeSidebar()
    }
  }

  return (
    <nav className="space-y-4">
      <Link href="/" passHref>
        <Button variant="ghost" className="w-full justify-start" onClick={handleLinkClick}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
      <Link href="/reading-list" passHref>
        <Button variant="ghost" className="w-full justify-start" onClick={handleLinkClick}>
          <BookOpen className="mr-2 h-4 w-4" />
          Reading List
        </Button>
      </Link>
      <Link href="/profile" passHref>
        <Button variant="ghost" className="w-full justify-start" onClick={handleLinkClick}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>
      </Link>
    </nav>
  )
}