import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      <div className="mt-6 space-y-4">
        {experiences.map((exp) => (
          <Card key={`${exp.company}-${exp.title}`}>
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <CardTitle className="text-base">
                  {exp.title}
                </CardTitle>

                <span className="text-sm text-muted-foreground">
                  {exp.start} – {exp.end}
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
            </CardHeader>

            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {exp.bullets.map((bullet: string) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
