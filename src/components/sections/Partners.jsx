import { border2, neon, muted } from "../../styles/tokens";

const PARTNERS = [
  { name: "paloalto·", color: "#fa4616" },
  { name: "F⁰RTINET", color: "#ee2c2c" },
  { name: "aws", color: "#ff9900" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Microsoft", color: "#00a4ef" },
  { name: "EC-COUNCIL", color: neon },
  { name: "||OffSec", color: "#e63946" },
  { name: "(ISC)²", color: muted },
];

export default function Partners() {
  return (
    <section className="section-container" style={{ padding: "0 56px 60px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "white", margin: 0, marginBottom: 22 }}>
        OUR PARTNERS <span style={{ color: neon }}>&amp; COLLABORATORS</span>
      </h2>
      <div style={{
        border: `1px solid ${border2}`, borderRadius: 12, padding: "24px 32px",
        background: "rgba(4, 10, 18, 0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20
        }}>
          {PARTNERS.map(({ name, color }) => (
            <div key={name} style={{
              fontSize: 14.5, fontWeight: 700, color,
              opacity: .72, cursor: "pointer",
              transition: "opacity .15s, transform .15s", textAlign: "center",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = ".72"; e.currentTarget.style.transform = "none"; }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
