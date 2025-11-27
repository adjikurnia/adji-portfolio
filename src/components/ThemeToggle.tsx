"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  // safe initializer: read from localStorage only on client
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "dark"; // SSR guard
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // default
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply class & localStorage whenever `theme` changes
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      // ignore if storage unavailable
    }
  }, [theme]);

  const toggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const icon = theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="border-border text-foreground/80 hover:text-accent cursor-pointer"
      aria-label="Toggle theme"
    >
      {icon}
    </Button>
  );
}
