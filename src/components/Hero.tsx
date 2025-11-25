"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-20">
      {/* TEXT AREA */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-blue-500">Adji</span> 👋
        </h1>

        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-lg">
          Frontend Developer, UI/UX Enthusiast, Fingerstyle Guitarist, and
          Content Creator. I build clean interfaces, create music, and craft
          engaging digital content.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-neutral-400 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-6 text-xl">
          <a href="#" className="hover:text-blue-500 transition">
            🐦
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            📸
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            🎵
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            ▶️
          </a>
        </div>
      </div>

      {/* IMAGE AREA */}
      <div className="flex-1 flex justify-center">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-neutral-300 dark:border-neutral-700">
          <Image
            src="/profile.png"
            alt="Adji"
            width={400}
            height={400}
            priority
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
