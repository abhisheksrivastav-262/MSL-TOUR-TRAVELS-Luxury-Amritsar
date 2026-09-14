import Link from "next/link";
import { Crown, Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { quickWhatsApp } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#d4af37]/20 bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f3dd8f] via-[#d4af37] to-[#8a6d1b] text-[#050505]">
              <Crown size={20} />
            </span>
            <span className="font-display text-lg font-bold tracking-widest">
              MSL <span className="gold-text">TOUR &amp; TRAVELS</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#BDBDBD]">
            Amritsar&apos;s most premium car rental — airport transfers,
            Golden Temple tours, outstation cabs and wedding luxury cars with
            verified chauffeurs.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[#d4af37]">
            <ShieldCheck size={15} /> 100% Verified Drivers • GPS Fleet
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
            Explore
          </h4>
          <div className="grid gap-2.5 text-sm text-white/75">
            {[
              ["/about", "About Us"],
              ["/fleet", "Our Fleet"],
              ["/services", "Services"],
              ["/sightseeing", "Amritsar Sightseeing"],
              ["/pricing", "Pricing"],
              ["/gallery", "Gallery"],
              ["/book", "Book Now"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-[#d4af37]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
            Top Routes
          </h4>
          <div className="grid gap-2.5 text-sm text-white/75">
            <span>Amritsar → Chandigarh</span>
            <span>Amritsar → Delhi Airport</span>
            <span>Amritsar → Dharamshala</span>
            <span>Amritsar → Katra Vaishno Devi</span>
            <span>Golden Temple + Wagah Tour</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">
            Contact 24×7
          </h4>
          <div className="grid gap-3 text-sm text-white/80">
            <span className="flex gap-2"><MapPin size={16} className="text-[#d4af37]" /> {BUSINESS.address}</span>
            <span className="flex gap-2"><Clock size={16} className="text-[#d4af37]" /> Open {BUSINESS.hours}</span>
            <a href={quickWhatsApp("Hi MSL! I want to book a cab.")} target="_blank" className="flex gap-2 hover:text-[#d4af37]"><Phone size={16} className="text-[#d4af37]" /> {BUSINESS.phoneDisplay}</a>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/60">
              {BUSINESS.phones.slice(1).map((p) => (
                <a key={p.link} href={p.link} className="hover:text-[#d4af37]">{p.display}</a>
              ))}
            </div>
            <span className="flex gap-2"><Mail size={16} className="text-[#d4af37]" /> {BUSINESS.email}</span>
            <Link href="/book" className="gold-btn mt-2 rounded-full px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.2em]">
              Book on WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs tracking-widest text-white/40">
        © 2026 {BUSINESS.name} • SULTANWIND, AMRITSAR • LUXURY CAB CO.
      </div>
    </footer>
  );
}
