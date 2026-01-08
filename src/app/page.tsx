import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <footer className="py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cait Martin Newnham
        </footer>
      </main>
    </>
  );
}
