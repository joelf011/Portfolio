"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // Listen for window resize and close the menu if screen becomes desktop size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-[300px] sm:w-[340px] flex flex-col p-6">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        {/* Top section: Brand/Logo with border */}
        <div className="flex items-center pb-6 pt-2 border-b border-border/40">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold text-lg">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Middle section: Navigation Links with Active State */}
        <div className="flex flex-col gap-4 mt-6">
          {siteConfig.mainNav?.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center text-lg font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            )
          })}
        </div>

        {/* Bottom section: Social Links properly structured using asChild */}
        <div className="mt-auto flex items-center gap-4 pb-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>

      </SheetContent>
    </Sheet>
  )
}