"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-slate-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold text-blue-400">
          adji.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-slate-700 text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-black/95 border-slate-800">
            <SheetHeader>
              <SheetTitle className="text-blue-400">Menu</SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg ${
                    pathname === link.href
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
