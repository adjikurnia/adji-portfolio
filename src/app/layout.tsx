import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adji — Portfolio",
  description: "Personal portfolio website built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="h-full min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        <Navbar />

        <main className="flex-1 pt-16 max-w-5xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

