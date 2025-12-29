"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      {/* Top bar */}
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <a href="#home" className="text-sm font-semibold">
          Cait Martin Newnham
        </a>

        {/* Desktop nav */}
        <div className="ml-auto hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <nav id="mobile-nav" className="md:hidden border-t bg-background">
          <ul className="mx-auto max-w-5xl px-6 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
