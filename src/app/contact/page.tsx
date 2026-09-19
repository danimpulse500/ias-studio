"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Traditional Wedding",
    dateAndLocation: "",
    guestCountOrScope: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Traditional Wedding",
    "White Wedding",
    "Indoor Photography",
    "Outdoor Sessions",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f6] text-[#111215] dark:bg-[#0c0d10] dark:text-[#f4f4f6] font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col gap-8 sm:gap-12">
        {/* ============================================================== */}
        {/* HERO SECTION                                                  */}
        {/* ============================================================== */}
        <section className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#15171c] border border-black/[0.08] dark:border-white/[0.08] min-h-[420px] sm:min-h-[460px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-xl dark:shadow-2xl transition-colors duration-300">
          <div className="absolute inset-0 z-0">
            <Image
              src="/temple_silhouette.jpg"
              alt="IAS Studio Contact"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-15 dark:opacity-25 scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 dark:from-[#15171c] dark:via-[#15171c]/80 dark:to-black/60 transition-colors duration-300" />
          </div>

          <Header />

          <div className="relative z-10 pt-10 pb-2 flex flex-col gap-3 max-w-3xl">
            <span className="text-xs font-sans tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-semibold">
              Contact Us
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-zinc-900 dark:text-white">
              Let&apos;s talk about <span className="font-semibold">your photos</span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-xl">
              Have an upcoming wedding, event, or want to schedule a studio session? Fill out the form below and we will get back to you within 24 hours with our availability and pricing.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CONTACT INFO & INQUIRY FORM                                   */}
        {/* ============================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#131519] p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-6 shadow-xl dark:shadow-2xl transition-colors duration-300">
              <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 font-semibold">
                Direct Contact
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-zinc-900 dark:text-white">Reach Us Directly</h3>

              <div className="space-y-6 text-xs font-sans">
                <div className="flex items-start gap-3.5 text-zinc-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block mb-0.5">Email</span>
                    <a
                      href="mailto:hello@ias-studio.com"
                      className="text-zinc-900 dark:text-white hover:underline text-sm font-medium transition-colors"
                    >
                      hello@ias-studio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-zinc-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block mb-0.5">Location</span>
                    <span className="text-zinc-900 dark:text-white text-sm font-medium">
                      London, United Kingdom
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] mt-0.5">
                      Available for travel worldwide
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-zinc-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 block mb-0.5">Response Time</span>
                    <span className="text-zinc-900 dark:text-white text-sm font-medium">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link Card */}
            <div className="bg-white dark:bg-[#131519] p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-2 shadow-lg dark:shadow-xl transition-colors duration-300">
              <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold">
                Looking for Samples?
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                Check our portfolio to see recent weddings, outdoor portraits, and studio sessions.
              </p>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-900 dark:text-white hover:underline underline-offset-4 font-semibold mt-1"
              >
                <span>View Portfolio Gallery</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="bg-white dark:bg-[#131519] p-12 sm:p-16 rounded-[2rem] sm:rounded-[2.5rem] border border-black/[0.08] dark:border-white/[0.08] flex flex-col items-center text-center gap-5 shadow-xl dark:shadow-2xl transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white flex items-center justify-center border border-black/10 dark:border-white/20">
                  <CheckCircle2 className="w-7 h-7 text-zinc-900 dark:text-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 font-semibold">
                    Message Sent
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-white">
                    Thank You, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal max-w-md leading-relaxed mt-1">
                    We received your details and will get back to{" "}
                    <span className="text-zinc-900 dark:text-white font-medium">
                      {formData.email}
                    </span>{" "}
                    shortly with pricing and availability.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "Traditional Wedding",
                      dateAndLocation: "",
                      guestCountOrScope: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider transition-colors shadow-md mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#131519] p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-black/[0.08] dark:border-white/[0.08] flex flex-col gap-6 shadow-xl dark:shadow-2xl transition-colors duration-300"
              >
                {/* Shoot Type Buttons */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                    What type of photography are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => {
                      const isSelected = formData.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-zinc-900 text-white dark:bg-white dark:text-black font-semibold shadow-md"
                              : "bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-black/[0.03] dark:bg-black/50 border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-black/[0.03] dark:bg-black/50 border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                      Approximate Date *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. October 15, 2026"
                      value={formData.dateAndLocation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateAndLocation: e.target.value,
                        })
                      }
                      className="bg-black/[0.03] dark:bg-black/50 border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. London, UK or Lagos, Nigeria"
                      value={formData.guestCountOrScope}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guestCountOrScope: e.target.value,
                        })
                      }
                      className="bg-black/[0.03] dark:bg-black/50 border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-sans text-zinc-700 dark:text-zinc-300 font-semibold">
                    Tell us about your shoot *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you're planning, any special requests, or questions you have..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-black/[0.03] dark:bg-black/50 border border-black/10 dark:border-white/15 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black pl-6 pr-2 py-2 text-xs font-semibold tracking-wider uppercase transition-all shadow-md self-start hover:scale-[1.02] active:scale-98"
                >
                  <span>Send Message</span>
                  <div className="w-8 h-8 rounded-full bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </section>

        <Footer showBanner={false} />
      </div>
    </div>
  );
}
