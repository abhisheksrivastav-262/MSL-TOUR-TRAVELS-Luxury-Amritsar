import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plane, PlaneTakeoff, MapPin, Sparkles, Flag, Landmark, Route, Briefcase, Heart, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { LuxuryCta } from "@/components/PremiumSections";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — Airport, Sightseeing, Outstation & Weddings | MSL Amritsar",
  description: "Airport pickup & drop, Golden Temple visits, Wagah Border tours, outstation cabs, corporate travel, wedding cars and group tours.",
};

const ICONS: Record<string, React.ReactNode> = {
  Plane: <Plane size={20} />, PlaneTakeoff: <PlaneTakeoff size={20} />, MapPin: <MapPin size={20} />,
  Sparkles: <Sparkles size={20} />, Flag: <Flag size={20} />, Landmark: <Landmark size={20} />,
  Route: <Route size={20} />, Briefcase: <Briefcase size={20} />, Heart: <Heart size={20} />, Users: <Users size={20} />,
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-36 md:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Ten Services, One Obsession: You"
          desc="Each service has its own playbook — flight tracking for airports, reserved-time departures for Wagah, red-carpet entries for weddings."
        />
      </section>
      <section className="mx-auto max-w-7xl space-y-6 px-5 pb-16 md:px-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug}>
            <div className={`card-lift grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative h-72 md:h-96">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111111]" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d4af37]/15 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#f3dd8f]">
                  <span className="text-[#d4af37]">{ICONS[s.icon]}</span> MSL Signature
                </span>
                <h2 className="font-display mt-4 text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-[#BDBDBD]">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/book?vehicle=${encodeURIComponent(s.title)}`} className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em]">
                    Book {s.title} <ArrowRight size={14} />
                  </Link>
                  <Link href="/pricing" className="inline-flex items-center rounded-full border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:border-[#d4af37] hover:text-[#f3dd8f]">
                    View Fares
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <LuxuryCta />
    </>
  );
}
