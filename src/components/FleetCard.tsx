"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Luggage, Snowflake, Music, Fuel, ArrowRight } from "lucide-react";
import PhotoSlider from "./PhotoSlider";
import type { Fleet } from "@/lib/data";

export default function FleetCard({ car, index = 0 }: { car: Fleet; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="card-lift group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
    >
      <div className="relative">
        <PhotoSlider images={car.images} alt={car.name} className="h-64" eager={index < 3} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
        {car.tag && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-[#f3dd8f] to-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            {car.tag}
          </span>
        )}
        <span className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          {car.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl text-white">{car.name}</h3>
          <div className="text-right">
            <div className="gold-text font-display text-xl font-bold">{car.price}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">starting</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[12px] text-white/70">
          <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-2"><Users size={14} className="text-[#d4af37]" /> {car.passengers} Pax</span>
          <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-2"><Luggage size={14} className="text-[#d4af37]" /> {car.luggage} Bags</span>
          <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-2"><Fuel size={14} className="text-[#d4af37]" /> {car.fuel.split("/")[0]}</span>
          <span className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-2"><Snowflake size={14} className="text-[#d4af37]" /> AC</span>
          <span className="col-span-2 flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-2"><Music size={14} className="text-[#d4af37]" /> Music • Sanitized</span>
        </div>
        <Link
          href={`/book?vehicle=${encodeURIComponent(car.name)}`}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-[#d4af37]/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f3dd8f] transition-all hover:bg-[#d4af37] hover:text-black"
        >
          Book {car.name} <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
