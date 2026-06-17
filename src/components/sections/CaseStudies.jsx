import { Btn } from "../ui/UI";
import { card, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

export default function CaseStudies() {
  return (
    <div>
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

      <div style={{
        background: card, border: `1px solid ${border2}`, borderRadius: 12,
        display: "grid", gridTemplateColumns: "130px 1fr", overflow: "hidden",
        transition: "border-color .18s",
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = neon}
      onMouseLeave={e => e.currentTarget.style.borderColor = border2}>
        <div style={{ background: "linear-gradient(135deg,#091828,#0d2540)",
          display: "grid", placeItems: "center", fontSize: 46 }}>🔐</div>
        <div style={{ padding: "20px 22px" }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: white, margin: "0 0 11px", lineHeight: 1.35 }}>
            Web Application Security Assessment
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 11, fontSize: 11.5 }}>
            {[["Industry","E-commerce"],["Duration","3 Weeks"],["Outcome","85% Fixed"]].map(([k, v]) => (
              <div key={k}>
                <div style={{ color: muted }}>{k}</div>
                <div style={{ color: textCol, fontWeight: 600, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11.5, color: muted, marginBottom: 16 }}>
            <div style={{ color: textCol, fontWeight: 600, marginBottom: 2 }}>Challenge</div>
            Multiple vulnerabilities in the web application
            <div style={{ color: textCol, fontWeight: 600, margin: "6px 0 2px" }}>Outcome</div>
            Critical vulnerabilities fixed, security strengthened by 85%
          </div>
          <Btn style={{ padding: "7px 16px", fontSize: 12 }}>Read Case Study</Btn>
        </div>
      </div>
    </div>
  );
}
