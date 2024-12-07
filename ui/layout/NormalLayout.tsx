
import React, { useState } from "react"
import { Navbar } from "@/ui/secondary-components/navbar"
import { Sidebar } from "@/ui/secondary-components/sidebar"

interface LayoutProps {
    searchPlaceholder: string
    children: React.ReactNode
}

export function Layout({ searchPlaceholder,children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} searchPlaceholder={searchPlaceholder} />
      <div className="flex flex-1">
        {/* Sidebar for larger screens */}
        {/* <aside className="bg-muted w-64 hidden md:block">
          <Sidebar />
        </aside>

        // { Sidebar for smaller screens }
        {isSidebarOpen && (
          <div className="fixed inset-0 z-30 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={toggleSidebar} />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-background p-4 shadow-lg">
              <Sidebar />
            </aside>
          </div>
        )} */}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}