import { bg2, card, border, border2, neon, cyan, white, muted } from "../../styles/tokens";

const POSTS = [
  { date: "10 May 2024", title: "Top 10 Web Application Security Risks in 2024",
    emoji: "🔐", gradient: "linear-gradient(135deg,#0b1a30,#0f2850)" },
  { date: "08 May 2024", title: "A Beginner's Guide to OSINT Techniques",
    emoji: "🕵️", gradient: "linear-gradient(135deg,#0a1a10,#0f2818)" },
  { date: "05 May 2024", title: "Understanding Ransomware Attack Kill Chain",
    emoji: "🦠", gradient: "linear-gradient(135deg,#1a0808,#280e0e)" },
];

export default function Blog() {
  return (
    <section style={{ padding: "60px 56px", background: bg2 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4 }}>
          FROM OUR <span style={{ color: neon }}>BLOG</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          View All Articles →
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {POSTS.map(({ date, title, emoji, gradient }) => (
          <div key={title} style={{
            background: card, border: `1px solid ${border2}`,
            borderRadius: 12, overflow: "hidden", cursor: "pointer",
            transition: "border-color .18s, transform .18s, box-shadow .18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = neon;
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${neon}10`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ height: 120, background: gradient,
              display: "grid", placeItems: "center", fontSize: 50,
              borderBottom: `1px solid ${border}` }}>{emoji}</div>
            <div style={{ padding: "15px 18px" }}>
              <div style={{ fontSize: 11, color: muted, marginBottom: 8 }}>{date}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: white, margin: "0 0 14px", lineHeight: 1.42 }}>
                {title}
              </h3>
              <a href="#" style={{ color: neon, fontSize: 12.5, textDecoration: "none",
                fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4,
                transition: "gap .15s" }}
                onMouseEnter={e => e.currentTarget.style.gap = "8px"}
                onMouseLeave={e => e.currentTarget.style.gap = "4px"}>
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
