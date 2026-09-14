import type { Metadata } from "next";
import Link from "next/link";
import { Check, Crown, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LuxuryCta } from "@/components/PremiumSections";

export const metadata: Metadata = {
  title: "Pricing — Local, Airport, Outstation & Wedding | MSL Amritsar",
  description: "Transparent cab fares: local 4/8/12-hr packages, airport transfers, outstation one-way routes, wedding & corporate plans.",
};

const LOCAL = [
  { t: "City Glimpse — 4 Hrs / 40 km", sedan: "₹1,400", suv: "₹2,200", features: ["Golden Temple + 2 spots", "Free waiting 15 min", "Toll extra as applicable"] },
  { t: "Amritsar Day — 8 Hrs / 80 km", sedan: "₹2,400", suv: "₹3,800", features: ["Full city + Wagah option", "Verified chauffeur", "Live GPS sharing"], best: true },
  { t: "Grand Tour — 12 Hrs / 120 km", sedan: "₹3,400", suv: "₹5,200", features: ["City + Sadda Pind / Fort", "Dinner drop included", "Priority dispatch"] },
];

const AIRPORT = [
  { t: "Airport Pickup — One Way", price: "₹1,199", features: ["Flight tracking", "45-min free waiting", "Meet & greet placard"] },
  { t: "Airport Round Trip", price: "₹2,299", features: ["Same-day return", "2-hr free waiting", "Sedan, sanitized"], best: true },
  { t: "Airport + 4-Hr City", price: "₹2,999", features: ["Pickup + mini tour", "Hotel drop", "Luggage assistance"] },
];

const OUTSTATION = [
  { route: "Amritsar → Chandigarh", dist: "230 km • one way", sedan: "₹5,200", innova: "₹7,800" },
  { route: "Amritsar → Delhi", dist: "450 km • one way", sedan: "₹9,800", innova: "₹14,500" },
  { route: "Amritsar → Dharamshala", dist: "200 km • one way", sedan: "₹5,800", innova: "₹8,400" },
  { route: "Amritsar → Katra", dist: "250 km • one way", sedan: "₹6,200", innova: "₹9,000" },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-36 md:px-8">
        <SectionHeading eyebrow="Honest Fares" title="Premium Cars, Transparent Pricing" desc="Per-km slabs + toll + state tax shared upfront on WhatsApp. No hidden driver bata." />
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-display mb-6 text-2xl md:text-3xl">Local Packages <span className="text-sm text-white/40">Sedan / Ertiga–Innova</span></h2>
        <div className="grid gap-5 md:grid-cols-3">
          {LOCAL.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className={`relative h-full rounded-3xl p-7 ${p.best ? "bg-gradient-to-br from-[#f3dd8f] via-[#d4af37] to-[#8a6d1b] text-black" : "border border-white/10 bg-[#111111]"}`}>
                {p.best && <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f3dd8f]"><Crown size={12} /> Best Value</span>}
                <h3 className="font-display text-xl">{p.t}</h3>
                <div className="mt-4 flex items-end gap-4">
                  <div><div className={`font-display text-3xl font-bold ${p.best ? "" : "gold-text"}`}>{p.sedan}</div><div className={`text-xs ${p.best ? "text-black/70" : "text-white/50"}`}>Sedan</div></div>
                  <div><div className="font-display text-3xl font-bold">{p.suv}</div><div className={`text-xs ${p.best ? "text-black/70" : "text-white/50"}`}>SUV / Innova</div></div>
                </div>
                <ul className={`mt-5 space-y-2 text-sm ${p.best ? "text-black/80" : "text-[#BDBDBD]"}`}>
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0" /> {f}</li>)}
                </ul>
                <Link href={`/book?tripType=Local+${encodeURIComponent(p.t)}`} className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] ${p.best ? "bg-black text-[#f3dd8f]" : "border border-[#d4af37]/40 text-[#f3dd8f] hover:bg-[#d4af37] hover:text-black"}`}>
                  Book <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <h2 className="font-display mb-6 text-2xl md:text-3xl">Airport Transfers</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {AIRPORT.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className={`relative h-full rounded-3xl border p-7 ${p.best ? "border-[#d4af37] bg-[#141005]" : "border-white/10 bg-[#111111]"}`}>
                {p.best && <span className="absolute -top-3 left-6 rounded-full bg-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">Most Booked</span>}
                <h3 className="font-display text-xl">{p.t}</h3>
                <div className="gold-text font-display mt-3 text-4xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-[#BDBDBD]">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d4af37]" /> {f}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#080808] py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display mb-6 text-2xl md:text-3xl">Outstation One-Way <span className="text-sm text-white/40">pay one side only</span></h2>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            {OUTSTATION.map((r, i) => (
              <div key={r.route} className={`grid gap-2 px-6 py-5 md:grid-cols-4 md:items-center ${i % 2 ? "bg-white/[0.02]" : "bg-[#111111]"}`}>
                <div><div className="font-bold">{r.route}</div><div className="text-xs text-white/50">{r.dist}</div></div>
                <div className="text-sm text-[#BDBDBD]">Sedan <span className="font-display ml-2 text-xl text-white">{r.sedan}</span></div>
                <div className="text-sm text-[#BDBDBD]">Innova <span className="font-display ml-2 text-xl text-[#f3dd8f]">{r.innova}</span></div>
                <Link href={`/book?drop=${encodeURIComponent(r.route)}&tripType=Outstation`} className="rounded-full border border-[#d4af37]/40 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#f3dd8f] hover:bg-[#d4af37] hover:text-black md:w-fit">
                  Book
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#171204] to-black p-7">
              <h3 className="font-display text-2xl">Wedding Luxury <span className="gold-text">from ₹15,000/day</span></h3>
              <p className="mt-2 text-sm text-[#BDBDBD]">Mercedes / BMW with décor, uniformed chauffeur, red-carpet entry + 4-hr photography hold.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-7">
              <h3 className="font-display text-2xl">Corporate <span className="gold-text">custom monthly</span></h3>
              <p className="mt-2 text-sm text-[#BDBDBD]">GST invoices, dedicated dispatcher, priority airport slots. Talk to us for volume slabs.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-6"><LuxuryCta /></div>
    </>
  );
}
