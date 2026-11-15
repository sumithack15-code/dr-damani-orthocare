import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  kicker,
  title,
  lede,
  light = false,
}: {
  index?: string;
  kicker: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className={cn("kicker", light && "kicker-light")}>
        {index && <span>{index}</span>}
        <span>{kicker}</span>
      </div>
      <h2 className={cn("display mt-4 text-4xl md:text-5xl", light ? "text-parchment" : "text-ink")}>{title}</h2>
      {lede && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-sage/90" : "text-muted")}>{lede}</p>
      )}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">{item.q}</span>
              <ChevronDown
                className={cn("mt-1 shrink-0 text-copper transition-transform", isOpen && "rotate-180")}
                size={20}
              />
            </button>
            {isOpen && <p className="max-w-3xl pb-5 text-[1.02rem] leading-relaxed text-muted">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function DelhiClock() {
  const [label, setLabel] = useState("IST");
  useEffect(() => {
    const tick = () =>
      setLabel(
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          weekday: "short",
          hour: "numeric",
          minute: "2-digit",
        }) + " IST",
      );
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);
  return <span>{label}</span>;
}
