import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react"; // lucide is still fine for generic icons

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

      <Card className="mt-6">
        <CardContent className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Want to chat? Email me or connect on GitHub or LinkedIn.
          </p>

          <div className="flex flex-wrap gap-2">
            {/* Email */}
            <Button asChild>
              <a href="mailto:hello@iamcait.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>

            {/* GitHub */}
            <Button variant="outline" asChild>
              <a
                href="https://github.com/helloiamcait"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <SiGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            {/* LinkedIn */}
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/caitmn"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <SiLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            {/* Resume
            <Button variant="ghost" asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}