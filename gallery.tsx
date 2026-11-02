import { createFileRoute } from "@tanstack/react-router";
import { gallery } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Amara Okafor" },
      { name: "description", content: "Campaigns and content created for fashion, food, beauty and lifestyle brands." },
      { property: "og:title", content: "Gallery — Amara Okafor" },
      { property: "og:description", content: "Campaigns and content created for fashion, food, beauty and lifestyle brands." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <h1 className="font-display mb-12 text-5xl">Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g) => (
          <figure key={g.title} className="group overflow-hidden">
            <div className="overflow-hidden">
              <img src={g.src} alt={g.title} loading="lazy" width={341} height={512} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <figcaption className="mt-3 flex justify-between text-sm">
              <span>{g.title}</span>
              <span className="text-muted-foreground">{g.tag}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
