import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { bg, card, cyan, white, muted, textCol, neon } from "../styles/tokens";

export default function Privacy({ onClose }) {
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
        <title>Privacy Policy | HaloTrace</title>
        <meta name="description" content="Learn how HaloTrace collects, uses, and protects your personal data and information." />
      </Helmet>

      {/* Background Glow */}
      <div style={{
        position: "absolute", bottom: "15%", right: "30%",
        width: 280, height: 280, borderRadius: "50%",
        background: `radial-gradient(circle, ${neon}12 0%, transparent 70%)`,
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
        <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 3, borderRadius: "0 0 3px 3px", background: `linear-gradient(90deg, ${neon}, ${cyan})` }} />

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
              Privacy Policy
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
          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>1. Information We Collect</h3>
          <p style={{ marginBottom: 22 }}>We collect information you provide directly, such as your name, email address, organization details, and account credentials. We also collect technical data including IP addresses, browser information, and usage analytics to improve our services and ensure platform security.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>2. How We Use Your Information</h3>
          <p style={{ marginBottom: 22 }}>Your information is used to: provide and maintain our cybersecurity services, communicate assessment findings and security recommendations, deliver training content through Skillnetics, process transactions and send billing notifications, improve our platform performance and user experience, and comply with legal obligations.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>3. Data Security</h3>
          <p style={{ marginBottom: 22 }}>We implement industry-standard security measures including end-to-end encryption, secure data storage, role-based access controls, and regular security audits. All assessment reports and client data are stored in encrypted environments with strict access protocols.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>4. Data Sharing</h3>
          <p style={{ marginBottom: 22 }}>We do not sell or rent your personal information to third parties. Data may be shared only with: authorized team members involved in your service delivery, regulatory authorities when required by law, and trusted service providers under strict confidentiality agreements necessary for platform operations.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>5. Data Retention</h3>
          <p style={{ marginBottom: 22 }}>We retain your data for as long as your account is active or as needed to provide services. Assessment reports are retained for a minimum period as agreed in service contracts. You may request deletion of your personal data at any time, subject to legal retention requirements.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>6. Your Rights</h3>
          <p style={{ marginBottom: 22 }}>You have the right to: access your personal data, request correction of inaccurate data, request deletion of your data, object to data processing, and receive a copy of your data in a portable format. To exercise these rights, contact our data protection team.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>7. Contact Us</h3>
          <p style={{ marginBottom: 0 }}>For any privacy-related inquiries or to exercise your data rights, please contact us at <span style={{ color: cyan, fontWeight: 600 }}>halotrace.enquiry@gmail.com</span>.</p>
        </div>
      </div>
    </main>
  );
}
