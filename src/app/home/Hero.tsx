import Image from "next/image";
import TiktokIcon from "@/assets/icons/TiktokIcon";
import {
  InstagramIcon,
  GithubIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-20">
      {/* LEFT */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Adji</span> 👋
        </h1>

        <p className="mt-4 text-lg text-foreground/70 max-w-lg mx-auto md:mx-0">
          Frontend Developer who loves building clean, intuitive products. Also
          a fingerstyle guitarist and content creator sharing stories through
          music and visuals.
        </p>

        {/* CTA */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-border rounded-lg font-medium hover:text-primary hover:border-primary transition"
          >
            Contact Me
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex gap-6 text-xl justify-center md:justify-start">
          <a href="#" className="hover:text-primary transition">
            <InstagramIcon className="w-6 h-6" />
          </a>

          <a href="#" className="hover:text-primary transition">
            <TiktokIcon className="w-6 h-6" />
          </a>

          <a href="#" className="hover:text-primary transition">
            <YoutubeIcon className="w-6 h-6" />
          </a>

          <a href="#" className="hover:text-primary transition">
            <GithubIcon className="w-6 h-6" />
          </a>

          <a href="#" className="hover:text-primary transition">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center order-first md:order-0">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-border">
          <Image
            src="/profile.png"
            alt="Adji"
            width={400}
            height={400}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
