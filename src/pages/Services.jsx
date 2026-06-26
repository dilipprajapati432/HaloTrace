import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { bg2, bg, neon, cyan, white, muted, card, border, border2, orange, textCol } from "../styles/tokens";
import { Btn, Tag } from "../components/ui/UI";

const SERVICES = [
  {
    title: "Vulnerability Assessment & Penetration Testing",
    short: "VAPT",
    icon: "🎯",
    desc: "Comprehensive testing of your infrastructure to identify and exploit vulnerabilities before attackers do.",
    longDesc: "Our VAPT methodology goes beyond automated scanning by employing advanced manual exploitation techniques to uncover deeply hidden logic flaws and chained vulnerabilities. We simulate real-world threat actors to comprehensively map your attack surface, providing a highly detailed view of your organization's security posture and resilience against modern cyber threats.",
    tags: ["Web App", "Mobile", "API", "Network", "Wireless"],
    details: [
      "Simulated real-world attacks to uncover zero-days, logic flaws, and chained vulnerabilities.",
      "Strict alignment with industry frameworks like PTES (Penetration Testing Execution Standard) and NIST.",
      "In-depth manual exploitation phase to validate the true business impact of vulnerabilities.",
      "Actionable remediation strategies prioritizing high-impact, critical vulnerabilities.",
      "Post-remediation verification testing included to ensure patches were successfully implemented.",
      "Comprehensive executive summary and highly technical developer reports provided."
    ]
  },
  {
    title: "Web Application Security Testing",
    short: "Web Security",
    icon: "🌐",
    desc: "Deep-dive assessment of modern web applications against OWASP Top 10, logic flaws, and advanced attacks.",
    longDesc: "Modern web applications are complex and often serve as the primary entry point for attackers. Our Web Application Security Testing rigorously evaluates your platform against the OWASP Top 10 and beyond. We focus heavily on business logic bypasses, complex authentication flaws, and API vulnerabilities that automated scanners inevitably miss.",
    tags: ["OWASP Top 10", "Logic Flaws", "Auth Testing"],
    details: [
      "In-depth authentication, authorization, and robust session management testing.",
      "Advanced business logic bypass and vertical/horizontal privilege escalation scenarios.",
      "Comprehensive injection flaws testing (SQLi, XSS, XXE, Server-Side Template Injection).",
      "Thorough review of third-party dependencies, open-source libraries, and misconfigurations.",
      "Testing of modern architectures including Single Page Applications (SPAs) and GraphQL APIs.",
      "Validation of secure transmission, cryptography implementations, and data-at-rest protection."
    ]
  },
  {
    title: "Mobile Application Security Testing",
    short: "Mobile Security",
    icon: "📱",
    desc: "Rigorous static and dynamic analysis of iOS and Android applications and their backend APIs.",
    longDesc: "Mobile applications present unique attack vectors, from insecure local storage to vulnerable backend APIs. Our comprehensive mobile security assessments involve rigorous Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) on both iOS and Android platforms to ensure your user data remains protected.",
    tags: ["iOS", "Android", "API Backend"],
    details: [
      "Static Analysis (SAST) for hardcoded secrets, API keys, and insecure storage implementations.",
      "Dynamic Analysis (DAST) for runtime manipulation, network interception, and SSL pinning bypass.",
      "Jailbreak/Root detection bypass testing and local privilege escalation checks.",
      "Comprehensive backend API endpoint vulnerability assessment and authorization testing.",
      "Analysis of Inter-Process Communication (IPC) and deep link vulnerabilities.",
      "Reverse engineering attempts to uncover proprietary algorithms and sensitive business logic."
    ]
  },
  {
    title: "Digital Forensics & Incident Response",
    short: "DFIR",
    icon: "🔎",
    desc: "Rapid containment, eradication, and forensic investigation of active cyber breaches.",
    longDesc: "When a breach occurs, every second counts. Our Digital Forensics & Incident Response (DFIR) team provides rapid, 24/7 assistance to contain active threats, eradicate attackers from your network, and recover critical operations. We follow strict chain-of-custody protocols to ensure all digital evidence remains legally admissible.",
    tags: ["Disk Forensics", "Memory", "Mobile", "Email"],
    details: [
      "24/7 emergency incident response for active cyber attacks, ransomware, and insider threats.",
      "Advanced malware reverse engineering, behavioral analysis, and IOC extraction.",
      "Chain-of-custody compliant digital evidence acquisition from memory, disk, and cloud environments.",
      "Deep timeline analysis and lateral movement tracking to identify patient zero.",
      "Post-incident recovery planning, architecture hardening, and security posture improvement.",
      "Detailed incident reporting suitable for regulatory compliance and cyber insurance claims."
    ]
  },
  {
    title: "Network Security Assessment",
    short: "Network Audits",
    icon: "🕸️",
    desc: "Internal and external assessments mimicking advanced persistent threats to test network boundaries.",
    longDesc: "Your network is the backbone of your organization. Our Network Security Assessments simulate Advanced Persistent Threats (APTs) to rigorously test both your external perimeter and internal network segmentation. We identify misconfigurations, unpatched systems, and weak authentication protocols that could lead to a full domain compromise.",
    tags: ["Internal", "External", "Wireless", "Cloud"],
    details: [
      "External perimeter vulnerability scanning and active exploit discovery on public-facing assets.",
      "Internal network pivot mapping, lateral movement testing, and segmentation bypass attempts.",
      "Extensive Active Directory security assessments including Kerberoasting, BloodHound mapping, and DCSync.",
      "Wireless access point security testing, rogue device detection, and WPA enterprise bypass.",
      "Firewall rule base review and VPN/remote access gateway security validation.",
      "Evaluation of internal endpoint security controls, EDR evasion, and patch management efficacy."
    ]
  },
  {
    title: "Security Consulting & Audits",
    short: "Consulting",
    icon: "📋",
    desc: "Strategic guidance on architecture, compliance, policy creation, and SOC implementations.",
    longDesc: "Navigating the complex landscape of cybersecurity frameworks and compliance mandates can be daunting. Our Security Consulting & Audits provide strategic, high-level guidance tailored to your business objectives. From Virtual CISO services to full-scale SOC implementations, we help you build a resilient, compliant, and mature security organization.",
    tags: ["SOC Setup", "Policy", "Compliance", "Risk"],
    details: [
      "Comprehensive readiness assessments for major frameworks: ISO 27001, SOC2, PCI-DSS, and GDPR.",
      "Custom security policy, incident response plan, and disaster recovery procedure documentation.",
      "Virtual CISO (vCISO) advisory services for executive-level security strategy and board reporting.",
      "Security Operations Center (SOC) architecture design, tool selection (SIEM/SOAR), and tuning.",
      "Vendor risk management and third-party security posture evaluations.",
      "Enterprise security architecture reviews and secure-by-design cloud migration strategies."
    ]
  },
  {
    title: "OSINT Investigations",
    short: "OSINT",
    icon: "👁️",
    desc: "Open-source intelligence gathering to identify leaked credentials, corporate exposure, and threat intel.",
    longDesc: "The internet contains vast amounts of inadvertently leaked corporate data. Our OSINT (Open-Source Intelligence) Investigations proactively scan the surface, deep, and dark web to identify exposed credentials, sensitive documents, and active threat campaigns targeting your organization before they can be weaponized.",
    tags: ["Threat Intelligence", "Person", "Corp Intel"],
    details: [
      "Continuous dark web monitoring for leaked corporate credentials and breached databases.",
      "Executive digital footprint analysis to mitigate targeted spear-phishing and social engineering.",
      "Identification of exposed corporate infrastructure, forgotten assets, and shadow IT.",
      "Proactive threat actor profiling, forum monitoring, and customized threat intelligence reporting.",
      "Analysis of public code repositories (e.g., GitHub, GitLab) for accidentally committed secrets.",
      "Brand reputation monitoring and detection of fraudulent lookalike domains."
    ]
  },
  {
    title: "Cloud Security Assessment",
    short: "Cloud Security",
    icon: "☁️",
    desc: "Misconfiguration and vulnerability scanning across major public cloud providers and containerized environments.",
    longDesc: "Cloud environments scale rapidly, often outpacing security controls. Our Cloud Security Assessments identify misconfigurations, excessive permissions, and vulnerabilities across AWS, GCP, Azure, and Kubernetes environments. We ensure your cloud infrastructure adheres to best practices and the principle of least privilege.",
    tags: ["AWS", "GCP", "Azure", "Container Security"],
    details: [
      "In-depth Identity and Access Management (IAM) privilege escalation and misconfiguration audits.",
      "S3/Storage bucket public exposure analysis and data-at-rest encryption validation.",
      "Comprehensive Kubernetes cluster, Docker container, and orchestration security reviews.",
      "Serverless architecture vulnerability testing (AWS Lambda, Azure Functions).",
      "Validation of cloud-native logging, monitoring, and incident detection capabilities (CloudTrail, GuardDuty).",
      "Alignment with cloud security benchmarks (CIS Foundations) and well-architected frameworks."
    ]
  }
];

const METHODOLOGY = [
  { step: 1, title: "Scoping & NDA", desc: "Defining engagement rules and legal bounds." },
  { step: 2, title: "Reconnaissance", desc: "Gathering intel and mapping attack surfaces." },
  { step: 3, title: "Assessment", desc: "Automated & manual vulnerability hunting." },
  { step: 4, title: "Exploitation", desc: "Safe exploitation to demonstrate impact." },
  { step: 5, title: "Report & Fix", desc: "Actionable remediation roadmap delivery." },
];

const DELIVERABLES = [
  { title: "Executive Summary", desc: "High-level risk overview for leadership and board members.", icon: "📊" },
  { title: "Technical Report", desc: "Granular details, step-by-step reproduction steps for developers.", icon: "📄" },
  { title: "CVSS Severity Scoring", desc: "Industry-standard risk prioritization metrics.", icon: "🔢" },
  { title: "Proof of Concept", desc: "Video or screenshot evidence of successful exploits.", icon: "📸" },
  { title: "Remediation Roadmap", desc: "Prioritized patching guides and secure coding practices.", icon: "🗺️" },
  { title: "Post-Fix Verification", desc: "Complimentary re-testing to ensure patches were successful.", icon: "✅" },
];

export default function Services() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [activeService]);

  const [formState, setFormState] = useState({
    name: "", company: "", email: "", phone: "", service: "VAPT", desc: "", timeline: "Immediate"
  });

  return (
    <main>
      <Helmet>
        <title>Professional Cybersecurity Services | HaloTrace</title>
        <meta name="description" content="End-to-end security solutions — from vulnerability assessment to digital forensic investigations." />
      </Helmet>

      {/* 1. PAGE HERO (Corporate Tech Aesthetic) */}
      <section style={{
        minHeight: "0", position: "relative", overflow: "hidden", marginTop: "72px",
        background: `url('/services.png') no-repeat center right`, backgroundSize: "cover",
        display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px 56px",
      }}>
        {/* Neutral black overlay to avoid clashing with the image's colors */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 45%, transparent 100%)`, zIndex: 0 }} />
        {/* CSS Circuit / Hex Pattern Background Overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
          backgroundImage: `radial-gradient(${cyan} 1px, transparent 1px)`,
          backgroundSize: "30px 30px"
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "10%", width: 400, height: 400,
          background: cyan, filter: "blur(150px)", opacity: 0.1, borderRadius: "50%"
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <div style={{ fontSize: 13, color: muted, marginBottom: 16, display: "flex", gap: 8, alignItems: "center", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
            Enterprise Solutions
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 900, color: white, margin: "0 0 20px", letterSpacing: -0.5, lineHeight: 1.1, textTransform: "uppercase" }}>
            PROFESSIONAL <br /><span style={{ color: cyan }}>CYBERSECURITY</span> SERVICES
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 24px", maxWidth: 600 }}>
            End-to-end security solutions — from vulnerability assessment to digital forensic investigations, executed by certified offensive security experts.
          </p>
          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            <Btn onClick={() => navigate('/book-consultation')} style={{ padding: "14px 32px", fontSize: 15, background: cyan, color: "#040e1a", borderColor: cyan }}>Request Assessment</Btn>
            <Btn onClick={() => navigate('/casestudies')} variant="outline" style={{ padding: "14px 32px", fontSize: 15, color: cyan, borderColor: `${cyan}4d` }}>View Case Studies</Btn>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: "16px 0", borderTop: `1px solid ${border2}` }}>
            {["ISO 27001 Aligned", "OWASP Methodology", "Certified Professionals", "Confidential Engagements"].map(trust => (
              <div key={trust} style={{ display: "flex", alignItems: "center", gap: 8, color: textCol, fontSize: 13, fontWeight: 600 }}>
                <span style={{ color: cyan }}>✓</span> {trust}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW GRID */}
      <section style={{ padding: "120px 56px", background: `#0a0a0c`, position: "relative", overflow: "hidden" }}>
        {/* Subtle, contained separator line that does not touch the edges */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "70%", maxWidth: 1000, height: 1, background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 100%)` }} />
        {/* Floating Ambient Orbs (Matching the warm image colors) */}
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 600, height: 600, background: "#ff5500", filter: "blur(200px)", opacity: 0.05, borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 500, height: 500, background: "#ffaa00", filter: "blur(200px)", opacity: 0.05, borderRadius: "50%", pointerEvents: "none", zIndex: 1 }} />

        <div style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: white, margin: "0 0 16px" }}>Our Services</h2>
          <p style={{ color: muted, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Comprehensive security engagements tailored to identify, exploit, and remediate vulnerabilities across your entire attack surface.
          </p>
        </div>

        <div style={{
          border: `1px solid rgba(255, 255, 255, 0.05)`,
          borderRadius: 32,
          padding: "60px",
          background: `rgba(8, 20, 36, 0.3)`,
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          boxShadow: `0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)`,
          position: "relative",
          zIndex: 2
        }}>
          {/* Inner Top Glow */}
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "200px", background: `radial-gradient(circle, ${cyan}11 0%, transparent 70%)`, pointerEvents: "none", borderRadius: "32px 32px 0 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, position: "relative", zIndex: 1 }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                id={s.short.toLowerCase().replace(/ /g, "-")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%), rgba(4, 10, 18, 0.7)`,
                  backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                  border: `1px solid rgba(255, 255, 255, 0.05)`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
                  borderRadius: 24, padding: "40px",
                  display: "flex", flexDirection: "column", cursor: "pointer", transition: "all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cyan;
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 40px rgba(0,212,255,0.05)`;
                  if (e.currentTarget.querySelector('.service-icon')) e.currentTarget.querySelector('.service-icon').style.transform = "scale(1.15) rotate(8deg)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.05)`;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`;
                  if (e.currentTarget.querySelector('.service-icon')) e.currentTarget.querySelector('.service-icon').style.transform = "none";
                }}
                onClick={() => setActiveService(s)}
              >
                <div className="service-icon" style={{ fontSize: 40, color: cyan, marginBottom: 24, transition: "all .3s" }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: white, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: muted, lineHeight: 1.6, flex: 1, marginBottom: 24 }}>{s.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, background: `${cyan}11`, border: `1px solid ${cyan}33`, color: textCol, padding: "4px 10px", borderRadius: 4 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ color: cyan, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
                  Learn More <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK — METHODOLOGY */}
      <section style={{ padding: "100px 56px", background: "linear-gradient(180deg, #050200 0%, #0f0a05 100%)", borderTop: `1px solid ${border2}`, borderBottom: `1px solid rgba(255, 170, 0, 0.1)`, position: "relative" }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 60, textAlign: "center" }}>Engagement Methodology</h2>

        <div style={{ display: "flex", justifyContent: "space-between", position: "relative", maxWidth: 1200, margin: "0 auto" }}>
          {/* Progress Line */}
          <div style={{ position: "absolute", top: 24, left: 40, right: 40, height: 2, background: border2, zIndex: 0 }}>
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
              style={{ height: "100%", background: cyan, boxShadow: `0 0 10px ${cyan}` }}
            />
          </div>

          {METHODOLOGY.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 + 0.5 }}
              style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: 180 }}>
              <div style={{
                width: 50, height: 50, borderRadius: "50%", background: bg, border: `2px solid ${cyan}`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: cyan, marginBottom: 20,
                boxShadow: `0 0 20px ${cyan}33`
              }}>
                {step.step}
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: white, marginBottom: 8 }}>{step.title}</h4>
              <p style={{ fontSize: 13, color: muted, lineHeight: 1.5 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DELIVERABLES SECTION */}
      <section className="section-container" style={{ padding: "100px 56px", background: "#0d0d0f" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: white, margin: "0 0 16px" }}>What You Receive</h2>
          <p style={{ color: muted, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>Comprehensive, actionable reporting designed for both executives and engineering teams.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {DELIVERABLES.map((d, i) => (
            <div key={i} style={{ background: card, border: `1px solid ${border2}`, borderRadius: 12, padding: "30px" }}>
              <div style={{ fontSize: 30, marginBottom: 16 }}>{d.icon}</div>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: white, marginBottom: 8 }}>{d.title}</h4>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.5 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICE INQUIRY FORM */}
      <section style={{ padding: "120px 56px", background: `#000000 radial-gradient(circle at 100% 100%, rgba(255, 170, 0, 0.08) 0%, transparent 80%)`, borderTop: `1px solid rgba(255, 255, 255, 0.05)` }}>
        <div className="section-container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "flex-start" }}>

          {/* Left: Form */}
          <div style={{ background: card, padding: 50, borderRadius: 24, border: `1px solid ${border2}`, boxShadow: `0 20px 40px rgba(0,0,0,0.5)` }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: white, marginBottom: 8 }}>Request an Assessment</h2>
            <p style={{ color: muted, fontSize: 14, marginBottom: 32 }}>Fill out the form below to initiate a confidential scoping discussion.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Full Name *</label>
                <input type="text" style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Company Name *</label>
                <input type="text" style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Work Email *</label>
                <input type="email" style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Phone Number</label>
                <input type="text" style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none" }} />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Service Required</label>
              <select style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none" }}>
                {SERVICES.map(s => <option key={s.short} value={s.short}>{s.title}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: textCol, marginBottom: 8 }}>Project Description / Scope</label>
              <textarea rows={4} style={{ width: "100%", background: bg, border: `1px solid ${border2}`, color: white, padding: "12px 16px", borderRadius: 8, outline: "none", resize: "vertical" }} />
            </div>

            <Btn onClick={() => alert('Assessment request submitted securely!')} style={{ width: "100%", padding: "16px", fontSize: 16, background: cyan, borderColor: cyan, color: "#040e1a" }}>Submit Request Securely</Btn>
          </div>

          {/* Right: Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: white, marginBottom: 16 }}>Direct Contact</h3>
              <p style={{ color: muted, fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
                Need immediate assistance regarding an active breach or critical vulnerability? Reach out directly to our rapid response team.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, background: card, padding: 24, borderRadius: 12, border: `1px solid ${border2}` }}>
              <div style={{ fontSize: 24 }}>✉️</div>
              <div>
                <div style={{ fontSize: 12, color: muted, fontWeight: 600, textTransform: "uppercase" }}>Email Us</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: white }}>halotrace.enquiry@gmail.com</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, background: card, padding: 24, borderRadius: 12, border: `1px solid ${border2}` }}>
              <div style={{ fontSize: 24 }}>📞</div>
              <div>
                <div style={{ fontSize: 12, color: muted, fontWeight: 600, textTransform: "uppercase" }}>Call Us (24/7 Response)</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: white }}>+91 98765 43210</div>
              </div>
            </div>

            <div style={{ padding: 24, borderRadius: 12, border: `1px solid ${cyan}4d`, background: `${cyan}11`, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 24 }}>🛡️</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: cyan, marginBottom: 4 }}>Strict Confidentiality</div>
                <div style={{ fontSize: 13, color: textCol }}>All engagements are governed by comprehensive Non-Disclosure Agreements (NDAs).</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS BANNER */}
      <section style={{ background: "#12100e", padding: "40px 56px", borderTop: `1px solid rgba(255, 170, 0, 0.1)` }}>
        <div className="section-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ color: muted, fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
            Assessments aligned with:
          </div>
          <div style={{ display: "flex", gap: 30, color: white, fontSize: 20, fontWeight: 900, opacity: 0.5 }}>
            <div>OWASP</div>
            <div>PTES</div>
            <div>NIST</div>
            <div>ISO 27001</div>
          </div>
        </div>
      </section>
      {/* SERVICE MODAL */}
      <AnimatePresence>
        {activeService && (
          <div style={{
            position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20
          }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{
                position: "relative", zIndex: 1, background: card, border: `1px solid ${border2}`,
                borderRadius: 24, padding: 40, width: "100%", maxWidth: 650, maxHeight: "90vh", overflowY: "auto",
                boxShadow: `0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)`
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${cyan}, ${neon})` }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div style={{ fontSize: 48 }}>{activeService.icon}</div>
                <button onClick={() => setActiveService(null)} style={{
                  background: "rgba(255,255,255,0.05)", border: "none", color: white, width: 36, height: 36, borderRadius: "50%",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "background .2s"
                }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}>
                  ✕
                </button>
              </div>

              <h2 style={{ fontSize: 28, fontWeight: 900, color: white, marginBottom: 12 }}>{activeService.title}</h2>
              <p style={{ fontSize: 15, color: muted, lineHeight: 1.6, marginBottom: 32 }}>{activeService.longDesc || activeService.desc}</p>

              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontSize: 14, color: white, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Key Deliverables & Methodology</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {activeService.details.map((detail, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "rgba(255,255,255,0.02)", padding: "12px 16px", borderRadius: 8, border: `1px solid rgba(255,255,255,0.03)` }}>
                      <span style={{ color: cyan, fontSize: 16, marginTop: -2 }}>✓</span>
                      <span style={{ color: textCol, fontSize: 14, lineHeight: 1.5 }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Btn onClick={() => navigate('/book-consultation')} style={{ padding: "16px 40px", fontSize: 16 }}>Book this Service</Btn>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
