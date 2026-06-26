import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { bg, card, cyan, white, muted, textCol, neon } from "../styles/tokens";

export default function ResponsibleDisclosure({ onClose }) {
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
        <title>Responsible Disclosure | HaloTrace</title>
        <meta name="description" content="HaloTrace's Responsible Disclosure program and vulnerability reporting guidelines for security researchers." />
      </Helmet>

      {/* Background Glow */}
      <div style={{
        position: "absolute", bottom: "18%", left: "25%",
        width: 300, height: 300, borderRadius: "50%",
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
              Responsible Disclosure
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
          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>1. Program Overview</h3>
          <p style={{ marginBottom: 22 }}>At HaloTrace, we value the role of the independent security research community in helping us keep our systems and our clients secure. We encourage responsible reporting of any vulnerabilities that may be found in our platform or services.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>2. Guidelines</h3>
          <p style={{ marginBottom: 22 }}>When conducting research, we require that you:
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction of data.</li>
              <li>Only interact with accounts you own or with explicit permission from the account holder.</li>
              <li>Use exploits only to the extent necessary to confirm a vulnerability's presence. Do not use an exploit to compromise or exfiltrate data, establish persistent command line access, or use the exploit to pivot to other systems.</li>
            </ul>
          </p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>3. In-Scope Targets</h3>
          <p style={{ marginBottom: 22 }}>The following domains and their subdomains are considered in-scope for this program:
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>halotrace.com</li>
              <li>skillnetics.com</li>
              <li>api.halotrace.com</li>
            </ul>
          </p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>4. Out-of-Scope Vulnerabilities</h3>
          <p style={{ marginBottom: 22 }}>Certain vulnerabilities are considered out of scope. These include, but are not limited to: clickjacking on pages with no sensitive actions, unauthenticated/logout/login CSRF, attacks requiring physical access to a user's device, and Denial of Service (DoS/DDoS) attacks.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>5. Reporting a Vulnerability</h3>
          <p style={{ marginBottom: 22 }}>If you believe you have found a security vulnerability in one of our products or platforms, please send it to us via email at <span style={{ color: cyan, fontWeight: 600 }}>halotrace.enquiry@gmail.com</span>. Please include detailed steps to reproduce the vulnerability, including any relevant proof-of-concept code, HTTP requests/responses, and screenshots.</p>

          <h3 style={{ color: cyan, fontSize: 14, fontWeight: 700, margin: "0 0 10px", letterSpacing: 0.3, fontFamily: "'Orbitron', sans-serif" }}>6. Safe Harbor</h3>
          <p style={{ marginBottom: 0 }}>We consider activities conducted consistent with this policy to constitute "authorized" conduct. We will not initiate legal action against you for circumventing technological measures we have put in place to protect our applications, provided you adhere to the guidelines set forth in this policy.</p>
        </div>
      </div>
    </main>
  );
}
