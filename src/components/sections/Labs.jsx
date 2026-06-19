import { bg2, card, border, border2, neon, cyan, white, textCol } from "../../styles/tokens";

const LABS = [
  { name: "Network Scanning",    bgImg: "/network%20malware.png", bgSize: "300% 100%", bgPos: "0% center" },
  { name: "Wireshark Analysis",  bgImg: "/network%20malware.png", bgSize: "300% 100%", bgPos: "50% center" },
  { name: "Malware Analysis",    bgImg: "/network%20malware.png", bgSize: "300% 100%", bgPos: "100% center" },
  { name: "OSINT Investigation", bgImg: "/OSINT%20and%20SIEM.png", bgSize: "200% 100%", bgPos: "0% center" },
  { name: "SIEM Dashboard",      bgImg: "/OSINT%20and%20SIEM.png", bgSize: "200% 100%", bgPos: "100% center" },
];

export default function Labs() {
  return (
    <section className="section-container" style={{ padding: "60px 56px", background: bg2 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4 }}>
          CYBER LABS &amp; <span style={{ color: neon }}>DEMONSTRATIONS</span>
        </h2>
        <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = neon}
          onMouseLeave={e => e.currentTarget.style.color = cyan}>
          Explore All Labs →
        </a>
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
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 14,
          overflowX: "auto",
          padding: "16px 8px 16px",
          margin: "-16px -8px 0",
          scrollbarWidth: "thin",
          scrollbarColor: `${border2} transparent`
        }}>
        {LABS.map(({ name, bgImg, bgSize, bgPos }, idx) => (
          <div key={name} style={{
            background: card, border: `1px solid ${border2}`,
            borderRadius: 12, overflow: "hidden", cursor: "pointer",
            transition: "border-color .18s, transform .18s, box-shadow .18s",
            minWidth: 220
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = cyan;
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = `0 6px 24px ${cyan}14`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = border2;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <div style={{ height: 136, background: `url('${bgImg}') ${bgPos} / ${bgSize} no-repeat`,
              borderBottom: `1px solid ${border}`, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0,
                background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,204,255,.025) 3px,rgba(0,204,255,.025) 4px)" }} />
            </div>
            <div style={{ padding: "12px 14px", fontSize: 12.5, fontWeight: 600, color: textCol }}>
              {name}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
