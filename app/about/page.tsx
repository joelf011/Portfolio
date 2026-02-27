import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, LineChart } from "lucide-react";

export default function AboutPage() {
  const technologies = [
    "HTML","CSS", "JavaScript","TypeScript", "React", "Next.js", 
    "Tailwind CSS", "Node.js", "PostgreSQL", "Git"
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-4xl">
      <div className="flex flex-col gap-8">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            My journey, my methodology, and the vision behind my code.
          </p>
        </div>

        <hr className="border-border/40" />

        {/* Story Section */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-foreground/90">
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                <Cpu className="h-6 w-6 text-primary" />
                The Journey
              </h2>
              <p>
                My path into software development wasn't strictly linear. Exploring Electrical Engineering before transitioning to Multimedia Technologies and Design gave me a multidisciplinary perspective on how systems operate. It was during this transition that I discovered my true drive: high-level programming and engineering robust digital solutions.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                <Code2 className="h-6 w-6 text-primary" />
                Technical Ethos
              </h2>
              <p>
                I gravitate towards Full Stack development because I thrive on understanding the complete lifecycle of an application. While my core interest lies in backend architecture—structuring data and logic—I firmly believe that a strong backend is the foundation for seamless frontend experiences. I am meticulous about clean, self-explanatory code and strictly organized folder structures.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                <LineChart className="h-6 w-6 text-primary" />
                The Vision
              </h2>
              <p>
                Looking ahead, my long-term vision is entrepreneurial. I approach every project with a business-oriented mindset. True professionalism, rigorous organization, and a commitment to delivering exactly what the client needs are the pillars of any successful tech venture.
              </p>
            </div>
            
          </div>

          {/* Tech Stack Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Let's work together
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}