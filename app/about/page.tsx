import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
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

        {/* Content Section */}
        <div className="text-lg leading-relaxed space-y-6 text-foreground/90">
          <p>
            My journey into software development wasn't strictly linear. I initially explored Electrical Engineering before transitioning to Multimedia Technologies and Design, where I am currently completing my second year. It was during this transition that I discovered what I really like: high-level programming. This multidisciplinary background gave me a unique perspective on how systems operate, driving my continuous hunger to learn, evolve, and engineer robust digital solutions.
          </p>
          <p>
            I gravitate towards Full Stack development because I thrive on understanding the complete lifecycle of an application. My core interest lies in backend architecture-structuring data and logic-but I firmly believe that a strong backend provides the ultimate foundation for seamless frontend experiences. Having complete control over the entire ecosystem, from database organization to the user interface, is what makes development fascinating to me.
          </p>
          <p>
            In my work, I am highly meticulous. I prioritize clean, self-explanatory code and strictly organized folder structures. I believe that good software is defined not just by whether it works, but by how quickly it can be understood and maintained. This structural discipline and perfectionism form the core of my technical ethos.
          </p>
          <p>
            Looking ahead, my long-term vision is entrepreneurial. I approach every project with a business-oriented mindset, knowing that true professionalism, rigorous organization, and a commitment to delivering exactly what the client needs are the pillars of any successful tech venture.
          </p>
          <p>
            Beyond my technical work, I maintain an active lifestyle and pursue hobbies that require focus and discipline. I have a natural curiosity for mechanical systems and high-performance environments, which often complements my analytical mindset. In my downtime, I value the balance found in reading and gaming, always seeking new ways to stay inspired and recharged for the next challenge.          </p>
        </div>

        {/* Call to Action */}
        <div className="pt-8">
          <Link href="/contact">
            <Button size="lg">Let's work together</Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}