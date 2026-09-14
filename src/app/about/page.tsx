import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Eye, HeartHandshake, Clock3, Star, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { LuxuryCta } from "@/components/PremiumSections";
import { IMG } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | MSL TOUR AND TRAVELS — Luxury Cab Amritsar",
  description: "Meet Amritsar's premium chauffeur company. Verified drivers, sanitized GPS fleet, on-time guarantee and 24×7 support.",
};

const VALUES = [
  { icon: <ShieldCheck size={22} />, t: "Professional Chauffeurs", d: "Uniformed, soft-spoken, route-masters of Amritsar and Punjab highways." },
  { icon: <Sparkles size={22} />, t: "Sanitized Vehicles", d: "Hospital-grade cleaning, fresh linen on demand, AC serviced weekly." },
  { icon: <MapPin size={22} />, t: "GPS Enabled Fleet", d: "Every trip tracked; live link shared with your family automatically." },
  { icon: <Clock3 size={22} />, t: "On Time Guarantee", d: "15+ minutes late and you get 10% off. We plan with buffers." },
  { icon: <Star size={22} />, t: "24/7 Customer Support", d: "A human dispatcher answers in under 2 minutes — day or night." },
  { icon: <HeartHandshake size={22} />, t: "Transparent Billing", d: "Per-km + toll + tax, shared upfront on WhatsApp. No surprises." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <Image src={IMG.highway} alt="Punjab highway" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#d4af37]">Our Story</p>
            <h1 className="font-display mt-3 max-w-3xl text-4xl md:text-6xl leading-tight">
              From Sultanwind&apos;s Lanes to <span className="gold-text">Punjab&apos;s Finest Fleet</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">Who We Are</h2>
            <p className="mt-5 leading-relaxed text-[#BDBDBD]">
              MSL TOUR AND TRAVELS began with one Innova and a simple promise in Sultanwind, Amritsar:
              <span className="text-white"> every guest leaves feeling like royalty.</span> Today we run
              sedans, MUVs, luxury Germans and Tempo Travellers — serving airport travellers, devotees
              headed to the Golden Temple, baraats, corporates and foreign guests discovering Punjab.
            </p>
            <p className="mt-4 leading-relaxed text-[#BDBDBD]">
              Our chauffeurs are hospitality-trained, our cars detailed like showrooms, and our dispatch
              runs 24×7 with flight tracking and live GPS. That is why 10,000+ customers rate us 4.9★.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: 10, s: "k+", l: "Trips done" },
                { v: 8, s: "+", l: "Years rolling" },
                { v: 25, s: "+", l: "Cars & coaches" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="gold-text font-display text-3xl font-bold"><CountUp to={s.v} suffix={s.s} /></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-4">
              <div className="relative h-64 overflow-hidden rounded-3xl border border-[#d4af37]/25">
                <Image src={IMG.mercedes} alt="Mercedes fleet" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 overflow-hidden rounded-3xl border border-white/10">
                  <Image src={IMG.goldenTemple} alt="Golden Temple" fill className="object-cover" />
                </div>
                <div className="relative h-48 overflow-hidden rounded-3xl border border-white/10">
                  <Image src={IMG.driver} alt="Chauffeur" fill className="object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080808] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="The face behind the wheel" title="Your Captain, On Every Trip" desc="Verified, trained and hospitality-obsessed — the man who makes 4 AM airport pickups feel effortless." />
          <Reveal>
            <div className="card-lift mx-auto grid max-w-4xl overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[#111111] md:grid-cols-[320px_1fr]">
              <div className="relative h-80 md:h-auto">
                <Image src="/team/chauffeur.jpg" alt="MSL verified chauffeur" fill className="object-cover object-top" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <ShieldCheck size={18} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em]">100% Police-Verified</span>
                </div>
                <h3 className="font-display mt-3 text-3xl">Lead Chauffeur — MSL Tour and Travels</h3>
                <p className="mt-3 leading-relaxed text-[#BDBDBD]">
                  Sultanwind&apos;s own — knows every gurdwara gate, shortcut and dhaba on the
                  Amritsar circuit. Hindi, Punjabi and English speaking, GPS-tracked on every trip,
                  and rated 4.9★ by thousands of happy guests.
                </p>
                <Link href="/book" className="gold-btn mt-6 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                  Ride With Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#080808] py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="h-full rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#171204] to-black p-8">
              <Eye size={26} className="text-[#d4af37]" />
              <h3 className="font-display mt-4 text-2xl">Our Mission</h3>
              <p className="mt-3 text-[#BDBDBD] leading-relaxed">Make every kilometre in and around Amritsar feel safe, punctual and quietly luxurious — whether it is a ₹999 city drop or a Mercedes wedding.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-[#111111] p-8">
              <Sparkles size={26} className="text-[#d4af37]" />
              <h3 className="font-display mt-4 text-2xl">Our Vision</h3>
              <p className="mt-3 text-[#BDBDBD] leading-relaxed">Be Punjab&apos;s most trusted mobility brand — the name every hotel, travel desk and NRI family recommends without hesitation.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Six Promises, Kept Daily" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 0.08}>
              <div className="card-lift h-full rounded-3xl border border-white/10 bg-[#111111] p-7">
                <span className="inline-flex rounded-2xl bg-[#d4af37]/15 p-3 text-[#d4af37]">{v.icon}</span>
                <h3 className="font-display mt-4 text-xl">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#BDBDBD]">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/book" className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em]">
            Ride With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <LuxuryCta />
    </>
  );
}
