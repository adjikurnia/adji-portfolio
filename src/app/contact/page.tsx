export default function ContactPage() {
  return (
    <section className="py-20 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-neutral-600 dark:text-neutral-300 mt-2">
        Let’s collaborate or just say hi.
      </p>

      <form className="mt-10 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg bg-neutral-50 dark:bg-neutral-800"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg bg-neutral-50 dark:bg-neutral-800"
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-3 border rounded-lg bg-neutral-50 dark:bg-neutral-800"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 flex gap-6 text-2xl justify-center">
        <a href="#">🐦</a>
        <a href="#">📸</a>
        <a href="#">🎵</a>
        <a href="#">▶️</a>
      </div>
    </section>
  );
}
