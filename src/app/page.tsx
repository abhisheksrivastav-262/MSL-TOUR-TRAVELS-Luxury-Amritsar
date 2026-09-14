"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Clock3, Star, MapPin, Plane,
  Sparkles, Flag, Briefcase, Heart, ChevronRight, Play,
} from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import FleetCard from "@/components/FleetCard";
import PhotoSlider from "@/components/PhotoSlider";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import { Reveal, SplitHeading } from "@/components/Reveal";
import { Testimonials, Faq, SafetyStrip, LuxuryCta } from "@/components/PremiumSections";
import { IMG, FLEET } from "@/lib/data";
import { quickWhatsApp } from "@/lib/whatsapp";

const STATS = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 24, suffix: "×7", label: "Service" },
  { value: 100, suffix: "%", label: "Verified Drivers" },
  { value: 4.9, suffix: "★", label: "Customer Rating", decimals: 1 },
];

const MARQUEE = ["Airport Transfers", "Golden Temple", "Wagah Border", "Jallianwala Bagh", "Business Travel", "Wedding Cars", "Outstation Cabs"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-vignette relative flex min-h-[108vh] items-center justify-center overflow-hidden">
        <Image
          src="/places/golden-night.jpg"
          alt="Golden Temple Amritsar at night"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-black/50 px-5 py-2 text-[11px] uppercase tracking-[0.35em] text-[#f3dd8f] backdrop-blur"
          >
            <Sparkles size={13} /> Sultanwind • Amritsar • 24×7
          </motion.div>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            <SplitHeading text="Luxury Car Rental" /> <br />
            <span className="gold-text"><SplitHeading text="in Amritsar" /></span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-sm md:text-lg tracking-[0.12em] text-white/80 uppercase"
          >
            Airport Transfers • Outstation Trips • Local Sightseeing • Wedding Luxury Cars
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link href="/book" className="gold-btn rounded-full px-9 py-4 text-sm font-bold uppercase tracking-[0.15em]">
              Book Now <ArrowRight size={16} className="ml-1 inline" />
            </Link>
            <Link href="/fleet" className="rounded-full border border-white/30 bg-white/5 px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] backdrop-blur hover:border-[#d4af37] hover:text-[#f3dd8f]">
              View Fleet
            </Link>
          </motion.div>
          <motion.a
            href={quickWhatsApp("Hi MSL! I want to book a cab.")}
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-5 inline-block text-xs uppercase tracking-[0.3em] text-[#25D366] hover:text-white"
          >
            ● Chat instantly on WhatsApp
          </motion.a>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-white/50"
        >
          <ChevronRight size={22} className="rotate-90" />
        </motion.div>
      </section>

      <div className="relative z-20 px-5 md:px-8">
        <BookingWidget />
      </div>

      {/* NEW ARRIVAL — customer's own car, first vehicle image on site */}
      <section className="mx-auto max-w-7xl px-5 pt-14 md:px-8">
        <Reveal>
          <div className="card-lift grid overflow-hidden rounded-[2rem] border border-[#d4af37]/40 bg-gradient-to-br from-[#171204] via-[#0d0d0d] to-black md:grid-cols-2">
            <div className="relative h-80 md:h-[420px]">
              <PhotoSlider images={["/fleet/customer-ertiga.jpg"]} alt="MSL's new Maruti Ertiga" className="absolute inset-0" eager />
              <span className="absolute left-5 top-5 z-10 rounded-full bg-gradient-to-r from-[#f3dd8f] to-[#d4af37] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-black">
                New Arrival
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#d4af37]">Fresh in the fleet</p>
              <h2 className="font-display mt-3 text-3xl md:text-5xl leading-tight">
                Meet Our New <span className="gold-text">Maruti Ertiga</span>
              </h2>
              <p className="mt-4 leading-relaxed text-[#BDBDBD]">
                6-seater family comfort with alloys, chilled AC and music — perfect for
                Golden Temple tours, airport runs and outstation trips at just ₹14/km.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                <span className="rounded-full bg-white/5 px-3.5 py-2">6 Passengers</span>
                <span className="rounded-full bg-white/5 px-3.5 py-2">2 Bags</span>
                <span className="rounded-full bg-white/5 px-3.5 py-2">AC + Music</span>
                <span className="rounded-full bg-white/5 px-3.5 py-2">Sanitized</span>
              </div>
              <div className="mt-7">
                <Link href="/book?vehicle=Maruti%20Ertiga" className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em]">
                  Book This Ertiga <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOUNDER — right below Ertiga */}
      <section className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <Reveal>
          <div className="glass grid items-center gap-6 overflow-hidden rounded-[2rem] p-6 md:grid-cols-[240px_1fr] md:p-8">
            <div className="relative mx-auto h-72 w-56 overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-black md:mx-0">
              <Image src="/team/chauffeur.jpg" alt="Founder of MSL Tour and Travels" fill className="object-cover object-top" />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#f3dd8f] to-[#d4af37] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-black">
                Founder
              </span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#d4af37]">Meet the founder</p>
              <h2 className="font-display mt-2 text-3xl md:text-4xl">
                Founder of <span className="gold-text">MSL Tour and Travels</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-[#BDBDBD] md:mx-0">
                Sultanwind, Amritsar se — khud steering par baithkar company khadi ki.
                Har trip par personally zimmedari: sahi time, saaf gaadi, imandar kiraya.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href={quickWhatsApp("Hi! I want to talk to MSL about a booking.")} target="_blank" className="gold-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em]">
                  WhatsApp <ArrowRight size={14} />
                </a>
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80 hover:border-[#d4af37] hover:text-[#f3dd8f]">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6 text-center">
                <div className="gold-text font-display text-4xl md:text-5xl font-bold">
                  <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[#BDBDBD]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-[#d4af37]/20 bg-[#0a0a0a] py-4">
        <div className="marquee-track gap-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-xs uppercase tracking-[0.4em] text-[#d4af37]">
              {m} <Star size={12} className="fill-[#d4af37]" />
            </span>
          ))}
        </div>
      </div>

      {/* SIGNATURE ROUTES */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Signature Journeys"
          title="Amritsar, Done the Royal Way"
          desc="Handcrafted circuits with chauffeurs who know every gurdwara gate, border-check shortcut and dhaba worth stopping for."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { img: IMG.airplane, icon: <Plane size={18} />, t: "Airport Transfers", d: "Flight-tracked pickups, 45-min free waiting, meet & greet.", href: "/services" },
            { img: IMG.goldenTemple, icon: <Sparkles size={18} />, t: "Golden Temple & City", d: "4 AM Palki Sahib to night ceremony — serene and unhurried.", href: "/sightseeing" },
            { img: IMG.indiaGate, icon: <Flag size={18} />, t: "Wagah Border Tour", d: "Reserved-time departure so you never miss the parade.", href: "/sightseeing" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <Link href={c.href} className="card-lift group relative block h-96 overflow-hidden rounded-3xl border border-white/10">
                <Image src={c.img} alt={c.t} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-3 inline-flex rounded-full bg-[#d4af37]/20 p-2.5 text-[#f3dd8f] backdrop-blur">{c.icon}</span>
                  <h3 className="font-display text-2xl">{c.t}</h3>
                  <p className="mt-1 text-sm text-white/70">{c.d}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-[#080808] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="The Fleet" title="Maybach Standards, Every Segment" desc="Sedans to Mercedes — every car sanitized, GPS-enabled and chauffeur-driven." />
          <div className="grid gap-6 md:grid-cols-3">
            {FLEET.slice(3, 9).map((car, i) => (
              <FleetCard key={car.slug} car={car} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/fleet" className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#f3dd8f] hover:bg-[#d4af37] hover:text-black">
              View Full Fleet <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="relative h-[480px] overflow-hidden rounded-[2rem] border border-[#d4af37]/25">
              <Image src={IMG.goldenTemple} alt="Golden Temple Amritsar" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="glass absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white"><Play size={20} /></span>
                <div>
                  <div className="text-sm font-bold">Watch: Golden Temple at Dawn</div>
                  <div className="text-xs text-white/60">Our 4 AM Palki Sahib circuit • 3 min film</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Why MSL" title="A ₹50-Lakh Experience on Every Trip" desc="We borrowed hospitality from the Taj, precision from German cars and warmth from Punjab." />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <ShieldCheck size={20} />, t: "Verified Chauffeurs", d: "Police-checked, English/Hindi/Punjabi speaking." },
                { icon: <Clock3 size={20} />, t: "On-Time Guarantee", d: "Late by 15+ mins? 10% off, no questions." },
                { icon: <Star size={20} />, t: "Sanitized Vehicles", d: "Deep-cleaned + AC serviced before each duty." },
                { icon: <MapPin size={20} />, t: "GPS Fleet", d: "Live location shared with your family." },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <span className="text-[#d4af37]">{f.icon}</span>
                    <div className="mt-2 font-bold">{f.t}</div>
                    <div className="mt-1 text-sm text-[#BDBDBD]">{f.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70"><Briefcase size={14} className="text-[#d4af37]" /> Corporate billing</span>
              <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70"><Heart size={14} className="text-[#d4af37]" /> Wedding specialists</span>
            </div>
          </div>
        </div>
      </section>

      <SafetyStrip />
      <Testimonials />
      <Faq />
      <LuxuryCta />
    </>
  );
}
