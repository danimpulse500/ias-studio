"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  lens: string;
  aperture: string;
  iso: string;
  year: string;
  aspect: string;
}

const categoryDescriptions: Record<string, string> = {
  "Architectural Perspectives": "We document built environments as expressions of structure, intention, and permanence.",
  "Wedding Chronicles": "We preserve unions as living narratives of emotion, family, and legacy.",
  "Cultural Heritage": "We capture traditions as memory in motion across generations.",
  "Corporate & Institutional Events": "We document leadership, dialogue, and organized vision.",
  "Leaders of Tomorrow": "We portray youth as the foundation of becoming and future identity.",
  "Her Grace": "A refined portrait study of elegance, presence, and individuality.",
  "His Excellence": "A portrait exploration of character, confidence, and refined identity.",
  "Celebrations & Milestones": "We preserve transitions and achievements as lasting memory.",
  "Family Legacy": "We document unity, connection, and generational continuity.",
};

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/IAS_1603.jpg",
    title: "Built Environments",
    category: "Architectural Perspectives",
    lens: "35mm T1.5 Prime",
    aperture: "T2.8",
    iso: "400",
    year: "2026",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    src: "/IAS_4484.jpg",
    title: "Preserving Unions",
    category: "Wedding Chronicles",
    lens: "50mm T2.1 Anamorphic",
    aperture: "T2.1",
    iso: "800",
    year: "2025",
    aspect: "aspect-video",
  },
  {
    id: 3,
    src: "/IAS_3900 (2).jpg",
    title: "Memory in Motion",
    category: "Cultural Heritage",
    lens: "85mm T1.4 Prime",
    aperture: "T1.4",
    iso: "1600",
    year: "2026",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    src: "/IAS_1603.jpg",
    title: "Leadership & Dialogue",
    category: "Corporate & Institutional Events",
    lens: "24mm T1.5 Prime",
    aperture: "T2.0",
    iso: "200",
    year: "2026",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    src: "/IAS_4484.jpg",
    title: "Foundation of Becoming",
    category: "Leaders of Tomorrow",
    lens: "50mm T2.1 Anamorphic",
    aperture: "T2.1",
    iso: "3200",
    year: "2025",
    aspect: "aspect-video",
  },
  {
    id: 6,
    src: "/IAS_3900 (2).jpg",
    title: "Elegance & Individuality",
    category: "Her Grace",
    lens: "75mm T2.0 Anamorphic",
    aperture: "T2.0",
    iso: "800",
    year: "2026",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    src: "/IAS_1603.jpg",
    title: "Character & Confidence",
    category: "His Excellence",
    lens: "85mm T1.4 Prime",
    aperture: "T1.4",
    iso: "400",
    year: "2025",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    src: "/IAS_4484.jpg",
    title: "Transitions & Achievements",
    category: "Celebrations & Milestones",
    lens: "35mm T1.5 Prime",
    aperture: "T2.0",
    iso: "1600",
    year: "2026",
    aspect: "aspect-video",
  },
  {
    id: 9,
    src: "/IAS_3900 (2).jpg",
    title: "Unity & Connection",
    category: "Family Legacy",
    lens: "50mm T2.1 Anamorphic",
    aperture: "T2.1",
    iso: "800",
    year: "2025",
    aspect: "aspect-[4/3]",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredItems = galleryData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black transition-colors duration-300">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=UnifrakturMaguntia&family=Special+Elite&family=Orbitron:wght@800&family=Caveat:wght@700&family=Reenie+Beanie&display=swap');

        .font-handwriting-thin {
          font-family: 'Reenie Beanie', cursive;
        }
      `}</style>

      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto py-24 px-16 flex flex-col gap-12">
        {/* Intro Section */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-zinc-50 font-handwriting-thin leading-none tracking-wide">
            The Exhibition
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A visual repository of frames, lenses, and light textures captured on recent sets. Filter by production category to explore focal profiles.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex gap-4 border-b border-zinc-100 dark:border-zinc-900 pb-4 overflow-x-auto scrollbar-none">
          {[
            "All",
            "Architectural Perspectives",
            "Wedding Chronicles",
            "Cultural Heritage",
            "Corporate & Institutional Events",
            "Leaders of Tomorrow",
            "Her Grace",
            "His Excellence",
            "Celebrations & Milestones",
            "Family Legacy",
          ].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-sm font-medium transition-colors pb-2 px-1 whitespace-nowrap relative outline-none ${
                selectedCategory === category
                  ? "text-black dark:text-white"
                  : "text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white"
              }`}
            >
              {category}
              {selectedCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 dark:bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 w-full min-h-[350px]">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`break-inside-avoid relative w-full overflow-hidden rounded-2xl cursor-pointer group bg-zinc-100 dark:bg-zinc-900 shadow-sm border border-zinc-200/10 ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Refraction / Film grain overlay effect */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400">
                  {item.category}
                </span>
                <h3 className="text-lg font-medium text-white mt-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-350 mt-2 leading-relaxed font-light font-sans line-clamp-3">
                  {categoryDescriptions[item.category]}
                </p>
                
                {/* Tech Specs Block */}
                <div className="border-t border-white/20 mt-4 pt-3 flex flex-col gap-1 text-[11px] font-light text-zinc-300 font-mono">
                  <div className="flex justify-between">
                    <span>LENS:</span>
                    <span>{item.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>APERTURE:</span>
                    <span>{item.aperture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ISO:</span>
                    <span>{item.iso}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-black dark:text-white"
            >
              Prev
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono ${
                    currentPage === page
                      ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                      : "text-zinc-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-black dark:text-white"
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex flex-col justify-center items-center p-4 backdrop-blur-md"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.title}
              fill
              className="object-cover"
            />
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            {/* Info Drawer overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 text-white flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-400">
                {lightboxItem.category} • {lightboxItem.year}
              </span>
              <h2 className="text-xl font-semibold">{lightboxItem.title}</h2>
              <p className="text-xs text-zinc-350 max-w-xl leading-relaxed font-light mt-1 font-sans">
                {categoryDescriptions[lightboxItem.category]}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 mt-3 text-xs font-mono text-zinc-400">
                <div>LENS: <span className="text-white">{lightboxItem.lens}</span></div>
                <div>APERTURE: <span className="text-white">{lightboxItem.aperture}</span></div>
                <div>ISO: <span className="text-white">{lightboxItem.iso}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

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

            <div className="flex flex-col gap-4 md:col-span-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200 font-medium">
                Newsletter
              </h4>
              <p className="text-sm font-light leading-6 text-zinc-400">
                Receive quarterly breakdowns of camera configurations and lighting plans.
              </p>

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

          {/* Bottom Half */}
          <div className="w-full flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-900 pt-8 text-xs font-light tracking-wide text-zinc-500">
            <div>
              <span>© {new Date().getFullYear()} Studio. All rights reserved. Built with precision.</span>
            </div>

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
