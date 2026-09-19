"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  portfolioItems,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
  PortfolioItem,
} from "@/data/portfolio";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("All");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const featuredItem = portfolioItems.find((i) => i.featured) || portfolioItems[0];
  const folioList = filteredItems.filter((i) => i.id !== featuredItem.id || selectedCategory !== "All");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeItem) return;
      const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);

      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setActiveItem(filteredItems[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setActiveItem(filteredItems[prevIndex]);
      }
    },
    [activeItem, filteredItems]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen w-full bg-[#f4f4f6] text-[#111215] dark:bg-[#0c0d10] dark:text-[#f4f4f6] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* Centered Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-8 sm:gap-12">
        {/* ============================================================== */}
        {/* HERO SECTION                                                  */}
        {/* ============================================================== */}
        <section className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="absolute inset-0 z-0">
            <Image
              src="/white_wedding.jpg"
              alt="IAS Studio Portfolio"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-15 dark:opacity-25 scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 dark:from-[#15171c] dark:via-[#15171c]/75 dark:to-black/60 transition-colors duration-300" />
          </div>

          <Header />

          <div className="relative z-10 pt-10 pb-2 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                Our Portfolio
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-zinc-900 dark:text-white">
                Explore our <span className="font-semibold">recent photography</span>
              </h1>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl">
                Take a look through our work covering indoor shoots, outdoor sessions, traditional weddings, and white weddings.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] self-start lg:self-auto"
            >
              <span>Book a Shoot</span>
              <div className="w-6 h-6 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CATEGORY FILTER BAR                                            */}
        {/* ============================================================== */}
        <section className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count =
                category === "All"
                  ? portfolioItems.length
                  : portfolioItems.filter((i) => i.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-zinc-900 text-white font-semibold shadow-sm dark:bg-white dark:text-black"
                      : "bg-black/[0.04] text-zinc-600 hover:text-black border border-black/10 dark:bg-white/[0.05] dark:text-zinc-400 dark:hover:text-white dark:border-white/10"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] ${
                      isSelected ? "text-zinc-300 dark:text-zinc-700" : "text-zinc-500"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-zinc-500 shrink-0">
            Showing {filteredItems.length} photos
          </span>
        </section>

        {/* ============================================================== */}
        {/* FEATURED PHOTO HIGHLIGHT                                      */}
        {/* ============================================================== */}
        {selectedCategory === "All" && (
          <section
            onClick={() => setActiveItem(featuredItem)}
            className="group cursor-pointer relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#131519] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-black/20 dark:hover:border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between gap-6 order-2 lg:order-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black text-[11px] font-medium uppercase tracking-wider">
                      Featured Photo
                    </span>
                    <span className="text-xs text-zinc-500">
                      {featuredItem.category} • {featuredItem.year}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {featuredItem.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                    {featuredItem.story}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    <span>{featuredItem.location}</span>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-5 pr-1.5 py-1.5 text-xs font-semibold tracking-wide transition-all shadow-md group-hover:scale-[1.02]">
                    <span>View Photo</span>
                    <div className="w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl order-1 lg:order-2 bg-zinc-900">
                <Image
                  src={featuredItem.src}
                  alt={featuredItem.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* PHOTO GRID CARDS                                              */}
        {/* ============================================================== */}
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {folioList.map((item, index) => {
              const isWide = index % 5 === 0;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`group cursor-pointer rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#131519] border border-black/[0.08] dark:border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-lg dark:shadow-2xl hover:border-black/25 dark:hover:border-white/25 transition-all duration-300 ${
                    isWide ? "md:col-span-2 min-h-[440px]" : "min-h-[440px]"
                  }`}
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-black/5 dark:border-white/5">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Category & Year Tags */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white">
                        {item.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-zinc-300">
                        {item.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-white text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Clean Card Details */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal line-clamp-2">
                      {item.story}
                    </p>

                    <div className="flex items-center justify-end pt-2 border-t border-black/[0.06] dark:border-white/[0.08]">
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover:underline underline-offset-4">
                        <span>View Photo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================== */}
        {/* BOTTOM CALL TO ACTION                                          */}
        {/* ============================================================== */}
        <section className="w-full rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-8 sm:p-12 flex flex-col lg:flex-row justify-between lg:items-center gap-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
              Work With Us
            </span>

            <h3 className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-white">
              Planning a wedding, event, or portrait session?
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              We would love to be part of your special day. Get in touch with us to check our availability and packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/[0.04] hover:bg-black/10 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] border border-black/10 dark:border-white/15 text-xs font-semibold text-zinc-900 dark:text-white transition-all"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-6 pr-2 py-2 text-xs font-semibold tracking-wide transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Contact Us</span>
              <div className="w-7 h-7 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </section>

        <Footer showBanner={false} />
      </div>

      {/* ============================================================== */}
      {/* SIMPLE PHOTO LIGHTBOX                                         */}
      {/* ============================================================== */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 select-none"
          onClick={() => setActiveItem(null)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-6xl mx-auto flex items-center justify-between border-b border-white/15 pb-4 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-white uppercase font-semibold">
                {activeItem.category}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-200 text-sm font-medium">{activeItem.title}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-zinc-400 hidden sm:inline">
                {activeItem.location} ({activeItem.year})
              </span>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Photo Container */}
          <div
            className="relative w-full max-w-5xl mx-auto my-auto h-[65vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={activeItem.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />

            <button
              onClick={() => {
                const idx = filteredItems.findIndex((i) => i.id === activeItem.id);
                const prev = (idx - 1 + filteredItems.length) % filteredItems.length;
                setActiveItem(filteredItems[prev]);
              }}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                const idx = filteredItems.findIndex((i) => i.id === activeItem.id);
                const next = (idx + 1) % filteredItems.length;
                setActiveItem(filteredItems[next]);
              }}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Clean Bottom Caption */}
          <div
            className="w-full max-w-6xl mx-auto border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-300"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-zinc-200 text-center sm:text-left">{activeItem.story}</p>
            <span className="text-zinc-400 shrink-0">{activeItem.location}</span>
          </div>
        </div>
      )}
    </div>
  );
}
