import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-xl tracking-tight">
          Amara<span className="text-primary">.</span>
        </Link>
        <ul className="flex gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Amara Okafor — Social Media Manager, Nairobi & Lagos
    </footer>
  );
}
