import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const groups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "C", "Python", "SQL"] },
  { title: "Markup & Templating", items: ["HTML", "CSS", "Jinja2", "EJS"] },
  { title: "Frameworks", items: ["React", "Next.js", "Node.js", "Flask"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Concepts", items: [
      "REST APIs",
      "Authentication", 
      "Authorization",
      "Data Modeling",
      "Accessibility",
      "Usability Engineering"
    ] 
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title}>
            <CardHeader>
              <CardTitle>{g.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Badge key={i} variant="secondary">
                  {i}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}