import { Link, useNavigate } from "react-router-dom";
import { Btn, Tag } from "../ui/UI";
import { bg, card, border, border2, neon, cyan, white, muted } from "../../styles/tokens";

const LEVEL_COLOR = {
  "Intermediate": cyan,
  "Beginner to Advanced": neon,
  "Beginner": "#a0b4ff",
};

const COURSES = [
  { title: "Ethical Hacking", level: "Intermediate", weeks: 12 },
  { title: "Network Security", level: "Intermediate", weeks: 10 },
  { title: "Digital Forensics", level: "Intermediate", weeks: 10 },
  { title: "OSINT Mastery", level: "Beginner to Advanced", weeks: 8 },
  { title: "SOC Analyst", level: "Intermediate", weeks: 10 },
  { title: "Python for Cybersecurity", level: "Beginner", weeks: 8 },
];

export default function Courses() {
  const navigate = useNavigate();
  return (
    <section className="section-container" style={{ padding: "60px 56px", background: bg, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4, textTransform: "uppercase" }}>
          POPULAR <span style={{ color: neon }}>COURSES</span>
        </h2>
        <Link to="/courses" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All Courses →
        </Link>
      </div>

      <div style={{
        border: `1px solid ${border2}`,
        borderRadius: 12,
        padding: "36px 20px",
        background: "rgba(4, 10, 18, 0.4)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 16,
          overflowX: "auto",
          padding: "16px 8px 20px",
          margin: "-16px -8px 0",
          scrollbarWidth: "thin",
          scrollbarColor: `${border2} transparent`
        }}>
          {COURSES.map(({ title, level, weeks }, idx) => (
            <div className="course-card-wrapper" key={title} style={{
              background: "rgba(4, 10, 18, 0.4)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${border2}`,
              borderRadius: 12, overflow: "hidden", cursor: "pointer",
              transition: "transform .2s, border-color .2s, box-shadow .2s",
              minWidth: 380,
              display: "flex", flexDirection: "column"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = neon;
                e.currentTarget.style.boxShadow = `0 8px 24px ${neon}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = border2;
                e.currentTarget.style.boxShadow = "none";
              }}>
              <div style={{
                flex: 1,
                background: `linear-gradient(90deg, rgba(4,10,18,0) 30%, #040a12 55%), url('/course-bg-${idx + 1}.png') left center / 55% 100% no-repeat, #040a12`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "32px 24px 32px 45%"
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: white, margin: "0 0 6px", lineHeight: 1.3 }}>
                  {title}
                </h3>
                <div style={{ fontSize: 15, color: white, opacity: 0.8, marginBottom: 20 }}>
                  {level}
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 20, fontSize: 13, color: white, fontWeight: 600 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#ffb800" }}>⏱</span> {weeks} Weeks
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: neon }}>📜</span> Certificate
                  </span>
                </div>
                <Btn onClick={() => navigate('/register')} style={{ width: "100%", justifyContent: "center", padding: "10px 0", fontSize: 14, fontWeight: 700, background: neon, color: "#040e1a", borderColor: neon }}>
                  Enroll Now
                </Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
