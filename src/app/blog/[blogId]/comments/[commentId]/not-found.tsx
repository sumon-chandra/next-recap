"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const blogId = pathname.split("/")[2];
  const commentId = pathname.split("/")[4];
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {commentId} - Comment Not Found
          </h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal text-sm sm:text-base sm:leading-7">
            Sorry, we couldn't find the Comment for Blog {blogId}. It might have been
            removed, renamed, or doesn't exist.
          </p>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <svg
            className="w-full"
            height="160"
            viewBox="0 0 220 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="220" height="160" fill="url(#paint0_linear_32_34)" />
            <path d="M110 61L152 129H68L110 61Z" fill="currentColor" fillOpacity="0.2" />
            <defs>
              <linearGradient
                id="paint0_linear_32_34"
                x1="110"
                y1="0"
                x2="110"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="currentColor" stopOpacity="0.12" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
