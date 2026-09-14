"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FLEET } from "@/lib/data";
import { bookingToWhatsApp, type BookingDetails } from "@/lib/whatsapp";

function BookForm() {
  const q = useSearchParams();
  const [form, setForm] = useState<BookingDetails>({
    name: "",
    phone: "",
    pickup: q.get("pickup") ?? "",
    drop: q.get("drop") ?? "",
    date: q.get("date") ?? "",
    time: q.get("time") ?? "",
    vehicle: q.get("vehicle") ?? "Toyota Innova Crysta",
    tripType: q.get("tripType") ?? "Local",
    passengers: q.get("passengers") ?? "4",
    message: "",
  });

  const set =
    (k: keyof BookingDetails) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(bookingToWhatsApp(form), "_blank");
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d4af37]/70";
  const label = "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37]";

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-[2rem] border border-[#d4af37]/25 bg-[#0d0d0d]/90 p-6 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block"><span className={label}>Full Name *</span><input required placeholder="e.g. Arjun Mehta" value={form.name} onChange={set("name")} className={input} /></label>
        <label className="block"><span className={label}>Phone *</span><input required placeholder="10-digit mobile" pattern="[0-9+ ]{10,15}" value={form.phone} onChange={set("phone")} className={input} /></label>
        <label className="block"><span className={label}>Pickup *</span><input required placeholder="e.g. Amritsar Airport T1" value={form.pickup} onChange={set("pickup")} className={input} /></label>
        <label className="block"><span className={label}>Drop *</span><input required placeholder="e.g. Golden Temple / Hotel" value={form.drop} onChange={set("drop")} className={input} /></label>
        <label className="block"><span className={label}>Pickup Date *</span><input required type="date" value={form.date} onChange={set("date")} className={input} /></label>
        <label className="block"><span className={label}>Pickup Time *</span><input required type="time" value={form.time} onChange={set("time")} className={input} /></label>
        <label className="block">
          <span className={label}>Vehicle *</span>
          <select value={form.vehicle} onChange={set("vehicle")} className={input}>
            {FLEET.map((f) => <option key={f.slug} className="bg-black">{f.name}</option>)}
            <option className="bg-black">Mercedes E-Class (Wedding)</option>
            <option className="bg-black">Not sure — advise me</option>
          </select>
        </label>
        <label className="block">
          <span className={label}>Trip Type *</span>
          <select value={form.tripType} onChange={set("tripType")} className={input}>
            {["Local", "Airport Pickup", "Airport Drop", "Outstation One-Way", "Outstation Round-Trip", "Wedding", "Corporate", "Group Tour"].map((t) => <option key={t} className="bg-black">{t}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Passengers *</span>
          <select value={form.passengers} onChange={set("passengers")} className={input}>
            {["1", "2", "3", "4", "5", "6", "7", "12", "17", "17+"].map((n) => <option key={n} className="bg-black">{n}</option>)}
          </select>
        </label>
      </div>
      <label className="block"><span className={label}>Message / Flight No.</span><textarea rows={3} placeholder="Anything else? (flight no., child seat, décor, extra halt…)" value={form.message} onChange={set("message")} className={input} /></label>
      <button type="submit" className="gold-btn flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-[0.2em]">
        Confirm on WhatsApp <ArrowRight size={17} />
      </button>
      <p className="flex items-center justify-center gap-2 text-center text-xs text-white/50">
        <ShieldCheck size={14} className="text-[#d4af37]" /> Opens WhatsApp with all details pre-filled • No advance needed
      </p>
    </form>
  );
}

export default function BookPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-36 md:px-8">
      <SectionHeading
        eyebrow="Book Now"
        title="Reserve Your Chauffeur in 30 Seconds"
        desc="Fill the form → tap Confirm → your booking opens in WhatsApp pre-filled. Our dispatcher confirms within minutes, 24×7."
      />
      <Reveal>
        <Suspense fallback={<div className="rounded-3xl border border-white/10 p-10 text-center text-white/50">Loading booking form…</div>}>
          <BookForm />
        </Suspense>
      </Reveal>
    </section>
  );
}
