"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ArrowUpRight, Heart, Sparkles, ShieldCheck, Camera } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      num: "01",
      title: "Natural & Relaxed",
      description:
        "No stiff or awkward poses. We help you feel comfortable in front of the camera so your smiles and moments feel completely genuine.",
    },
    {
      num: "02",
      title: "Clean Lighting & Style",
      description:
        "We use beautiful natural daylight and clean studio lights so your colors look vibrant, skin tones look true, and every photo looks sharp.",
    },
    {
      num: "03",
      title: "High-Resolution Delivery",
      description:
        "Every single photo is carefully edited and delivered in full resolution in an easy-to-use online gallery, ready for download and printing.",
    },
  ];

  const services = [
    {
      title: "Indoor Photography",
      detail:
        "Studio portraits, headshots, bridal preparation, and clean indoor family shoots.",
    },
    {
      title: "Outdoor Sessions",
      detail:
        "Couples, families, and creative portrait sessions in natural outdoor scenery.",
    },
    {
      title: "Traditional Weddings",
      detail:
        "Full coverage of cultural traditions, traditional attire, and memorable family celebrations.",
    },
    {
      title: "White Weddings",
      detail:
        "Comprehensive coverage from morning getting-ready to the ceremony, vows, and party.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f4f4f6] text-[#111215] dark:bg-[#0c0d10] dark:text-[#f4f4f6] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-8 sm:gap-12">
        {/* ============================================================== */}
        {/* HERO SECTION                                                  */}
        {/* ============================================================== */}
        <section className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 lg:p-12 flex flex-col gap-10 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/countryside_sunset.jpg"
              alt="IAS Studio About Us"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-15 dark:opacity-20 scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 dark:from-[#15171c] dark:via-[#15171c]/80 dark:to-black/60 transition-colors duration-300" />
          </div>

          <Header />

          <div className="relative z-10 flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
              About Us
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-zinc-900 dark:text-white">
              We capture <span className="font-semibold">real, memorable moments</span> you will cherish for a lifetime.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed pt-2">
              <p>
                At IAS Studio, our goal is simple: capture your most meaningful moments in clean, beautiful photographs. We love working with people and making them feel at ease so that every image looks natural and authentic.
              </p>
              <p>
                Whether you are celebrating a traditional wedding, planning an outdoor celebration, or looking for a clean studio portrait, we are here to document your story with care and attention to detail.
              </p>
            </div>
          </div>

          {/* Feature Showcase Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-900 group">
            <Image
              src="/hero_architecture_grass.jpg"
              alt="IAS Studio Photography"
              fill
              priority
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-300 block mb-1">
                  IAS Studio Photography
                </span>
                <p className="text-base sm:text-lg font-medium text-white max-w-lg">
                  &ldquo;Making great memories look timeless and effortless.&rdquo;
                </p>
              </div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline underline-offset-4 font-semibold"
              >
                <span>View Our Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* HOW WE WORK (3 CARDS)                                         */}
        {/* ============================================================== */}
        <section className="w-full py-8 sm:py-12 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
                Why Work With Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-zinc-900 dark:text-white">
                Simple, stress-free photography from start to finish
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-sm leading-relaxed">
              We take the stress out of photo shoots so you can simply enjoy your day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.num}
                className="bg-white dark:bg-[#131519] p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-3 group hover:border-black/20 dark:hover:border-white/20 transition-all shadow-md dark:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-zinc-900 dark:text-white">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* OUR SERVICES (4 BOXES)                                        */}
        {/* ============================================================== */}
        <section className="w-full bg-white dark:bg-[#131519] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
              Our Services
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-white">
              What we photograph
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              We specialize in weddings and lifestyle portraits with clean, natural editing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
            {services.map((s, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{s.title}</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
