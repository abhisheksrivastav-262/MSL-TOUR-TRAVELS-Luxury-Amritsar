"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/lib/data";

const CATS = ["All", "Luxury Cars", "Golden Temple", "Wagah Border", "Airport", "Weddings", "Group Tours", "Highways"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [light, setLight] = useState<number | null>(null);
  const items = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-36 md:px-8">
        <SectionHeading eyebrow="Gallery" title="Postcards from the Road" desc="Luxury cars, dawn darshans, border ceremonies and highway sunsets — shot on real MSL trips." />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                cat === c ? "bg-gradient-to-r from-[#f3dd8f] to-[#d4af37] text-black" : "border border-white/15 text-white/70 hover:border-[#d4af37]/60 hover:text-[#f3dd8f]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="columns-2 gap-4 md:columns-3 [&>div]:mb-4">
          {items.map((g, i) => (
            <motion.div
              layout
              key={g.label + i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/10"
              onClick={() => setLight(i)}
            >
              <Image src={g.src} alt={g.label} width={800} height={600} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-sm font-bold">{g.label}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">{g.cat}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 pb-16 text-center text-xs tracking-widest text-white/40">SHOWING {items.length} FRAMES • FOLLOW @MSLTOURANDTRAVELS FOR DAILY DROPS</p>
      </section>

      <AnimatePresence>
        {light !== null && items[light] && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-5 backdrop-blur"
            onClick={() => setLight(null)}
          >
            <button className="absolute right-6 top-6 rounded-full border border-white/20 p-2.5 text-white"><X size={20} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-[#d4af37]/30">
              <Image src={items[light].src} alt={items[light].label} width={1400} height={900} className="max-h-[85vh] w-full object-contain bg-black" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="font-display text-2xl">{items[light].label}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{items[light].cat}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
