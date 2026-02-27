import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Construction } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/shared/icons";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl text-center">
      <div className="flex flex-col items-center gap-6">
        
        {/* Icon and Header */}
        <div className="p-4 bg-muted rounded-full">
          <Code2 className="h-10 w-10 text-primary" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            A showcase of my technical journey, experiments, and professional work.
          </p>
        </div>

        <hr className="w-full border-border/40 my-8" />

        {/* "Coming Soon" Professional Placeholder */}
        <Card className="w-full max-w-2xl bg-background/50 backdrop-blur-sm border-dashed border-2">
          <CardHeader className="py-12">
            <Construction className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <CardTitle className="text-2xl">Building the Foundation</CardTitle>
            <CardDescription className="text-base max-w-[500px] mx-auto mt-4">
              I am currently focused on my final year of university. 
              New projects will be featured here as they are completed with the rigor and standards I strive for.
            </CardDescription>        
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button>
                  Interested in collaborating?
                </Button>
              </Link>
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Icons.gitHub className="mr-2 h-5 w-5" />
                  View my GitHub
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>

      </div>
    </div>
  );
}