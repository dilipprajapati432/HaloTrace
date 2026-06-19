import { useState } from "react";
import { Btn } from "../ui/UI";
import { bg, card, card2, border, border2, neon, cyan, white, muted, textCol } from "../../styles/tokens";

const FOOTER_COLS = [
  { head: "TRAINING",  links: ["All Courses","Workshops","Certifications","Internships","Student Portal"] },
  { head: "SERVICES",  links: ["VAPT","Digital Forensics","Incident Response","Security Audits","Consulting"] },
  { head: "COMPANY",   links: ["About Us","Case Studies","Careers","Blog","Contact Us"] },
  { head: "RESOURCES", links: ["Tools","Cybersecurity News","Free Resources","Glossary","FAQ"] },
];

const SOCIAL = [
  { icon: "𝕏",  label: "Twitter" },
  { icon: "in", label: "LinkedIn" },
  { icon: "▶",  label: "YouTube" },
  { icon: "📷", label: "Instagram" },
];

const CONTACT_INFO = [
  ["✉️", "hello@skillnetics.com"],
  ["📞", "Phone Number"],
  ["📍", "Gujarat, India"],
];

const LEGAL_LINKS = ["Privacy Policy", "Terms & Conditions", "Security Policy", "Responsible Disclosure"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer-container" style={{ background: "#030c14", padding: "52px 56px 28px",
      borderTop: `1px solid ${border}` }}>

      {/* Main grid */}
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr",
        gap: 36, marginBottom: 38 }}>

        {/* Brand column */}
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 13 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, flexShrink: 0,
              background: `linear-gradient(135deg,${neon},${cyan})`,
              display: "grid", placeItems: "center", fontWeight: 900, fontSize: 18, color: bg }}>S</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: white, lineHeight: 1.1 }}>
              SKILLNETICS × <span style={{ color: cyan }}>HALOTRACE</span>
            </div>
          </div>
          <p style={{ fontSize: 12.5, color: muted, lineHeight: 1.72, margin: "0 0 18px" }}>
            Building Cybersecurity Excellence<br />through Training &amp; Professional Services.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {SOCIAL.map(({ icon, label }) => (
              <button key={label} title={label} style={{
                width: 32, height: 32, borderRadius: "50%",
                background: card, border: `1px solid ${border2}`,
                display: "grid", placeItems: "center", cursor: "pointer",
                fontSize: 13, color: muted, transition: "all .15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = neon; e.currentTarget.style.color = neon; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = border2; e.currentTarget.style.color = muted; }}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map(({ head, links }) => (
          <div key={head}>
            <div style={{ fontSize: 11, fontWeight: 700, color: white,
              letterSpacing: 1.8, marginBottom: 14, textTransform: "uppercase" }}>{head}</div>
            {links.map(l => (
              <a key={l} href="#" style={{ display: "block", color: muted,
                textDecoration: "none", fontSize: 12.5, marginBottom: 9, transition: "color .15s" }}
                onMouseEnter={e => e.currentTarget.style.color = neon}
                onMouseLeave={e => e.currentTarget.style.color = muted}>{l}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Contact + newsletter */}
      <div className="footer-newsletter" style={{ borderTop: `1px solid ${border}`, paddingTop: 22,
        display: "grid", gridTemplateColumns: "1fr auto", gap: 20,
        marginBottom: 22, alignItems: "center" }}>
        <div className="contact-info" style={{ display: "flex", gap: 26, flexWrap: "wrap" }}>
          {CONTACT_INFO.map(([icon, text]) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: muted }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
        <div className="newsletter-form" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="newsletter-label" style={{ fontSize: 11, color: muted, whiteSpace: "nowrap" }}>Subscribe to Newsletter</span>
          <input
            className="newsletter-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            style={{ background: card2, border: `1px solid ${border2}`, borderRadius: 5,
              padding: "7px 12px", fontSize: 12, color: textCol, outline: "none",
              width: 196, fontFamily: "inherit", transition: "border-color .15s" }}
            onFocus={e => e.target.style.borderColor = neon}
            onBlur={e => e.target.style.borderColor = border2}
          />
          <Btn style={{ padding: "7px 14px", fontSize: 13 }}>→</Btn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{ borderTop: `1px solid ${border}`, paddingTop: 18,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 10 }}>
        <div style={{ fontSize: 11, color: muted }}>
          © 2024 Skillnetics × HaloTrace. All Rights Reserved.
        </div>
        <div className="footer-legal-links" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {LEGAL_LINKS.map(l => (
            <a key={l} href="#" style={{ fontSize: 11, color: muted,
              textDecoration: "none", transition: "color .15s" }}
              onMouseEnter={e => e.currentTarget.style.color = neon}
              onMouseLeave={e => e.currentTarget.style.color = muted}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
