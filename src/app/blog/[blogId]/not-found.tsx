import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Blog Post Not Found
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base sm:leading-7">
            Oops! The blog post you're looking for seems to have wandered off. It might
            have been removed, renamed, or never existed in the first place.
          </p>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <BookOpen className="w-full h-32 text-muted-foreground/20" />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Don't worry, though! There's plenty more to read on our blog.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go back home
              </Link>
            </Button>
            <Button asChild>
              <Link href="/blog">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse all posts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
