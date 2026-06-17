import { bg2, card, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const SERVICES = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" /></svg>,
    name: "VAPT",
    sub: "Vulnerability Assessment\n& Penetration Testing"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
    name: "Web Security\nTesting"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    name: "Mobile App\nSecurity Testing"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><path d="M20 16.2A7 7 0 0 0 17.5 4h-1.54C14.7 1.6 12.8 0 10.5 0A6.5 6.5 0 0 0 4 6.5C1.7 7 0 9.1 0 11.5 0 14.5 2.5 17 5.5 17h13.5c2.5 0 4.5-2 4.5-4.5 0-1.8-1-3.3-2.5-4z" stroke="none" fill="rgba(0,255,170,0.1)" /><path d="M20.5 16.2A7 7 0 0 0 17.5 4h-1.54C14.7 1.6 12.8 0 10.5 0A6.5 6.5 0 0 0 4 6.5C1.7 7 0 9.1 0 11.5 0 14.5 2.5 17 5.5 17h13.5c2.5 0 4.5-2 4.5-4.5 0-1.8-1-3.3-2.5-4z" /><circle cx="12" cy="11" r="3" /><line x1="12" y1="14" x2="12" y2="18" /></svg>,
    name: "API Security\nTesting"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cyan} strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v3l2 2" /></svg>,
    name: "Digital\nForensics"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M13 8l-2 5h3l-2 5" /></svg>,
    name: "Incident\nResponse"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /><path d="M12 11V9a2 2 0 1 0-4 0" /><rect x="10" y="11" width="4" height="5" rx="1" ry="1" /></svg>,
    name: "Cloud Security\nAssessment"
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={neon} strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="8.54" y2="14" /><line x1="10.88" y1="21.94" x2="15.46" y2="14" /></svg>,
    name: "Security\nConsulting"
  },
];

export default function Services() {
  return (
    <section style={{ padding: "60px 56px", background: bg2 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
        <h2 style={{ textAlign: "center", fontSize: 18, fontWeight: 800, color: white, margin: 0, letterSpacing: .4, width: "100%" }}>
          OUR SECURITY <span style={{ color: neon }}>SERVICES</span>
        </h2>
      </div>

      <div style={{
        border: `1px solid ${border2}`,
        borderRadius: 12,
        padding: "40px 20px 24px",
        background: "rgba(4, 10, 18, 0.4)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
      }}>

        {/* Cards container */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 12,
          overflowX: "auto",
          padding: "16px 8px",
          margin: "-16px -8px",
          scrollbarWidth: "none", /* Hide scrollbar for cleaner look if it wraps */
          WebkitOverflowScrolling: "touch"
        }}>
          {SERVICES.map(({ icon, name, sub }) => (
            <div key={name} style={{
              background: card,
              border: `1px solid ${border2}`,
              borderRadius: 8,
              padding: "16px 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              transition: "all .2s ease",
              minWidth: 150
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = neon;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 4px 16px ${neon}14`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = border2;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}>
              <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: white, lineHeight: 1.2, whiteSpace: "pre-line" }}>
                  {name}
                </div>
                {sub && (
                  <div style={{ fontSize: 9.5, color: muted, marginTop: 4, lineHeight: 1.3, whiteSpace: "pre-line" }}>
                    {sub}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Link at the bottom */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <a href="#" style={{ color: cyan, fontSize: 13, textDecoration: "none", fontWeight: 600 }}
            onMouseEnter={e => e.currentTarget.style.color = neon}
            onMouseLeave={e => e.currentTarget.style.color = cyan}>
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
