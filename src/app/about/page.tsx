import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground">About Me</h1>
      <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="Profile"
          className="rounded-2xl object-cover border border-border"
        />

        <p className="text-lg text-foreground/80 leading-relaxed">
          Hi, I’m <strong>Adji</strong>. I'm a Frontend Developer passionate
          about building clean, modern interfaces with a strong focus on UI/UX.
          <br />
          <br />
          Outside coding, I express creativity through fingerstyle guitar and
          content creation. I enjoy blending technology, design, and art into my
          work.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mt-14 text-foreground">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-foreground/80">
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>TypeScript</li>
        <li>UI/UX Design</li>
        <li>Fingerstyle Guitar</li>
        <li>Content Creation</li>
      </ul>
    </section>
  );
}
