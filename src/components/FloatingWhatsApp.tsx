"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { quickWhatsApp } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={quickWhatsApp("Hi MSL TOUR AND TRAVELS! I want to book a cab.")}
      target="_blank"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_36px_rgba(37,211,102,0.5)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <MessageCircle size={26} className="relative" />
    </motion.a>
  );
}
