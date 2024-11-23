"use client";
import { useState } from "react";
import { Layout } from "@/ui/layout/layout";
import { ArrowLeft, Star, BookmarkPlus } from "lucide-react";
import { Button } from "@/ui/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/components/avatar";
import { Card, CardContent } from "@/ui/components/card";
import Link from "next/link";
interface BlogPageProps {
    id: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    blog_link: string;
}

export default function BlogPage({
    id,
    title,
    author,
    category,
    blog_link,
}: BlogPageProps) {
    const [rating, setRating] = useState(0);

    const handleRating = (value: number) => {
        setRating(value);
        // Here you would typically send this rating to your backend
        console.log(`Rated ${value} stars`);
    };

    return (
        <Layout searchPlaceholder="None">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <header className="mb-8">
            <Link href="/" passHref>
                <Button variant="ghost" size="icon" className="mb-4">
                <ArrowLeft className="h-6 w-6" />
                <span className="sr-only">Back to home</span>
                </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`}
                    />
                    <AvatarFallback>
                    {author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium">{author}</p>
                    <p className="text-sm text-muted-foreground">
                    read • {category}
                    </p>
                </div>
                </div>
                <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save for later
                </Button>
            </div>
            </header>

            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe 
              src={blog_link} 
              className="absolute top-0 left-0 w-full h-full border-none"
              title={title}
              allowFullScreen
            />
          </div>
        </div>
            <Card className="mt-8">
            <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Rate this article</h2>
                <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                    key={star}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRating(star)}
                    className={
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                    }
                    >
                    <Star className="h-6 w-6 fill-current" />
                    </Button>
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                    {rating > 0
                    ? `You rated this ${rating} star${rating > 1 ? "s" : ""}`
                    : "Rate this article"}
                </span>
                </div>
            </CardContent>
            </Card>
        </div>
        </Layout>
    );
}

