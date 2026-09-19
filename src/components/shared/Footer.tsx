"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer({ showBanner = true }: { showBanner?: boolean }) {
  return (
    <footer className="w-full bg-white dark:bg-[#131519] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-12 sm:gap-16 shadow-xl dark:shadow-2xl mt-4 transition-colors duration-300">
      {/* Optional Top Row: Inline Callout + Studio Details */}
      {showBanner && (
        <>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
            {/* Left Big Headline */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 font-semibold">
                  [05]
                </span>
                <span className="text-xs font-sans tracking-wider uppercase text-zinc-600 dark:text-zinc-400 font-medium">
                  Contact Us
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-3xl sm:text-5xl lg:text-6xl text-zinc-700 dark:text-zinc-300 font-normal leading-tight">
                <span>Let&apos;s</span>
                <span className="text-zinc-900 dark:text-white font-semibold">discuss</span>
                <span>your vision</span>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-5 pr-1.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95"
                >
                  <span>LET&apos;S TALK</span>
                  <div className="w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
                <span>with us</span>
              </div>
            </div>

            {/* Right Column: Address & Contact info */}
            <div className="flex flex-col gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 text-left lg:text-right border-t lg:border-t-0 pt-6 lg:pt-0 border-black/[0.08] dark:border-white/[0.08]">
              <span className="text-zinc-900 dark:text-white font-sans text-sm font-medium">
                London Studio
              </span>
              <span>459 Mount Street, Mayfair</span>
              <span>London W1K 2SU, United Kingdom</span>
              <span className="text-zinc-900 dark:text-white mt-1">+44 (0) 20 7946 0912</span>
              <span className="text-zinc-700 dark:text-zinc-300">hello@ias-studio.com</span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-black/[0.08] dark:bg-white/[0.08]" />
        </>
      )}

      {/* Bottom Bar: Logo, Navigation, Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-black/[0.06] border border-black/10 text-zinc-900 dark:bg-white/10 dark:border-white/15 dark:text-white flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect width="8" height="8" x="3" y="3" rx="1.5" />
              <rect width="8" height="8" x="13" y="3" rx="1.5" />
              <rect width="8" height="8" x="3" y="13" rx="1.5" />
              <rect width="8" height="8" x="13" y="13" rx="1.5" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-zinc-900 dark:text-white uppercase">
            IAS STUDIO
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/gallery" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Terms &amp; Condition
          </Link>
        </div>

        <span className="text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} IAS Studio. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
