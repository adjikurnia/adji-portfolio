"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-surface/90 backdrop-blur supports-backdrop-filter:bg-surface/70 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-accent">
          adji.dev
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          
          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-accent"
                    : "text-foreground/70 hover:text-accent transition"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle (DESKTOP + MOBILE) */}
          <ThemeToggle />

          {/* MOBILE MENU BUTTON */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-border text-foreground/80 hover:text-accent cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            {/* MOBILE MENU CONTENT */}
            <SheetContent
              side="top"
              className="bg-surface/95 border-b border-border h-auto"
            >
              <SheetHeader>
                <SheetTitle className="text-accent">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 pl-4 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      pathname === link.href
                        ? "text-accent"
                        : "text-foreground/70 hover:text-accent transition"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
