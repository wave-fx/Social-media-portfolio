import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Amara Okafor" },
      { name: "description", content: "Seven years building engaged communities for African brands." },
      { property: "og:title", content: "About — Amara Okafor" },
      { property: "og:description", content: "Seven years building engaged communities for African brands." },
    ],
  }),
  component: About,
});

const stats = [
  ["7+", "Years experience"],
  ["40+", "Brands managed"],
  ["12M", "Organic reach"],
];

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">About</p>
      <h1 className="font-display text-4xl leading-tight md:text-5xl">
        I help African brands turn followers into communities.
      </h1>
      <div className="mt-10 space-y-5 text-muted-foreground">
        <p>I'm Amara, a social media manager working between Nairobi and Lagos. I plan, shoot and run content for fashion, food, beauty and lifestyle brands who want to be seen — and remembered.</p>
        <p>My work blends strategy with culture: data-led calendars, scroll-stopping creative and real conversations with your audience.</p>
      </div>
      <div className="mt-14 grid grid-cols-3 border-t border-border pt-10">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="font-display text-4xl text-primary">{n}</div>
            <div className="mt-1 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
      <h2 className="font-display mt-16 text-2xl">Services</h2>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {["Content strategy", "Account management", "Content creation & shoots", "Influencer campaigns", "Analytics & reporting"].map((s) => (
          <li key={s} className="py-4">{s}</li>
        ))}
      </ul>
    </section>
  );
}
