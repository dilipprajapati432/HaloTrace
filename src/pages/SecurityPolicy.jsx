import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { bg, card, cyan, white, muted, textCol, neon } from "../styles/tokens";

export default function SecurityPolicy({ onClose }) {
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
        <title>Security Policy | HaloTrace</title>
        <meta name="description" content="Learn about HaloTrace's security practices, infrastructure protection, and commitment to safeguarding client data." />
      </Helmet>

      {/* Background Glow */}
      <div style={{
        position: "absolute", top: "18%", right: "25%",
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
              Security Policy
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
          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>1. Our Commitment</h3>
          <p style={{ marginBottom: 22 }}>At HaloTrace, security is not just a service we provide — it is the foundation of everything we do. We are committed to maintaining the highest standards of information security across our operations, infrastructure, and client engagements.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>2. Infrastructure Security</h3>
          <p style={{ marginBottom: 22 }}>Our infrastructure is protected with multi-layered defense mechanisms including network segmentation, intrusion detection and prevention systems (IDS/IPS), Web Application Firewalls (WAF), and 24/7 Security Operations Center (SOC) monitoring. All servers are hardened following CIS benchmarks and undergo regular vulnerability assessments.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>3. Data Protection</h3>
          <p style={{ marginBottom: 22 }}>All client data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. Access to sensitive data is governed by strict role-based access control (RBAC) policies with mandatory multi-factor authentication (MFA) for all personnel. Regular access reviews are conducted to ensure least-privilege principles are maintained.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>4. Incident Response</h3>
          <p style={{ marginBottom: 22 }}>We maintain a comprehensive incident response plan aligned with NIST SP 800-61 guidelines. Our dedicated DFIR (Digital Forensics and Incident Response) team is available round the clock to handle security incidents. All incidents are documented, analyzed for root cause, and followed up with corrective actions to prevent recurrence.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>5. Employee Security</h3>
          <p style={{ marginBottom: 22 }}>All HaloTrace employees undergo thorough background verification and sign non-disclosure agreements (NDAs). Mandatory security awareness training is conducted quarterly, and phishing simulation exercises are performed regularly to maintain a security-conscious workforce.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>6. Compliance & Certifications</h3>
          <p style={{ marginBottom: 22 }}>HaloTrace aligns its security practices with internationally recognized frameworks and standards including ISO 27001, NIST Cybersecurity Framework, OWASP, and PTES (Penetration Testing Execution Standard). We continuously evaluate and update our controls to meet evolving regulatory requirements.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>7. Continuous Improvement</h3>
          <p style={{ marginBottom: 0 }}>We conduct regular internal and external security audits, penetration tests, and red team exercises on our own infrastructure. Findings are promptly remediated and lessons learned are integrated into our security policies and training programs.</p>
        </div>
      </div>
    </main>
  );
}
