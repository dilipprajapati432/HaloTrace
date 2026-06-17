import { Btn, Check } from "../ui/UI";
import { bg, card, border2, neon, cyan, muted, textCol } from "../../styles/tokens";

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
      border: `1px solid ${border2}`,
      borderRadius: 14, overflow: "hidden", position: "relative",
      transition: "border-color .3s, box-shadow .3s",
      minHeight: 340,
      display: "flex", flexDirection: "column"
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.boxShadow = `0 0 24px ${accentColor}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = border2;
        e.currentTarget.style.boxShadow = "none";
      }}>
      {children}
    </div>
  );
}

export default function DivisionSplit() {
  return (
    <section style={{
      padding: "80px 40px",
      background: `url('/halotrace-skillnetics background.png') center/cover no-repeat, ${bg}`,
      display: "flex", justifyContent: "center"
    }}>
      <div style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 22,
        maxWidth: 1300,
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
        <DivisionCard accentColor={neon}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1.5fr", height: "100%",
            background: "linear-gradient(135deg, rgba(5,20,16,0.6) 0%, rgba(6,17,26,0.2) 100%)"
          }}>
            <div style={{
              backgroundImage: "url('/hacker.png')",
              backgroundSize: "cover", backgroundPosition: "center",
              WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to right, black 60%, transparent 100%)"
            }} />
            <div style={{ padding: "40px 30px 40px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: neon, letterSpacing: 1, marginBottom: 4 }}>
                SKILLNETICS
              </div>
              <div style={{ fontSize: 14, color: muted, marginBottom: 14, fontWeight: 500 }}>Learn. Practice. Excel.</div>
              <p style={{ fontSize: 13.5, color: textCol, lineHeight: 1.6, margin: "0 0 20px" }}>
                Comprehensive cybersecurity training programs<br />designed for beginners to professionals.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 14px", marginBottom: 26 }}>
                {SKILL_FEATURES.map(f => <Check key={f} text={f} color={neon} />)}
              </div>
              <div>
                <Btn style={{ padding: "12px 24px", fontSize: 13.5 }}>Explore Training Programs →</Btn>
              </div>
            </div>
          </div>
        </DivisionCard>

        {/* HALOTRACE */}
        <DivisionCard accentColor={cyan}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.5fr 1fr", height: "100%",
            background: "linear-gradient(135deg, rgba(6,17,26,0.2) 0%, rgba(4,10,18,0.6) 100%)"
          }}>
            <div style={{ padding: "40px 0 40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: cyan, letterSpacing: 1, marginBottom: 4 }}>
                HALOTRACE
              </div>
              <div style={{ fontSize: 14, color: muted, marginBottom: 14, fontWeight: 500 }}>Protect. Detect. Respond.</div>
              <p style={{ fontSize: 13.5, color: textCol, lineHeight: 1.6, margin: "0 0 20px" }}>
                End-to-end cybersecurity services for<br />businesses of all sizes.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 14px", marginBottom: 26 }}>
                {HALO_FEATURES.map(f => <Check key={f} text={f} color={cyan} />)}
              </div>
              <div>
                <Btn style={{
                  padding: "12px 24px", fontSize: 13.5,
                  background: cyan, color: "#040e1a", borderColor: cyan
                }}>
                  Request Security Assessment →
                </Btn>
              </div>
            </div>
            <div style={{
              backgroundImage: "url('/shield.png')",
              backgroundSize: "cover", backgroundPosition: "center",
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
