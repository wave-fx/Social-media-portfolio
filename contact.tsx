import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amara Okafor" },
      { name: "description", content: "Start a project or book a strategy call." },
      { property: "og:title", content: "Contact — Amara Okafor" },
      { property: "og:description", content: "Start a project or book a strategy call." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const field = "w-full border-b border-border bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!res.success) {
      setErrors(Object.fromEntries(res.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-36">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
      <h1 className="font-display text-5xl">Let's work together.</h1>
      {sent ? (
        <p className="mt-12 text-lg text-muted-foreground">Thank you — I'll get back to you within 48 hours.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-12 space-y-8" noValidate>
          {(["name", "email"] as const).map((n) => (
            <div key={n}>
              <input name={n} type={n === "email" ? "email" : "text"} placeholder={n === "name" ? "Your name" : "Email address"} maxLength={n === "name" ? 100 : 255} className={field} />
              {errors[n] && <p className="mt-2 text-sm text-destructive">{errors[n]}</p>}
            </div>
          ))}
          <div>
            <textarea name="message" rows={5} maxLength={1000} placeholder="Tell me about your brand" className={field + " resize-none"} />
            {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="rounded-full bg-primary px-8 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">Send message</button>
        </form>
      )}
    </section>
  );
}
