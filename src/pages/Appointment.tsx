import { useEffect, useState } from "react";
import { Phone, Trash2, MessageCircle } from "lucide-react";
import {
  CLINIC,
  formatDate,
  loadRequests,
  removeRequest,
  requestMessage,
  waLink,
  type AppointmentRequest,
} from "../clinic";
import { AppointmentForm } from "../components/AppointmentForm";
import { DelhiClock } from "../components/Ui";

export function Appointment() {
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);

  useEffect(() => {
    setRequests(loadRequests());
  }, []);

  return (
    <section className="wrap grid gap-10 py-12 md:grid-cols-12 md:py-16">
      <aside className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="kicker">Book a visit</p>
          <h1 className="display mt-4 text-4xl md:text-5xl">Request a time. Then let the clinic lock it.</h1>
          <p className="mt-4 text-muted">
            The form does not reserve a chair by itself. It writes a reference you can send on WhatsApp or read out on a call.
          </p>
          <div className="mt-6 space-y-3 rounded-[1.4rem] bg-pine p-5 text-parchment">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage">Clinic line</p>
            <a href={`tel:${CLINIC.phoneTel}`} className="flex items-center gap-2 font-serif text-2xl text-parchment no-underline">
              <Phone size={18} /> {CLINIC.phoneDisplay}
            </a>
            <p className="text-sm text-sage">Local time now: <DelhiClock /></p>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>Bring earlier X-rays and reports.</li>
            <li>Fees are quoted when the visit is confirmed.</li>
            <li>Emergencies belong in a hospital, not in this form.</li>
          </ul>
          {requests.length > 0 && (
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">On this device</p>
              <ul className="mt-3 space-y-3">
                {requests.map((r) => (
                  <li key={r.id} className="rounded-2xl border border-line bg-paper p-4 text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{r.id} · {r.name}</p>
                        <p className="text-muted">{r.concern} · {formatDate(r.date)}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${r.id}`}
                        className="text-muted hover:text-copper"
                        onClick={() => setRequests(removeRequest(r.id))}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <a
                      href={waLink(requestMessage(r))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-pine no-underline"
                    >
                      <MessageCircle size={14} /> Send again
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
      <div className="md:col-span-8">
        <AppointmentForm onSaved={(r) => setRequests(loadRequests().length ? loadRequests() : [r])} />
      </div>
    </section>
  );
}
