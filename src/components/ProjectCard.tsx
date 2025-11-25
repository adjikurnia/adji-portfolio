import Image from "next/image";

export default function ProjectCard({ title, description, image, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
      <Image src={image} alt={title} width={600} height={400} className="w-full h-40 object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
