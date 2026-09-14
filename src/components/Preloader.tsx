"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="font-display text-4xl md:text-6xl tracking-[0.2em]">
              <span className="gold-text font-bold">MSL</span>
            </div>
            <div className="mt-2 text-[11px] tracking-[0.5em] text-[#BDBDBD]">
              TOUR &amp; TRAVELS
            </div>
            <div className="mx-auto mt-6 h-[2px] w-48 overflow-hidden rounded bg-white/10">
              <motion.div
                className="h-full w-full origin-left bg-gradient-to-r from-[#8a6d1b] via-[#d4af37] to-[#f3dd8f]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
