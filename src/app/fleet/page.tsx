import type { Metadata } from "next";
import FleetCard from "@/components/FleetCard";
import SectionHeading from "@/components/SectionHeading";
import { LuxuryCta } from "@/components/PremiumSections";
import { FLEET } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Fleet — Sedan to Mercedes & Tempo Traveller | MSL Amritsar",
  description: "Swift Dzire, Ertiga, Innova Crysta, Fortuner, Mercedes E-Class, BMW 5 Series & Tempo Travellers. Sanitized, GPS-enabled, chauffeur-driven.",
};

export default function FleetPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-4 pt-36 md:px-8">
        <SectionHeading
          eyebrow="The Fleet"
          title="Ten Cars. One Standard: Royal."
          desc="Transparent per-km fares, uniformed chauffeurs, AC + music in every car. Tap any card to book it on WhatsApp."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {FLEET.map((car, i) => (
            <FleetCard key={car.slug} car={car} index={i} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs tracking-widest text-white/40">
          ALL FARES EXCLUDE TOLL • STATE TAX • DRIVER ALLOWANCE — SHARED UPFRONT ON WHATSAPP
          <span className="mt-2 block text-white/25">Vehicle + landmark photos: Wikimedia Commons contributors (CC BY / CC BY-SA)</span>
        </p>
      </section>
      <div className="pb-4"><LuxuryCta /></div>
    </>
  );
}
