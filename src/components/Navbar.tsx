import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { CLINIC } from "../clinic";
import { Logo } from "./Logo";
import { InstagramButton } from "./InstagramButton";
import { cn } from "./Ui";

const links = [
  { to: "/services", label: "Care" },
  { to: "/about", label: "Doctor" },
  { to: "/contact", label: "Visit" },
];

export function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-pine text-parchment sm:block">
        <div className="wrap flex items-center justify-between py-2 text-[12px] tracking-wide">
          <p>Flat no.46, Pocket G, Sarita Vihar · New Delhi 110076</p>
          <p>Appointment requests confirmed by call or WhatsApp</p>
        </div>
      </div>
      <nav
        className={cn(
          "border-b transition-colors",
          scrolled ? "border-line bg-parchment/90 backdrop-blur-md" : "border-transparent bg-parchment/80 backdrop-blur-sm",
        )}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-4">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm tracking-wide text-ink/80 no-underline transition hover:text-ink",
                    isActive && "text-copper",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="hidden items-center gap-2 text-sm text-ink no-underline lg:inline-flex"
            >
              <Phone size={15} />
              {CLINIC.phoneDisplay}
            </a>
            <span className="hidden sm:inline-flex">
              <InstagramButton variant="nav" />
            </span>
            <NavLink to="/appointment" className="btn btn-sm btn-copper">
              Book
            </NavLink>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper md:hidden"
              aria-label="Open menu"
              onClick={onOpenMenu}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
