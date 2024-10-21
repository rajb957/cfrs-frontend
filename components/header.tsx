'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "./sidebar"
import SettingsPanel from "./settings"

interface HeaderProps {
  toggleSidebar: () => void
}

export function Header({ toggleSidebar }: HeaderProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="text-2xl font-bold">
            BlogRecommender
          </Link>
        </div>
        <div className="flex-1 max-w-sm mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search blogs..." className="pl-8" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
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
          <Link href="/profile" passHref>
            <Button variant="ghost" size="icon">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}