import { neon, cyan, bg } from "../../styles/tokens";

export function Tag({ children, color = neon }) {
  return (
    <span style={{
      background: "transparent", color, border: `1px solid ${color}`,
      borderRadius: 999, padding: "6px 16px", fontSize: 11, fontWeight: 700,
      letterSpacing: 1.1, textTransform: "uppercase", display: "inline-block",
      lineHeight: 1.2,
    }}>{children}</span>
  );
}

export function Btn({ children, variant = "solid", style: extra = {}, onClick }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "10px 22px", borderRadius: 6, fontSize: 13, fontWeight: 700,
    cursor: "pointer", textDecoration: "none", border: "1px solid transparent",
    transition: "opacity .15s, transform .15s", fontFamily: "inherit",
    whiteSpace: "nowrap",
  };
  const variants = {
    solid:   { background: neon, color: "#040e1a", borderColor: neon },
    outline: { background: "transparent", color: cyan, borderColor: cyan },
    ghost:   { background: `${neon}18`, color: neon, borderColor: `${neon}44` },
  };
  const v = variants[variant] || variants.solid;
  return (
    <button style={{ ...base, ...v, ...extra }} onClick={onClick}
      onMouseEnter={e => { e.currentTarget.style.opacity = ".82"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}>
      {children}
    </button>
  );
}

export function Check({ text, color = neon }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5, color: "#ffffff" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0, marginTop: 1 }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

export function DotBullet({ text, color = cyan }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 7, fontSize: 12.5, color: "#ffffff" }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: color,
        flexShrink: 0, display: "inline-block", marginTop: 4 }} />
      <span>{text}</span>
    </div>
  );
}
