import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CLINIC } from "../clinic";
import { InstagramButton } from "../components/InstagramButton";

const principles = [
  {
    n: "01",
    title: "The picture is explained",
    text: "A report you cannot retell is only half a visit. Films — taken here or brought from elsewhere — are walked through in ordinary language.",
  },
  {
    n: "02",
    title: "The joint is not rushed",
    text: "What started it, what makes it worse, what you need to get back to. Examination comes before a stack of tests.",
  },
  {
    n: "03",
    title: "A scan needs a reason",
    text: "Imaging is offered when it would change the plan. If it would not, that is said. Fewer pictures, clearer ones.",
  },
  {
    n: "04",
    title: "Limits are named",
    text: "This is a neighbourhood clinic. Emergencies, admissions, and studies that are not done here are named as such — not dressed up.",
  },
];

export function About() {
  return (
    <>
      <section className="wrap grid items-center gap-12 pb-16 pt-12 md:grid-cols-12 md:pt-16">
        <div className="md:col-span-6">
          <p className="kicker">The doctor</p>
          <h1 className="display mt-4 text-5xl text-ink md:text-7xl">Dr. Damani.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Consults in orthopaedics and diagnostic imaging from {CLINIC.addressLine}. The practice is small on purpose:
            one conversation, the joint in front of you, and a picture only when it earns its place.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            This page does not list degrees, years, or case counts. Those belong in a conversation, where you can ask
            and hear them properly. Call {CLINIC.phoneDisplay} if you want training or registration stated before you visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="btn btn-copper">
              Book a visit <ArrowRight size={16} />
            </Link>
            <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-ghost">
              Call the clinic
            </a>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-5 top-10 h-3/4 w-2/3 rounded-[2rem] bg-sand" />
            <img
              src="/images/dr-damani.jpg"
              alt="Dr. Damani in a white coat and navy shirt, smiling"
              className="relative w-full rounded-t-[200px] rounded-b-3xl bg-white object-cover shadow-[0_30px_70px_-34px_rgba(20,28,39,0.55)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap">
          <p className="kicker">How the room is run</p>
          <h2 className="display mt-4 max-w-2xl text-4xl md:text-5xl">Four promises the website is willing to make.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.n} className="rounded-[1.5rem] border border-line bg-parchment p-7">
                <p className="font-serif text-3xl text-copper">{item.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="kicker">A letter, not a slogan</p>
          <h2 className="display mt-4 text-4xl">Come with the question you actually have.</h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-muted md:col-span-7">
          <p>
            People arrive with a knee that clicks on the stairs, a back that has outlasted three ointments, a wrist
            after a fall, or a report they were handed and never translated. Bring that. Bring the films. Bring the
            name of the sport, or the shift, you are trying to return to.
          </p>
          <p>
            You will not be asked to admire the clinic. You will be asked where it hurts, since when, and what a good
            week would look like. If the answer is “watch it for ten days,” that is a complete visit. If the answer is
            a picture, the picture is explained.
          </p>
          <p className="text-ink">
            {CLINIC.fullAddress}. Phone {CLINIC.phoneDisplay}.
          </p>
        </div>
      </section>

      <section className="wrap pb-24">
        <InstagramButton variant="panel" />
      </section>
    </>
  );
}
