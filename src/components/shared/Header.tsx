"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`relative z-30 w-full flex items-center justify-between ${className}`}>
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-lg bg-black/[0.06] border border-black/10 text-zinc-900 dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 dark:text-white flex items-center justify-center transition-transform group-hover:scale-105">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="8" height="8" x="3" y="3" rx="1.5" />
            <rect width="8" height="8" x="13" y="3" rx="1.5" />
            <rect width="8" height="8" x="3" y="13" rx="1.5" />
            <rect width="8" height="8" x="13" y="13" rx="1.5" />
          </svg>
        </div>
        <span className="text-sm font-sans font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
          IAS STUDIO
        </span>
      </Link>

      {/* Frosted Capsule Navigation */}
      <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.08] backdrop-blur-xl px-2 py-1.5 rounded-full border border-black/10 dark:border-white/15">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium tracking-wide px-4 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                  : "text-zinc-600 hover:text-black hover:bg-black/5 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Book A Call Pill Button & Controls */}
      <div className="flex items-center gap-3">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="flex p-2 rounded-full text-zinc-700 hover:text-black hover:bg-black/5 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10 transition-all"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        )}

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-5 pr-1.5 py-1.5 text-xs font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-98"
        >
          <span>BOOK A CALL</span>
          <div className="w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 p-5 rounded-3xl bg-white/95 dark:bg-[#15171c]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 flex flex-col gap-3 shadow-2xl z-50 md:hidden animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2.5 px-4 rounded-xl transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold"
                    : "text-zinc-600 hover:text-black hover:bg-black/5 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}