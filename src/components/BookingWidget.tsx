"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, CalendarDays, Clock3, Users, ArrowRight } from "lucide-react";

export default function BookingWidget() {
  const router = useRouter();
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "4",
  });

  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams(form).toString();
    router.push(`/book?${q}`);
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const field =
    "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 pl-11 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d4af37]/60";

  return (
    <form
      onSubmit={go}
      className="glass mx-auto -mt-16 relative z-20 grid max-w-6xl gap-3 rounded-3xl p-4 shadow-2xl md:grid-cols-5 md:p-5"
    >
      {[
        { icon: <MapPin size={16} />, key: "pickup", ph: "Pickup — e.g. Airport" },
        { icon: <MapPin size={16} />, key: "drop", ph: "Drop — e.g. Golden Temple" },
      ].map((f) => (
        <label key={f.key} className="relative block md:col-span-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]">{f.icon}</span>
          <input
            required
            placeholder={f.ph}
            value={form[f.key as "pickup" | "drop"]}
            onChange={set(f.key as "pickup" | "drop")}
            className={field}
          />
        </label>
      ))}
      <label className="relative block">
        <CalendarDays size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]" />
        <input type="date" required value={form.date} onChange={set("date")} className={field} />
      </label>
      <label className="relative block">
        <Clock3 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]" />
        <input type="time" required value={form.time} onChange={set("time")} className={field} />
      </label>
      <div className="flex gap-3 md:col-span-5 lg:col-span-1 lg:hidden" />
      <div className="grid grid-cols-2 gap-3 md:col-span-5">
        <label className="relative block">
          <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d4af37]" />
          <select value={form.passengers} onChange={set("passengers")} className={field}>
            {["1", "2", "3", "4", "5", "6", "7", "12", "17", "17+"].map((n) => (
              <option key={n} value={n} className="bg-black">{n} Passengers</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="gold-btn flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-[0.15em]"
        >
          Book Now <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
