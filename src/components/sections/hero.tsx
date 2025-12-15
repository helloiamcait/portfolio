import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 py-20">
      <p className="text-sm text-muted-foreground">New Grad Software Engineer</p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Building human-centered software with strong fundamentals.
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        Software engineer with a multidisciplinary background in medical science, psychology, and journalism, and experience building products across health tech and education.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href="#projects">View projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/helloiamcait" target="_blank" rel="noreferrer">
            <SiGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}