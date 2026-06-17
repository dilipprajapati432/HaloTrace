import { Btn, Tag } from "../ui/UI";
import { bg, card, border, border2, neon, cyan, white, muted } from "../../styles/tokens";

const LEVEL_COLOR = {
  "Intermediate":         cyan,
  "Beginner to Advanced": neon,
  "Beginner":             "#a0b4ff",
};

const COURSE_GRADIENTS = [
  "linear-gradient(135deg,#0a0f28,#1a0e3a)",
  "linear-gradient(135deg,#0a1a1f,#0e2a3a)",
  "linear-gradient(135deg,#0a1428,#0e2040)",
  "linear-gradient(135deg,#0f1a10,#0a2818)",
  "linear-gradient(135deg,#1a0a14,#2a0e22)",
  "linear-gradient(135deg,#0a1030,#0e1848)",
];

const COURSES = [
  { title: "Ethical Hacking",           level: "Intermediate",         weeks: 12, emoji: "⚔️" },
  { title: "Network Security",           level: "Intermediate",         weeks: 10, emoji: "🌐" },
  { title: "Digital Forensics",          level: "Intermediate",         weeks: 10, emoji: "🔍" },
  { title: "OSINT Mastery",             level: "Beginner to Advanced",  weeks: 8,  emoji: "🕵️" },
  { title: "SOC Analyst",               level: "Intermediate",         weeks: 10, emoji: "📊" },
  { title: "Python for Cybersecurity",  level: "Beginner",             weeks: 8,  emoji: "🐍" },
];

export default function Courses() {
  return (
    <section style={{ padding: "60px 56px", background: bg }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4 }}>
          POPULAR <span style={{ color: neon }}>COURSES</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All Courses →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
        {COURSES.map(({ title, level, weeks, emoji }, idx) => (
          <div key={title} style={{
            background: card, border: `1px solid ${border2}`,
            borderRadius: 12, overflow: "hidden", cursor: "pointer",
            transition: "transform .18s, border-color .18s, box-shadow .18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = neon;
            e.currentTarget.style.boxShadow = `0 8px 28px ${neon}14`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ height: 112, background: COURSE_GRADIENTS[idx % COURSE_GRADIENTS.length],
              display: "grid", placeItems: "center", fontSize: 48,
              borderBottom: `1px solid ${border}` }}>{emoji}</div>
            <div style={{ padding: "13px 14px" }}>
              <Tag color={LEVEL_COLOR[level] || cyan}>{level}</Tag>
              <h3 style={{ fontSize: 13.5, fontWeight: 700, color: white, margin: "8px 0 7px", lineHeight: 1.3 }}>
                {title}
              </h3>
              <div style={{ display: "flex", gap: 10, marginBottom: 12, fontSize: 11, color: muted }}>
                <span>⏱ {weeks} Weeks</span>
                <span>📜 Certificate</span>
              </div>
              <Btn style={{ width: "100%", justifyContent: "center", padding: "8px 0", fontSize: 12.5 }}>
                Enroll Now
              </Btn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
