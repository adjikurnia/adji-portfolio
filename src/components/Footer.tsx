export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20 py-6 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Adji — All rights reserved.
    </footer>
  );
}
