"use client";

import * as React from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function ProjectsSection() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  const regionId = "projects-carousel";

  React.useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  const scrollToIndex = React.useCallback(
    (idx: number, behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth") => {
      const clamped = Math.max(0, Math.min(projects.length - 1, idx));
      const el = cardRefs.current[clamped];
      if (!el) return;

      el.scrollIntoView({ behavior, block: "nearest", inline: "start" });
      setActiveIndex(clamped);
    },
    [reduceMotion]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keys.includes(e.key)) return;

    e.preventDefault();
    if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
    if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
    if (e.key === "Home") scrollToIndex(0);
    if (e.key === "End") scrollToIndex(projects.length - 1);
  };

  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < projects.length - 1;

  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Swipe/scroll, use arrows, or open details. Keyboard: ← →, Home/End.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={!canGoLeft}
            aria-label="Previous project"
            aria-controls={regionId}
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={!canGoRight}
            aria-label="Next project"
            aria-controls={regionId}
          >
            →
          </Button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing project {activeIndex + 1} of {projects.length}.
      </p>

      <div
        id={regionId}
        ref={scrollerRef}
        role="region"
        aria-label="Projects carousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="mt-6 flex gap-4 overflow-x-auto pb-2 outline-none
                   snap-x snap-mandatory
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div role="list" className="flex gap-4">
          {projects.map((p, idx) => (
            <Card
              key={p.slug}
              role="listitem"
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              tabIndex={0}
              onFocus={() => setActiveIndex(idx)}
              aria-label={`${p.title}. Project ${idx + 1} of ${projects.length}.`}
              className="min-w-[30%] pt-0 snap-start sm:min-w-[40%] overflow-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              {p.image?.src ? (
                <div className="relative aspect-[1.85/.85] w-full border-b">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 92vw, 520px"
                    priority={idx === 0}
                  />
                </div>
              ) : null}

              <CardHeader className="pb-3 pt-4">
                <CardTitle>{p.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2" aria-label="Technology stack">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* Short highlights only (keep cards tight) */}
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {/* Modal details */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="default">
                        View details
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{p.title}</DialogTitle>
                        <DialogDescription>{p.desc}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-4 space-y-4">
                        <div>
                          <h3 className="text-sm font-medium">Tech</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <Badge key={s} variant="secondary">
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium">What I built</h3>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            {p.details.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        {p.details.challenges?.length ? (
                          <div>
                            <h3 className="text-sm font-medium">Challenges</h3>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                              {p.details.challenges.map((c) => (
                                <li key={c}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        {p.details.outcome?.length ? (
                          <div>
                            <h3 className="text-sm font-medium">Outcome</h3>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                              {p.details.outcome.map((o) => (
                                <li key={o}>{o}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        <div className="flex flex-wrap gap-2 pt-2">
                          {p.links.demo ? (
                            <Button size="sm" asChild>
                              <a href={p.links.demo} target="_blank" rel="noreferrer">
                                Live
                              </a>
                            </Button>
                          ) : null}
                          {p.links.code ? (
                            <Button size="sm" variant="outline" asChild>
                              <a href={p.links.code} target="_blank" rel="noreferrer">
                                Code
                              </a>
                            </Button>
                          ) : null}

                          <DialogClose asChild>
                            <Button size="sm" variant="ghost">
                              Close
                            </Button>
                          </DialogClose>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Keep external links visible on the card too if you want */}
                  {p.links.code ? (
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.links.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </Button>
                  ) : null}
                  {p.links.demo ? (
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.links.demo} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
