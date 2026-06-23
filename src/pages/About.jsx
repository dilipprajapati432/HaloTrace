import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bg2, bg, neon, cyan, white, muted, card, border2, orange, textCol } from "../styles/tokens";
import Partners from "../components/sections/Partners";
import { Btn, Tag } from "../components/ui/UI";

const TIMELINE = [
  { year: "2022", event: "Company Founded" },
  { year: "2023", event: "First 500 students trained" },
  { year: "2023", event: "HaloTrace security services launched" },
  { year: "2024", event: "100+ workshops conducted" },
  { year: "2024", event: "First enterprise VAPT client" },
  { year: "2025", event: "5000+ students milestone" },
];

const SKILLNETICS_STEPS = [
  { step: "01", title: "Concept", desc: "Master the theoretical foundations of cybersecurity." },
  { step: "02", title: "Hands-on Labs", desc: "Practice safely in our simulated environments." },
  { step: "03", title: "Real Projects", desc: "Apply skills to real-world scenarios." },
  { step: "04", title: "Certification", desc: "Get certified and land your dream job." },
];

const HALOTRACE_STEPS = [
  { step: "01", title: "Reconnaissance", desc: "Gathering critical intelligence." },
  { step: "02", title: "Assessment", desc: "Identifying active vulnerabilities." },
  { step: "03", title: "Exploit", desc: "Safe exploitation to prove impact." },
  { step: "04", title: "Report", desc: "Detailed executive & technical reports." },
  { step: "05", title: "Remediation", desc: "Assisting in patching vulnerabilities." },
];

const TEAM = [
  { name: "John Doe", role: "Lead Trainer & Ethical Hacker", bio: "Former red team lead with 10+ years experience.", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Jane Smith", role: "Security Researcher", bio: "Discovered zero-days in major enterprise software.", img: "https://i.pravatar.cc/150?img=47" },
  { name: "Alex Chen", role: "DFIR Specialist", bio: "Expert in digital forensics and incident response.", img: "https://i.pravatar.cc/150?img=33" },
  { name: "Sarah Connor", role: "Web Pentest Expert", bio: "Specializes in modern web app vulnerabilities.", img: "https://i.pravatar.cc/150?img=5" },
];

export default function About() {
  return (
    <main>
      {/* 1. PAGE HERO */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        marginTop: "72px",
        background: `linear-gradient(175deg, ${bg2}33 0%, ${bg}66 100%), url('/hero-bg%204.png') center 30% / cover no-repeat`,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "60px 56px",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <div style={{ fontSize: 13, color: muted, marginBottom: 16, display: "flex", gap: 8, alignItems: "center", fontWeight: 600 }}>
            <Link to="/" style={{ color: muted, textDecoration: "none", transition: "color .2s" }} 
              onMouseEnter={e => e.currentTarget.style.color = white}
              onMouseLeave={e => e.currentTarget.style.color = muted}>
              Home
            </Link>
            <span>&gt;</span>
            <span style={{ color: neon }}>About Us</span>
          </div>
          <h1 style={{
            fontFamily: "Orbitron, sans-serif", fontSize: 46, fontWeight: 900, color: white,
            margin: "0 0 16px", letterSpacing: -0.5
          }}>
            About Skillnetics × HaloTrace
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: 0, maxWidth: 600 }}>
            We build cybersecurity professionals and protect organizations — from a single unified platform.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="section-container" style={{ padding: "80px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
          
          {/* Mission Card */}
          <div style={{
            background: "rgba(4, 10, 18, 0.4)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${neon}66`, borderRadius: 16,
            padding: 40, boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px ${neon}05`, position: "relative", overflow: "hidden",
            transition: "transform 0.3s ease", cursor: "default"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: neon, filter: "blur(80px)", opacity: 0.15 }} />
            <Tag color={neon}>OUR MISSION</Tag>
            <p style={{ fontSize: 18, color: white, lineHeight: 1.6, marginTop: 24, fontWeight: 500 }}>
              "To make world-class cybersecurity education accessible and to build the next generation of security professionals through hands-on, practical training."
            </p>
          </div>

          {/* Vision Card */}
          <div style={{
            background: "rgba(4, 10, 18, 0.4)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${cyan}66`, borderRadius: 16,
            padding: 40, boxShadow: `0 20px 40px rgba(0,0,0,0.4), inset 0 0 40px ${cyan}05`, position: "relative", overflow: "hidden",
            transition: "transform 0.3s ease", cursor: "default"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: cyan, filter: "blur(80px)", opacity: 0.15 }} />
            <Tag color={cyan}>OUR VISION</Tag>
            <p style={{ fontSize: 18, color: white, lineHeight: 1.6, marginTop: 24, fontWeight: 500 }}>
              "To become South Asia's most trusted cybersecurity ecosystem — where individuals learn, grow, and where organizations stay secure."
            </p>
          </div>

        </div>
      </section>

      {/* 3. COMPANY STORY SECTION */}
      <section className="section-container" style={{ padding: "0 56px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "center" }}>
          
          {/* Left: Text */}
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 24 }}>The Story Behind the Shield</h2>
            <p style={{ fontSize: 15, color: textCol, lineHeight: 1.8, marginBottom: 16 }}>
              It started with a simple observation: the cybersecurity industry was facing a massive talent shortage, yet thousands of passionate individuals couldn't break into the field because traditional education was too theoretical.
            </p>
            <p style={{ fontSize: 15, color: textCol, lineHeight: 1.8, marginBottom: 16 }}>
              We founded Skillnetics to bridge the gap between textbook knowledge and real-world execution. By focusing intensely on hands-on labs, live fire exercises, and practical mentorship, we began producing engineers who were actually job-ready on day one.
            </p>
            <p style={{ fontSize: 15, color: textCol, lineHeight: 1.8 }}>
              As our reputation grew, organizations started approaching us not just to hire our graduates, but to secure their own infrastructures. That's when HaloTrace was born. Today, our dual ecosystem perfectly feeds itself: our real-world enterprise consulting (HaloTrace) directly informs our curriculum (Skillnetics), ensuring our students learn exactly what the industry demands right now.
            </p>
          </div>

          {/* Right: Timeline */}
          <div style={{ background: card, border: `1px solid ${border2}`, borderRadius: 16, padding: "40px 32px" }}>
            <h3 style={{ fontSize: 20, color: white, marginBottom: 30, fontWeight: 800 }}>Our Journey</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 7, top: 10, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${neon}, ${cyan}, transparent)` }} />
              
              {TIMELINE.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  key={i} 
                  style={{ display: "flex", gap: 20, position: "relative", zIndex: 2 }}
                >
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: bg, border: `3px solid ${neon}`, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: neon, marginBottom: 4 }}>{item.year}</div>
                    <div style={{ fontSize: 14, color: white, fontWeight: 500 }}>{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY WE STARTED (Quote) */}
      <section style={{ padding: "80px 56px", background: `linear-gradient(90deg, ${neon}08, transparent)` }}>
        <div style={{
          borderLeft: `4px solid ${neon}`, paddingLeft: 40, maxWidth: 900, margin: "0 auto"
        }}>
          <h3 style={{ 
            fontSize: 28, fontStyle: "italic", fontWeight: 300, color: white, 
            lineHeight: 1.5, margin: "0 0 24px" 
          }}>
            "We saw too many organizations getting breached from preventable vulnerabilities, and too many talented students unable to find quality cybersecurity education. We decided to solve both problems."
          </h3>
          <div style={{ fontSize: 16, color: neon, fontWeight: 700 }}>
            — Founders, Skillnetics × HaloTrace
          </div>
        </div>
      </section>

      {/* 5. DUAL METHODOLOGY */}
      <section className="section-container" style={{ padding: "80px 56px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: white, margin: "0 0 16px" }}>Our Dual Methodology</h2>
          <p style={{ color: muted, fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            How we approach education and enterprise security with the same rigorous standard.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {/* Skillnetics Method */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: cyan, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: cyan }}/>
              Skillnetics Training Flow
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SKILLNETICS_STEPS.map((step) => (
                <div key={step.step} style={{
                  background: "rgba(4, 10, 18, 0.4)", border: `1px solid ${border2}`, borderRadius: 12, padding: 20,
                  display: "flex", gap: 20, alignItems: "center", cursor: "pointer", transition: "all .3s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.borderColor = cyan;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${cyan}1a`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = border2;
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: cyan, opacity: 0.5 }}>{step.step}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: white, marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: muted }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HaloTrace Method */}
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: orange, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: orange }}/>
              HaloTrace Security Flow
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {HALOTRACE_STEPS.map((step) => (
                <div key={step.step} style={{
                  background: "rgba(4, 10, 18, 0.4)", border: `1px solid ${border2}`, borderRadius: 12, padding: 20,
                  display: "flex", gap: 20, alignItems: "center", cursor: "pointer", transition: "all .3s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.borderColor = orange;
                  e.currentTarget.style.boxShadow = `0 4px 20px ${orange}1a`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = border2;
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: orange, opacity: 0.5 }}>{step.step}</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: white, marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: muted }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM SECTION */}
      <section className="section-container" style={{ padding: "0 56px 80px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 40, textAlign: "center" }}>Meet Our Experts</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {TEAM.map((member) => (
            <div key={member.name} style={{
              background: card, border: `1px solid ${border2}`, borderRadius: 16, padding: "32px 24px",
              textAlign: "center", transition: "all .3s ease", cursor: "pointer",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = cyan;
                e.currentTarget.style.boxShadow = `0 10px 30px ${cyan}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = border2;
                e.currentTarget.style.boxShadow = "none";
              }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%", background: `${cyan}33`,
                backgroundImage: `url(${member.img})`, backgroundSize: "cover", backgroundPosition: "center",
                margin: "0 auto 20px", border: `2px solid ${cyan}`
              }} />
              <div style={{ fontSize: 18, fontWeight: 800, color: white, marginBottom: 6 }}>{member.name}</div>
              <div style={{ fontSize: 13, color: neon, fontWeight: 700, marginBottom: 16 }}>{member.role}</div>
              <p style={{ fontSize: 13, color: muted, lineHeight: 1.5, margin: 0 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PARTNERS MARQUEE */}
      <Partners />

      {/* 8. PAGE-LEVEL CTA */}
      <section className="section-container" style={{ padding: "40px 56px 100px" }}>
        <div style={{
          background: `linear-gradient(135deg, rgba(4, 10, 18, 0.8), rgba(4, 10, 18, 0.95))`,
          border: `1px solid ${neon}80`, borderRadius: 16, padding: "60px 40px",
          textAlign: "center", boxShadow: `0 20px 40px rgba(0,0,0,0.4)`
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 16 }}>
            Ready to learn from the best? Or need expert security services?
          </h2>
          <p style={{ fontSize: 16, color: muted, marginBottom: 32 }}>
            Whether you want to build a career or secure your enterprise, we have you covered.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Btn style={{ padding: "14px 32px", fontSize: 15 }}>Start Learning</Btn>
            <Btn style={{ padding: "14px 32px", fontSize: 15, background: cyan, color: "#040e1a", borderColor: cyan }}>Contact Our Team</Btn>
          </div>
        </div>
      </section>

    </main>
  );
}
