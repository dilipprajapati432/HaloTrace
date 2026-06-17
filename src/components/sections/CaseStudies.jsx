import { Btn } from "../ui/UI";
import { card, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

export default function CaseStudies() {
  return (
    <div style={{
      border: `1px solid ${border2}`, borderRadius: 12, padding: "32px 28px",
      background: "rgba(4, 10, 18, 0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <h2 style={{ fontSize: 17, fontWeight: 800, color: white, margin: 0 }}>
          RECENT <span style={{ color: neon }}>CASE STUDIES</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 12, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 16 }}>
        {/* Left: Image Card */}
        <div style={{
          background: "url('/Web%20Security%20vulnearability%20assessement.png') center / cover no-repeat",
          border: `1px solid ${border2}`,
          borderRadius: 12,
          minHeight: 180
        }} />

        {/* Right: Text Card */}
        <div style={{
          background: card, border: `1px solid ${border2}`, borderRadius: 12,
          padding: "16px 20px",
          transition: "border-color .18s",
          display: "flex", flexDirection: "column", justifyContent: "center"
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = neon}
        onMouseLeave={e => e.currentTarget.style.borderColor = border2}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: white, margin: "0 0 10px", lineHeight: 1.35 }}>
            Web Application Security Assessment
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10, fontSize: 11.5 }}>
            {[["Industry", "E-commerce"], ["Duration", "3 Weeks"], ["Outcome", "85% Fixed"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ color: muted }}>{k}</div>
                <div style={{ color: textCol, fontWeight: 600, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11.5, color: muted, marginBottom: 12 }}>
            <div style={{ color: textCol, fontWeight: 600, marginBottom: 2 }}>Challenge</div>
            Multiple vulnerabilities in the web application
            <div style={{ color: textCol, fontWeight: 600, margin: "6px 0 2px" }}>Outcome</div>
            Critical vulnerabilities fixed, security strengthened by 85%
          </div>
          <Btn style={{ padding: "6px 14px", fontSize: 11.5, alignSelf: "flex-start", background: "#0d6efd", borderColor: "#0d6efd", color: white }}>Read Case Study</Btn>
        </div>
      </div>
    </div>
  );
}
