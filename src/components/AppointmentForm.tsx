import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Check, Copy, MessageCircle, Phone, Printer } from "lucide-react";
import {
  CLINIC,
  concerns,
  digitsPhone,
  formatDate,
  isValidMobile,
  makeId,
  requestMessage,
  saveRequest,
  timeWindows,
  todayISO,
  visitTypes,
  waLink,
  type AppointmentRequest,
} from "../clinic";
import { cn } from "./Ui";

type FormState = {
  name: string;
  phone: string;
  patientName: string;
  age: string;
  concern: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  consent: boolean;
};

const empty: FormState = {
  name: "",
  phone: "",
  patientName: "",
  age: "",
  concern: "",
  service: visitTypes[0],
  date: "",
  time: "",
  notes: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

export function AppointmentForm({
  onSaved,
}: {
  onSaved?: (request: AppointmentRequest) => void;
}) {
  const location = useLocation();
  const [params] = useSearchParams();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [saved, setSaved] = useState<AppointmentRequest | null>(null);
  const [copied, setCopied] = useState(false);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const state = (location.state ?? {}) as Partial<FormState>;
    setForm((f) => ({
      ...f,
      name: state.name || f.name,
      phone: state.phone || f.phone,
      concern: params.get("concern") || state.concern || f.concern,
      service: params.get("service") || state.service || f.service,
    }));
  }, [location.state, params]);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (target: number) => {
    const next: Errors = {};
    if (target >= 0) {
      if (form.name.trim().length < 2) next.name = "Please add the name we should ask for.";
      if (!isValidMobile(form.phone)) next.phone = "Enter a 10-digit Indian mobile number.";
      if (form.age && (Number(form.age) < 1 || Number(form.age) > 110)) next.age = "Age looks unusual — please check.";
    }
    if (target >= 1) {
      if (!form.concern) next.concern = "Choose what is troubling you, or Other.";
      if (!form.service) next.service = "Choose a visit type.";
      if (!form.date) next.date = "Pick a preferred date.";
      else if (form.date < todayISO()) next.date = "That date has already passed.";
      if (!form.time) next.time = "Pick a preferred time window.";
    }
    if (target >= 2 && !form.consent) next.consent = "Please confirm you understand this is a request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const next = () => {
    if (!validate(step)) return;
    setStep((s) => Math.min(2, s + 1));
  };

  const submit = () => {
    if (!validate(2)) return;
    const request: AppointmentRequest = {
      id: makeId(),
      name: form.name.trim(),
      phone: digitsPhone(form.phone),
      patientName: form.patientName.trim(),
      age: form.age.trim(),
      concern: form.concern,
      service: form.service,
      date: form.date,
      time: form.time,
      notes: form.notes.trim(),
      createdAt: new Date().toISOString(),
    };
    try {
      saveRequest(request);
    } catch {
      /* confirmation still shows if storage is blocked */
    }
    setSaved(request);
    onSaved?.(request);
  };

  const message = useMemo(() => (saved ? requestMessage(saved) : ""), [saved]);

  const copy = async () => {
    if (!saved) return;
    try {
      await navigator.clipboard.writeText(`${saved.id}\n${message}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  if (saved) {
    return (
      <div className="ticket p-6 sm:p-8" id="confirmation">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-copper">Request saved</p>
            <h3 className="mt-2 font-serif text-3xl tracking-tight">Your visit is requested, not yet locked.</h3>
          </div>
          <span className="stamp">Request</span>
        </div>
        <p className="mt-3 max-w-xl text-muted">
          Reference <strong className="text-ink">{saved.id}</strong>. Please send this to the clinic on WhatsApp or call{" "}
          {CLINIC.phoneDisplay}. A slot is confirmed only when someone replies.
        </p>
        <dl className="mt-6 grid gap-3 rounded-2xl bg-foam p-4 text-sm sm:grid-cols-2">
          <Row k="Name" v={saved.name} />
          <Row k="Phone" v={saved.phone} />
          <Row k="Concern" v={saved.concern} />
          <Row k="Visit" v={saved.service} />
          <Row k="Preferred date" v={formatDate(saved.date)} />
          <Row k="Preferred time" v={saved.time} />
          {saved.patientName && <Row k="Patient" v={saved.patientName} />}
          {saved.notes && <Row k="Notes" v={saved.notes} />}
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-pine">
            <MessageCircle size={16} /> Send on WhatsApp
          </a>
          <a href={`tel:${CLINIC.phoneTel}`} className="btn btn-ink">
            <Phone size={16} /> Call to confirm
          </a>
          <button type="button" className="btn btn-ghost" onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy details"}
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            <Printer size={16} /> Print
          </button>
        </div>
        <button
          type="button"
          className="mt-5 text-sm text-pine underline underline-offset-4"
          onClick={() => {
            setSaved(null);
            setForm(empty);
            setStep(0);
          }}
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <div className="paper p-5 sm:p-8">
      <ol className="mb-8 grid grid-cols-3 gap-2 text-xs uppercase tracking-[0.14em]">
        {["You", "Visit", "Confirm"].map((label, i) => (
          <li key={label} className="flex items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full text-[11px]",
                i === step && "bg-copper text-white",
                i < step && "bg-pine text-parchment",
                i > step && "bg-sand text-muted",
              )}
            >
              {i < step ? <Check size={13} /> : i + 1}
            </span>
            <span className={i === step ? "text-ink" : "text-muted"}>{label}</span>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" error={errors.name} className="sm:col-span-2">
            <input className={cn("field", errors.name && "field-error")} value={form.name} autoComplete="name" onChange={(e) => set("name", e.target.value)} placeholder="Name we should ask for" />
          </Field>
          <Field label="Mobile" error={errors.phone}>
            <input className={cn("field", errors.phone && "field-error")} value={form.phone} inputMode="tel" autoComplete="tel" onChange={(e) => set("phone", e.target.value)} placeholder="10-digit mobile" />
          </Field>
          <Field label="Age, if useful" error={errors.age}>
            <input className={cn("field", errors.age && "field-error")} value={form.age} inputMode="numeric" onChange={(e) => set("age", e.target.value.replace(/[^\d]/g, "").slice(0, 3))} placeholder="Optional" />
          </Field>
          <Field label="Patient name, if different" className="sm:col-span-2">
            <input className="field" value={form.patientName} onChange={(e) => set("patientName", e.target.value)} placeholder="Leave blank if the visit is for you" />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <Field label="What is troubling you?" error={errors.concern}>
            <div className="flex flex-wrap gap-2">
              {concerns.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => set("concern", c)}
                  className={cn(
                    "rounded-full border px-3.5 py-2 text-sm transition",
                    form.concern === c ? "border-pine bg-pine text-parchment" : "border-line bg-white text-ink hover:border-pine/40",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Kind of visit" error={errors.service}>
            <select className="field" value={form.service} onChange={(e) => set("service", e.target.value)}>
              {visitTypes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Preferred date" error={errors.date}>
              <input type="date" min={todayISO()} className={cn("field", errors.date && "field-error")} value={form.date} onChange={(e) => set("date", e.target.value)} />
            </Field>
            <Field label="Preferred window" error={errors.time}>
              <select className={cn("field", errors.time && "field-error")} value={form.time} onChange={(e) => set("time", e.target.value)}>
                <option value="">Select a window</option>
                {timeWindows.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>
          <p className="text-sm text-muted">These are preferences. The clinic confirms the actual time. Weekend and same-day visits must be checked by phone.</p>
          <Field label="Anything we should know">
            <textarea className="field min-h-28 resize-y" value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Which side, how long, previous films, or a question." />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <dl className="grid gap-3 rounded-2xl bg-foam p-4 text-sm sm:grid-cols-2">
            <Row k="Name" v={form.name} />
            <Row k="Mobile" v={digitsPhone(form.phone) || form.phone} />
            <Row k="Concern" v={form.concern} />
            <Row k="Visit" v={form.service} />
            <Row k="Date" v={formatDate(form.date)} />
            <Row k="Time" v={form.time} />
            {form.patientName && <Row k="Patient" v={form.patientName} />}
            {form.notes && <Row k="Notes" v={form.notes} />}
          </dl>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
            <input type="checkbox" className="mt-1 h-4 w-4 accent-pine" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} />
            <span>
              I understand this saves a request on this device. It does not reserve a slot until Dr. Damani's Imaging & Orthocare confirms by call or WhatsApp.
            </span>
          </label>
          {errors.consent && <p className="text-sm text-red-700">{errors.consent}</p>}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}>
            Back
          </button>
        ) : (
          <p className="text-sm text-muted">Takes about a minute.</p>
        )}
        {step < 2 ? (
          <button type="button" className="btn btn-copper" onClick={next}>
            Continue
          </button>
        ) : (
          <button type="button" className="btn btn-copper" onClick={submit}>
            Save request
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="label">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-700">{error}</span>}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">{k}</dt>
      <dd className="mt-0.5 text-ink">{v}</dd>
    </div>
  );
}
