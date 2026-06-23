import { border2, neon, cyan, white, muted } from "../../styles/tokens";

const STATS = [
  {
    icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    value: "5000+", label: "Students Trained", color: neon
  },
  {
    icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>,
    value: "150+", label: "Security Assessments", color: neon
  },
  {
    icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="2.5"></path></svg>,
    value: "100+", label: "Workshops Conducted", color: cyan
  },
  {
    icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><text x="12" y="16.5" fontSize="8" fontWeight="800" textAnchor="middle" fill="currentColor" strokeWidth="0" fontFamily="sans-serif">247</text></svg>,
    value: "24/7", label: "Security Expertise", color: cyan
  },
];

export default function TrustBar() {
  return (
    <div className="trust-bar-container" style={{
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
      padding: "0 56px", position: "relative", zIndex: 10, marginTop: -10
    }}>
      {STATS.map(({ icon, value, label, color }) => (
        <div key={label} className="trust-bar-card" style={{
          display: "flex", alignItems: "center", gap: 16,
          padding: "16px 20px",
          border: `1px solid ${border2}`,
          borderRadius: 8,
          background: "rgba(4, 10, 18, 0.5)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 0 20px ${color}05`,
        }}>
          <div style={{ color, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: white, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 12, color: muted, marginTop: 4 }}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
