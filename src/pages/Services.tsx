import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CLINIC, bookHref, services } from "../clinic";
import { Reveal, SectionHeading } from "../components/Ui";

export function Services() {
  return (
    <>
      <section className="wrap pb-8 pt-12 md:pt-16">
        <p className="kicker">Care & imaging</p>
        <h1 className="display mt-4 max-w-3xl text-5xl text-ink md:text-7xl">What the clinic is here for.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Orthopaedic consultation, and the imaging that belongs beside it. A photograph on this page is not a promise
          that a machine is free today — ask when you book.
        </p>
      </section>
      <div className="wrap space-y-20 pb-24 pt-8">
        {services.map((service, i) => (
          <article
            id={`service-${service.id}`}
            key={service.id}
            className="grid scroll-mt-28 items-center gap-8 md:grid-cols-12"
          >
            <Reveal className={i % 2 ? "md:col-span-6 md:order-2" : "md:col-span-6"}>
              <div className="frame aspect-[4/3]">
                <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <div className={i % 2 ? "md:col-span-6 md:order-1" : "md:col-span-6"}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-copper">0{i + 1} · {service.eyebrow}</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{service.detail}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to={bookHref(service.visitType, service.concern)} className="btn btn-copper mt-6">
                Request this visit <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <section className="bg-ink text-parchment">
        <div className="wrap grid gap-8 py-16 md:grid-cols-2 md:items-center">
          <SectionHeading
            light
            kicker="A clear no"
            title="This page will not pretend to be a hospital."
            lede="No emergency bay. No invented price list. No claim that every scan in Delhi can be done in Flat 46. If you need something the clinic does not offer, you will be pointed onward."
          />
          <div className="flex flex-wrap gap-3">
            <Link to="/appointment" className="btn btn-copper">Book a visit</Link>
            <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-line-light">Call {CLINIC.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
