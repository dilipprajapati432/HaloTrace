import { bg2, card, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const SERVICES = [
  { icon: "🛡", name: "VAPT",                  sub: "Vulnerability Assessment\n& Penetration Testing" },
  { icon: "🌐", name: "Web Security\nTesting" },
  { icon: "📱", name: "Mobile App\nSecurity Testing" },
  { icon: "🔗", name: "API Security\nTesting" },
  { icon: "🔍", name: "Digital\nForensics" },
  { icon: "⚡", name: "Incident\nResponse" },
  { icon: "☁️", name: "Cloud Security\nAssessment" },
  { icon: "💼", name: "Security\nConsulting" },
];

export default function Services() {
  return (
    <section style={{ padding: "56px 56px 48px", background: bg2 }}>
      <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: 800, color: white,
        margin: "0 0 28px", letterSpacing: .4 }}>
        OUR SECURITY <span style={{ color: neon }}>SERVICES</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 12 }}>
        {SERVICES.map(({ icon, name, sub }) => (
          <div key={name} style={{
            background: card, border: `1px solid ${border2}`,
            borderRadius: 10, padding: "18px 10px 16px", textAlign: "center",
            cursor: "pointer", transition: "all .18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = neon;
            e.currentTarget.style.background = `${neon}0a`;
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.background = card;
            e.currentTarget.style.transform = "none";
          }}>
            <div style={{ fontSize: 28, marginBottom: 9 }}>{icon}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: textCol, lineHeight: 1.4, whiteSpace: "pre-line" }}>
              {name}
            </div>
            {sub && (
              <div style={{ fontSize: 9.5, color: muted, marginTop: 4, lineHeight: 1.3, whiteSpace: "pre-line" }}>
                {sub}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 22 }}>
        <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All Services →
        </a>
      </div>
    </section>
  );
}
