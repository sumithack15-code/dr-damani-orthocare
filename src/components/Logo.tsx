import { Link } from "react-router-dom";

export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#f3eee6" : "#163e3a";
  return (
    <Link to="/" className="group flex items-center gap-3 no-underline" aria-label="Dr. Damani's Imaging & Orthocare, home">
      <span className="grid h-11 w-11 place-items-center">
        <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden="true">
          <circle cx="22" cy="22" r="20.2" fill={light ? "rgba(243,238,230,0.06)" : "#fffdf9"} stroke={ink} strokeWidth="1.2" />
          <circle cx="22" cy="15.5" r="3.3" fill="none" stroke={light ? "#f3eee6" : "#141c27"} strokeWidth="1.4" />
          <path d="M13.5 30.5c2.4-8.2 4.6-13 8.5-13s6.1 4.8 8.5 13" fill="none" stroke="#c45c2a" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block truncate font-serif text-[0.95rem] tracking-tight sm:text-[1.02rem] ${light ? "text-parchment" : "text-ink"}`}>
          Dr. Damani's
        </span>
        <span className={`hidden text-[10px] uppercase tracking-[0.18em] min-[420px]:block sm:tracking-[0.22em] ${light ? "text-sage" : "text-muted"}`}>
          Imaging & Orthocare
        </span>
      </span>
    </Link>
  );
}
