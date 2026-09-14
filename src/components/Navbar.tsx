"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Crown } from "lucide-react";
import { quickWhatsApp } from "@/lib/whatsapp";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/sightseeing", label: "Sightseeing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-[#d4af37]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f3dd8f] via-[#d4af37] to-[#8a6d1b] text-[#050505]">
            <Crown size={20} strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-widest text-white">
              MSL <span className="gold-text">TOUR &amp; TRAVELS</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.35em] text-[#BDBDBD]">
              Luxury • Amritsar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors hover:text-[#d4af37] ${
                pathname === l.href ? "text-[#d4af37]" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={quickWhatsApp("Hi MSL! I want to book a cab.")}
            target="_blank"
            className="hidden items-center gap-2 rounded-full border border-[#d4af37]/40 px-4 py-2 text-xs tracking-widest text-[#f3dd8f] hover:bg-[#d4af37]/10 xl:flex"
          >
            <Phone size={14} /> 24×7
          </a>
          <Link
            href="/book"
            className="gold-btn rounded-full px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.15em]"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="rounded-full border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-[#d4af37]/25 bg-[#111111]/95 p-5 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.2em] ${
                  pathname === l.href
                    ? "bg-[#d4af37]/15 text-[#d4af37]"
                    : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="gold-btn mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em]"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
