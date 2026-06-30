"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Header } from "@/components/shared/Header";

interface HighlightItem {
  images: string[];
  title: string;
  description: string;
  fallbackColor: string;
}

function HighlightCard({ highlight }: { highlight: HighlightItem }) {
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
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl group ${highlight.fallbackColor} cursor-pointer`}
    >
      {highlight.images.map((imgSrc, idx) => (
        <Image
          key={imgSrc + "-" + idx}
          src={imgSrc}
          alt={highlight.title}
          fill
          sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          priority={idx === 0}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Nodes / Dots Capsule */}
      <div className="absolute top-4 right-4 flex gap-1.5 z-10 px-2 py-1.5 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-sm shadow-sm items-center border border-white/20 dark:border-zinc-800/50">
        {highlight.images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
              ? "w-4 bg-black dark:bg-white"
              : "w-1.5 bg-black/20 dark:bg-white/20"
              }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 pointer-events-none">
        <h3 className="text-lg font-semibold text-white tracking-wide leading-snug">
          {highlight.title}
        </h3>
        <p className="text-xs text-zinc-300 font-normal leading-relaxed line-clamp-3">
          {highlight.description}
        </p>
      </div>
    </div>
  );
}

function ShatteredGlassFrame() {
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
      className="relative w-full aspect-[3/4] cursor-pointer"
    >
      <svg
        className="w-full h-full select-none overflow-visible filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
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
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <image
                href="/IAS_1603.jpg"
                width="300"
                height="400"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#shard-clip-${idx})`}
                opacity="0.85"
              />
              <polygon
                points={shard.points}
                fill="rgba(255, 255, 255, 0.03)"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.5"
                className="transition-colors duration-350"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState(0);

  const words = [
    { text: "Light", fontClass: "font-light-theme" },
    { text: "Shadow", fontClass: "font-shadow-theme" },
    { text: "Frames", fontClass: "font-frames-theme" },
    { text: "Motion", fontClass: "font-motion-theme" },
    { text: "Soul", fontClass: "font-soul-theme" }
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    {
      src: "/IAS_1603.jpg",
      alt: "Top Frame",
      fallbackColor: "bg-zinc-800 dark:bg-zinc-900",
      gridClasses: "col-start-2 row-start-1 animate-puzzle-top",
    },
    {
      src: "/IAS_1603.jpg",
      alt: "Right Frame",
      fallbackColor: "bg-zinc-600 dark:bg-zinc-700",
      gridClasses: "col-start-3 row-start-2 animate-puzzle-right",
    },
    {
      src: "/IAS_3900 (2).jpg",
      alt: "Bottom Frame",
      fallbackColor: "bg-zinc-500 dark:bg-zinc-600",
      gridClasses: "col-start-2 row-start-3 animate-puzzle-bottom",
    },
    {
      src: "/IAS_4484.jpg",
      alt: "Left Frame",
      fallbackColor: "bg-zinc-700 dark:bg-zinc-800",
      gridClasses: "col-start-1 row-start-2 animate-puzzle-left",
    },
  ];

  const featuredProjects = [
    {
      src: "/IAS_1603.jpg",
      title: "Shadows of Today",
      category: "Narrative Short",
      year: "2026",
      fallbackColor: "bg-zinc-800",
    },
    {
      src: "/IAS_4484.jpg",
      title: "Chasing Horizons",
      category: "Commercial / Brand Film",
      year: "2025",
      fallbackColor: "bg-zinc-700",
    },
    {
      src: "/IAS_3900 (2).jpg",
      title: "Echoes in the Dark",
      category: "Music Video",
      year: "2026",
      fallbackColor: "bg-zinc-600",
    },
    {
      src: "/IAS_1603.jpg",
      title: "The Last Frame",
      category: "Independent Feature",
      year: "2025",
      fallbackColor: "bg-zinc-500",
    },
  ];

  const highlights = [
    {
      images: ["/IAS_4484.jpg", "/IAS_1603.jpg", "/IAS_3900 (2).jpg"],
      title: "Golden Hour Anamorphic Test",
      description: "Exploring compression and organic lens flares on the 50mm T2.1 prime setup.",
      fallbackColor: "bg-zinc-800",
    },
    {
      images: ["/IAS_3900 (2).jpg", "/IAS_4484.jpg", "/IAS_1603.jpg"],
      title: "Neon Low-Light Textures",
      description: "Pushing sensors to ISO 3200 to capture natural color reproduction in nighttime urban environments.",
      fallbackColor: "bg-zinc-700",
    },
    {
      images: ["/IAS_1603.jpg", "/IAS_3900 (2).jpg", "/IAS_4484.jpg"],
      title: "High-Contrast Monochrome Set",
      description: "Meticulous sculpting using sharp backlighting and deep silhouette tracking arrays.",
      fallbackColor: "bg-zinc-600",
    },
    {
      images: ["/IAS_4484.jpg", "/IAS_1603.jpg", "/IAS_3900 (2).jpg"],
      title: "Dynamic Vehicle Tracking",
      description: "Utilizing stabilized remote heads to maintain continuous intimate focal geometry at high velocity.",
      fallbackColor: "bg-zinc-500",
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveNode(index);
  };

  const scrollToNode = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: "smooth",
    });
    setActiveNode(index);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black">
      <style jsx global>{`
        @keyframes slide-top {
          0%, 100% { transform: translate(0, 0); }
          20%  { transform: translate(calc(100% + 1rem), 0); }
          45%  { transform: translate(calc(100% + 1rem), calc(100% + 1rem)); }
          70%  { transform: translate(0, calc(100% + 1rem)); }
        }
        @keyframes slide-right {
          0%, 100% { transform: translate(0, 0); }
          20%  { transform: translate(0, calc(100% + 1rem)); }
          45%  { transform: translate(calc(-100% - 1rem), calc(100% + 1rem)); }
          70%  { transform: translate(calc(-100% - 1rem), 0); }
        }
        @keyframes slide-bottom {
          0%, 100% { transform: translate(0, 0); }
          20%  { transform: translate(calc(-100% - 1rem), 0); }
          45%  { transform: translate(calc(-100% - 1rem), calc(-100% - 1rem)); }
          70%  { transform: translate(0, calc(-100% - 1rem)); }
        }
        @keyframes slide-left {
          0%, 100% { transform: translate(0, 0); }
          20%  { transform: translate(0, calc(-100% - 1rem)); }
          45%  { transform: translate(calc(100% + 1rem), calc(-100% - 1rem)); }
          70%  { transform: translate(calc(100% + 1rem), 0); }
        }

        .animate-puzzle-top { animation: slide-top 12s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
        .animate-puzzle-right { animation: slide-right 12s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
        .animate-puzzle-bottom { animation: slide-bottom 12s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
        .animate-puzzle-left { animation: slide-left 12s cubic-bezier(0.77, 0, 0.175, 1) infinite; }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=UnifrakturMaguntia&family=Special+Elite&family=Orbitron:wght@800&family=Caveat:wght@700&family=Reenie+Beanie&display=swap');

        .font-light-theme {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        .font-shadow-theme {
          font-family: 'UnifrakturMaguntia', serif;
        }
        .font-frames-theme {
          font-family: 'Special Elite', cursive;
        }
        .font-motion-theme {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 0.05em;
        }
        .font-soul-theme {
          font-family: 'Caveat', cursive;
        }
        .font-handwriting-thin {
          font-family: 'Reenie Beanie', cursive;
        }
      `}</style>

      <Header />

      {/* --- HERO SECTION --- */}
      <main className="flex w-full flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black lg:flex-row gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left flex-1 max-w-xl">
          <h1 className="max-w-md text-3xl font-semibold leading-[1.3] tracking-tight text-black dark:text-zinc-50 md:text-4xl lg:text-5xl min-h-[4.5rem] sm:min-h-[3.5rem] md:min-h-[5.5rem]">
            Stories Written in{" "}
            <span
              key={wordIndex}
              className={`inline-block text-yellow-500 dark:text-yellow-400 text-4xl md:text-5xl lg:text-6xl ${words[wordIndex].fontClass}`}
            >
              {words[wordIndex].text}
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Exceptional cinematography for directors, brands, and visionaries who demand unforgettable imagery.
          </p>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row pt-4 w-full sm:w-auto">
            <a
              className="flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] "
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book A Meeting
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="#featured-work"
            >
              View Gallery
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[450px] aspect-square flex items-center justify-center">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-4">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl dark:border-white/[.05] ${image.fallbackColor} ${image.gridClasses}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-w-768px) 66vw, 50vw"
                  className="object-cover pointer-events-none opacity-0 transition-opacity duration-300"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- FEATURED WORK SECTION --- */}
      <section id="featured-work" className="w-full bg-white dark:bg-black py-24 px-16 border-t border-zinc-100 dark:border-zinc-950">
        <div className="w-full mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 md:text-3xl lg:text-4xl">
                Featured Work
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                A curated look at our latest film reel selections, framing intentional narratives across various formats and landscapes.
              </p>
            </div>
            <div>
              <a
                href="/projects"
                className="group relative inline-flex items-center gap-1 text-sm font-medium text-black dark:text-zinc-50 pb-1 outline-none"
              >
                Open Gallery
                <span className="absolute bottom-0 left-0 h-[1px] w-full scale-x-0 bg-black dark:bg-zinc-50 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative aspect-[3/4] w-full overflow-hidden rounded-2xl cursor-pointer ${project.fallbackColor}`}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-0"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity group-hover:opacity-0" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <div className="transform translate-y-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-medium text-white mt-1 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-white/20 mt-4 pt-3 text-xs text-zinc-400 font-light">
                      <span>Cinematography</span>
                      <span>© {project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REEL HIGHLIGHTS CAROUSEL SECTION --- */}
      <section className="w-full bg-white dark:bg-black pb-32 px-16">
        <div className="w-full mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 md:text-3xl lg:text-4xl">
              Production Highlights
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Behind-the-lens look at specific frames, lighting configurations, and technical execution from recent sets.
            </p>
          </div>

          <div className="w-full relative">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start shrink-0"
                >
                  <HighlightCard highlight={highlight} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-black py-24 px-16 border-t border-zinc-100 dark:border-zinc-950">
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-between">

          {/* Left Side: Title and Description */}
          <div className="flex flex-col gap-6 flex-1 max-w-xl text-center sm:text-left items-center sm:items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-zinc-50 font-handwriting-thin leading-none tracking-wide">
              Foundation
            </h2>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              IAS Studio exists at the intersection of observation and meaning. We do not merely capture images; we document presence, structure, emotion, and time as they naturally unfold. Our work is guided by a deeper question: what remains when the moment has passed? We believe photography and visual storytelling are not acts of decoration, but acts of preservation. Each frame is treated as an archive of human experience, architecture, culture, and identity. IAS Studio is built on the principle that clarity is more powerful than excess, and intention is more valuable than volume.
            </p>
          </div>

          {/* Right Side: Shattered Glass Frame Component */}
          <div className="flex-1 w-full max-w-[450px] flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px] aspect-[3/4]">
              <ShatteredGlassFrame />
            </div>
          </div>

        </div>
      </section>

      {/* --- CINEMATIC FOOTER SECTION --- */}
      <footer className="relative w-full bg-black text-zinc-400 border-t border-zinc-900 overflow-hidden transition-colors duration-300">

        {/* Background Yellow Unconnected Square Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
          <svg className="w-full h-full">
            <defs>
              <pattern id="squareGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="2" height="2" fill="#eab308" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#squareGrid)" />
          </svg>
        </div>

        <div className="relative w-full mx-auto max-w-7xl py-16 px-16 flex flex-col gap-16 z-10">

          {/* Top Half: Brand Identity vs Functional Links Layout Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

            {/* Column 1: Studio Profile / Core Statement */}
            <div className="flex flex-col gap-4 md:col-span-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white cursor-pointer w-fit">
                <Image
                  className="invert"
                  src="/IASLOGO.png"
                  alt="Next.js logo"
                  width={90}
                  height={18}
                  priority
                />
              </Link>
              <p className="text-sm leading-6 font-light max-w-sm text-zinc-400">
                Crafting intentional visual textures for narrative films, commercial campaigns, and global art installations.
              </p>
            </div>

            {/* Column 2: Navigation Categories */}
            <div className="flex flex-col gap-4 md:col-span-3 md:col-start-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-medium">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3 text-sm font-light">
                {["Gallery", "About Us", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-yellow-400 transition-colors duration-200 text-zinc-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact / Booking Details */}
            <div className="flex flex-col gap-4 md:col-span-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-medium">
                Newsletter
              </h4>
              <p className="text-sm font-light leading-6 text-zinc-400">
                Receive quarterly breakdowns of camera configurations and lighting plans.
              </p>

              {/* Premium Input Container with Animated Border Focus */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="group relative flex w-full max-w-sm items-center border-b border-zinc-800 focus-within:border-yellow-400 transition-colors duration-300 pb-1"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent text-sm font-light py-2 text-white placeholder-zinc-650 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-xs uppercase font-mono tracking-wider ml-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Half: Copyright Metatags & Social Links Row */}
          <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-900 pt-8 text-xs font-light tracking-wide text-zinc-500">
            <div>
              <span>© {new Date().getFullYear()} Studio. All rights reserved. Built with precision.</span>
            </div>

            {/* Social Intermediaries */}
            <div className="flex items-center gap-6">
              {["Vimeo", "Instagram", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-200 text-zinc-400"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}