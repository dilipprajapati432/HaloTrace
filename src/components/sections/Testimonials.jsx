import { useState } from "react";
import { Link } from "react-router-dom";
import { Tag } from "../ui/UI";
import { card, card2, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const TESTIMONIALS = [
  { name: "Rohit Sharma",  role: "Security Analyst @ Deloitte",  avatar: "/rohit_avatar.png", text: "Skillnetics helped me build a strong foundation in cybersecurity. The hands-on labs and real-world projects boosted my confidence." },
  { name: "Priya Nair",    role: "SOC Engineer @ Infosys",        avatar: "/priya_avatar.png", text: "The VAPT course was incredibly hands-on. I landed my dream job within two months of completing the certification." },
  { name: "Arjun Mehta",   role: "Penetration Tester @ HCL",     avatar: "/profile_avatar.png", text: "Best cybersecurity training platform in India. The instructors are industry professionals who bring real-world experience." },
  { name: "Sneha Gupta",   role: "Digital Forensics @ Wipro",     avatar: "/sneha_avatar.png", text: "From zero to hero — I had no prior experience and now I work at one of the top IT firms. HaloTrace's training is world-class." },
];

const NavBtn = ({ onClick, children }) => (
  <button onClick={onClick} style={{
    width: 34, height: 34, borderRadius: "50%", background: "transparent",
    border: `1px solid rgba(255,255,255,0.15)`, color: white, cursor: "pointer",
    display: "grid", placeItems: "center", fontSize: 18, flexShrink: 0,
    transition: "border-color .15s",
  }}
  onMouseEnter={e => e.currentTarget.style.borderColor = neon}
  onMouseLeave={e => e.currentTarget.style.borderColor = border2}>
    {children}
  </button>
);

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const prev = () => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);

  return (
    <div className="testimonial-container" style={{
      border: `1px solid ${border2}`, borderRadius: 12, padding: "32px 28px",
      background: "rgba(4, 10, 18, 0.4)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <h2 style={{ fontSize: 17, fontWeight: 800, color: white, margin: 0, textTransform: "uppercase" }}>
          STUDENT <span style={{ color: neon }}>SUCCESS STORIES</span>
        </h2>
        <Link to="/casestudies" style={{ color: cyan, fontSize: 12, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All →
        </Link>
      </div>

      <div className="testimonial-card" style={{ background: card, border: `1px solid ${border2}`, borderRadius: 12, padding: "24px", height: 260, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NavBtn onClick={prev}>‹</NavBtn>

          <div className="testimonial-content" style={{ flex: 1, padding: "0 32px", display: "flex", gap: 32, alignItems: "center" }}>
            <div style={{ width: 140, height: 140, borderRadius: "50%", flexShrink: 0,
              background: "transparent", overflow: "hidden",
              boxShadow: `0 0 40px rgba(0,255,255,0.05)`,
              display: "grid", placeItems: "center", fontSize: 28 }}>
              {t.avatar.startsWith("/") ? <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : t.avatar}
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: white, fontSize: 17, marginBottom: 6 }}>{t.name}</div>
              <div style={{ color: cyan, fontSize: 12.5, fontWeight: 600, marginBottom: 16 }}>{t.role}</div>
              <p style={{ fontSize: 13, color: textCol, lineHeight: 1.72, margin: "0 0 16px", maxWidth: "90%" }}>{t.text}</p>
              <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: cyan, textDecoration: "none", fontWeight: 700, transition: "color .15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = neon}
                  onMouseLeave={e => e.currentTarget.style.color = cyan}>in</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: cyan, textDecoration: "none", transition: "color .15s", fontWeight: 700 }}
                  onMouseEnter={e => e.currentTarget.style.color = neon}
                  onMouseLeave={e => e.currentTarget.style.color = cyan}>🔗</a>
              </div>
            </div>
          </div>

          <NavBtn onClick={next}>›</NavBtn>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 18 }}>
          {TESTIMONIALS.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)}
              style={{ width: i === idx ? 20 : 8, height: 8, borderRadius: 4,
                background: i === idx ? neon : border2, cursor: "pointer",
                transition: "all .25s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}
