import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/shared/icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Get in touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Fill out the form or reach out through my social networks.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Icons.linkedin className="h-5 w-5" />
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </Link>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Icons.gitHub className="h-5 w-5" />
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                GitHub Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/40 p-6 rounded-xl shadow-sm">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            
            <input type="hidden" name="access_key" value="ff57e04d-9717-433c-a122-f2af35c6f20e" />
            
            {/* Optional: Prevents Captcha if possible */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="cursor-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your@email.com" 
                required 
                className="cursor-text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="How can I help you?" 
                className="min-h-[120px] cursor-text"
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}