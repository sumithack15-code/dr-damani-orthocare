import type { MouseEvent } from "react";
import { Instagram } from "lucide-react";
import { CLINIC } from "../clinic";

type Variant = "fab" | "nav" | "inline" | "panel";

function openInstagram(event: MouseEvent<HTMLAnchorElement>) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  // Never navigate this frame. Instagram sends ERR_BLOCKED_BY_RESPONSE when embedded.
  // Do not pass "noopener" to window.open — that returns null even when the tab opens.
  const tab = window.open(CLINIC.instagram, "_blank");
  if (tab) {
    try {
      tab.opener = null;
    } catch {
      /* ignore */
    }
    return;
  }
  try {
    if (window.top && window.top !== window) {
      window.top.location.href = CLINIC.instagram;
    }
  } catch {
    /* top navigation blocked; leave the clinic page in place */
  }
}

export function InstagramButton({ variant = "fab", light = false }: { variant?: Variant; light?: boolean }) {
  const label = "Open the clinic Instagram";
  const linkProps = {
    href: CLINIC.instagram,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: openInstagram,
    "aria-label": label,
  } as const;

  if (variant === "nav") {
    return (
      <a {...linkProps} className="insta-nav" title="Instagram · @ortho_doctor26">
        <Instagram size={18} strokeWidth={2.1} />
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a {...linkProps} className="inline-flex items-center gap-3 no-underline">
        <span className="insta-spin" style={{ width: 58, height: 58 }}>
          <span className="insta-core" style={{ width: 46, height: 46 }}>
            <Instagram size={20} />
          </span>
        </span>
        <span>
          <span className="block text-[11px] uppercase tracking-[0.22em] text-copper">Instagram</span>
          <span className={`font-serif text-xl ${light ? "text-parchment" : "text-ink"}`}>{CLINIC.handle}</span>
        </span>
      </a>
    );
  }

  if (variant === "panel") {
    return (
      <a {...linkProps} className="neon-panel">
        <span className="neon-panel-inner flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-rose-200/80">Clinic Instagram</span>
            <span className="mt-2 block font-serif text-3xl text-white sm:text-4xl">{CLINIC.handle}</span>
            <span className="mt-2 block max-w-md text-sm leading-relaxed text-white/70">
              Tap the glow. It opens Dr. Damani's Imaging & Orthocare on Instagram in a new tab.
            </span>
          </span>
          <span className="insta-spin">
            <span className="insta-core">
              <Instagram size={26} />
            </span>
          </span>
        </span>
      </a>
    );
  }

  return (
    <a {...linkProps} className="insta-fab">
      <span className="insta-label">Instagram</span>
      <span className="insta-spin">
        <span className="insta-core">
          <Instagram size={26} strokeWidth={2} />
        </span>
      </span>
    </a>
  );
}
