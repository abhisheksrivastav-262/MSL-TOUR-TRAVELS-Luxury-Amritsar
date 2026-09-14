"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Full-vehicle slider — foreground uses object-contain over a blurred
 * fill of the same photo, so the car is NEVER cut, portrait or landscape.
 */
export default function PhotoSlider({
  images,
  alt,
  className = "",
  interval = 4000,
  eager = false,
}: {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
  eager?: boolean;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;

  useEffect(() => {
    if (n <= 1 || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, paused, interval]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div
      className={`group/slider relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* blurred fill backdrop */}
      <Image
        key={`bg-${i}`}
        src={images[i]}
        alt=""
        aria-hidden
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl brightness-[0.4]"
      />
      {/* full vehicle, never cropped */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -70 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Image
            src={images[i]}
            alt={`${alt} — photo ${i + 1}`}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-contain"
            loading={eager && i === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {n > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white opacity-0 backdrop-blur transition-all group-hover/slider:opacity-100 hover:bg-[#d4af37] hover:text-black"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/55 p-2 text-white opacity-0 backdrop-blur transition-all group-hover/slider:opacity-100 hover:bg-[#d4af37] hover:text-black"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Photo ${d + 1}`}
                className={`h-1.5 rounded-full transition-all ${d === i ? "w-5 bg-[#d4af37]" : "w-1.5 bg-white/50 hover:bg-white"}`}
              />
            ))}
          </div>
          <span className="absolute bottom-2.5 right-3 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[10px] tracking-widest text-white/80">
            {i + 1}/{n}
          </span>
        </>
      )}
    </div>
  );
}
