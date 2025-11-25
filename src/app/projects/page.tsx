import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-foreground">Projects & Works</h1>

      <p className="mt-2 text-foreground/70">
        A collection of my development, design, and creative projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-border bg-surface"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-foreground">
                {p.title}
              </h3>

              <p className="text-sm text-foreground/70 mt-2">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-accent/10 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
