import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CLINIC, mapsEmbed, mapsLink, waLink } from "../clinic";
import { InstagramButton } from "../components/InstagramButton";
import { DelhiClock } from "../components/Ui";

export function Contact() {
  const hello = waLink("Hello Dr. Damani's Imaging & Orthocare, I would like to ask about a visit.");
  return (
    <>
      <section className="wrap pb-8 pt-12 md:pt-16">
        <p className="kicker">Visit</p>
        <h1 className="display mt-4 max-w-3xl text-5xl md:text-7xl">Flat no.46, Pocket G.</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Sarita Vihar, New Delhi, Delhi 110076. A residential pocket — call if the lane is unclear and the clinic will guide you in.
        </p>
      </section>

      <section className="wrap grid gap-6 pb-16 md:grid-cols-12">
        <div className="paper p-7 md:col-span-5">
          <p className="flex gap-2 text-lg">
            <MapPin className="mt-1 shrink-0 text-copper" size={18} />
            <span>
              {CLINIC.addressLine}
              <br />
              {CLINIC.cityLine}
            </span>
          </p>
          <a href={`tel:${CLINIC.phoneTel}`} className="mt-6 flex items-center gap-2 font-serif text-3xl text-ink no-underline">
            <Phone size={22} className="text-copper" /> {CLINIC.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-muted">Also {CLINIC.phonePretty} · <DelhiClock /></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              Open in Maps
            </a>
            <a href={hello} target="_blank" rel="noopener noreferrer" className="btn btn-pine">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link to="/appointment" className="btn btn-copper">Book</Link>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Hours and the fee for your visit are shared when the clinic confirms. Please call before travelling, especially on Sundays and public holidays.
          </p>
        </div>
        <div className="overflow-hidden rounded-[1.6rem] border border-line md:col-span-7">
          <iframe
            title="Map of Flat no.46, Pocket G, Sarita Vihar, New Delhi"
            src={mapsEmbed}
            className="h-[420px] w-full border-0 md:h-full md:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="wrap grid gap-6 pb-24 md:grid-cols-2">
        <InstagramButton variant="panel" />
        <div className="frame min-h-[260px]">
          <img src="/images/neighbourhood.jpg" alt="Leafy residential street, illustrative of a South Delhi neighbourhood" className="h-full min-h-[260px] w-full object-cover" />
        </div>
      </section>
    </>
  );
}
