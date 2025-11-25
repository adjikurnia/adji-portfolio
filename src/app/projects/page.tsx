import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold">Projects & Works</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        A collection of my development, design, and creative projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
