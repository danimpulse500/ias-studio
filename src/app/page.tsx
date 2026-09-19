"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  // Hero Carousel State
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroFilter, setHeroFilter] = useState("Traditional Wedding");

  const heroSlides = [
    {
      id: "01",
      title: "Cameroonian Traditional Wedding",
      location: "Douala & Yaoundé, Cameroon",
      image: "/traditional_wedding.jpg",
      thumb: "/traditional_wedding.jpg",
    },
    {
      id: "02",
      title: "Lake Como White Wedding",
      location: "Lake Como, Italy",
      image: "/white_wedding.jpg",
      thumb: "/white_wedding.jpg",
    },
    {
      id: "03",
      title: "Morning at Mont Blanc",
      location: "Mont Blanc, France",
      image: "/landscape_mont_blanc.jpg",
      thumb: "/landscape_mont_blanc.jpg",
    },
    {
      id: "04",
      title: "Studio Portrait Session",
      location: "Paris, France",
      image: "/portrait_editorial.jpg",
      thumb: "/portrait_editorial.jpg",
    },
  ];

  const heroFilters = [
    "Traditional Wedding",
    "White Wedding",
    "Indoor",
    "Outdoor",
  ];

  // Section [02] Services State
  const [selectedExpertise, setSelectedExpertise] = useState("Traditional Wedding");

  const expertiseData: Record<
    string,
    { title: string; location: string; image: string; nextImage: string }
  > = {
    "Traditional Wedding": {
      title: "Cameroonian Traditional Wedding",
      location: "Douala & Yaoundé, Cameroon",
      image: "/traditional_wedding.jpg",
      nextImage: "/hero_architecture_grass.jpg",
    },
    "White Wedding": {
      title: "Lake Como White Wedding",
      location: "Lake Como, Italy",
      image: "/white_wedding.jpg",
      nextImage: "/IAS_4484.jpg",
    },
    "Indoor": {
      title: "Studio Portrait Session",
      location: "Paris, France",
      image: "/portrait_editorial.jpg",
      nextImage: "/IAS_1603.jpg",
    },
    "Outdoor": {
      title: "Morning at Mont Blanc",
      location: "Mont Blanc, France",
      image: "/landscape_mont_blanc.jpg",
      nextImage: "/countryside_sunset.jpg",
    },
  };

  const currentExpertise =
    expertiseData[selectedExpertise] || expertiseData["Traditional Wedding"];

  // Awards State
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);

  const awards = [
    {
      year: "2025",
      title: "International Photography Awards",
      image: "/landscape_mont_blanc.jpg",
      photoTitle: "Morning at Mont Blanc",
      photoDesc:
        "Selected for scenic landscape photography capturing morning mountain light in the French Alps.",
    },
    {
      year: "2022",
      title: "Portrait Photography Feature",
      image: "/portrait_editorial.jpg",
      photoTitle: "Natural Studio Portrait",
      photoDesc:
        "Recognized for simple, natural light studio portraiture without artificial staging.",
    },
    {
      year: "2017",
      title: "Travel Photographer of the Year",
      image: "/temple_silhouette.jpg",
      photoTitle: "Kyoto Temple at Sunset",
      photoDesc:
        "Honored for travel and documentary photography in Kyoto, Japan.",
    },
    {
      year: "2015",
      title: "Sony Photography Feature",
      image: "/countryside_sunset.jpg",
      photoTitle: "Sunset in the Countryside",
      photoDesc:
        "Featured for beautiful warm evening light in countryside landscape photography.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4f4f6] text-[#111215] dark:bg-[#0c0d10] dark:text-[#f4f4f6] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-8 sm:gap-12">
        {/* ============================================================== */}
        {/* HERO SECTION                                                  */}
        {/* ============================================================== */}
        <section className="dark relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#15171c] border border-black/10 dark:border-white/[0.08] min-h-[600px] sm:min-h-[680px] lg:min-h-[720px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroSlides[heroIndex].image}
              alt={heroSlides[heroIndex].title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-opacity duration-700 ease-in-out scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/45" />
          </div>

          <Header />

          {/* Hero Statement */}
          <div className="relative z-10 my-auto pt-12 sm:pt-16 pb-8 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.08] tracking-tight text-white">
              Capturing moments, <br className="hidden sm:inline" />
              preserving memories <br className="hidden sm:inline" />
              for a lifetime
            </h1>
          </div>

          {/* Hero Bottom Bar */}
          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/10">
            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {heroFilters.map((filter) => {
                const isSelected = heroFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => {
                      setHeroFilter(filter);
                      if (filter === "Traditional Wedding") setHeroIndex(0);
                      else if (filter === "White Wedding") setHeroIndex(1);
                      else if (filter === "Outdoor") setHeroIndex(2);
                      else setHeroIndex(3);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isSelected
                        ? "bg-white text-black font-semibold shadow-sm scale-105"
                        : "bg-black/40 backdrop-blur-md text-zinc-300 border border-white/15 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Thumbnail Preview Buttons */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
              {heroSlides.map((slide, idx) => {
                const isActive = heroIndex === idx;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setHeroIndex(idx)}
                    className={`flex items-center gap-2.5 p-1.5 rounded-2xl transition-all text-left ${
                      isActive
                        ? "bg-white/20 backdrop-blur-md border border-white/30"
                        : "bg-black/40 backdrop-blur-md border border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-11 h-9 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={slide.thumb}
                        alt={slide.title}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white text-xs font-medium pr-2 line-clamp-1 max-w-[120px]">
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* ABOUT US INTRO                                                 */}
        {/* ============================================================== */}
        <section className="w-full py-10 sm:py-16 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                About Us
              </span>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-sm">
                We are passionate about capturing genuine moments, happy celebrations, and real emotion in natural light.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col items-start gap-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.18] text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-900 dark:text-white font-semibold">Photography</span> that celebrates{" "}
                <span className="text-zinc-900 dark:text-white font-semibold">real connections</span>, natural smiles, and{" "}
                <span className="text-zinc-900 dark:text-white font-semibold">unforgettable stories</span>.
              </h2>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-6 pr-2 py-2 text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-98"
              >
                <span>Learn More</span>
                <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* OUR SERVICES CAROUSEL                                         */}
        {/* ============================================================== */}
        <section className="w-full bg-white dark:bg-[#131519] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                Our Services
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 dark:text-white leading-tight">
                Quality photography for weddings, portraits, and outdoor events
              </h3>
            </div>

            {/* Service Filter Tabs */}
            <div className="flex lg:flex-col flex-wrap gap-2 lg:gap-2.5 text-right">
              {heroFilters.map((category) => {
                const isActive = selectedExpertise === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedExpertise(category)}
                    className={`text-sm tracking-wide transition-colors py-1 px-2.5 rounded-lg text-left lg:text-right ${
                      isActive
                        ? "text-zinc-900 dark:text-white font-semibold bg-black/5 dark:bg-white/10"
                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 font-normal"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Service Preview Card */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-zinc-900 border border-black/10 dark:border-white/10 group">
              <Image
                src={currentExpertise.image}
                alt={currentExpertise.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase text-zinc-300">
                  {selectedExpertise}
                </span>
                <h4 className="text-xl sm:text-2xl font-medium text-white">
                  {currentExpertise.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentExpertise.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const keys = Object.keys(expertiseData);
                    const idx = keys.indexOf(selectedExpertise);
                    const prev = (idx - 1 + keys.length) % keys.length;
                    setSelectedExpertise(keys[prev]);
                  }}
                  className="w-9 h-9 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center text-zinc-800 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const keys = Object.keys(expertiseData);
                    const idx = keys.indexOf(selectedExpertise);
                    const next = (idx + 1) % keys.length;
                    setSelectedExpertise(keys[next]);
                  }}
                  className="w-9 h-9 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center text-zinc-800 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <Link
                href="/gallery"
                className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
              >
                <span>View All Works</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* RECENT WORK (3 CARDS)                                         */}
        {/* ============================================================== */}
        <section className="w-full py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal text-zinc-900 dark:text-white leading-tight">
                Recent photography highlights
              </h2>
            </div>

            <div className="flex flex-col items-start gap-4 max-w-sm">
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Take a look at some of our favorite recent photo sessions and weddings.
              </p>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-6 pr-2 py-2 text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-98"
              >
                <span>View Full Gallery</span>
                <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* 3-Card Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8">
            {/* Card 1: Wide Featured Traditional Wedding */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[460px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 p-6 sm:p-8 flex flex-col justify-between group shadow-lg">
              <Image
                src="/traditional_wedding.jpg"
                alt="Cameroonian Traditional Wedding"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              <div className="relative z-10 flex justify-end">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white">
                  Traditional Wedding
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white">
                  Cameroonian Traditional Wedding
                </h3>
                <p className="text-xs text-zinc-300 font-normal max-w-md line-clamp-2">
                  A colorful celebration of cultural heritage, royal traditional attire, and joyous family blessings.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Douala &amp; Yaoundé, Cameroon</span>
                </div>
              </div>
            </div>

            {/* Card 2: White Wedding */}
            <div className="lg:col-span-3 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[460px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 p-6 flex flex-col justify-between group shadow-lg">
              <Image
                src="/white_wedding.jpg"
                alt="Lake Como White Wedding"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white">
                  White Wedding
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-1.5">
                <h3 className="text-lg font-medium text-white">
                  Lake Como White Wedding
                </h3>
                <p className="text-xs text-zinc-300 font-normal line-clamp-2">
                  An outdoor lakeside ceremony with classic white florals.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Lake Como, Italy</span>
                </div>
              </div>
            </div>

            {/* Card 3: Indoor Portrait */}
            <div className="lg:col-span-3 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-[460px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 p-6 flex flex-col justify-between group shadow-lg">
              <Image
                src="/portrait_editorial.jpg"
                alt="Studio Portrait Session"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="relative z-10 flex justify-end">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white">
                  Indoor
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-1.5">
                <h3 className="text-lg font-medium text-white">
                  Studio Portrait Session
                </h3>
                <p className="text-xs text-zinc-300 font-normal line-clamp-2">
                  Clean natural light portraits in a minimal studio setting.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-300 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* AWARDS & FEATURES                                             */}
        {/* ============================================================== */}
        <section className="w-full py-10 sm:py-14 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 pb-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                Recognition
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-zinc-900 dark:text-white leading-tight">
                Featured &amp; Award-Winning Work
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-sm leading-relaxed">
              Our photographs have been recognized in international exhibitions and photography publications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.08] dark:divide-white/[0.08] border-y border-black/[0.08] dark:border-white/[0.08]">
              {awards.map((award, idx) => {
                const isActive = activeAwardIndex === idx;
                return (
                  <div
                    key={award.year}
                    onMouseEnter={() => setActiveAwardIndex(idx)}
                    onClick={() => setActiveAwardIndex(idx)}
                    className={`py-4 sm:py-5 px-3 sm:px-4 flex items-center justify-between cursor-pointer transition-all rounded-xl ${
                      isActive
                        ? "bg-black/[0.05] text-zinc-900 dark:bg-white/[0.07] dark:text-white font-medium"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-black/[0.02] dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-mono tracking-wider w-16 text-zinc-500">
                      {award.year}
                    </span>

                    <h4 className="text-sm sm:text-base flex-1">
                      {award.title}
                    </h4>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm"
                          : "border border-black/15 text-zinc-500 dark:border-white/20 dark:text-zinc-400"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-black/10 dark:border-white/10 shadow-xl">
                <Image
                  src={awards[activeAwardIndex].image}
                  alt={awards[activeAwardIndex].photoTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-opacity duration-300"
                />
              </div>

              <div className="flex flex-col gap-1 px-1">
                <h4 className="text-sm sm:text-base font-medium text-zinc-900 dark:text-white">
                  {awards[activeAwardIndex].photoTitle}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {awards[activeAwardIndex].photoDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}