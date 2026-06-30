"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Architectural Perspectives",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = [
    "Architectural Perspectives",
    "Wedding Chronicles",
    "Cultural Heritage",
    "Corporate & Institutional Events",
    "Leaders of Tomorrow",
    "Her Grace",
    "His Excellence",
    "Celebrations & Milestones",
    "Family Legacy",
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

      <main className="w-full max-w-7xl mx-auto py-24 px-16 flex flex-col lg:flex-row gap-16 items-start justify-between">
        
        {/* Left Side: Statement */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl text-center sm:text-left items-center sm:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-zinc-50 font-handwriting-thin leading-none tracking-wide">
            Initiate Inquiry
          </h1>
          <p className="text-lg leading-8 text-zinc-650 dark:text-zinc-400 font-light">
            Every engagement begins with clarity of intent. IAS Studio approaches each collaboration as a structured dialogue between vision and execution. To initiate a project or inquiry, please share your details through the contact form. We respond with precision and consideration to each request.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full max-w-xl rounded-2xl bg-zinc-50 dark:bg-zinc-950 p-8 sm:p-10 border border-zinc-150/50 dark:border-zinc-900 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <span className="text-3xl text-yellow-500">✓</span>
              <h3 className="text-xl font-medium text-black dark:text-white">Inquiry Received</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                We have registered your details and will respond with precision and consideration shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs uppercase font-mono tracking-wider text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter name"
                  className="w-full bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email"
                  className="w-full bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Project Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-yellow-400 transition-colors duration-200 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Brief Narrative
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your vision and requirements..."
                  className="w-full bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm mt-4 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </main>

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
