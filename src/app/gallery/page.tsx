"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
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
  Lock,
  ArrowUpRight,
  LayoutGrid,
  Film,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("All");
  const [layoutMode, setLayoutMode] = useState<"grid" | "cinema">("grid");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [showVaultModal, setShowVaultModal] = useState(false);
  const [vaultKey, setVaultKey] = useState("");
  const [vaultMessage, setVaultMessage] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

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

  const handleVaultAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vaultKey.trim()) return;
    setVaultMessage(`Authenticating secure key '${vaultKey}'... Vault connected!`);
    setTimeout(() => {
      setVaultMessage(null);
      setShowVaultModal(false);
      setVaultKey("");
    }, 2500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 flex-1 flex flex-col gap-12">
        {/* Editorial Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-black/[0.08] dark:border-white/[0.1] pb-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-700 dark:text-amber-400 font-semibold">
              Portfolio Folio • 2024–2026 Archive
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-zinc-950 dark:text-white leading-tight">
              Selected Works
            </h1>
            <p className="text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              A curated anthology of architectural studies, luxury wedding films, and intimate fine art portraits. Documented with medium format optics and intentional daylight.
            </p>
          </div>

          {/* Client Vault Access Card */}
          <div className="glass-panel-glow p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.15] flex flex-col gap-3 min-w-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 flex items-center gap-1.5 font-semibold">
                <Lock className="w-3.5 h-3.5" />
                Private Archive
              </span>
              <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Client Access</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              Clients may enter their encrypted passkey to view, download, and order archival prints.
            </p>
            <button
              onClick={() => setShowVaultModal(true)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black dark:hover:bg-white text-zinc-900 dark:text-white hover:text-white dark:hover:text-black text-xs font-medium tracking-wide transition-all border border-black/10 dark:border-white/20"
            >
              <span>Enter Vault Passkey</span>
              <KeyRound className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Controls & Layout Mode Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
          {/* Category Tabs */}
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
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#121214] text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono ${
                      isSelected ? "text-amber-300 dark:text-zinc-600" : "text-amber-700 dark:text-amber-400 font-semibold"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1 hidden sm:inline">Ratio:</span>
            <div className="flex items-center p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1]">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs ${
                  layoutMode === "grid"
                    ? "bg-white text-black dark:bg-white dark:text-black font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
                title="Editorial Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Editorial</span>
              </button>
              <button
                onClick={() => setLayoutMode("cinema")}
                className={`p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs ${
                  layoutMode === "cinema"
                    ? "bg-white text-black dark:bg-white dark:text-black font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
                title="Anamorphic Cinema Strip View"
              >
                <Film className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Cinema Scope</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Visual Display */}
        {layoutMode === "grid" ? (
          /* Editorial Asymmetric Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const isWide = item.aspectRatio === "cinema" && (index % 3 === 0 || index % 5 === 0);
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`group cursor-pointer flex flex-col gap-4 ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.12] transition-all duration-500 group-hover:border-amber-500/60 dark:group-hover:border-amber-400/60 shadow-sm group-hover:shadow-2xl ${
                      isWide ? "aspect-[21/9]" : item.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-amber-300 border border-white/15">
                        {item.category}
                      </span>
                    </div>

                    {/* Technical Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        {item.location}
                      </span>
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-amber-300">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & EXIF summary */}
                  <div className="flex flex-col gap-1 px-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-serif text-zinc-950 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light line-clamp-2">
                      {item.story}
                    </p>
                    {item.lens && (
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                        Optics: {item.lens}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Cinema Strip View (Wide Anamorphic Plates) */
          <div className="flex flex-col gap-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.14] group-hover:border-amber-500/60 dark:group-hover:border-amber-400/60 transition-all duration-500 shadow-sm group-hover:shadow-2xl">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-amber-300 border border-white/20">
                      {item.category} • {item.location}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="flex flex-col gap-1 max-w-2xl">
                      <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
                        {item.camera || "Cinema Prime"} • {item.filmStock || "35mm Raw"}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-200 font-light max-w-xl">
                        {item.story}
                      </p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider group-hover:bg-amber-300 transition-colors shrink-0">
                      Inspect Frame
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- HIGH-END DARKROOM LIGHTBOX MODAL --- */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 select-none"
          onClick={() => setActiveItem(null)}
        >
          {/* Lightbox Top Header */}
          <div
            className="w-full max-w-6xl mx-auto flex items-center justify-between border-b border-white/[0.12] pb-4 text-xs font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-amber-400 uppercase tracking-widest">{activeItem.category}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-white font-serif text-base">{activeItem.title}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-zinc-400 hidden sm:inline">{activeItem.location} ({activeItem.year})</span>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Centered Image with Lateral Arrows */}
          <div
            className="relative w-full max-w-5xl mx-auto my-auto h-[62vh] flex items-center justify-center"
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

            {/* Previous Frame Button */}
            <button
              onClick={() => {
                const idx = filteredItems.findIndex((i) => i.id === activeItem.id);
                const prev = (idx - 1 + filteredItems.length) % filteredItems.length;
                setActiveItem(filteredItems[prev]);
              }}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-white/20 text-white hover:bg-amber-400 hover:text-black transition-all hover:scale-110"
              aria-label="Previous Frame"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Frame Button */}
            <button
              onClick={() => {
                const idx = filteredItems.findIndex((i) => i.id === activeItem.id);
                const next = (idx + 1) % filteredItems.length;
                setActiveItem(filteredItems[next]);
              }}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 border border-white/20 text-white hover:bg-amber-400 hover:text-black transition-all hover:scale-110"
              aria-label="Next Frame"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Bottom Details Bar */}
          <div
            className="w-full max-w-6xl mx-auto border-t border-white/[0.12] pt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">Narrative</span>
              <p className="text-zinc-300 font-light line-clamp-2">{activeItem.story}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">Camera Body</span>
              <span className="text-white font-mono">{activeItem.camera || "Arri Alexa Mini LF"}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">Optical System</span>
              <span className="text-white font-mono">{activeItem.lens || "Cooke Anamorphic /i Prime"}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">Film Stock / Format</span>
              <span className="text-white font-mono">{activeItem.filmStock || "Kodak 500T 35mm"}</span>
            </div>
          </div>
        </div>
      )}

      {/* --- CLIENT VAULT SECURITY MODAL --- */}
      {showVaultModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowVaultModal(false)}
        >
          <div
            className="glass-panel-glow p-8 rounded-3xl border border-black/10 dark:border-white/20 max-w-md w-full flex flex-col gap-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVaultModal(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-1">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 font-semibold">
                Encrypted Client Vault
              </span>
              <h3 className="text-2xl font-serif text-zinc-950 dark:text-white">Access Your Collection</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                Enter the unique access code provided in your handover box to unlock your full-resolution portfolio, wedding film, and print lab.
              </p>
            </div>

            {vaultMessage ? (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center gap-3 text-xs text-amber-800 dark:text-amber-200 animate-in fade-in font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{vaultMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleVaultAccess} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-medium">
                    Collection Key
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IAS-TUSCANY-2025"
                    value={vaultKey}
                    onChange={(e) => setVaultKey(e.target.value)}
                    className="w-full bg-black/[0.04] dark:bg-black/60 border border-black/10 dark:border-white/20 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 transition-colors uppercase font-mono tracking-widest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-xs font-semibold uppercase tracking-wider hover:shadow-[0_4px_25px_rgba(234,179,8,0.4)] transition-all"
                >
                  Unlock Vault
                </button>
              </form>
            )}

            <div className="text-center pt-2 border-t border-black/10 dark:border-white/10">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
                Need key assistance?{" "}
                <Link href="/contact" className="text-zinc-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-300 underline underline-offset-4">
                  Contact Studio Concierge
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
