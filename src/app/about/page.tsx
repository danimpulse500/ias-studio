"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/shared/Header";

// An interactive refraction element representing a lens prism for the about page
function PrismRefractionFrame() {
  const [isHovered, setIsHovered] = useState(false);

  // Geometric slices of a lens prism
  const facets = [
    { points: "0,0 200,0 120,280", dx: -8, dy: -8 },
    { points: "200,0 400,0 280,280", dx: 8, dy: -8 },
    { points: "400,0 400,400 200,200", dx: 12, dy: 8 },
    { points: "400,400 0,400 120,280", dx: -8, dy: 12 },
    { points: "0,400 0,0 120,280", dx: -12, dy: 2 },
    // Center lens core
    { points: "120,280 280,280 200,200", dx: 0, dy: 4 },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-square cursor-pointer"
    >
      <svg
        className="w-full h-full select-none overflow-visible filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
        viewBox="0 0 400 400"
      >
        <defs>
          {facets.map((facet, idx) => (
            <clipPath id={`prism-clip-${idx}`} key={idx}>
              <polygon points={facet.points} />
            </clipPath>
          ))}
        </defs>

        {facets.map((facet, idx) => {
          const transform = isHovered
            ? `translate(${facet.dx}px, ${facet.dy}px)`
            : "translate(0px, 0px)";

          return (
            <g
              key={idx}
              style={{
                transform,
                transformOrigin: "200px 200px",
                transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <image
                href="/IAS_3900 (2).jpg"
                width="400"
                height="400"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#prism-clip-${idx})`}
                opacity="0.8"
              />
              <polygon
                points={facet.points}
                fill="rgba(255, 255, 255, 0.02)"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function AboutPage() {
  const stats = [
    { label: "FILM REELS", value: "240+" },
    { label: "DIRECTORS COLLABORATED", value: "48" },
    { label: "COMMERCIAL CAMPAIGNS", value: "95" },
    { label: "INDUSTRY AWARDS", value: "12" },
  ];



  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-black transition-colors duration-300">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=UnifrakturMaguntia&family=Special+Elite&family=Orbitron:wght@800&family=Caveat:wght@700&family=Reenie+Beanie&display=swap');

        .font-handwriting-thin {
          font-family: 'Reenie Beanie', cursive;
        }
      `}</style>

      <Header />

      {/* --- HERO SPLIT --- */}
      <main className="w-full max-w-7xl mx-auto py-24 px-16 flex flex-col lg:flex-row gap-16 items-center justify-between">
        {/* Left Profile */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl text-center sm:text-left items-center sm:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-zinc-50 font-handwriting-thin leading-none tracking-wide">
            Our Story
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Founded in 2021, IAS Studio was built around a singular philosophy: capturing standard realities and refracting them into extraordinary light textures. We collaborate with directors, agencies, and narrative authors to frame intentional depth and shadows.
          </p>
        </div>

        {/* Right Prism Visual */}
        <div className="flex-1 w-full max-w-[450px] flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] aspect-square">
            <PrismRefractionFrame />
          </div>
        </div>
      </main>

      {/* --- STATS SECTION --- */}
      <section className="w-full bg-zinc-50 dark:bg-zinc-950 py-20 px-16 border-t border-b border-zinc-100 dark:border-zinc-900">
        <div className="w-full mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-3xl md:text-4xl font-semibold text-black dark:text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL ARSENAL SECTION --- */}
      <section className="w-full bg-white dark:bg-black py-24 px-16">
        <div className="w-full mx-auto max-w-7xl flex flex-col md:flex-row gap-16 justify-between">
          <div className="flex flex-col gap-6 max-w-sm">
            <h2 className="text-3xl md:text-4xl text-black dark:text-zinc-50 font-handwriting-thin leading-none tracking-wide">
              The Arsenal
            </h2>
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Our camera configurations and optical configurations are built to sculpt light. We utilize large format cinema sensors and custom vintage glass to yield organic, filmic textures.
            </p>
          </div>

          <div className="flex-1 w-full max-w-xl aspect-video relative rounded-2xl overflow-hidden shadow-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950">
            <Image
              src="/camera.png"
              alt="Professional cinema camera setup"
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover"
            />
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
            <div className="flex flex-col gap-4 md:col-span-4">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
                <Image
                  className="invert"
                  src="/IASLOGO.png"
                  alt="Next.js logo"
                  width={90}
                  height={18}
                  priority
                />
              </div>
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
