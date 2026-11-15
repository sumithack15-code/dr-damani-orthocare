export const CLINIC = {
  name: "Dr. Damani's Imaging & Orthocare",
  doctor: "Dr. Damani",
  addressLine: "Flat no.46, Pocket G, Sarita Vihar",
  cityLine: "New Delhi, Delhi 110076",
  fullAddress: "Flat no.46, Pocket G, Sarita Vihar, New Delhi, Delhi 110076",
  phoneDisplay: "07303502347",
  phonePretty: "+91 73035 02347",
  phoneTel: "+917303502347",
  whatsapp: "917303502347",
  instagram: "https://www.instagram.com/ortho_doctor26?psln=b29wczg2dnQ4bjlp",
  handle: "@ortho_doctor26",
};

export const mapsQuery = CLINIC.fullAddress;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

export const concerns = [
  "Knee",
  "Back & spine",
  "Shoulder",
  "Neck",
  "Hip",
  "Ankle or foot",
  "Wrist or hand",
  "Fracture or injury",
  "Sports injury",
  "Imaging / report",
  "Other",
] as const;

export const visitTypes = [
  "Orthopaedic consultation",
  "Consultation + imaging",
  "Imaging only",
  "Follow-up visit",
  "Report review",
  "Not sure — please advise",
] as const;

export const timeWindows = [
  "10:00 – 11:00",
  "11:00 – 12:00",
  "12:00 – 1:00",
  "2:00 – 3:00",
  "3:00 – 4:00",
  "4:00 – 5:00",
  "5:00 – 6:00",
  "6:00 – 7:00",
  "First available",
] as const;

export type Service = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
  imageAlt: string;
  concern: string;
  visitType: string;
};

export const services: Service[] = [
  {
    id: "consult",
    title: "Orthopaedic consultation",
    eyebrow: "The visit",
    summary: "A careful look at the joint, the story behind it, and what should happen next.",
    detail:
      "You sit down. The joint or spine that brought you in is examined, not rushed past. You will be asked what makes it worse, what you have already tried, and what you need to get back to — walking to the metro, a night's sleep, a game of cricket. The plan may be reassurance, a medicine discussion, a brace, home exercises, imaging, or a referral onward.",
    points: ["History and hands-on examination", "A plan in plain language", "No scan unless it would change the next step"],
    image: "/images/knee-care.jpg",
    imageAlt: "A clinician's hands gently examining an adult knee",
    concern: "Knee",
    visitType: "Orthopaedic consultation",
  },
  {
    id: "xray",
    title: "Digital X-ray",
    eyebrow: "Imaging",
    summary: "Bone and joint radiographs, taken when a picture would actually change the plan.",
    detail:
      "Digital radiography is the everyday picture for suspected fractures, joint alignment, and many bone questions. It is quick, and it is not automatic. When you book, say which part hurts so the clinic can confirm that view can be done on the day you visit. Films are meant to be explained, not handed over in silence.",
    points: ["Bones and joints", "Confirm the view when you book", "Walk-through of what the film shows"],
    image: "/images/imaging.jpg",
    imageAlt: "A calm digital radiography room with a modern X-ray arm",
    concern: "Imaging / report",
    visitType: "Imaging only",
  },
  {
    id: "ultrasound",
    title: "Ultrasound",
    eyebrow: "Imaging",
    summary: "Soft-tissue and selected joint ultrasound, arranged when it is the right study.",
    detail:
      "Ultrasound can look at tendons, some joints, and soft tissue without radiation. It is not the answer to every ache. Ask, when you request a visit, whether the study you have in mind is done here or better arranged elsewhere. If it is not the right test, you will be told.",
    points: ["No radiation", "Useful for selected tendons and soft tissue", "Availability confirmed at booking"],
    image: "/images/ultrasound.jpg",
    imageAlt: "An ultrasound console in a softly lit imaging room",
    concern: "Imaging / report",
    visitType: "Consultation + imaging",
  },
  {
    id: "injury",
    title: "Injury & fracture review",
    eyebrow: "After a fall",
    summary: "Sprains, suspected fractures, and injuries that are painful — but not an emergency.",
    detail:
      "A twisted ankle, a wrist that swelled after a fall, a knee that locked on the court. These belong in a planned visit if you can bear weight, the skin is intact, and the limb is not clearly deformed. If you cannot walk, the bone is visible, or the pain is sudden and severe after major trauma, go to an emergency department first. Bring any earlier films.",
    points: ["Sprains and closed injuries", "Bring previous X-rays if you have them", "Emergencies belong in a hospital"],
    image: "/images/reading-film.jpg",
    imageAlt: "Hands holding an imaging film up to window light",
    concern: "Fracture or injury",
    visitType: "Consultation + imaging",
  },
  {
    id: "spine",
    title: "Spine, neck & shoulder",
    eyebrow: "The long aches",
    summary: "Back, neck, and shoulder pain sorted into what is ordinary and what needs a closer look.",
    detail:
      "Most back and neck pain is common and does not need a dramatic scan on day one. The visit looks for red flags, checks how you move, and decides whether imaging would help or only add worry. Shoulder pain that wakes you, or a neck that will not turn, gets the same unhurried examination.",
    points: ["Back, neck, shoulder", "Red flags separated from ordinary pain", "Imaging only if it changes care"],
    image: "/images/shoulder.jpg",
    imageAlt: "A clinician's hand resting on an adult patient's shoulder",
    concern: "Back & spine",
    visitType: "Orthopaedic consultation",
  },
  {
    id: "sports",
    title: "Sports & activity injuries",
    eyebrow: "Getting back",
    summary: "Niggles from running, gym, cricket, or everyday lifting that are not settling.",
    detail:
      "The aim is a clear return-to-activity plan, not a stack of scans. You will talk about the sport, the week it started, and what you cannot do now. Some injuries need rest and a simple progression. Some need a picture. You leave knowing which is which.",
    points: ["Runners, gym, cricket, daily work", "Return-to-activity guidance", "A picture only if it earns its place"],
    image: "/images/sports.jpg",
    imageAlt: "An adult's lower legs and running shoes in warm clinic light",
    concern: "Sports injury",
    visitType: "Orthopaedic consultation",
  },
];

export const faqs = [
  {
    q: "How is an appointment confirmed?",
    a: "The form on this site saves your request and can send it to the clinic on WhatsApp. A time is confirmed only when the clinic calls or messages you back. Please do not travel until that happens.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is required to request a consultation. Some imaging studies are more useful after an examination. If you already have a prescription or an outside report, bring it.",
  },
  {
    q: "What should I bring?",
    a: "Any previous X-rays, MRI or CT films, and written reports. A list of medicines you take. Comfortable clothing that lets the joint be examined. If you are booking for a family member, their name and age.",
  },
  {
    q: "Can I come for imaging only?",
    a: "Yes — say so when you book, and name the body part. The clinic will confirm whether that study is done on site that day. If it is not, you will be told before you make the trip.",
  },
  {
    q: "Where exactly is the clinic?",
    a: "Flat no.46, Pocket G, Sarita Vihar, New Delhi, Delhi 110076. Pocket G is a residential pocket. If the lane is unclear when you arrive, call 07303502347 and the clinic will guide you.",
  },
  {
    q: "What are the hours and fees?",
    a: "Hours and fees are shared when your visit is confirmed, so this website does not invent either. Call before you travel, especially on Sundays and public holidays, and ask the fee for the visit you need.",
  },
  {
    q: "Is this an emergency service?",
    a: "No. If you have a deformed limb, an open fracture, chest pain, trouble breathing, or you cannot bear weight after major trauma, go to the nearest emergency department. Do not wait for a clinic slot.",
  },
  {
    q: "Where is the clinic on Instagram?",
    a: "The glowing Instagram button on every page opens @ortho_doctor26 — the clinic's Instagram — in a new tab.",
  },
];

export type AppointmentRequest = {
  id: string;
  name: string;
  phone: string;
  patientName: string;
  age: string;
  concern: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
};

const STORAGE_KEY = "damani-appointment-requests";

export function loadRequests(): AppointmentRequest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as AppointmentRequest[]) : [];
  } catch {
    return [];
  }
}

export function saveRequest(request: AppointmentRequest): AppointmentRequest[] {
  const all = [request, ...loadRequests().filter((r) => r.id !== request.id)].slice(0, 12);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return all;
}

export function removeRequest(id: string): AppointmentRequest[] {
  const all = loadRequests().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return all;
}

export function makeId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `DM-${n}`;
}

export function todayISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export function digitsPhone(value: string) {
  const d = value.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) return d.slice(2);
  if (d.length === 11 && d.startsWith("0")) return d.slice(1);
  return d;
}

export function isValidMobile(value: string) {
  return /^[6-9]\d{9}$/.test(digitsPhone(value));
}

export function formatDate(iso: string) {
  if (!iso) return "—";
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function requestMessage(r: AppointmentRequest) {
  const lines = [
    "Hello Dr. Damani's Imaging & Orthocare,",
    "I would like to request an appointment.",
    "",
    `Reference: ${r.id}`,
    `Name: ${r.name}`,
    r.patientName ? `Patient (if different): ${r.patientName}` : "",
    `Phone: ${r.phone}`,
    r.age ? `Age: ${r.age}` : "",
    `Concern: ${r.concern}`,
    `Visit type: ${r.service}`,
    `Preferred date: ${formatDate(r.date)}`,
    `Preferred time: ${r.time}`,
    r.notes ? `Notes: ${r.notes}` : "",
    "",
    "Please confirm if a slot is available. Thank you.",
  ].filter((line) => line !== "");
  return lines.join("\n");
}

export function waLink(text: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function bookHref(service?: string, concern?: string) {
  const params = new URLSearchParams();
  if (service) params.set("service", service);
  if (concern) params.set("concern", concern);
  const q = params.toString();
  return q ? `/appointment?${q}` : "/appointment";
}
