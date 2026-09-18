"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Lock, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navLinks = [
    { name: "Portfolio", href: "/gallery" },
    { name: "The Atelier", href: "/about" },
    { name: "Inquiries", href: "/contact" },
  ];

  return (
    <header className="sticky top-5 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-6 sm:px-8 rounded-full glass-panel-glow transition-all duration-300">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-90"
        >
          <Image
            src="/IASLOGO.png"
            alt="IAS Studio Logo"
            width={110}
            height={24}
            style={{ width: "auto", height: "auto" }}
            className="brightness-0 dark:invert object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
          <span className="hidden lg:inline-block text-[10px] font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold pl-2 border-l border-black/15 dark:border-white/20">
            Atelier
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.04] p-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#121214] text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.1] transition-all"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-90 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800 animate-in spin-in-90 duration-300" />
              )}
            </button>
          )}

          <Link
            href="/gallery"
            className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-300 transition-colors py-1"
          >
            <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-medium">Vault</span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 px-5 py-2.5 text-xs font-semibold tracking-wide text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:scale-[1.02] active:scale-98"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Controls: Theme Toggle & Hamburger */}
        <div className="md:hidden flex items-center gap-1">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-700 dark:text-zinc-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-6 rounded-3xl glass-panel-glow flex flex-col gap-5 shadow-2xl border border-black/10 dark:border-white/20 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 font-semibold">
              Navigation Menu
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">London Atelier</span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-wider uppercase py-3 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#121214] text-white dark:bg-white dark:text-black font-semibold shadow-md"
                      : "text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300 py-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mt-1 font-medium"
            >
              <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="font-mono tracking-wider uppercase">Private Client Vault</span>
            </Link>
          </nav>

          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-xs font-semibold uppercase tracking-wider shadow-md"
            >
              <span>Commission Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}