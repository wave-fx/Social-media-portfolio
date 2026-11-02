import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { gallery } from "@/lib/gallery";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amara Okafor — Social Media Manager" },
      { name: "description", content: "Social media strategy, content and community for bold African brands." },
      { property: "og:title", content: "Amara Okafor — Social Media Manager" },
      { property: "og:description", content: "Social media strategy, content and community for bold African brands." },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Amara Okafor holding a phone" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Social Media Manager</p>
          <h1 className="font-display max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Stories that stop the scroll.
          </h1>
          <div className="mt-8 flex gap-4">
            <Link to="/gallery" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">View work</Link>
            <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-secondary">Let's talk</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl">Selected work</h2>
          <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground">All →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.slice(0, 3).map((g) => (
            <img key={g.title} src={g.src} alt={g.title} loading="lazy" width={341} height={512} className="aspect-[2/3] w-full object-cover" />
          ))}
        </div>
      </section>
    </>
  );
}
