import { useState, useEffect } from "react";
import { Btn } from "../ui/UI";
import { bg, bg2, border, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    ["Home", true],
    ["Training", false, true],
    ["Services", false, true],
    ["Courses"],
    ["Labs"],
    ["Resources", false, true],
    ["About"],
    ["Contact"],
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, height: 60,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px",
      background: scrolled ? `${bg}f2` : bg2,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${scrolled ? border2 : border}`,
      transition: "all .25s",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8, flexShrink: 0,
          background: `linear-gradient(135deg,${neon},${cyan})`,
          display: "grid", placeItems: "center", fontWeight: 900, fontSize: 18, color: bg,
        }}>S</div>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 800, color: white, lineHeight: 1.1 }}>
            SKILLNETICS <span style={{ color: muted, fontWeight: 400 }}>×</span>{" "}
            <span style={{ color: cyan }}>HALOTRACE</span>
          </div>
          <div style={{ fontSize: 9, color: muted, letterSpacing: .3 }}>
            Cybersecurity Training &amp; Enterprise Security Solutions
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {links.map(([label, active, hasDropdown]) => (
          <a key={label} href="#" style={{
            color: active ? neon : textCol,
            textDecoration: "none",
            fontSize: 13,
            fontWeight: active ? 600 : 400,
            padding: "6px 10px",
            borderRadius: 5,
            borderBottom: active ? `2px solid ${neon}` : "2px solid transparent",
            display: "inline-flex", alignItems: "center", gap: 3,
            transition: "color .15s",
          }}
            onMouseEnter={e => !active && (e.currentTarget.style.color = white)}
            onMouseLeave={e => !active && (e.currentTarget.style.color = textCol)}>
            {label}
            {hasDropdown && <span style={{ fontSize: 9, color: muted }}>▾</span>}
          </a>
        ))}
      </div>

      <Btn style={{ padding: "8px 20px", fontSize: 13 }}>Book Consultation</Btn>
    </nav>
  );
}
