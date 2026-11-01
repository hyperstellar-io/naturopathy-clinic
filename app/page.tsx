import type { Metadata } from "next";
import { createLucideIcon } from "lucide-react";
import MarqueeRow from "./marquee-row";
import ThemeToggle from "./theme-toggle";

export const metadata: Metadata = { title: "Naturopathy Clinic | Coming Soon" };

// lucide-react v1 dropped brand icons; these are the classic lucide brand shapes
const Instagram = createLucideIcon("instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "a" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "b" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "c" }],
]);
const Facebook = createLucideIcon("facebook", [
  ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "a" }],
]);
const Youtube = createLucideIcon("youtube", [
  ["path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17", key: "a" }],
  ["path", { d: "m10 15 5-3-5-3z", key: "b" }],
]);

const social = [["Instagram", Instagram], ["Facebook", Facebook], ["YouTube", Youtube]] as const;

const rows = [
  ["Diabetes (Gangrene)", "Thyroid", "Varicose Vein (Ulcer)", "Weight Loss", "Asthma", "Spine Alignment", "Arthritis", "Migraine", "Spondylitis", "Slip Disc", "Autism", "Knee Pain", "Vertigo", "Sciatica", "Peripheral Neuropathy", "Depression", "Anxiety"],
  ["Tennis Elbow", "Multiple Sclerosis", "Hypertension (B.P.)", "Frozen Shoulder", "Ankle Sprain", "Sinus", "Calf Pain", "ACL / Meniscus Tear", "Eye Pressure", "Insomnia / Tinnitus", "Meningitis", "Piles", "Cerebral Palsy", "Skin Diseases", "Diabetes Side Effects", "Cancer Post Recovery", "Muscle Tear", "Parkinson's", "Muscular Dystrophy"],
];

// Opening progress (real values; no invented history)
const progress = [["Design", 30], ["Launch", 5]] as const;

const labels = [["Expertise", "l1"], ["Wellness", "l2"], ["Care", "l3 rv"]];

// wa.me needs the country code; 91 (India) assumed for the 10-digit number
const wa = `https://wa.me/917021317358?text=${encodeURIComponent(
  "Hello Dr. Rakesh Bendale, I would like to book an appointment at the Naturopathy Clinic. Please let me know the available slots.",
)}`;

export default function ComingSoon() {
  return (
    <div className="cs">
      <main className="cs-m">
        <div className="cs-l">
          <div className="cs-logo">NATUROPATHY CLINIC<i /></div>
          <div className="cs-mid">
            <small>Launching soon</small>
            <h1><em>Dr Rakesh Bendale</em><i /></h1>
            <p>Expert care for your health and wellness, with compassionate, professional support to keep you and your loved ones safe and well.</p>
            <a className="cs-btn" href={wa} target="_blank" rel="noopener noreferrer">Book an Appointment</a>
          </div>
          <div className="cs-mq">
            {rows.map((items, r) => <MarqueeRow key={r} items={items} back={r === 1} />)}
          </div>
        </div>
        <div className="cs-r">
          <div className="cs-soc">{social.map(([n, Icon]) => <a key={n} className={n.toLowerCase()} href="#" aria-label={n}><Icon size={24} /></a>)}</div>
          <ThemeToggle />
          {labels.map(([t, c]) => <span key={t} className={`cs-lb ${c}`}>{t}<b>+</b></span>)}
          <div className="cs-card">
            <h3>Opening progress</h3>
            <ul className="cs-bars">
              {progress.map(([name, v]) => (
                <li key={name}>
                  <div className="bl"><span>{name}</span><b>{v}%</b></div>
                  <div className="bt" role="progressbar" aria-label={`${name} progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={v}><span style={{ width: `${v}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <p className="cs-f">Designed &amp; Developed by <a href="https://www.hyperstellartechnology.in" target="_blank" rel="noopener noreferrer"><b>HyperStellar Technology</b></a></p>
    </div>
  );
}
