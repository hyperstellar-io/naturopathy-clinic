import type { Metadata } from "next";
import { createLucideIcon } from "lucide-react";

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

// Opening-progress chart: weekly % complete (y: 0-100)
const X0 = 36, X1 = 288, Y0 = 112, Y1 = 12;
const weeks = ["W1", "W2", "W3", "W4", "W5", "W6"];
const design = [0, 6, 12, 19, 25, 30];
const launch = [0, 0, 1, 2, 3, 5];
const px = (i: number) => X0 + ((X1 - X0) * i) / (weeks.length - 1);
const py = (v: number) => Y0 - ((Y0 - Y1) * v) / 100;
const curve = (d: number[]) =>
  d.reduce((s, v, i) => {
    if (!i) return `M${px(0)} ${py(v)}`;
    const m = (px(i - 1) + px(i)) / 2;
    return `${s}C${m} ${py(d[i - 1])} ${m} ${py(v)} ${px(i)} ${py(v)}`;
  }, "");

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
            <h1>Expert care for your health and wellness<i /></h1>
            <p><em>Dr Rakesh Bendale</em> provides compassionate, professional support to keep you and your loved ones safe and well.</p>
            <a className="cs-btn" href={wa} target="_blank" rel="noopener noreferrer">Book an Appointment</a>
          </div>
          <div className="cs-mq">
            {rows.map((items, r) => (
              <ul key={r} className={`cs-row${r ? " back" : ""}`} style={{ animationDuration: `${items.length * 4}s` }}>
                {[...items, ...items].map((t, i) => (
                  <li key={i} className={i >= items.length ? "dup" : undefined} aria-hidden={i >= items.length || undefined}>{t}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="cs-r">
          <div className="cs-soc">{social.map(([n, Icon]) => <a key={n} className={n.toLowerCase()} href="#" aria-label={n}><Icon size={24} /></a>)}</div>
          {labels.map(([t, c]) => <span key={t} className={`cs-lb ${c}`}>{t}<b>+</b></span>)}
          <div className="cs-card">
            <h3>Opening progress</h3>
            <svg viewBox="0 0 300 136" role="img" aria-label="Design 30% complete, launch 5% complete">
              <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b9a3f" stopOpacity=".35" /><stop offset="1" stopColor="#5b9a3f" stopOpacity="0" /></linearGradient></defs>
              {[0, 25, 50, 75, 100].map((v) => (
                <g key={v}>
                  <line x1={X0} x2={X1} y1={py(v)} y2={py(v)} stroke="#000" strokeOpacity={v ? ".07" : ".18"} strokeDasharray={v ? "3 3" : undefined} />
                  <text x={X0 - 6} y={py(v) + 3} textAnchor="end" fontSize="8" fill="#888">{v}%</text>
                </g>
              ))}
              {weeks.map((w, i) => <text key={w} x={px(i)} y={Y0 + 14} textAnchor="middle" fontSize="8" fill="#888">{w}</text>)}
              <path d={`${curve(design)}L${X1} ${Y0}L${X0} ${Y0}Z`} fill="url(#g)" />
              <path d={curve(design)} fill="none" stroke="#4c8a34" strokeWidth="2" strokeLinecap="round" />
              <path d={curve(launch)} fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              {design.map((v, i) => <circle key={i} cx={px(i)} cy={py(v)} r="2" fill="#fff" stroke="#4c8a34" strokeWidth="1.2" />)}
              {launch.map((v, i) => <circle key={i} cx={px(i)} cy={py(v)} r="2" fill="#fff" stroke="#111" strokeWidth="1.2" />)}
              <circle cx={X1} cy={py(30)} r="4" fill="#4c8a34" stroke="#fff" strokeWidth="2" />
              <circle cx={X1} cy={py(5)} r="4" fill="#111" stroke="#fff" strokeWidth="2" />
              <text x={X1} y={py(30) - 9} textAnchor="end" fontSize="10" fontWeight="600" fill="#4c8a34">30%</text>
              <text x={X1} y={py(5) - 9} textAnchor="end" fontSize="10" fontWeight="600" fill="#111">5%</text>
            </svg>
            <em><span>Design 30%</span><span>Launch 5%</span></em>
          </div>
        </div>
      </main>
      <p className="cs-f">Designed &amp; Developed by <b>HyperStellar Technology</b></p>
    </div>
  );
}
