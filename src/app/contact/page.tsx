"use client";

import { MapPin, Phone, Mail, Clock3, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BUSINESS } from "@/lib/data";
import { quickWhatsApp } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-36 md:px-8">
        <SectionHeading eyebrow="Get in touch" title="We Answer in Minutes, Day or Night" desc="Sultanwind, Amritsar • Open 24×7 • Hindi • English • Punjabi" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            {[
              { icon: <MapPin size={20} />, t: BUSINESS.name, d: BUSINESS.address },
              { icon: <Clock3 size={20} />, t: "Business Hours", d: "Open 24×7 — including holidays" },
              { icon: <Phone size={20} />, t: BUSINESS.phoneDisplay, d: "Tap to call our dispatcher", href: "tel:+918427822232" },
              { icon: <Mail size={20} />, t: BUSINESS.email, d: "For invoices & corporate tie-ups", href: `mailto:${BUSINESS.email}` },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.07}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#111111] p-5">
                  <span className="rounded-xl bg-[#d4af37]/15 p-3 text-[#d4af37]">{c.icon}</span>
                  <span>
                    <span className="block font-bold">{c.t}</span>
                    {c.href ? <a href={c.href} className="text-sm text-[#f3dd8f] hover:underline">{c.d}</a> : <span className="text-sm text-[#BDBDBD]">{c.d}</span>}
                  </span>
                </div>
              </Reveal>
            ))}
            <div className="grid gap-4">
              <a href={quickWhatsApp("Hi MSL! I have an inquiry.")} target="_blank" className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-4 text-sm font-bold text-white">
                <MessageCircle size={18} /> WhatsApp — {BUSINESS.phoneDisplay}
              </a>
              <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111111] p-5">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                  Call us — 24×7 (tap to call)
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {BUSINESS.phones.map((p) => (
                    <a key={p.link} href={p.link} className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold ${p.primary ? "gold-btn" : "border border-white/15 text-white hover:border-[#d4af37]/60 hover:text-[#f3dd8f]"}`}>
                      <Phone size={16} /> {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-[#d4af37]/25">
              <div className="bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                Find us — Sultanwind, Amritsar
              </div>
              <iframe
                title="MSL TOUR AND TRAVELS map"
                src="https://www.google.com/maps?q=Sultanwind,+Amritsar,+Punjab&output=embed"
                className="h-[380px] w-full grayscale invert-[0.9] contrast-[0.9]"
                loading="lazy"
              />
              <form
                className="grid gap-3 bg-[#0b0b0b] p-6"
                onSubmit={(e) => { e.preventDefault(); window.open(quickWhatsApp("Hi MSL! I have an inquiry."), "_blank"); }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-[#d4af37]" />
                  <input required placeholder="Phone" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-[#d4af37]" />
                </div>
                <textarea required placeholder="How can we help? (airport, wedding, outstation…)" rows={3} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm outline-none focus:border-[#d4af37]" />
                <button className="gold-btn flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.25em]">
                  <Send size={15} /> Send Inquiry on WhatsApp
                </button>
              </form>
            </div>
          </Reveal>
        </div>
        <div className="h-16" />
      </section>
    </>
  );
}
