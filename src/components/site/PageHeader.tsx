export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-primary md:text-6xl">{title}</h1>
        {intro && <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-[15px] leading-relaxed text-foreground/85 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:text-primary [&_li]:mt-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  );
}

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];
