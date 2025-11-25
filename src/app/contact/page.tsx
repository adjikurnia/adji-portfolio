export default function ContactPage() {
  return (
    <section className="py-20 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
      <p className="text-muted mt-2">Let’s collaborate or just say hi.</p>

      <form className="mt-10 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="
            w-full px-4 py-3 
            bg-surface 
            border border-border 
            rounded-lg 
            text-foreground 
            placeholder:text-muted 
            focus:outline-none focus:ring-2 focus:ring-accent
          "
        />

        <input
          type="email"
          placeholder="Your Email"
          className="
            w-full px-4 py-3 
            bg-surface 
            border border-border 
            rounded-lg 
            text-foreground
            placeholder:text-muted 
            focus:outline-none focus:ring-2 focus:ring-accent
          "
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="
            w-full px-4 py-3 
            bg-surface 
            border border-border 
            rounded-lg 
            text-foreground
            placeholder:text-muted 
            focus:outline-none focus:ring-2 focus:ring-accent
          "
        />

        <button
          type="submit"
          className="
            w-full py-3 
            bg-accent 
            text-accent-foreground 
            rounded-lg
            hover:bg-accent-hover 
            transition
          "
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 flex gap-6 text-2xl justify-center text-muted">
        <a href="#">🐦</a>
        <a href="#">📸</a>
        <a href="#">🎵</a>
        <a href="#">▶️</a>
      </div>
    </section>
  );
}
