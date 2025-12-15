import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What I’m looking for</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            New-grad SWE roles where I can contribute to full-stack features,
            learn from strong engineering teams, and build products with real
            user impact.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What I bring</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Strong communication, product thinking, and a UX/accessibility-first
            approach—paired with solid CS fundamentals and hands-on full-stack
            builds.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}