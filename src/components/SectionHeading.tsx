import { Reveal } from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} mb-12`}>
      <Reveal>
        <div className="mb-4 flex items-center gap-3 justify-center">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-white">
          {title}
        </h2>
        {desc && <p className="mt-4 text-[#BDBDBD] leading-relaxed">{desc}</p>}
      </Reveal>
    </div>
  );
}
