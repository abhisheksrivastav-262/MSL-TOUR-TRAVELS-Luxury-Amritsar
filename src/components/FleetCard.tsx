"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Luggage, Snowflake, Music, Fuel, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Fleet } from "@/lib/data";

export default function FleetCard({ car, index = 0 }: { car: Fleet; index?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = car.images.length;

  useEffect(() => {
    if (n <= 1 || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 3500);
    return () => clearInterval(t);
  }, [n, paused]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="card-lift group overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src={car.images[i]}
              alt={`${car.name} photo ${i + 1}`}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover"
              loading={index < 3 && i === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
        {car.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#f3dd8f] to-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            {car.tag}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          {car.category}
        </span>

        {n > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-[#d4af37] hover:text-black"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-[#d4af37] hover:text-black"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {car.images.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Photo ${d + 1}`}
                  className={`h-1.5 rounded-full transition-all ${d === i ? "w-5 bg-[#d4af37]" : "w-1.5 bg-white/50 hover:bg-white"}`}
                />
              ))}
            </div>
            <span className="absolute bottom-2 right-3 rounded-full bg-black/60 px-2 py-0.5 text-[10px] tracking-widest text-white/80">
              {i + 1}/{n}
            </span>
          </>
        )}
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
