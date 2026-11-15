import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CLINIC, bookHref, faqs, isValidMobile, services } from "../clinic";
import { FaqList, Reveal, SectionHeading } from "../components/Ui";

const ribbon = [
  "Knee",
  "Spine",
  "Shoulder",
  "Digital X-ray",
  "Ultrasound",
  "Fracture review",
  "Neck",
  "Sports injury",
  "Report reading",
  "Hip",
  "Wrist",
  "Sarita Vihar",
];

export function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <Intro />
      <Services />
      <Doctor />
      <Path />
      <Concerns />
      <ImagingNote />
      <section className="wrap py-20 md:py-28">
        <Reveal>
          <SectionHeading
            index="06"
            kicker="Before you call"
            title="Questions, answered without the runaround."
            lede="Hours and fees are confirmed on the phone. What follows is what this page can honestly say."
          />
        </Reveal>
        <div className="mt-10">
          <FaqList items={faqs} />
        </div>
      </section>
      <VisitBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 top-8 hidden select-none font-serif text-[11rem] leading-none text-ink/[0.04] lg:block">
        46
      </div>
      <div className="wrap grid items-center gap-12 pb-16 pt-10 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-6">
          <p className="kicker">Sarita Vihar · New Delhi</p>
          <p className="mt-5 font-serif text-2xl tracking-tight text-pine md:text-3xl">{CLINIC.name}</p>
          <h1 className="display mt-3 text-[3.1rem] text-ink sm:text-7xl lg:text-[5.4rem]">
            See the joint.
            <span className="mt-1 block italic text-copper">Then take care of it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Orthopaedic consultation and diagnostic imaging from Flat 46, Pocket G. Unhurried visits.
            Pictures explained in ordinary language, before you leave the room.
          </p>
          <p className="mt-3 font-serif text-lg italic text-pine/80">सरिता विहार में हड्डी, जोड़ और इमेजिंग की देखभाल।</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="btn btn-copper">
              Book a visit <ArrowRight size={16} />
            </Link>
            <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-ink">
              <Phone size={16} /> {CLINIC.phoneDisplay}
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Address</dt>
              <dd className="mt-1 font-medium">Pocket G</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Pin</dt>
              <dd className="mt-1 font-medium">110076</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">Visits</dt>
              <dd className="mt-1 font-medium">By request</dd>
            </div>
          </dl>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-6 top-12 hidden h-[72%] w-[68%] rounded-[2rem] bg-pine sm:block" />
            <div className="absolute -right-3 bottom-24 z-10 hidden h-28 w-28 overflow-hidden rounded-2xl border-4 border-parchment shadow-xl sm:block">
              <img src="/images/lightbox.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-t-[200px] rounded-b-[1.7rem] bg-white shadow-[0_30px_70px_-32px_rgba(20,28,39,0.55)]">
              <img
                src="/images/dr-damani.jpg"
                alt="Dr. Damani, smiling, wearing glasses, a white coat and a navy shirt"
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
              />
            </div>
            <div className="absolute -left-1 bottom-6 z-10 max-w-[230px] rounded-2xl border border-white/60 bg-paper/95 p-4 shadow-xl backdrop-blur sm:bottom-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-copper">You will meet</p>
              <p className="mt-1 font-serif text-xl">Dr. Damani</p>
              <p className="text-sm text-muted">Imaging & Orthocare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ribbon() {
  const items = [...ribbon, ...ribbon];
  return (
    <div className="border-y border-line bg-sand/70 py-4">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-6 px-6 font-serif text-lg text-ink/80">
              {item}
              <span className="text-copper">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section className="wrap grid items-end gap-10 py-20 md:grid-cols-12 md:py-28">
      <Reveal className="md:col-span-7">
        <h2 className="display text-4xl text-ink md:text-6xl">
          A neighbourhood clinic for bones, joints, and the pictures that explain them.
        </h2>
      </Reveal>
      <Reveal className="md:col-span-5" delay={0.08}>
        <p className="text-lg leading-relaxed text-muted">
          Dr. Damani's Imaging & Orthocare sits in Pocket G, Sarita Vihar — close enough for a planned visit,
          quiet enough for a proper conversation. Imaging is part of the name because a film should be read with you,
          not printed and forgotten.
        </p>
        <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-pine no-underline">
          Meet the practice <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}

function Services() {
  const [lead, ...rest] = services;
  return (
    <section className="bg-foam/80 py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            index="02"
            kicker="What a visit can cover"
            title="Consultation, pictures, and a plan you can repeat back."
            lede="Availability of a particular study is confirmed when you book — not assumed from a photograph on a website."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <Link to={`/services#service-${lead.id}`} className="group frame relative h-[380px] md:col-span-7 md:h-[500px]">
            <img src={lead.image} alt={lead.imageAlt} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
            <div className="absolute bottom-0 p-6 text-parchment md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-sage">{lead.eyebrow}</p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl">{lead.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-parchment/85">{lead.summary}</p>
            </div>
          </Link>
          <div className="grid gap-4 md:col-span-5">
            {rest.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                to={bookHref(service.visitType, service.concern)}
                className="paper flex items-center justify-between gap-4 p-5 no-underline transition hover:-translate-y-0.5"
              >
                <span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-copper">{service.eyebrow}</span>
                  <span className="mt-1 block font-serif text-2xl text-ink">{service.title}</span>
                </span>
                <ArrowRight className="shrink-0 text-pine" size={18} />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {rest.slice(3).map((service) => (
            <Link key={service.id} to={`/services#service-${service.id}`} className="frame group relative h-64">
              <img src={service.image} alt={service.imageAlt} className="absolute inset-0" />
              <div className="absolute inset-0 bg-ink/35 transition group-hover:bg-ink/45" />
              <div className="absolute bottom-0 p-5 text-parchment">
                <h3 className="font-serif text-2xl">{service.title}</h3>
              </div>
            </Link>
          ))}
          <Link to="/services" className="flex min-h-56 flex-col justify-between rounded-[1.5rem] bg-pine p-6 text-parchment no-underline">
            <p className="text-[11px] uppercase tracking-[0.22em] text-sage">All care</p>
            <div>
              <p className="font-serif text-3xl">Six ways a visit can begin.</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm">
                Read them <ArrowRight size={15} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section className="bg-pine text-parchment">
      <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <div className="overflow-hidden rounded-t-[180px] rounded-b-3xl bg-white">
            <img
              src="/images/dr-damani.jpg"
              alt="Portrait of Dr. Damani"
              className="aspect-[4/5] w-full object-cover object-[center_16%]"
            />
          </div>
        </Reveal>
        <div className="md:col-span-7">
          <SectionHeading
            light
            index="03"
            kicker="The person in the room"
            title="Dr. Damani, in Pocket G."
            lede="Orthopaedic concerns and the imaging that makes them clearer — from a small clinic, not a corridor of departments."
          />
          <ul className="mt-8 space-y-4">
            {[
              ["Explain the film", "You should be able to say, in your own words, what the picture showed."],
              ["Don't scan for the sake of it", "A study is suggested when it would change the next step."],
              ["Say what cannot be done here", "If a scan or procedure belongs elsewhere, that is said plainly."],
            ].map(([title, text]) => (
              <li key={title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 pt-4">
                <ShieldCheck className="mt-1 text-copper" size={18} />
                <span>
                  <span className="block font-serif text-xl">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-sage">{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-line-light mt-8">
            About the practice <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Path() {
  const steps = [
    ["01", "Request", "Name the concern, a preferred day, and a phone number. The form keeps a reference on this device."],
    ["02", "Confirm", "The clinic calls or replies on WhatsApp. Until then, the time is a wish, not a booking."],
    ["03", "Arrive", "Flat 46, Pocket G. Bring earlier films. Call if the lane is unclear."],
    ["04", "Understand", "Leave knowing what was seen, what it means, and what happens next."],
  ];
  return (
    <section className="wrap py-20 md:py-28">
      <Reveal>
        <SectionHeading index="04" kicker="How a visit happens" title="Four beats. No mystery slot." />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {steps.map(([n, title, text]) => (
          <article key={n} className="rounded-[1.4rem] border border-line bg-paper p-6">
            <p className="font-serif text-4xl text-copper">{n}</p>
            <h3 className="mt-4 font-serif text-2xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Concerns() {
  const chips = [
    ["Knee", "Knee"],
    ["Back & spine", "Back & spine"],
    ["Shoulder", "Shoulder"],
    ["Neck", "Neck"],
    ["Fracture or injury", "Fracture or injury"],
    ["Sports injury", "Sports injury"],
    ["Imaging / report", "Imaging / report"],
    ["Wrist or hand", "Wrist or hand"],
  ];
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="wrap grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="frame aspect-[4/5] sm:aspect-[5/4]">
            <img src="/images/clinic-room.jpg" alt="Illustrative sunlit consultation room" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            index="05"
            kicker="Start with the part that hurts"
            title="Choose a concern. The request form opens with it filled in."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map(([label, concern]) => (
              <Link
                key={label}
                to={bookHref(undefined, concern)}
                className="rounded-full border border-line bg-parchment px-4 py-2 text-sm text-ink no-underline transition hover:border-pine hover:bg-pine hover:text-parchment"
              >
                {label}
              </Link>
            ))}
          </div>
          <QuickStart />
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const go = () => {
    if (name.trim().length < 2 || !isValidMobile(phone)) {
      setError("Add a name and a 10-digit mobile to continue.");
      return;
    }
    navigate("/appointment", { state: { name: name.trim(), phone } });
  };

  return (
    <div className="mt-8 rounded-[1.4rem] border border-line bg-parchment p-5">
      <p className="font-serif text-2xl">Begin the request</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input className="field" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="field" placeholder="Mobile" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
      <button type="button" className="btn btn-copper mt-4" onClick={go}>
        Continue to booking <ArrowRight size={16} />
      </button>
    </div>
  );
}

function ImagingNote() {
  return (
    <section className="relative min-h-[420px] overflow-hidden">
      <img src="/images/lightbox.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="wrap relative flex min-h-[420px] items-end py-16">
        <div className="max-w-xl text-parchment">
          <p className="kicker kicker-light">The picture</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">A film is only useful if someone walks you through it.</h2>
          <p className="mt-4 text-sage">Bring reports from anywhere. If a study is not done in this clinic, you will be told before you travel.</p>
        </div>
      </div>
    </section>
  );
}

function VisitBand() {
  return (
    <section className="wrap grid gap-6 py-20 md:grid-cols-12 md:py-28">
      <div className="paper p-8 md:col-span-5">
        <p className="kicker">Find the door</p>
        <h2 className="display mt-4 text-4xl">Flat no.46, Pocket G.</h2>
        <p className="mt-4 flex gap-2 text-muted">
          <MapPin size={18} className="mt-0.5 shrink-0 text-copper" />
          {CLINIC.fullAddress}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-ink">
            Map & directions
          </Link>
          <Link to="/appointment" className="btn btn-copper">
            Book a visit
          </Link>
        </div>
      </div>
      <div className="frame min-h-[280px] md:col-span-7">
        <img src="/images/reception.jpg" alt="Illustrative calm clinic reception" className="h-full min-h-[280px] w-full object-cover" />
      </div>
    </section>
  );
}
