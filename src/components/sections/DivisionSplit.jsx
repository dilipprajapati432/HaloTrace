import { Btn, Check } from "../ui/UI";
import { bg, card, border2, neon, cyan, muted, textCol, pink, orange, white } from "../../styles/tokens";

const SKILL_FEATURES = [
  "Industry-Aligned Courses", "Workshops & Bootcamps",
  "Hands-on Cyber Labs", "Career Guidance",
  "Certifications", "Internship Programs",
];

const HALO_FEATURES = [
  "VAPT & Assessments", "Security Audits",
  "Digital Forensics", "Security Consulting",
  "Incident Response", "24/7 Expert Support",
];

function DivisionCard({ children, accentColor }) {
  return (
    <div style={{
      background: "rgba(4, 10, 18, 0.4)", backdropFilter: "blur(12px)",
      border: `1px solid ${accentColor}80`,
      borderRadius: 14, overflow: "hidden", position: "relative",
      transition: "border-color .3s, box-shadow .3s, transform .3s",
      minHeight: 340,
      display: "flex", flexDirection: "column",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.boxShadow = `0 12px 40px ${accentColor}33`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = `${accentColor}80`;
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.transform = "none";
      }}>
      {children}
    </div>
  );
}

export default function DivisionSplit() {
  return (
    <section className="section-container" style={{
      padding: "80px 56px",
      background: bg,
    }}>
      <div className="division-grid" style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 22,
        width: "100%"
      }}>

        {/* CENTER X OVERLAY */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 48, height: 48, borderRadius: "50%", background: "#06101c",
          border: `1px solid ${border2}`, display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 10, color: cyan, fontSize: 18, fontWeight: 300
        }}>
          ✕
        </div>

        {/* SKILLNETICS */}
        <DivisionCard accentColor={cyan}>
          <div className="division-card-inner" style={{
            display: "grid", gridTemplateColumns: "1fr 1.5fr", height: "100%",
            background: `linear-gradient(135deg, ${cyan}1a 0%, rgba(6,17,26,0.2) 100%), linear-gradient(rgba(4, 10, 18, 0.6), rgba(4, 10, 18, 0.6)), url('/halotrace-skillnetics%20background%201.png')`,
            backgroundPosition: "left center",
            backgroundSize: "205% 100%",
            backgroundRepeat: "no-repeat"
          }}>
            <div className="skillnetics-img" style={{
              backgroundImage: "url('/skillnetics 1.png')",
              backgroundSize: "cover", backgroundPosition: "center",
              WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 60%, transparent 100%)"
            }} />
            <div style={{ padding: "40px 30px 40px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontSize: 24, fontWeight: 900, letterSpacing: 1, marginBottom: 4,
                background: `linear-gradient(90deg, ${cyan}, #0077ff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>
                SKILLNETICS
              </div>
              <div style={{ fontSize: 14, color: muted, marginBottom: 14, fontWeight: 500 }}>Learn. Practice. Excel.</div>
              <p style={{ fontSize: 13.5, color: textCol, lineHeight: 1.6, margin: "0 0 20px" }}>
                Comprehensive cybersecurity training programs<br />designed for beginners to professionals.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 14px", marginBottom: 26 }}>
                {SKILL_FEATURES.map(f => <Check key={f} text={f} color={cyan} />)}
              </div>
              <div>
                <button style={{
                  padding: "12px 24px", fontSize: 13.5, fontWeight: 700,
                  background: `linear-gradient(90deg, ${cyan}, #0077ff)`, color: "#040e1a",
                  border: "none", borderRadius: 6, cursor: "pointer", transition: "opacity .2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Explore Training Programs →
                </button>
              </div>
            </div>
          </div>
        </DivisionCard>

        {/* HALOTRACE */}
        <DivisionCard accentColor={orange}>
          <div className="division-card-inner-reverse" style={{
            display: "grid", gridTemplateColumns: "1.5fr 1fr", height: "100%",
            background: `linear-gradient(135deg, rgba(6,17,26,0.2) 0%, ${orange}1a 100%), linear-gradient(rgba(4, 10, 18, 0.6), rgba(4, 10, 18, 0.6)), url('/halotrace-skillnetics%20background%201.png')`,
            backgroundPosition: "right center",
            backgroundSize: "205% 100%",
            backgroundRepeat: "no-repeat"
          }}>
            <div style={{ padding: "40px 0 40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2 }}>
              <div style={{
                fontSize: 24, fontWeight: 900, letterSpacing: 1, marginBottom: 4,
                background: `linear-gradient(90deg, ${orange}, #e65c00)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>
                HALOTRACE
              </div>
              <div style={{ fontSize: 14, color: muted, marginBottom: 14, fontWeight: 500 }}>Protect. Detect. Respond.</div>
              <p style={{ fontSize: 13.5, color: textCol, lineHeight: 1.6, margin: "0 0 20px" }}>
                End-to-end cybersecurity services for<br />businesses of all sizes.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 14px", marginBottom: 26 }}>
                {HALO_FEATURES.map(f => <Check key={f} text={f} color={orange} />)}
              </div>
              <div>
                <button style={{
                  padding: "12px 24px", fontSize: 13.5, fontWeight: 700,
                  background: `linear-gradient(90deg, ${orange}, #e65c00)`, color: "#040e1a",
                  border: "none", borderRadius: 6, cursor: "pointer", transition: "opacity .2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  Request Security Assessment →
                </button>
              </div>
            </div>
            <div style={{
              backgroundImage: "url('/halotrace%20logo%20with%20shield.png')",
              backgroundSize: "cover", backgroundPosition: "center",
              filter: "brightness(0.95)",
              WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
              zIndex: 1
            }} />
          </div>
        </DivisionCard>

      </div>
    </section>
  );
}
