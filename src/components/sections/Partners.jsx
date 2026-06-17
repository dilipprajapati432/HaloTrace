import { card, border, neon, muted } from "../../styles/tokens";

const PARTNERS = [
  { name: "paloalto·",   color: "#fa4616" },
  { name: "F⁰RTINET",   color: "#ee2c2c" },
  { name: "aws",         color: "#ff9900" },
  { name: "Google Cloud",color: "#4285F4" },
  { name: "Microsoft",   color: "#00a4ef" },
  { name: "EC-COUNCIL",  color: neon },
  { name: "||OffSec",    color: "#e63946" },
  { name: "(ISC)²",      color: muted },
];

export default function Partners() {
  return (
    <section style={{ padding: "44px 56px", background: card,
      borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div style={{ fontSize: 12, color: muted, textAlign: "center",
        letterSpacing: 2.2, textTransform: "uppercase", marginBottom: 24 }}>
        OUR PARTNERS &amp; COLLABORATORS
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",
        gap: 44, flexWrap: "wrap" }}>
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
    </section>
  );
}
