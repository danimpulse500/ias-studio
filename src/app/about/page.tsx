"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "Unhurried Observation",
      description:
        "True emotion cannot be choreographed. We operate with silent agility and complete discretion, allowing genuine human connections, unscripted glances, and spontaneous joy to unfold without interruption.",
    },
    {
      num: "02",
      title: "Natural Daylight & Optical Poetics",
      description:
        "We harness natural ambient illumination and soft daylight to preserve organic skin tones and depth. By relying on prime vintage and modern anamorphic optics, our frames possess warmth and dimensionality impossible with digital filters.",
    },
    {
      num: "03",
      title: "Heirloom Archival Permanence",
      description:
        "Every client folio is preserved for decades. We utilize 100% cotton rag museum-grade papers, pigment inks rated for 300+ years, and dual encrypted private digital vaults to guarantee your history survives across generations.",
    },
  ];

  const standards = [
    {
      category: "Medium Format Raw",
      spec: "100-Megapixel Hasselblad & Leica M Systems",
      detail: "Incredible dynamic range, true optical gradation, and microscopic architectural clarity.",
    },
    {
      category: "Cinematic Glass",
      spec: "Cooke Anamorphic /i & Leica Summilux Primes",
      detail: "Iconic horizontal lens flares, painterly focus falloff, and dimensional character.",
    },
    {
      category: "Photochemical Film",
      spec: "Kodak Vision3 500T & Tri-X 400 35mm",
      detail: "Warm tangible grain and nostalgic texture recorded directly to physical celluloid emulsion.",
    },
    {
      category: "Museum Archival",
      spec: "Hahnemühle Photo Rag Fine Art Prints",
      detail: "Archival pigment prints designed to resist fading and degradation for centuries.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 flex-1 flex flex-col gap-24">
        {/* Atelier Hero Statement */}
        <div className="flex flex-col gap-8 max-w-4xl border-b border-black/[0.08] dark:border-white/[0.1] pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.12] w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-700 dark:text-zinc-300 font-semibold">
              The Atelier Manifesto
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-zinc-950 dark:text-white leading-[1.05] tracking-tight">
            An independent atelier <br />
            <span className="italic text-amber-700 dark:text-amber-200">dedicated to the art of memory.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
            <p>
              IAS Studio was founded on a singular conviction: the most enduring imagery is rooted in honesty, not manufactured perfection. We do not stage synthetic moments—we document genuine presence.
            </p>
            <p>
              Whether we are commissioned for a multi-day wedding celebration in Europe, capturing the timeless geometry of a modern architectural feat, or crafting an intimate family portrait, our work is defined by quiet reverence and emotional depth.
            </p>
          </div>
        </div>

        {/* Large Format Visual Centerpiece */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.15] shadow-xl bg-zinc-200 dark:bg-zinc-900 group">
          <Image
            src="/IAS_3900 (2).jpg"
            alt="IAS Studio portrait session in Paris"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 block mb-1">
                Studio Archives • Paris Atelier
              </span>
              <p className="text-sm sm:text-base font-serif italic text-white max-w-lg">
                &ldquo;Light is our ink, and time is our paper.&rdquo;
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-300">
              Hasselblad H6D-100c • 80mm f/2.8
            </div>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-zinc-950 dark:text-white">
              The Atelier Discipline
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-light">
              Every commission adheres to three foundational standards developed over a decade behind the camera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div
                key={p.num}
                className="glass-panel-glow p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.14] flex flex-col gap-4 relative overflow-hidden group hover:border-amber-500/50 dark:hover:border-amber-400/50 transition-all duration-300"
              >
                <span className="text-2xl font-mono font-semibold text-amber-600 dark:text-amber-400">
                  {p.num}
                </span>
                <h3 className="text-xl font-serif text-zinc-950 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Mastery & Equipment Matrix */}
        <div className="w-full px-8 py-12 rounded-3xl glass-panel-glow border border-black/[0.08] dark:border-white/[0.14] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
              Technical Standards
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-zinc-950 dark:text-white">
              Instruments of Precision
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light max-w-2xl">
              We employ only the finest medium format digital backs, cinema primes, and rare 35mm film stocks to achieve unparalleled tonal richness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.1]">
            {standards.map((s, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
                  {s.category}
                </span>
                <h4 className="text-base font-medium text-zinc-950 dark:text-white">{s.spec}</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Studio Inquiry Callout */}
        <div className="p-10 sm:p-14 rounded-3xl glass-panel-gold text-center flex flex-col items-center gap-6 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 dark:bg-amber-400/20 border border-amber-500/30 dark:border-amber-400/40 flex items-center justify-center text-amber-700 dark:text-amber-300 mb-1">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 dark:text-white max-w-2xl">
            Planning a celebration or architectural commission?
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light max-w-xl leading-relaxed">
            We are based in London and accept a select number of worldwide destination commissions each calendar year.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-xs font-semibold uppercase tracking-wider shadow-[0_4px_25px_rgba(234,179,8,0.4)] hover:scale-105 transition-all"
          >
            <span>Inquire About Availability</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 sm:px-12 lg:px-20 py-10 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div>© {new Date().getFullYear()} IAS Studio. London • Worldwide.</div>
        <div className="flex items-center gap-6">
          <Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Portfolio</Link>
          <Link href="/about" className="text-zinc-950 dark:text-white font-medium hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Atelier</Link>
          <Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Inquiries</Link>
        </div>
      </footer>
    </div>
  );
}
