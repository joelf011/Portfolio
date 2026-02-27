import { Button } from "@/components/ui/button";
import { Layout, Server, Database } from "lucide-react";
import Link from "next/link";
import { CanvasCard } from "@/components/ui/canvas-card";
import { FadeIn } from "@/components/shared/fade-in";
import { HeroLines } from "@/components/ui/hero-lines";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 relative flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10 lg:py-24">
      <HeroLines />
      {/* Hero Section */}
      <section className="flex max-w-[980px] flex-col items-center gap-2 mt-20">
        <FadeIn>
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Hi, I'm Joel Fernandes <br className="hidden sm:inline" />
            <span className="text-muted-foreground">Full Stack Developer</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-center max-w-[700px] text-lg text-muted-foreground sm:text-xl mt-4">
            Dedicated to learning best practices and building clean, structured, and user-friendly web applications.
          </p>
        </FadeIn>
      </section>

      <FadeIn delay={0.4}>
        <div className="flex gap-4 mt-6">
          <Link href="/projects">
            <Button size="lg">Explore Projects</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Contact Me</Button>
          </Link>
        </div>
      </FadeIn>

      {/* Focus Areas Section */}
      <section className="w-full max-w-[1000px] mt-32">
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                Core Competencies
              </h2>
              <p className="text-muted-foreground text-lg max-w-[600px]">
                Currently expanding my skill set and applying modern web development standards across the stack.
              </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Card */}
          <FadeIn delay={0.1} fullWidth>
            <CanvasCard 
              icon={<Layout className="h-12 w-12 text-primary" />}
              title="Frontend"
              description="Creating responsive and accessible user interfaces using React, Next.js, and Tailwind CSS."
            />
          </FadeIn>

          {/* Backend Card */}
          <FadeIn delay={0.3} fullWidth>
            <CanvasCard 
              icon={<Server className="h-12 w-12 text-primary" />}
              title="Backend"
              description="Developing robust RESTful APIs and server-side logic using modern JavaScript frameworks."
            />
          </FadeIn>

          {/* Database Card */}
          <FadeIn delay={0.5} fullWidth>
            <CanvasCard 
              icon={<Database className="h-12 w-12 text-primary" />}
              title="Database"
              description="Designing structured data models and writing clear queries, primarily working with PostgreSQL."
            />
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
}