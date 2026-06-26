import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { bg, card, cyan, white, muted, textCol, neon } from "../styles/tokens";

export default function Terms({ onClose }) {
  const navigate = useNavigate();

  return (
    <main style={{
      background: bg, minHeight: "100vh",
      padding: "120px 20px 80px",
      color: textCol,
      display: "flex", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <Helmet>
        <title>Terms & Conditions | HaloTrace</title>
        <meta name="description" content="Read the Terms & Conditions for using HaloTrace cybersecurity services and the Skillnetics training platform." />
      </Helmet>

      {/* Background Glow */}
      <div style={{
        position: "absolute", top: "10%", left: "35%",
        width: 300, height: 300, borderRadius: "50%",
        background: `radial-gradient(circle, ${cyan}12 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{
        background: `linear-gradient(170deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%), ${card}`,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 20,
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        maxWidth: 720, width: "100%",
        position: "relative", zIndex: 1,
      }}>
        {/* Accent Bar */}
        <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 3, borderRadius: "0 0 3px 3px", background: `linear-gradient(90deg, ${cyan}, ${neon})` }} />

        {/* Header */}
        <div style={{
          padding: "32px 44px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start"
        }}>
          <div>
            <h1 style={{
              fontSize: 32, fontWeight: "bold", color: white,
              fontFamily: "'Space Grotesk', sans-serif", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 0.5,
            }}>
              Terms & Conditions
            </h1>
            <p style={{ color: muted, fontSize: 12, margin: 0, fontFamily: "'DM Mono', monospace" }}>Last updated: June 2026</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8, width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
              color: muted, marginTop: 4
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = white; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = muted; }}
            aria-label="Close"
            onClick={() => {
              if (onClose) onClose();
              else if (window.history.state && window.history.state.idx > 0) navigate(-1);
              else navigate("/");
            }}
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: "28px 44px 44px",
          fontSize: 14, lineHeight: 1.7,
          color: textCol,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 300,
        }}>
          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>1. Acceptance of Terms</h3>
          <p style={{ marginBottom: 22 }}>By accessing and using the HaloTrace platform and its associated services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>2. Service Description</h3>
          <p style={{ marginBottom: 22 }}>HaloTrace provides cybersecurity services including but not limited to Vulnerability Assessment and Penetration Testing (VAPT), Digital Forensics and Incident Response (DFIR), network security auditing, web application security, and cybersecurity training through its Skillnetics division.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>3. User Accounts</h3>
          <p style={{ marginBottom: 22 }}>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. HaloTrace shall not be liable for any loss arising from unauthorized access to your account due to your failure to safeguard your credentials.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>4. Acceptable Use Policy</h3>
          <p style={{ marginBottom: 22 }}>You agree not to misuse our platform or services. This includes but is not limited to: unauthorized scanning or testing of systems you do not own, sharing confidential assessment reports with unauthorized parties, attempting to gain unauthorized access to HaloTrace systems, or using our training materials for malicious purposes.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>5. Intellectual Property</h3>
          <p style={{ marginBottom: 22 }}>All content, methodologies, tools, reports, and training materials provided through HaloTrace and Skillnetics are the intellectual property of their respective owners. Unauthorized reproduction, distribution, or modification is strictly prohibited.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>6. Limitation of Liability</h3>
          <p style={{ marginBottom: 22 }}>HaloTrace provides security assessments and recommendations based on industry best practices. However, no security solution can guarantee complete protection. HaloTrace shall not be held liable for any damages resulting from security incidents that occur despite our recommendations being implemented.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>7. Modifications</h3>
          <p style={{ marginBottom: 0 }}>HaloTrace reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms. Users will be notified of significant changes via email or platform notification.</p>
        </div>
      </div>
    </main>
  );
}
