"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Lock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Wedding Cinematography & Film",
    dateAndLocation: "",
    guestCountOrScope: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Wedding Cinematography & Film",
    "Editorial & Fashion Portraiture",
    "Architectural Commission",
    "Commercial / Brand Narrative",
    "Private Milestone Celebration",
    "Art Installation / Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans transition-colors duration-300">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 flex-1 flex flex-col gap-16">
        {/* Header Introduction */}
        <div className="flex flex-col gap-4 max-w-3xl border-b border-black/[0.08] dark:border-white/[0.1] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.12] w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-700 dark:text-zinc-300 font-semibold">
              Commission Inquiries
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-zinc-950 dark:text-white leading-tight">
            Let&apos;s commence a dialogue.
          </h1>
          <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
            We accept a limited number of commissions each season to ensure focused dedication to every narrative. Share your vision below, and our studio director will reply within 24–48 hours with availability and bespoke investment options.
          </p>
        </div>

        {/* Form and Atelier Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Studio Details (Left Column - Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel-glow p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.14] flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 font-semibold">
                Studio Concierge
              </span>
              <h3 className="text-2xl font-serif text-zinc-950 dark:text-white">Direct Representation</h3>

              <div className="space-y-5 text-xs">
                <div className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">
                      Direct Email
                    </span>
                    <a
                      href="mailto:atelier@ias-studio.com"
                      className="text-zinc-950 dark:text-white hover:text-amber-600 dark:hover:text-amber-300 text-sm font-medium transition-colors"
                    >
                      atelier@ias-studio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">
                      Primary Atelier
                    </span>
                    <span className="text-zinc-950 dark:text-white text-sm font-medium">Mayfair, London, UK</span>
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] mt-0.5">
                      Available worldwide for destination commissions
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">
                      Response Protocol
                    </span>
                    <span className="text-zinc-950 dark:text-white text-sm font-medium">24–48 Business Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Vault Shortcut Box */}
            <div className="glass-panel p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-300 flex items-center gap-1.5 font-semibold">
                <Lock className="w-3.5 h-3.5" /> Existing Client?
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                If you are looking to access your delivered wedding film, print gallery, or raw scans, please open the client vault directly.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-950 dark:text-white hover:text-amber-600 dark:hover:text-amber-300 font-semibold underline underline-offset-4 mt-1"
              >
                <span>Enter Private Vault Passkey</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bespoke Inquiry Form (Right Column - Span 8) */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="glass-panel-glow p-12 rounded-3xl border border-black/[0.08] dark:border-white/[0.16] flex flex-col items-center text-center gap-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 flex items-center justify-center border border-amber-500/30 dark:border-amber-400/40">
                  <CheckCircle2 className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400 font-semibold">
                    Transmission Received
                  </span>
                  <h3 className="text-3xl font-serif text-zinc-950 dark:text-white">
                    Thank You, {formData.name || "Esteemed Client"}.
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light max-w-lg leading-relaxed mt-1">
                    Your project details have been transmitted directly to our studio director. We will review our production schedule and respond to <span className="text-zinc-950 dark:text-white font-medium">{formData.email}</span> with a custom folio and availability guide shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "Wedding Cinematography & Film",
                      dateAndLocation: "",
                      guestCountOrScope: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black dark:hover:bg-white text-zinc-900 dark:text-white hover:text-white dark:hover:text-black text-xs font-medium uppercase tracking-wider transition-colors border border-black/10 dark:border-white/20 mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-black/[0.08] dark:border-white/[0.16] flex flex-col gap-8 shadow-sm dark:shadow-2xl"
              >
                {/* Service Selection Chips */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                    Select Discipline or Project Scope *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => {
                      const isSelected = formData.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service })}
                          className={`px-4 py-2 rounded-full text-xs transition-all ${
                            isSelected
                              ? "bg-gradient-to-r from-amber-500 to-yellow-300 dark:from-amber-400 dark:to-yellow-200 text-black font-semibold shadow-md scale-[1.02]"
                              : "bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.12] text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-black/[0.08] dark:hover:bg-white/[0.1]"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Vivienne Montgomery"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/[0.03] dark:bg-black/60 border border-black/10 dark:border-white/[0.15] rounded-xl px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vivienne@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/[0.03] dark:bg-black/60 border border-black/10 dark:border-white/[0.15] rounded-xl px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Dates & Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                      Estimated Date & Destination *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. September 2026 • Lake Como, Italy"
                      value={formData.dateAndLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, dateAndLocation: e.target.value })
                      }
                      className="bg-black/[0.03] dark:bg-black/60 border border-black/10 dark:border-white/[0.15] rounded-xl px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                      Guest Count / Project Scale
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 120 guests, 3-day weekend"
                      value={formData.guestCountOrScope}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCountOrScope: e.target.value })
                      }
                      className="bg-black/[0.03] dark:bg-black/60 border border-black/10 dark:border-white/[0.15] rounded-xl px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Vision */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold">
                    Your Narrative & Aesthetic Vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the atmosphere, the architectural venue, or specific feelings you wish to preserve forever..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/[0.03] dark:bg-black/60 border border-black/10 dark:border-white/[0.15] rounded-xl px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto self-start px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 dark:from-amber-400 dark:via-amber-300 dark:to-yellow-200 text-black text-xs font-semibold uppercase tracking-widest shadow-[0_4px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_4px_40px_rgba(234,179,8,0.5)] hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Atelier Commission Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 sm:px-12 lg:px-20 py-10 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div>© {new Date().getFullYear()} IAS Studio. London • Worldwide.</div>
        <div className="flex items-center gap-6">
          <Link href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Atelier</Link>
          <Link href="/contact" className="text-zinc-950 dark:text-white font-medium hover:text-amber-600 dark:hover:text-amber-300 transition-colors">Inquiries</Link>
        </div>
      </footer>
    </div>
  );
}
