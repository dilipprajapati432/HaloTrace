import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { bg, bg2, card, card2, border, border2, neon, cyan, white, muted, textCol, red, orange, pink } from "../styles/tokens";
import { Btn, Tag } from "../components/ui/UI";
import { CASE_STUDIES } from "../data/caseStudies";

const SERVICE_COLORS = {
  "VAPT": neon,
  "Network Pentest": orange,
  "DFIR": cyan,
  "Mobile Security": pink,
  "Security Training": orange,
  "Cloud Security": cyan
};

const SEVERITY_COLORS = {
  "Critical": red,
  "High": orange,
  "Medium": "#ffcc00",
  "Low": cyan
};

const FILTERS = [
  { label: "All", value: "All" },
  { label: "VAPT", value: "VAPT" },
  { label: "Digital Forensics", value: "DFIR" },
  { label: "Network", value: "Network Pentest" },
  { label: "Mobile", value: "Mobile Security" },
  { label: "Cloud", value: "Cloud Security" },
  { label: "Training", value: "Security Training" }
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(CASE_STUDIES[0]);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const detailRef = useRef(null);

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 3500);
  };

  const handleReadCase = (caseStudy) => {
    setSelectedCase(caseStudy);
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredCases = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.service === activeFilter);

  return (
    <main style={{ background: bg, minHeight: "100vh", color: textCol, position: "relative" }}>
      <Helmet>
        <title>Cybersecurity Case Studies | HaloTrace</title>
        <meta name="description" content="Real security engagements, real outcomes. Explore how our expert team secures enterprises, audits networks, and resolves complex data breaches." />
      </Helmet>

      {/* Toast Alert */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: "fixed", bottom: 40, left: "50%", transform: "translateX(-50%)",
              background: "rgba(4, 10, 18, 0.95)",
              border: `1px solid ${cyan}`,
              boxShadow: `0 10px 40px rgba(0, 204, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)`,
              borderRadius: 12, padding: "16px 24px", color: white, zIndex: 9999,
              display: "flex", alignItems: "center", gap: 12,
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              fontSize: 14, fontWeight: 600
            }}
          >
            <span style={{ color: cyan, fontSize: 18 }}>ℹ️</span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="casestudy-hero-section" style={{
        background: `radial-gradient(circle at 80% 20%, rgba(0, 204, 255, 0.08) 0%, transparent 60%), ${bg2}`,
        borderBottom: `1px solid ${border}`, position: "relative", overflow: "hidden"
      }}>
        {/* Subtle Tech Grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "24px 24px", opacity: 0.5 }} />
        
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ color: cyan, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
            PROVEN TRACK RECORD
          </div>
          <h1 className="casestudy-hero-title" style={{ fontSize: 48, fontWeight: 900, color: white, margin: "0 0 20px 0", letterSpacing: -0.5 }}>
            Enterprise <span style={{ color: neon }}>Case Studies</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255, 255, 255, 0.7)", maxWidth: 650, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Real security engagements. Real outcomes. See how we protect organizations and fortify digital infrastructures.
          </p>

          {/* Stats Row */}
          <div className="casestudy-stats-row" style={{
            display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap",
            padding: "24px", borderRadius: 16, background: "rgba(4, 10, 18, 0.4)",
            border: `1px solid ${border}`, maxWidth: 700, margin: "0 auto"
          }}>
            <div>
              <div style={{ fontSize: 12, color: muted, marginTop: 4, fontWeight: 600 }}>NDA Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section style={{ padding: "40px 56px 0", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap",
          padding: "8px", borderRadius: 12, background: card2, border: `1px solid ${border}`
        }}>
          {FILTERS.map(f => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.value)}
                style={{
                  background: isActive ? `rgba(0, 255, 156, 0.1)` : "transparent",
                  border: `1px solid ${isActive ? `rgba(0, 255, 156, 0.3)` : "transparent"}`,
                  borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600,
                  color: isActive ? neon : textCol, cursor: "pointer",
                  transition: "all 0.25s ease",
                  fontFamily: "inherit"
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = white;
                    e.currentTarget.style.background = `rgba(255,255,255,0.03)`;
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = textCol;
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. CASE STUDY CARDS GRID */}
      <section className="casestudy-grid-section" style={{ padding: "60px 56px", maxWidth: 1200, margin: "0 auto" }}>
        {filteredCases.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: muted }}>
            <h3>No case studies found for this category.</h3>
          </div>
        ) : (
          <div className="casestudy-grid-container">
            {filteredCases.map(c => {
              const accentColor = SERVICE_COLORS[c.service] || cyan;
              return (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%), ${card}`,
                    border: `1px solid rgba(255, 255, 255, 0.12)`,
                    borderRadius: 20, padding: 36, display: "flex", flexDirection: "column",
                    position: "relative", overflow: "hidden", cursor: "pointer",
                    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08)`,
                    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.boxShadow = `0 20px 40px ${accentColor}1a, inset 0 1px 0 rgba(255,255,255,0.12)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.12)`;
                    e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.08)`;
                  }}
                  onClick={() => handleReadCase(c)}
                >
                  {/* Top accent bar */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: accentColor }} />

                  {/* Badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11, background: `${accentColor}15`, border: `1px solid ${accentColor}40`,
                      color: accentColor, padding: "4px 10px", borderRadius: 4, fontWeight: 700, textTransform: "uppercase"
                    }}>
                      {c.service}
                    </span>
                    <span style={{ fontSize: 13, color: muted }}>{c.duration}</span>
                  </div>

                  <h3 style={{ fontSize: 22, fontWeight: 800, color: white, marginBottom: 8, lineHeight: 1.3 }}>
                    {c.title}
                  </h3>
                  <div style={{ fontSize: 13, color: cyan, fontWeight: 600, marginBottom: 20 }}>
                    Industry: {c.industry}
                  </div>

                  <p style={{ fontSize: 14, color: textCol, lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
                    {c.challenge}
                  </p>

                  <div style={{
                    borderTop: `1px solid ${border}`, paddingTop: 20, display: "flex",
                    justifyContent: "space-between", alignItems: "center"
                  }}>
                    <div>
                      <div style={{ fontSize: 11, color: muted, textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>Outcome Impact</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: neon, marginTop: 4 }}>
                        {c.impact.length > 50 ? `${c.impact.substring(0, 48)}...` : c.impact}
                      </div>
                    </div>
                    <span style={{ color: accentColor, fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 4 }}>
                      Read Details →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. FEATURED CASE STUDY (Full-Width Highlight Panel) */}
      <section ref={detailRef} style={{ padding: "80px 56px", background: bg2, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontSize: 12, color: cyan, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Active Case File</span>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: white, marginTop: 4 }}>
                {selectedCase.title}
              </h2>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <Btn onClick={() => showToast("Contact us to receive full reports")} style={{ background: cyan, borderColor: cyan, color: bg, padding: "12px 28px", fontSize: 14, fontWeight: 700 }}>
                Download Sample Report
              </Btn>
            </div>
          </div>

          <div className="featured-case-container" style={{
            border: `1px solid rgba(255, 255, 255, 0.12)`,
            borderRadius: 24, padding: "48px 40px",
            background: card,
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            position: "relative"
          }}>
            {/* Top Accent bar matching current active case */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: SERVICE_COLORS[selectedCase.service] || cyan }} />

            {/* Problem | Approach | Methodology */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginBottom: 40 }} className="featured-details-grid">
              <div>
                <h4 style={{ color: white, fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: red }}>■</span> The Problem
                </h4>
                <p style={{ fontSize: 14, color: textCol, lineHeight: 1.6 }}>{selectedCase.challenge}</p>
              </div>
              <div style={{ borderLeft: `1px solid ${border}`, paddingLeft: 40 }} className="featured-details-col">
                <h4 style={{ color: white, fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: cyan }}>■</span> Our Approach
                </h4>
                <p style={{ fontSize: 14, color: textCol, lineHeight: 1.6 }}>{selectedCase.approach}</p>
              </div>
              <div style={{ borderLeft: `1px solid ${border}`, paddingLeft: 40 }} className="featured-details-col">
                <h4 style={{ color: white, fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: neon }}>■</span> Methodology
                </h4>
                <p style={{ fontSize: 14, color: textCol, lineHeight: 1.6 }}>{selectedCase.methodology}</p>
              </div>
            </div>

            {/* Findings & Outcomes */}
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, borderTop: `1px solid ${border}`, paddingTop: 40 }} className="featured-findings-grid">
              {/* Findings */}
              <div>
                <h4 style={{ color: white, fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Discovered Findings</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {selectedCase.findings.map((f, index) => {
                    const badgeColor = SEVERITY_COLORS[f.severity] || cyan;
                    return (
                      <div key={index} style={{
                        display: "flex", alignItems: "flex-start", gap: 12,
                        background: card2, border: `1px solid ${border}`,
                        borderRadius: 10, padding: 16
                      }}>
                        <span style={{
                          background: `${badgeColor}15`, border: `1px solid ${badgeColor}33`,
                          color: badgeColor, fontSize: 10, fontWeight: 700, padding: "2px 8px",
                          borderRadius: 4, textTransform: "uppercase", width: 68, textAlign: "center", flexShrink: 0
                        }}>
                          {f.severity}
                        </span>
                        <div style={{ fontSize: 13.5, color: white, fontWeight: 600 }}>{f.issue}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Outcomes */}
              <div style={{ borderLeft: `1px solid ${border}`, paddingLeft: 40 }} className="featured-findings-col">
                <h4 style={{ color: white, fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Remediation Outcome</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {selectedCase.outcome.map((o, index) => (
                    <div key={index} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: "50%", background: `rgba(0, 255, 156, 0.1)`,
                        border: `1px solid ${neon}33`, color: neon, display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <div style={{ fontSize: 14, color: textCol, lineHeight: 1.5, paddingTop: 3 }}>
                        {o}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact statement box */}
            <div style={{
              background: `linear-gradient(90deg, rgba(0, 255, 156, 0.08) 0%, transparent 100%)`,
              border: `1px solid ${neon}33`, borderRadius: 12, padding: "20px 24px", marginTop: 40,
              display: "flex", alignItems: "center", gap: 16
            }}>
              <span style={{ fontSize: 24 }}>📈</span>
              <div>
                <div style={{ fontSize: 11, color: muted, fontWeight: 700, textTransform: "uppercase" }}>Total Business Impact</div>
                <div style={{ fontSize: 16, color: white, fontWeight: 700, marginTop: 2 }}>{selectedCase.impact}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section style={{
        padding: "100px 56px", background: `#000000 radial-gradient(circle at 100% 100%, rgba(0, 204, 255, 0.05) 0%, transparent 80%)`,
        borderTop: `1px solid ${border}`, textAlign: "center"
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 16 }}>
            Is Your Organization Secure?
          </h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 36, lineHeight: 1.6 }}>
            Get a professional security assessment customized to your system architecture, business needs, and compliance frameworks.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Btn style={{ padding: "16px 36px", fontSize: 16, background: cyan, borderColor: cyan, color: bg, fontWeight: 700 }}>
              Request Security Assessment
            </Btn>
          </Link>
        </div>
      </section>
    </main>
  );
}
