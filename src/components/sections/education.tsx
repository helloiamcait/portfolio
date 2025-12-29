import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>

      <div className="mt-6 space-y-4">
        {/* Computer Science */}
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <CardTitle>Bachelor of Computer Science</CardTitle>
              <span className="text-sm text-muted-foreground">
                Expected 2025 · GPA 4.0
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Oregon State University
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Focus on core computer science fundamentals and applied software
              engineering.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Data Structures</Badge>
              <Badge variant="secondary">Algorithms</Badge>
              <Badge variant="secondary">Databases</Badge>
              <Badge variant="secondary">Operating Systems</Badge>
              <Badge variant="secondary">Software Engineering</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">Data Science</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Journalism */}
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <CardTitle>Master of Journalism</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Toronto Metropolitan University
            </p>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Training in research, communication, and storytelling—skills now
            applied to technical documentation and cross-functional collaboration.
          </CardContent>
        </Card>

        {/* Medical Science / Psychology */}
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Medical Science & Psychology</CardTitle>
            <p className="text-sm text-muted-foreground">
              The University of Western Ontario
            </p>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Strong foundation in scientific reasoning, human behavior, and
            evidence-based decision-making.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}