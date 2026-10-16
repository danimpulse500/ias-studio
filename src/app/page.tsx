"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    src: "/images/Wedding%20coverage/IAS_8166.jpg",
    alt: "Wedding couple photographed by IAS Studio",
    title: "IAS Studio Photography",
    caption: "Making every moment a story worth remembering.",
  },
  {
    src: "/images/BEST%20FRIENDS/IAS_1110.jpg",
    alt: "Friends dressed for a celebration, photographed by IAS Studio",
    title: "Best Friends",
    caption: "Celebrating culture, connection, and family.",
  },
  {
    src: "/images/THE%20ELEGANT%20LADY/IAS_2786.jpg",
    alt: "Editorial portrait photographed by IAS Studio",
    title: "Portrait Photography",
    caption: "Thoughtful portraits with a character all their own.",
  },
  {
    src: "/images/THE%20HAPPY%20FAMILY/IAS_1119.jpg",
    alt: "Family portrait photographed by IAS Studio",
    title: "Family Photography",
    caption: "Preserving the moments you will cherish for a lifetime.",
  },
];

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
                href="/images/THE%20ELEGANT%20LADY/IAS_2786.jpg"
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
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);

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

  useEffect(() => {
    if (isHeroHovered) return;

    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHeroHovered]);

  const featuredProjects = [
    {
      src: "/images/Wedding%20coverage/IAS_8166.jpg",
      title: "Wedding Celebration",
      category: "Wedding Coverage",
      fallbackColor: "bg-zinc-800",
    },
    {
      src: "/images/THE%20ELEGANT%20LADY/IAS_5021.jpg",
      title: "Portrait in Blue",
      category: "The Elegant Lady",
      fallbackColor: "bg-zinc-700",
    },
    {
      src: "/images/KIDS%20PHOTOGRAPHY/IAS_7904.jpg",
      title: "A Colorful Portrait",
      category: "Kids Photography",
      fallbackColor: "bg-zinc-600",
    },
    {
      src: "/images/THE%20HAPPY%20FAMILY/IAS_9639.jpg",
      title: "Family Portrait",
      category: "The Happy Family",
      fallbackColor: "bg-zinc-500",
    },
  ];

  const highlights = [
    {
      images: [
        "/images/Wedding%20coverage/IAS_8166.jpg",
        "/images/Wedding%20coverage/IAS_3709.jpg",
        "/images/Wedding%20coverage/IAS_3745.jpg",
      ],
      title: "Wedding Coverage",
      description: "A selection of wedding day moments captured by IAS Studio.",
      fallbackColor: "bg-zinc-800",
    },
    {
      images: [
        "/images/THE%20HAPPY%20FAMILY/IAS_1119.jpg",
        "/images/THE%20HAPPY%20FAMILY/IAS_7921.jpg",
        "/images/THE%20HAPPY%20FAMILY/IAS_9639.jpg",
      ],
      title: "The Happy Family",
      description: "Family portraits made to be treasured for years to come.",
      fallbackColor: "bg-zinc-700",
    },
    {
      images: [
        "/images/KIDS%20PHOTOGRAPHY/IAS_7904.jpg",
        "/images/KIDS%20PHOTOGRAPHY/IAS_8451.jpg",
        "/images/KIDS%20PHOTOGRAPHY/IAS_8863.jpg",
      ],
      title: "Kids Photography",
      description: "Playful portraits celebrating each child's personality.",
      fallbackColor: "bg-zinc-600",
    },
    {
      images: [
        "/images/THE%20ELEGANT%20LADY/IAS_2786.jpg",
        "/images/THE%20ELEGANT%20LADY/IAS_5021.jpg",
        "/images/THE%20ELEGANT%20LADY/IAS_6742.jpg",
      ],
      title: "The Elegant Lady",
      description: "Studio portraits with color, character, and personal style.",
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
    <div className="min-h-screen w-full bg-[#f4f4f6] text-[#111215] dark:bg-[#0c0d10] dark:text-[#f4f4f6] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-8 sm:gap-12">
      <style jsx global>{`
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

      {/* --- HERO SECTION --- */}
      <section className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-colors duration-300 flex flex-col gap-10">
        <Header />
        {/* Previous side-by-side hero layout
        <main className="flex w-full flex-col items-center justify-between lg:flex-row gap-10 lg:gap-16">
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
              Thoughtful photography for families, couples, and individuals who want their moments remembered.
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
        */}

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
              IAS Studio
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-zinc-900 dark:text-white">
              Stories written in{" "}
              <span
                key={wordIndex}
                className={`font-semibold text-yellow-600 dark:text-yellow-400 ${words[wordIndex].fontClass}`}
              >
                {words[wordIndex].text}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl">
              Exceptional cinematography for directors, brands, and visionaries who demand unforgettable imagery.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row pt-2 w-full sm:w-auto">
              <a
                className="flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                href="/contact"
              >
                Book A Meeting
              </a>
              <a
                className="flex h-12 w-fit items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                href="#featured-work"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-900 group"
            onMouseEnter={() => setIsHeroHovered(true)}
            onMouseLeave={() => setIsHeroHovered(false)}
          >
            {heroSlides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === heroSlideIndex ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== heroSlideIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                  <span className="text-xs text-zinc-300 block mb-1">
                    {slide.title}
                  </span>
                  <p className="text-base sm:text-lg font-medium text-white max-w-lg">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setHeroSlideIndex(
                  (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                )
              }
              aria-label="Previous hero image"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/65"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length)
              }
              aria-label="Next hero image"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/65"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 right-6 z-10 flex items-center gap-2 sm:right-8">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setHeroSlideIndex(index)}
                  aria-label={`Show image ${index + 1}: ${slide.title}`}
                  aria-pressed={index === heroSlideIndex}
                  className={`h-2 rounded-full transition-all ${
                    index === heroSlideIndex
                      ? "w-6 bg-white"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED WORK SECTION --- */}
      <section id="featured-work" className="w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-colors duration-300">
        <div className="w-full mx-auto flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 md:text-3xl lg:text-4xl">
                Featured Work
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                A selection of portraits, celebrations, and special moments photographed by IAS Studio.
              </p>
            </div>
            <div>
              <a
                href="/gallery"
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
                  onLoad={(event) => event.currentTarget.classList.remove("opacity-0")}
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
                      <span>IAS Studio</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REEL HIGHLIGHTS CAROUSEL SECTION --- */}
      <section className="w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-colors duration-300">
        <div className="w-full mx-auto flex flex-col gap-8 sm:gap-12">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 md:text-3xl lg:text-4xl">
              Photography Highlights
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              A closer look at the people and celebrations behind our recent photographs.
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

      <section className="w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-colors duration-300">
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

      <Footer />
      </div>
    </div>
  );
}