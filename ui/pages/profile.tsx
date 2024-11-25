'use client'

import { useState } from "react"
import { Button } from "@/ui/components/button"
import { Input } from "@/ui/components/input"
import { Label } from "@/ui/components/label"
import { Layout } from "@/ui/layout/NormalLayout"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/components/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/components/card"

export function Profile() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [bio, setBio] = useState("I love reading and writing blogs!")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle profile update logic here
    console.log("Profile update with:", { name, email, bio })
  }

  return (
    <Layout searchPlaceholder="None">
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    </Layout>
  )
}