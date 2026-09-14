import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Wallet, Clock3, ArrowRight, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LuxuryCta } from "@/components/PremiumSections";
import { DESTINATIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Amritsar Sightseeing — Golden Temple, Wagah & More | MSL",
  description: "Golden Temple, Wagah Border, Jallianwala Bagh, Partition Museum, Gobindgarh Fort & Sadda Pind with private chauffeur, fares and durations.",
};

export default function SightseeingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-36 md:px-8">
        <SectionHeading
          eyebrow="Amritsar Sightseeing"
          title="Eight Wonders, One Chauffeur"
          desc="Distances, honest fares and ideal durations — plan your day like a local, travel it like royalty."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 2) * 0.1}>
              <div className="card-lift group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <h3 className="font-display absolute bottom-4 left-6 text-3xl drop-shadow">{d.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-[#BDBDBD]">{d.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-2 text-white/75"><Navigation size={13} className="text-[#d4af37]" /> {d.distance}</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-2 text-white/75"><Wallet size={13} className="text-[#d4af37]" /> {d.fare}</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-2 text-white/75"><Clock3 size={13} className="text-[#d4af37]" /> {d.duration}</span>
                  </div>
                  <Link href={`/book?drop=${encodeURIComponent(d.name)}`} className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f3dd8f] hover:text-white">
                    Book this tour <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[#0b0b0b]">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37]">Suggested Circuit</p>
                <h3 className="font-display mt-3 text-3xl">The Perfect Amritsar Day</h3>
                <ol className="mt-6 space-y-4 text-sm text-[#BDBDBD]">
                  {[
                    ["4:00 AM", "Pickup → Palki Sahib at Golden Temple, sunrise parikrama"],
                    ["8:30 AM", "Kesar Da Dhaba breakfast → Jallianwala Bagh → Partition Museum"],
                    ["1:00 PM", "Rest / lunch → Gobindgarh Fort & Sadda Pind"],
                    ["3:30 PM", "Depart for Wagah Border retreat ceremony"],
                    ["8:00 PM", "Return via night Palki darshan → hotel drop"],
                  ].map(([t, d]) => (
                    <li key={t} className="flex gap-4">
                      <span className="w-20 shrink-0 font-bold text-[#f3dd8f]">{t}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
                <Link href="/book?drop=Golden+Temple+%2B+Wagah+Full+Day" className="gold-btn mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                  <MapPin size={14} /> Book Full-Day Circuit
                </Link>
              </div>
              <div className="relative min-h-80">
                <Image src="/places/golden-night.jpg" alt="Golden Temple at night" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <LuxuryCta />
    </>
  );
}
