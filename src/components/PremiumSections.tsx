"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ChevronDown, ShieldCheck, BadgeCheck, Download, Smartphone, ArrowRight } from "lucide-react";
import { TESTIMONIALS, FAQS } from "@/lib/data";
import { quickWhatsApp } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <SectionHeading
        eyebrow="Guest Stories"
        title="Rated 4.9★ by 10,000+ Happy Travellers"
        desc="From dawn darshans to midnight airport runs — our chauffeurs turn every transfer into a five-star memory."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.1}>
            <div className="card-lift h-full rounded-3xl border border-white/10 bg-[#111111] p-6">
              <Quote size={28} className="text-[#d4af37]" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">“{t.text}”</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-display text-base text-white">{t.name}</div>
                <div className="text-xs tracking-wider text-[#d4af37]">{t.meta}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
      <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
      <div className="grid gap-3">
        {FAQS.map((f, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              open === i ? "border-[#d4af37]/50 bg-[#111111]" : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-white">{f.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[#d4af37] transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="px-5 pb-5 text-sm leading-relaxed text-[#BDBDBD]"
              >
                {f.a}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function SafetyStrip() {
  const items = [
    { icon: <ShieldCheck size={22} />, t: "Police-Verified Chauffeurs", d: "Background-checked, trained & uniformed." },
    { icon: <BadgeCheck size={22} />, t: "GPS Live Tracking", d: "Share live location with family on every trip." },
    { icon: <Star size={22} />, t: "Sanitized Fleet", d: "Deep-cleaned, AC-serviced cars before each duty." },
  ];
  return (
    <section className="border-y border-[#d4af37]/20 bg-gradient-to-r from-[#0a0a0a] via-[#141005] to-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3 md:px-8">
        {items.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.1}>
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-[#d4af37]/15 p-3 text-[#d4af37]">{s.icon}</span>
              <span>
                <span className="font-display block text-lg text-white">{s.t}</span>
                <span className="text-sm text-[#BDBDBD]">{s.d}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function LuxuryCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-gradient-to-br from-[#1c1503] via-[#0d0d0d] to-black p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-[100px]" />
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#d4af37]">Maybach-grade comfort • Uber-simple booking</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl md:text-5xl leading-tight">
            Your Chauffeur Is <span className="gold-text">Already Waiting</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#BDBDBD]">
            Golden Temple at dawn, Wagah at sunset, airport at midnight — one tap on WhatsApp and a sanitized luxury car arrives at your door.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="gold-btn rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em]">
              Book Now <ArrowRight size={16} className="ml-1 inline" />
            </Link>
            <a
              href={quickWhatsApp("Hi MSL! Please share your fare chart / brochure.")}
              target="_blank"
              className="rounded-full border border-[#d4af37]/50 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#f3dd8f] hover:bg-[#d4af37]/10"
            >
              <Download size={16} className="mr-1 inline" /> Brochure
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50">
            <Smartphone size={14} /> MSL App coming soon — priority dispatch for members
          </div>
        </div>
      </Reveal>
    </section>
  );
}
