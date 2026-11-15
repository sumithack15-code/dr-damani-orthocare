import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Calendar, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC } from "../clinic";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { InstagramButton } from "./InstagramButton";

const menuLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Care & imaging" },
  { to: "/about", label: "The doctor" },
  { to: "/appointment", label: "Book a visit" },
  { to: "/contact", label: "Find the clinic" },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      const id = window.setTimeout(() => {
        try {
          document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          /* ignore malformed hashes */
        }
      }, 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Dr. Damani's Imaging & Orthocare · Sarita Vihar",
      "/services": "Care & imaging · Dr. Damani's Imaging & Orthocare",
      "/about": "Dr. Damani · Imaging & Orthocare",
      "/appointment": "Book a visit · Dr. Damani's Imaging & Orthocare",
      "/contact": "Visit the clinic · Sarita Vihar, New Delhi",
    };
    document.title = titles[location.pathname] ?? "Dr. Damani's Imaging & Orthocare";
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-parchment">
        Skip to content
      </a>
      <Navbar onOpenMenu={() => setOpen(true)} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-parchment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="wrap flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <p className="font-serif text-lg">Menu</p>
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-2">
                {menuLinks.map((link, i) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="border-b border-line py-3 font-serif text-4xl tracking-tight text-ink no-underline"
                  >
                    <span className="mr-3 text-sm text-copper">0{i + 1}</span>
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto space-y-5 pb-6">
                <InstagramButton variant="panel" />
                <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-ink w-full">
                  <Phone size={16} /> Call {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      {!open && <InstagramButton variant="fab" />}
      {!open && (
        <div className="mobile-bar md:hidden">
          <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-line-light py-3 text-sm">
            <Phone size={15} /> Call
          </a>
          <NavLink to="/appointment" className="btn btn-copper py-3 text-sm">
            <Calendar size={15} /> Book
          </NavLink>
        </div>
      )}
    </>
  );
}
