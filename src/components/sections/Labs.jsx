import { bg2, card, border, border2, neon, cyan, white, textCol } from "../../styles/tokens";

const LAB_GRADIENTS = [
  "linear-gradient(135deg,#0a1a0f,#0d2810)",
  "linear-gradient(135deg,#091828,#0b1e38)",
  "linear-gradient(135deg,#1a0808,#280e0e)",
  "linear-gradient(135deg,#0f1a0a,#182a10)",
  "linear-gradient(135deg,#091828,#0b1838)",
];

const LABS = [
  { name: "Network Scanning",    emoji: "🔎" },
  { name: "Wireshark Analysis",  emoji: "📡" },
  { name: "Malware Analysis",    emoji: "🦠" },
  { name: "OSINT Investigation", emoji: "🕵️" },
  { name: "SIEM Dashboard",      emoji: "📊" },
];

export default function Labs() {
  return (
    <section style={{ padding: "60px 56px", background: bg2 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4 }}>
          CYBER LABS &amp; <span style={{ color: neon }}>DEMONSTRATIONS</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          Explore All Labs →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
        {LABS.map(({ name, emoji }, idx) => (
          <div key={name} style={{
            background: card, border: `1px solid ${border2}`,
            borderRadius: 12, overflow: "hidden", cursor: "pointer",
            transition: "border-color .18s, transform .18s, box-shadow .18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = cyan;
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = `0 6px 24px ${cyan}14`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ height: 136, background: LAB_GRADIENTS[idx],
              display: "grid", placeItems: "center", fontSize: 52,
              borderBottom: `1px solid ${border}`, position: "relative" }}>
              {emoji}
              <div style={{ position: "absolute", inset: 0,
                background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,204,255,.025) 3px,rgba(0,204,255,.025) 4px)" }} />
            </div>
            <div style={{ padding: "12px 14px", fontSize: 12.5, fontWeight: 600, color: textCol }}>
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
