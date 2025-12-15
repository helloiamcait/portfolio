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
  return (
    <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <div className="text-sm font-semibold">Cait Martin Newnham</div>

        <div className="ml-auto">
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
      </div>
    </div>
  );
}
