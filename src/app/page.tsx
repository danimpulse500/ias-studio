"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, memo } from "react";
import { Header } from "@/components/shared/Header";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Film,
  Camera,
  Layers,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Lock,
} from "lucide-react";

// Isolated London Clock component so the parent HomePage NEVER re-renders every second!
const LondonClock = memo(function LondonClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time ? `${time} GMT` : "London Time"}</span>;
});

// Isolated Kinetic Word component so word changes DO NOT re-render the whole page
const KineticWord = memo(function KineticWord() {
  const words = [
    { text: "Light", style: "italic font-serif text-amber-600 dark:text-amber-300" },
    { text: "Shadow", style: "font-serif tracking-widest text-zinc-900 dark:text-zinc-100 uppercase" },
    { text: "Motion", style: "italic font-serif text-amber-700 dark:text-amber-200" },
    { text: "Soul", style: "font-serif text-amber-600 dark:text-yellow-100 italic font-light" },
    { text: "Form", style: "font-mono uppercase tracking-[0.2em] text-zinc-900 dark:text-white" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      key={index}
      className={`inline-block transition-all duration-500 transform animate-in fade-in slide-in-from-bottom-2 ${words[index].style}`}
    >
      {words[index].text}
    </span>
  );
});

interface HighlightItem {
  images: string[];
  title: string;
  category: string;
  lens: string;
  description: string;
}

const HighlightCard = memo(function HighlightCard({ highlight }: { highlight: HighlightItem }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setActiveIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlight.images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [isHovered, highlight.images.length]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl cursor-pointer bg-zinc-100 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.12] transition-all duration-500 hover:border-amber-500/60 dark:hover:border-amber-400/60 shadow-sm hover:shadow-2xl"
    >
      {highlight.images.map((imgSrc, idx) => (
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={highlight.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            idx === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          priority={false}
        />
      ))}

      {/* Cinematic contrast gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 pointer-events-none" />

      {/* Top badges & Node Dots Capsule */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-amber-300 border border-white/15 shadow-sm">
          {highlight.category}
        </span>

        <div className="flex gap-1.5 px-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 items-center">
          {highlight.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-4 bg-amber-400" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7 flex flex-col gap-2 z-10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-300">
          {highlight.lens}
        </span>
        <h3 className="text-xl font-serif font-medium text-white tracking-normal leading-snug group-hover:text-amber-200 transition-colors">
          {highlight.title}
        </h3>
        <p className="text-xs text-zinc-200 font-light leading-relaxed line-clamp-2">
          {highlight.description}
        </p>
      </div>
    </div>
  );
});

const ShatteredGlassFrame = memo(function ShatteredGlassFrame() {
  const [isHovered, setIsHovered] = useState(false);

  const shards = [
    { points: "0,0 150,0 120,180 0,120", dx: -12, dy: -12, rot: -3 },
    { points: "150,0 300,0 300,160 135,160", dx: 12, dy: -12, rot: 4 },
    { points: "300,160 300,280 165,240 135,160", dx: 16, dy: 4, rot: 5 },
    { points: "300,280 300,400 150,400 165,240", dx: 12, dy: 16, rot: 3 },
    { points: "150,400 0,400 0,260 135,220", dx: -12, dy: 16, rot: -4 },
    { points: "0,260 0,120 120,180 135,220", dx: -16, dy: -2, rot: -5 },
    { points: "120,180 135,160 165,240 135,220", dx: 2, dy: 8, rot: -2 },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-[3/4] cursor-pointer group"
    >
      <div className="absolute inset-0 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <svg
        className="w-full h-full select-none overflow-visible filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        viewBox="0 0 300 400"
      >
        <defs>
          {shards.map((shard, idx) => (
            <clipPath id={`shard-clip-${idx}`} key={idx}>
              <polygon points={shard.points} />
            </clipPath>
          ))}
        </defs>

        {shards.map((shard, idx) => {
          const transform = isHovered
            ? `translate(${shard.dx}px, ${shard.dy}px) rotate(${shard.rot}deg)`
            : "translate(0px, 0px) rotate(0deg)";

          return (
            <g
              key={idx}
              style={{
                transform,
                transformOrigin: "150px 200px",
                transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <image
                href="/IAS_1603.jpg"
                width="300"
                height="400"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#shard-clip-${idx})`}
                opacity="0.95"
              />
              <polygon
                points={shard.points}
                fill="rgba(255, 255, 255, 0.02)"
                stroke={isHovered ? "rgba(184, 134, 11, 0.8)" : "rgba(255, 255, 255, 0.45)"}
                strokeWidth="1.5"
                className="transition-colors duration-500"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
});

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    {
      src: "/IAS_4484.jpg",
      alt: "Tuscany Wedding Anamorphic Frame",
      caption: "01 / Golden Hour",
      gridClasses: "col-start-1 row-start-1 col-span-2 row-span-2",
    },
    {
      src: "/IAS_1603.jpg",
      alt: "Architectural Concrete & Light",
      caption: "02 / Structure",
      gridClasses: "col-start-3 row-start-1 row-span-1",
    },
    {
      src: "/IAS_3900 (2).jpg",
      alt: "Editorial Studio Portrait",
      caption: "03 / Presence",
      gridClasses: "col-start-3 row-start-2 row-span-1",
    },
  ];

  const highlights: HighlightItem[] = [
    {
      images: ["/IAS_4484.jpg", "/IAS_1603.jpg", "/IAS_3900 (2).jpg"],
      title: "Anamorphic Golden Hour",
      category: "Cinema Reel",
      lens: "Cooke Anamorphic /i 50mm T2.3",
      description: "Organic flare falloff, creamy horizontal streak, and intimate skin tonality in the Tuscan hills.",
    },
    {
      images: ["/IAS_3900 (2).jpg", "/IAS_4484.jpg", "/IAS_1603.jpg"],
      title: "Monochrome Architectural Depth",
      category: "Architecture",
      lens: "Leica Summilux-M 35mm f/1.4",
      description: "Rigorous alignment of cast morning shadows, concrete geometry, and natural reflective skylight.",
    },
    {
      images: ["/IAS_1603.jpg", "/IAS_3900 (2).jpg", "/IAS_4484.jpg"],
      title: "Quiet Editorial Portraits",
      category: "Fine Art",
      lens: "Hasselblad HC 100mm f/2.2",
      description: "Capturing authentic personal stillness without artificial theatricality or forced expressions.",
    },
    {
      images: ["/IAS_4484.jpg", "/IAS_3900 (2).jpg", "/IAS_1603.jpg"],
      title: "Nocturne Celebration Frames",
      category: "Moving Image",
      lens: "Zeiss Supreme Prime 29mm T1.5",
      description: "Capturing candid midnight celebrations illuminated entirely by vintage beeswax candlelight.",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300">
      <Header />

      {/* --- HERO SECTION: EDITORIAL BRILLIANCE --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] rounded-full bg-amber-500/[0.06] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] rounded-full bg-amber-400/[0.04] dark:bg-zinc-700/[0.08] blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          {/* Left Column: Bold Typographic Statement */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.12] w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-700 dark:text-zinc-300 font-semibold">
                London Atelier • Worldwide Booking
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-normal leading-[1.02] tracking-tight text-zinc-950 dark:text-white">
              Stories sculpted in <br />
              <span className="relative inline-block mt-1">
                <KineticWord />
                <span className="text-amber-600 dark:text-amber-400 font-serif">.</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-xl">
              IAS Studio is an independent cinematography and fine art photography atelier.
              We preserve human emotion, architectural harmony, and intimate celebrations with quiet reverence and intentional light.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-sm font-semibold tracking-wide shadow-[0_4px_25px_rgba(234,179,8,0.35)] hover:shadow-[0_4px_35px_rgba(234,179,8,0.5)] transition-all hover:scale-[1.02] active:scale-98"
              >
                <span>Commission Studio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel-glow text-zinc-900 dark:text-white text-sm font-medium hover:bg-black/[0.05] dark:hover:bg-white/[0.12] transition-colors border border-black/[0.08] dark:border-white/[0.18]"
              >
                <span>Explore Works Archive</span>
              </Link>
            </div>

            {/* Quick Micro-Ticker */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/[0.08] dark:border-white/[0.1] max-w-lg">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block mb-0.5">
                  Format
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">35mm & 4K Raw</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block mb-0.5">
                  Glass
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">Cooke & Leica</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block mb-0.5">
                  Delivery
                </span>
                <span className="text-sm font-medium text-zinc-900 dark:text-white">Archival Vault</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Plate Mosaic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[4/5] grid grid-cols-3 grid-rows-2 gap-3 p-3 rounded-3xl glass-panel-glow">
              {heroImages.map((img, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.12] ${img.gridClasses}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider text-zinc-200 uppercase">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTION REEL HIGHLIGHTS CAROUSEL --- */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-24 border-t border-black/[0.08] dark:border-white/[0.1] bg-[#f4f1ea]/50 dark:bg-[#0b0b0e]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
                01 • Behind the Glass
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-zinc-950 dark:text-white">
                Production Highlights
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                Hover to scrub multi-frame exposure sequences, focal configurations, and lighting plans from recent sets.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="p-3.5 rounded-full glass-panel-glow hover:bg-black/[0.05] dark:hover:bg-white/[0.15] text-zinc-800 dark:text-white transition-all hover:scale-105"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3.5 rounded-full glass-panel-glow hover:bg-black/[0.05] dark:hover:bg-white/[0.15] text-zinc-800 dark:text-white transition-all hover:scale-105"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="min-w-[85vw] sm:min-w-[380px] lg:min-w-[390px] snap-start shrink-0"
              >
                <HighlightCard highlight={highlight} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASYMMETRIC EDITORIAL FEATURED STORIES --- */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-28 border-t border-black/[0.08] dark:border-white/[0.1] bg-[#faf8f5] dark:bg-[#08080a]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.08] dark:border-white/[0.1] pb-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold block mb-2">
                02 • Selected Portfolio
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-zinc-950 dark:text-white">
                Archival Folios
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Asymmetrical Editorial Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Anamorphic Hero Plate (Full Span 12) */}
            <Link
              href="/gallery"
              className="group lg:col-span-12 relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.14] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow"
            >
              <Image
                src="/IAS_4484.jpg"
                alt="Golden Hour in Tuscany"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-amber-300 border border-white/15">
                  Featured Cinema • Val d&apos;Orcia, Italy
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
                    Cooke Anamorphic /i Prime • Kodak 500T Stock
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif text-white group-hover:text-amber-200 transition-colors">
                    Golden Hour in Tuscany
                  </h3>
                  <p className="text-sm text-zinc-200 font-light max-w-xl line-clamp-2">
                    An intimate evening surrounded by ancient cypress trees, heartfelt toasts, and the soft amber glow of late summer.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider group-hover:bg-amber-300 transition-colors shrink-0">
                  <span>View Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Secondary Portrait 1 (Span 6) */}
            <Link
              href="/gallery"
              className="group lg:col-span-6 relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.14] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow"
            >
              <Image
                src="/IAS_1603.jpg"
                alt="Forms of Quiet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase text-zinc-200 border border-white/15">
                  Architecture • London
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                  Medium Format • 2026
                </span>
                <h3 className="text-2xl font-serif text-white group-hover:text-amber-200 transition-colors">
                  Forms of Quiet
                </h3>
                <p className="text-xs text-zinc-200 font-light line-clamp-2">
                  Documenting how natural daylight transforms Brutalist geometric surfaces into tactile sculpture.
                </p>
              </div>
            </Link>

            {/* Secondary Portrait 2 (Span 6) */}
            <Link
              href="/gallery"
              className="group lg:col-span-6 relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.14] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow"
            >
              <Image
                src="/IAS_3900 (2).jpg"
                alt="Serenity in Motion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase text-zinc-200 border border-white/15">
                  Portraits • Paris
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">
                  Leica M11 Monochrome • 2026
                </span>
                <h3 className="text-2xl font-serif text-white group-hover:text-amber-200 transition-colors">
                  Serenity in Motion
                </h3>
                <p className="text-xs text-zinc-200 font-light line-clamp-2">
                  A study in unhurried elegance, focusing on subtle posture, soft texture, and honest presence.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOUNDATION MANIFESTO & INTERACTIVE SHATTERED GLASS FRAME --- */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-28 border-t border-black/[0.08] dark:border-white/[0.1] bg-[#f4f1ea]/40 dark:bg-[#0b0b0e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Atelier Foundation Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
              03 • The Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-zinc-950 dark:text-white leading-tight">
              An archive of emotion, <br />
              <span className="italic text-amber-700 dark:text-amber-200 font-light">preserved for generations.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              IAS Studio exists at the intersection of observation and meaning. We do not merely capture images; we document presence, structure, emotion, and time as they naturally unfold.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Our work is guided by a deeper question: <span className="text-zinc-950 dark:text-white italic">what remains when the celebration has concluded and the light has faded?</span> We believe photography and moving image are not decorative novelties, but acts of preservation. Each frame is treated as an irreplaceable heirloom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] flex flex-col gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold">01</span>
                <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Discreet Presence</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Working silently so you remain fully engaged in the heartbeat of the day.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] flex flex-col gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold">02</span>
                <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Natural Daylight</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Faithful, glowing skin tones and organic tones without synthetic filters.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] flex flex-col gap-2">
                <span className="text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold">03</span>
                <h4 className="text-sm font-medium text-zinc-950 dark:text-white">Museum Archival</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Fine-art pigment prints and encrypted private digital vaults.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Signature Interactive Shattered Glass Exhibit */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[380px]">
              <ShatteredGlassFrame />
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mt-4">
              Interactive Lens Shards • Hover to Fract
            </span>
          </div>
        </div>
      </section>

      {/* --- CLIENT TESTIMONIAL: HIGH CONTRAST LUXURY --- */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-24 border-t border-black/[0.08] dark:border-white/[0.1] bg-[#faf8f5] dark:bg-[#08080a]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="text-5xl font-serif text-amber-600 dark:text-amber-400 leading-none select-none">
            &ldquo;
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-zinc-950 dark:text-white leading-relaxed font-light">
            Working with IAS Studio was pure poetry. They captured the quiet truth of our celebration without ever directing us or feeling intrusive. Looking through our frames brings tears of gratitude every single time.
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300 font-semibold">
              Elena & Marcus
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Villa Cetinale, Tuscany • 3-Day Wedding Commission
            </span>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION: COMMISSION ATELIER --- */}
      <section className="w-full px-6 sm:px-12 lg:px-20 py-24 border-t border-black/[0.08] dark:border-white/[0.1] bg-[#f4f1ea]/50 dark:bg-[#0b0b0e] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
            Commence an Inquiry
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-zinc-950 dark:text-white">
            Let&apos;s preserve what matters most.
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 font-light max-w-xl leading-relaxed">
            We accept a limited number of commissions each season to ensure uncompromising artistic dedication to every story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-sm font-semibold tracking-wide shadow-[0_4px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_4px_40px_rgba(234,179,8,0.5)] transition-all hover:scale-[1.02] active:scale-98 mt-2"
          >
            <span>Discuss Your Vision</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* --- ARCHITECTURAL ATELIER FOOTER --- */}
      <footer className="relative w-full bg-[#ede8df] dark:bg-[#040405] text-zinc-600 dark:text-zinc-400 border-t border-black/[0.08] dark:border-white/[0.12] overflow-hidden transition-colors">
        <div className="relative w-full mx-auto max-w-7xl py-16 px-6 sm:px-12 lg:px-20 flex flex-col gap-12 z-10">
          {/* Top Row: Brand & Live Clock */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-black/[0.08] dark:border-white/[0.1]">
            <div className="flex items-center gap-3">
              <Image
                src="/IASLOGO.png"
                alt="IAS Studio Logo"
                width={120}
                height={26}
                className="brightness-0 dark:invert object-contain"
              />
              <span className="text-xs font-mono tracking-widest text-amber-700 dark:text-amber-400 uppercase pl-3 border-l border-black/15 dark:border-white/20 font-semibold">
                Cinematography Atelier
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                London, UK
              </span>
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <LondonClock />
              </span>
            </div>
          </div>

          {/* 4-Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-950 dark:text-white font-semibold">
                The Atelier
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                Crafting intentional visual textures, high-fashion portraiture, architectural archives, and cinematic wedding records globally.
              </p>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-950 dark:text-white font-semibold">
                Folios
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                <li><Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Weddings</Link></li>
                <li><Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Architecture</Link></li>
                <li><Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Fine Art Portraits</Link></li>
                <li><Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Moving Image</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-950 dark:text-white font-semibold">
                Client Vault
              </h4>
              <ul className="flex flex-col gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                <li><Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex items-center gap-1"><Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" /> Private Collection</Link></li>
                <li><Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Archival Standards</Link></li>
                <li><Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Studio Representation</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-950 dark:text-white font-semibold">
                Atelier Dispatches
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light">
                Receive quarterly publications on medium format techniques, optical formulas, and private exhibitions.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 mt-1">
                <input
                  type="email"
                  placeholder="atelier@domain.com"
                  className="bg-white/80 dark:bg-white/[0.05] border border-black/10 dark:border-white/[0.15] rounded-full px-4 py-2 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-[#121214] text-white dark:bg-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-300 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Metatags */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/[0.08] dark:border-white/[0.1] text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <div>© {new Date().getFullYear()} IAS Studio. All rights reserved. Crafted with precision.</div>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Instagram</a>
              <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Vimeo</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}