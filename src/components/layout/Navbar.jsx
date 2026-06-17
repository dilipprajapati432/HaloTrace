import { useState, useEffect } from "react";
import { Btn } from "../ui/UI";
import { bg, bg2, card, border, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const navItems = [
  { label: "Home", active: true },
  { label: "Training", subLinks: ["All Courses", "Workshops", "Certifications", "Internships", "Student Portal"] },
  { label: "Services", subLinks: ["VAPT", "Digital Forensics", "Incident Response", "Security Audits", "Consulting"] },
  { label: "Courses" },
  { label: "Labs" },
  { label: "Resources", subLinks: ["Tools", "Cybersecurity News", "Free Resources", "Glossary", "FAQ"] },
  { label: "About" },
  { label: "Contact" },
];

function NavItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { label, active, subLinks } = item;

  return (
    <div 
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href="#" style={{
        color: active ? white : (hovered ? white : textCol),
        textDecoration: "none",
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        padding: "6px 10px",
        display: "inline-flex", alignItems: "center", gap: 4,
        transition: "color .15s",
      }}>
        {label}
        {subLinks && <span style={{ fontSize: 10, color: muted, transform: "translateY(1px)" }}>∨</span>}
      </a>
      
      {subLinks && hovered && (
        <div style={{
          position: "absolute", top: "100%", left: 0, marginTop: "8px",
          background: card, border: `1px solid ${border2}`,
          borderRadius: 8, padding: "8px 0",
          minWidth: 180, display: "flex", flexDirection: "column",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          zIndex: 1000
        }}>
          {subLinks.map(sub => (
            <a key={sub} href="#" style={{
              color: textCol, textDecoration: "none",
              padding: "10px 16px", fontSize: 13, fontWeight: 500,
              transition: "background .15s, color .15s"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = border2; e.currentTarget.style.color = neon; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = textCol; }}>
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, height: 72,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px",
      background: scrolled ? `${bg}f2` : bg2,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${scrolled ? border2 : border}`,
      transition: "all .25s",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: neon }}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <path d="M12 22s8-4 8-10V8.5L12 5.5 4 8.5v3.5c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: white, lineHeight: 1.1, letterSpacing: 0.5 }}>
            SKILLNETICS <span style={{ color: muted, fontWeight: 300, margin: "0 4px" }}>×</span>{" "}
            <span style={{ color: cyan }}>H</span><span style={{ color: white }}>ALOTRACE</span>
          </div>
          <div style={{ fontSize: 11, color: muted, letterSpacing: .2, marginTop: 2 }}>
            Cybersecurity Training &amp; Enterprise Security Solutions
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {navItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </div>

      <Btn style={{ padding: "12px 28px", fontSize: 14, fontWeight: 700, background: neon, color: "#040e1a", borderColor: neon }}>
        Book Consultation
      </Btn>
    </nav>
  );
}
