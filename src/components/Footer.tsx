import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { CLINIC } from "../clinic";
import { Logo } from "./Logo";
import { InstagramButton } from "./InstagramButton";

export function Footer() {
  return (
    <footer className="site-footer bg-ink text-parchment">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-sage/90">
            Orthopaedic consultation and diagnostic imaging from a neighbourhood clinic in Pocket G, Sarita Vihar.
            Pictures are explained. Visits are confirmed by a person, not by a form alone.
          </p>
          <div className="mt-8">
            <InstagramButton variant="inline" light />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Visit</p>
          <p className="mt-4 flex gap-2 text-sm leading-relaxed text-sage">
            <MapPin size={16} className="mt-0.5 shrink-0 text-copper" />
            <span>
              {CLINIC.addressLine}
              <br />
              {CLINIC.cityLine}
            </span>
          </p>
          <a href={`tel:${CLINIC.phoneTel}`} className="mt-4 flex items-center gap-2 text-sm text-parchment no-underline">
            <Phone size={16} className="text-copper" />
            {CLINIC.phoneDisplay}
          </a>
        </div>
        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/services", "Care & imaging"],
              ["/about", "The doctor"],
              ["/appointment", "Book a visit"],
              ["/contact", "Find the clinic"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sage no-underline hover:text-parchment">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Before you travel</p>
          <p className="mt-4 text-sm leading-relaxed text-sage">
            Call {CLINIC.phoneDisplay} to confirm today's availability. This is not an emergency service.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs leading-relaxed text-sage/70 sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p className="max-w-xl">
            Portrait shows Dr. Damani. Other photographs are illustrative and do not depict the clinic premises.
            This website shares visit information. It is not a diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}
