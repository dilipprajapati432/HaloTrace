import { useState } from "react";
import { Tag } from "../ui/UI";
import { card, card2, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const TESTIMONIALS = [
  { name: "Rohit Sharma",  role: "Security Analyst @ Deloitte",  avatar: "👨", text: "Skillnetics helped me build a strong foundation in cybersecurity. The hands-on labs and real-world projects boosted my confidence." },
  { name: "Priya Nair",    role: "SOC Engineer @ Infosys",        avatar: "👩", text: "The VAPT course was incredibly hands-on. I landed my dream job within two months of completing the certification." },
  { name: "Arjun Mehta",   role: "Penetration Tester @ HCL",     avatar: "🧑", text: "Best cybersecurity training platform in India. The instructors are industry professionals who bring real-world experience." },
  { name: "Sneha Gupta",   role: "Digital Forensics @ Wipro",     avatar: "👩", text: "From zero to hero — I had no prior experience and now I work at one of the top IT firms. HaloTrace's training is world-class." },
];

const NavBtn = ({ onClick, children }) => (
  <button onClick={onClick} style={{
    width: 30, height: 30, borderRadius: "50%", background: card2,
    border: `1px solid ${border2}`, color: white, cursor: "pointer",
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
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <h2 style={{ fontSize: 17, fontWeight: 800, color: white, margin: 0 }}>
          STUDENT <span style={{ color: neon }}>SUCCESS STORIES</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 12, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All →
        </a>
      </div>

      <div style={{ background: card, border: `1px solid ${border2}`, borderRadius: 12, padding: "24px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <NavBtn onClick={prev}>‹</NavBtn>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                background: `linear-gradient(135deg,${neon},${cyan})`,
                display: "grid", placeItems: "center", fontSize: 26 }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: 700, color: white, fontSize: 14.5, marginBottom: 5 }}>{t.name}</div>
                <Tag color={cyan}>{t.role}</Tag>
              </div>
            </div>
            <p style={{ fontSize: 13, color: textCol, lineHeight: 1.72, margin: "0 0 14px" }}>{t.text}</p>
            <div style={{ display: "flex", gap: 10, fontSize: 13 }}>
              <a href="#" style={{ color: cyan, textDecoration: "none", fontWeight: 600, transition: "color .15s" }}
                onMouseEnter={e => e.currentTarget.style.color = neon}
                onMouseLeave={e => e.currentTarget.style.color = cyan}>in</a>
              <a href="#" style={{ color: muted, textDecoration: "none", transition: "color .15s" }}
                onMouseEnter={e => e.currentTarget.style.color = neon}
                onMouseLeave={e => e.currentTarget.style.color = muted}>🔗</a>
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
