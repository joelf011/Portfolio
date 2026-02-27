import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "../shared/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        
        {/* Left Side: Copyright / Built By */}
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <span className="font-medium">{siteConfig.name}</span>. 
          All rights reserved &copy; {new Date().getFullYear()}.
        </p>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-4">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>

      </div>
    </footer>
  );
}