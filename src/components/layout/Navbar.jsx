import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Btn } from "../ui/UI";
import { bg, bg2, card, border, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Training", path: "#", subLinks: ["All Courses", "Workshops", "Certifications", "Internships", "Student Portal"] },
  { label: "Services", path: "#", subLinks: ["VAPT", "Digital Forensics", "Incident Response", "Security Audits", "Consulting"] },
  { label: "Courses", path: "#" },
  { label: "Labs", path: "#" },
  { label: "Resources", path: "#", subLinks: ["Tools", "Cybersecurity News", "Free Resources", "Glossary", "FAQ"] },
  { label: "About", path: "/about" },
  { label: "Contact", path: "#" },
];

function NavItem({ item, currentPath }) {
  const [hovered, setHovered] = useState(false);
  const { label, path, subLinks } = item;
  
  const isActive = currentPath === path && path !== "#";

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={path || "#"} style={{
        color: isActive ? white : (hovered ? white : textCol),
        textDecoration: "none",
        fontSize: 14,
        fontWeight: isActive ? 700 : 500,
        padding: "6px 10px",
        display: "inline-flex", alignItems: "center", gap: 4,
        transition: "color .15s",
      }}>
        {label}
      </Link>

      {subLinks && hovered && (
        <div style={{
          position: "absolute", top: "100%", left: 0, paddingTop: "8px", zIndex: 1000
        }}>
          <div style={{
            background: "rgba(4, 10, 18, 0.95)", 
            backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
            border: `1px solid ${border2}`,
            borderTop: `2px solid ${cyan}`,
            borderRadius: "0 0 8px 8px", padding: "8px 0",
            minWidth: 180, display: "flex", flexDirection: "column",
            boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${cyan}1a`,
          }}>
            {subLinks.map(sub => (
              <Link key={sub} to="#" style={{
                color: textCol, textDecoration: "none",
                padding: "10px 16px", fontSize: 13, fontWeight: 500,
                transition: "background .15s, color .15s"
              }}
                onMouseEnter={e => { e.currentTarget.style.background = border2; e.currentTarget.style.color = neon; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = textCol; }}>
                {sub}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="nav-container" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, height: 72,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px",
      background: scrolled ? `${bg}f2` : bg2,
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${scrolled ? border2 : border}`,
      transition: "all .25s",
    }}>
      {/* Logo */}
      <div className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: neon }}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
            <path d="M12 22s8-4 8-10V8.5L12 5.5 4 8.5v3.5c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        </div>
        <div>
          <div className="nav-title" style={{ fontSize: 18, fontWeight: 900, color: white, lineHeight: 1.1, letterSpacing: 0.5 }}>
            SKILLNETICS <span style={{ color: muted, fontWeight: 300, margin: "0 4px" }}>×</span>{" "}
            <span style={{ color: cyan }}>H</span><span style={{ color: white }}>ALOTRACE</span>
          </div>
          <div className="nav-subtitle" style={{ fontSize: 11, color: muted, letterSpacing: .2, marginTop: 2 }}>
            Cybersecurity Training &amp; Enterprise Security Solutions
          </div>
        </div>
      </div>

      {/* Nav links */}
      <div className={`mobile-nav-links ${menuOpen ? 'open' : ''}`} style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {navItems.map((item) => (
          <NavItem key={item.label} item={item} currentPath={location.pathname} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Btn className="nav-book-btn" style={{ padding: "12px 28px", fontSize: 14, fontWeight: 700, background: neon, color: "#040e1a", borderColor: neon }}>
          Book Consultation
        </Btn>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
