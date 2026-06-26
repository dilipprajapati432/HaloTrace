import { useNavigate } from "react-router-dom";
import { Btn, Tag } from "../ui/UI";
import ThreatMap from "./ThreatMap";
import { bg2, bg, neon, cyan, white, muted } from "../../styles/tokens";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-container" style={{
      minHeight: "calc(100vh - 90px - 72px)", position: "relative", overflow: "hidden",
      marginTop: "72px",
      background: `linear-gradient(175deg, ${bg2}33 0%, ${bg}66 100%), url('/hero-bg%204.png') center 30% / cover no-repeat`,
      display: "grid", gridTemplateColumns: "1fr 420px", gap: 44,
      alignItems: "center", padding: "58px 56px 108px",
    }}>
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "2%", width: 560, height: 560,
        background: `radial-gradient(circle,${neon}0c 0%,transparent 68%)`, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "28%", width: 300, height: 300,
        background: `radial-gradient(circle,${cyan}08 0%,transparent 70%)`, pointerEvents: "none"
      }} />

      {/* Left: copy */}
      <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 18 }}>
          <Tag>WELCOME TO SKILLNETICS × HALOTRACE</Tag>
        </div>
        <h1 className="hero-title" style={{
          fontSize: 46, fontWeight: 900, color: white,
          lineHeight: 1.03, margin: "0 0 2px", letterSpacing: -.5
        }}>
          CYBERSECURITY TRAINING &amp;
        </h1>
        <h1 className="hero-title" style={{
          fontSize: 46, fontWeight: 900, margin: "0 0 24px",
          lineHeight: 1.03, letterSpacing: -.5,
          color: neon
        }}>
          ENTERPRISE SECURITY SOLUTIONS
        </h1>
        <p style={{ fontSize: 15, color: white, opacity: 0.85, lineHeight: 1.78, margin: "0 0 34px", maxWidth: 500 }}>
          Empowering individuals with in-demand cybersecurity skills<br />
          and protecting organizations through professional security services.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Btn onClick={() => navigate('/courses')} style={{ padding: "13px 28px", fontSize: 14 }}>Explore Training →</Btn>
          <Btn onClick={() => navigate('/book-consultation')} style={{ padding: "13px 28px", fontSize: 14, background: cyan, color: "#040e1a", borderColor: cyan }}>
            Book Security Consultation →
          </Btn>
        </div>
      </div>

      {/* Right: threat map */}
      <div className="hero-threat-map" style={{ position: "relative", zIndex: 1 }}>
        <ThreatMap />
      </div>
    </section>
  );
}
