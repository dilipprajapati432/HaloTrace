import { card, border, neon, white, muted } from "../../styles/tokens";

const STATS = [
  { icon: "👥", value: "5000+", label: "Students Trained" },
  { icon: "🛡",  value: "150+",  label: "Security Assessments" },
  { icon: "📅", value: "100+",  label: "Workshops Conducted" },
  { icon: "⚡", value: "24/7",  label: "Security Expertise" },
];

export default function TrustBar() {
  return (
    <div style={{
      background: card,
      borderTop: `1px solid ${border}`,
      borderBottom: `1px solid ${border}`,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
    }}>
      {STATS.map(({ icon, value, label }, i) => (
        <div key={label} style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "22px 32px",
          borderRight: i < 3 ? `1px solid ${border}` : "none",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 10, flexShrink: 0,
            background: `${neon}18`, border: `1px solid ${neon}30`,
            display: "grid", placeItems: "center", fontSize: 22,
          }}>{icon}</div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: white, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 12, color: muted, marginTop: 3 }}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
