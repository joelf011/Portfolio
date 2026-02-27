"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-14 max-w-screen-2xl items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block">
              {siteConfig.name}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            {siteConfig.mainNav.map((item, index) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <MobileNav />
        </div>

      </div>
    </header>
  );
}