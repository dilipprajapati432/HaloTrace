import { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { bg2, bg, neon, cyan, white, muted, card, border, border2, orange, textCol } from "../styles/tokens";
import { Btn, Tag } from "../components/ui/UI";

const COURSES = [
  {
    id: 1, title: "Ethical Hacking", category: "Offensive Security",
    level: "Intermediate", duration: "12 Weeks", mode: "Hybrid",
    price: 15999, originalPrice: 19999, certificate: true,
    rating: 4.8, enrolled: 1240, color: neon,
    desc: "Master the art of ethical hacking and penetration testing with real-world scenarios.",
    targetRoles: ["Penetration Tester", "Red Teamer", "Security Consultant"],
    prerequisites: "Basic understanding of networking (TCP/IP) and Linux command line.",
    learningOutcomes: [
      "Perform comprehensive network reconnaissance and footprinting.",
      "Identify and exploit vulnerabilities in network services and protocols.",
      "Conduct wireless network penetration testing and crack WPA2.",
      "Perform post-exploitation techniques, pivoting, and privilege escalation.",
      "Draft professional penetration testing reports for executives."
    ],
    modules: [
      "Module 1: Reconnaissance & Open Source Intelligence (OSINT)",
      "Module 2: Network Scanning & Enumeration",
      "Module 3: Vulnerability Analysis & Exploitation Frameworks",
      "Module 4: Post-Exploitation & Lateral Movement",
      "Module 5: Wireless & Web Exploitation Basics",
      "Module 6: Report Writing & Client Communication"
    ]
  },
  {
    id: 2, title: "Network Security Fundamentals", category: "Defensive Security",
    level: "Beginner", duration: "8 Weeks", mode: "Online",
    price: 9999, originalPrice: null, certificate: true,
    rating: 4.6, enrolled: 890, color: cyan,
    desc: "Build a strong foundation in securing enterprise networks and infrastructure.",
    targetRoles: ["Network Administrator", "Security Analyst", "IT Support Engineer"],
    prerequisites: "None. Basic IT knowledge is helpful.",
    learningOutcomes: [
      "Understand the OSI model, TCP/IP, and basic routing/switching.",
      "Deploy and configure firewalls, IDS/IPS, and VPNs.",
      "Secure wireless networks and implement robust authentication.",
      "Analyze network traffic using Wireshark and tcpdump.",
      "Mitigate common network-level attacks (DDoS, ARP spoofing)."
    ],
    modules: [
      "Module 1: Networking Basics & Protocol Analysis",
      "Module 2: Firewall Architecture & Access Control Lists",
      "Module 3: Intrusion Detection & Prevention Systems",
      "Module 4: Cryptography & Secure Communications (VPN)",
      "Module 5: Wireless Security & NAC",
      "Module 6: Network Hardening & Best Practices"
    ]
  },
  {
    id: 3, title: "Web Application Pentesting", category: "Offensive Security",
    level: "Intermediate", duration: "10 Weeks", mode: "Hybrid",
    price: 17999, originalPrice: 21999, certificate: true,
    rating: 4.9, enrolled: 1560, color: orange,
    desc: "Learn to discover and exploit vulnerabilities in modern web applications.",
    targetRoles: ["Application Security Engineer", "Web Penetration Tester", "Bug Bounty Hunter"],
    prerequisites: "Basic knowledge of HTML, JS, HTTP protocol, and web architecture.",
    learningOutcomes: [
      "Master the OWASP Top 10 vulnerabilities and testing methodologies.",
      "Exploit complex injection flaws (SQLi, NoSQLi, Command Injection).",
      "Identify and bypass broken authentication and session management.",
      "Exploit client-side vulnerabilities like XSS, CSRF, and CORS misconfigurations.",
      "Test modern REST and GraphQL APIs for business logic flaws."
    ],
    modules: [
      "Module 1: Web Architecture & HTTP Protocol Deep Dive",
      "Module 2: Intercepting Proxies (Burp Suite Mastery)",
      "Module 3: Injection Flaws & Data Exfiltration",
      "Module 4: Client-Side Attacks (XSS, CSRF, Clickjacking)",
      "Module 5: Authentication, Authorization & Session Flaws",
      "Module 6: API Security Testing & GraphQL"
    ]
  },
  {
    id: 4, title: "Digital Forensics", category: "Incident Response",
    level: "Intermediate", duration: "10 Weeks", mode: "Offline",
    price: 14999, originalPrice: 18999, certificate: true,
    rating: 4.7, enrolled: 650, color: neon,
    desc: "Acquire skills to investigate cyber crimes and analyze digital evidence.",
    targetRoles: ["Digital Forensics Investigator", "Incident Responder", "SOC Analyst"],
    prerequisites: "Understanding of Windows/Linux operating system internals.",
    learningOutcomes: [
      "Acquire forensically sound images of disks and volatile memory.",
      "Analyze Windows registries, event logs, and file systems.",
      "Recover deleted files and reconstruct timeline events.",
      "Investigate email headers, phishing campaigns, and malware delivery.",
      "Draft court-admissible digital forensic reports."
    ],
    modules: [
      "Module 1: Forensic Principles & Chain of Custody",
      "Module 2: Disk Imaging & File System Analysis (NTFS, EXT4)",
      "Module 3: Windows Forensics (Registry, Event Logs, Prefetch)",
      "Module 4: Memory Forensics (Volatility Framework)",
      "Module 5: Network Forensics & PCAP Analysis",
      "Module 6: Report Generation & Expert Testimony"
    ]
  },
  {
    id: 5, title: "OSINT Mastery", category: "Intelligence",
    level: "All Levels", duration: "8 Weeks", mode: "Online",
    price: 11999, originalPrice: null, certificate: false,
    rating: 4.8, enrolled: 1120, color: cyan,
    desc: "Master Open Source Intelligence techniques for reconnaissance and tracking.",
    targetRoles: ["Threat Intelligence Analyst", "Private Investigator", "Red Teamer"],
    prerequisites: "None. Familiarity with search engines is sufficient.",
    learningOutcomes: [
      "Utilize advanced Google Dorks and search engine manipulation.",
      "Investigate social media profiles, metadata, and geolocation data.",
      "Track corporate infrastructure, domain registrations, and DNS records.",
      "Safely navigate and monitor the Deep and Dark Web.",
      "Automate intelligence gathering using Maltego and Python tools."
    ],
    modules: [
      "Module 1: OSINT Foundations & OPSEC (Operational Security)",
      "Module 2: Search Engine Mastery & Dorking",
      "Module 3: Social Media Intelligence (SOCMINT)",
      "Module 4: Corporate Reconnaissance & Infrastructure Mapping",
      "Module 5: Dark Web Monitoring & Threat Actor Profiling",
      "Module 6: Automated OSINT Tools & Reporting"
    ]
  },
  {
    id: 6, title: "SOC Analyst Program", category: "Defensive Security",
    level: "Intermediate", duration: "10 Weeks", mode: "Hybrid",
    price: 19999, originalPrice: 24999, certificate: true,
    rating: 4.9, enrolled: 820, color: orange,
    desc: "Train to become a Security Operations Center analyst using SIEM tools.",
    targetRoles: ["SOC Analyst (L1/L2)", "Security Analyst", "Threat Hunter"],
    prerequisites: "Basic networking and operating system knowledge.",
    learningOutcomes: [
      "Monitor, analyze, and triage security alerts in real-time.",
      "Deploy and configure SIEM solutions (Splunk, Elastic Security).",
      "Create custom detection rules and dashboards for threat visibility.",
      "Perform incident triage, containment, and escalation workflows.",
      "Understand the MITRE ATT&CK framework for threat modeling."
    ],
    modules: [
      "Module 1: SOC Operations & Incident Lifecycle",
      "Module 2: SIEM Architecture & Log Aggregation",
      "Module 3: Rule Creation & Alert Tuning",
      "Module 4: Endpoint Detection & Response (EDR)",
      "Module 5: Threat Hunting & MITRE ATT&CK",
      "Module 6: Playbooks, Automation, and SOAR"
    ]
  },
  {
    id: 7, title: "Python for Cybersecurity", category: "Development",
    level: "Beginner", duration: "8 Weeks", mode: "Online",
    price: 8999, originalPrice: 12999, certificate: true,
    rating: 4.5, enrolled: 2100, color: neon,
    desc: "Learn Python scripting to automate security tasks and build custom tools.",
    targetRoles: ["Security Automation Engineer", "Pentester", "DevSecOps Engineer"],
    prerequisites: "No programming experience required.",
    learningOutcomes: [
      "Master Python fundamentals (variables, loops, functions, OOP).",
      "Interact with web services and APIs programmatically.",
      "Automate network scanning, banner grabbing, and port sweeping.",
      "Write custom exploit scripts and payload generators.",
      "Parse large log files and automate SOC analyst workflows."
    ],
    modules: [
      "Module 1: Python Basics & Environment Setup",
      "Module 2: Data Structures & Control Flow",
      "Module 3: Network Programming with Sockets",
      "Module 4: Web Scraping & API Interaction",
      "Module 5: Developing Custom Security Tools",
      "Module 6: Automating Defensive Workflows & Log Parsing"
    ]
  },
  {
    id: 8, title: "Malware Analysis Basics", category: "Threat Intelligence",
    level: "Advanced", duration: "10 Weeks", mode: "Offline",
    price: 21999, originalPrice: 26999, certificate: true,
    rating: 4.9, enrolled: 430, color: orange,
    desc: "Reverse engineer and analyze malicious software in safe lab environments.",
    targetRoles: ["Malware Analyst", "Reverse Engineer", "Threat Intelligence Researcher"],
    prerequisites: "Strong understanding of Windows OS, C/C++ basics, and assembly language.",
    learningOutcomes: [
      "Set up a secure, isolated malware analysis lab environment.",
      "Perform static analysis to extract IOCs and identify packed executables.",
      "Conduct dynamic analysis to observe behavioral patterns and network callbacks.",
      "Reverse engineer x86/x64 assembly using IDA Pro and Ghidra.",
      "Analyze malicious documents (PDFs, Office macros) and script-based malware."
    ],
    modules: [
      "Module 1: Safe Lab Setup & Malware Handling",
      "Module 2: Static Analysis Techniques & Tools",
      "Module 3: Dynamic Analysis & Behavioral Monitoring",
      "Module 4: x86 Assembly & Reverse Engineering Foundations",
      "Module 5: Debugging with x64dbg and OllyDbg",
      "Module 6: Analyzing Malicious Documents & Shellcode"
    ]
  },
  {
    id: 9, title: "Bug Bounty Training", category: "Offensive Security",
    level: "Intermediate", duration: "12 Weeks", mode: "Online",
    price: 16999, originalPrice: null, certificate: true,
    rating: 4.8, enrolled: 1850, color: cyan,
    desc: "Learn the methodology to find vulnerabilities and earn bounties legally.",
    targetRoles: ["Bug Bounty Hunter", "Freelance Security Researcher", "AppSec Engineer"],
    prerequisites: "Web application pentesting fundamentals.",
    learningOutcomes: [
      "Understand the bug bounty ecosystem (HackerOne, Bugcrowd).",
      "Develop a unique reconnaissance methodology to find hidden assets.",
      "Automate vulnerability discovery using custom bash/python scripts.",
      "Exploit high-impact logic flaws that automated scanners miss.",
      "Write professional, reproducible vulnerability reports to maximize payouts."
    ],
    modules: [
      "Module 1: Bug Bounty Platforms & Rules of Engagement",
      "Module 2: Advanced Reconnaissance & Subdomain Enumeration",
      "Module 3: Asset Discovery Automation & CI/CD",
      "Module 4: Hunting for High-Impact Flaws (SSRF, IDOR, RCE)",
      "Module 5: Bypassing WAFs & Filters",
      "Module 6: Report Writing & Triage Communication"
    ]
  },
  {
    id: 10, title: "Linux for Hackers", category: "Fundamentals",
    level: "Beginner", duration: "6 Weeks", mode: "Online",
    price: 7999, originalPrice: 9999, certificate: true,
    rating: 4.7, enrolled: 3200, color: neon,
    desc: "Master the Linux command line and essential tools for cybersecurity.",
    targetRoles: ["Cybersecurity Student", "Junior Penetration Tester", "System Administrator"],
    prerequisites: "None.",
    learningOutcomes: [
      "Navigate the Linux file system and use core CLI commands efficiently.",
      "Manage users, groups, and advanced file permissions.",
      "Configure and secure network interfaces and SSH access.",
      "Write Bash scripts to automate routine security tasks.",
      "Understand Linux logging and basic forensics."
    ],
    modules: [
      "Module 1: Linux Architecture & Installation",
      "Module 2: Command Line Mastery & Text Manipulation",
      "Module 3: User/Group Management & Permissions",
      "Module 4: Process Management & Networking",
      "Module 5: Package Management & Services",
      "Module 6: Bash Scripting Fundamentals"
    ]
  }
];

const PATHS = [
  {
    title: "Beginner Path", color: cyan,
    steps: ["Linux", "Networking", "Web Security", "Ethical Hacking"]
  },
  {
    title: "Intermediate Path", color: neon,
    steps: ["OSINT", "Pentesting", "Digital Forensics", "Bug Bounty"]
  },
  {
    title: "Advanced Path", color: orange,
    steps: ["Malware Analysis", "Red Teaming", "Active Directory", "Threat Hunting"]
  }
];

const BATCHES = [
  { course: "Ethical Hacking", date: "Oct 15, 2026", mode: "Hybrid", seats: 8 },
  { course: "SOC Analyst Program", date: "Oct 22, 2026", mode: "Online", seats: 12 },
  { course: "Web Application Pentesting", date: "Nov 01, 2026", mode: "Offline", seats: 4 },
  { course: "Python for Cybersecurity", date: "Nov 05, 2026", mode: "Online", seats: 20 },
];

export default function Courses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("All");
  const [sort, setSort] = useState("Popular");
  const [activeCourse, setActiveCourse] = useState(null);

  // Lock body scroll when in split-screen mode to prevent seeing the global footer
  useEffect(() => {
    if (activeCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCourse]);

  const filteredCourses = useMemo(() => {
    let result = COURSES.filter(c => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
      const matchLevel = level === "All" || c.level.includes(level);
      const matchMode = mode === "All" || c.mode === mode;
      return matchSearch && matchLevel && matchMode;
    });

    if (sort === "Price: Low-High") result.sort((a, b) => a.price - b.price);
    if (sort === "Price: High-Low") result.sort((a, b) => b.price - a.price);
    if (sort === "Newest") result.sort((a, b) => b.id - a.id);
    if (sort === "Popular") result.sort((a, b) => b.enrolled - a.enrolled);

    return result;
  }, [search, level, mode, sort]);

  return (
    <main>
      <Helmet>
        <title>Cybersecurity Courses | Skillnetics × HaloTrace</title>
        <meta name="description" content="Explore our industry-aligned cybersecurity training programs built by active security professionals." />
      </Helmet>

      <AnimatePresence mode="wait">
        {activeCourse ? (
          <motion.div
            key="split-view"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            style={{ display: "flex", height: "calc(100vh - 72px)", marginTop: 72, width: "100%", overflow: "hidden" }}
          >
            {/* SIDEBAR */}
            <div style={{
              width: "320px", flexShrink: 0, borderRight: `1px solid ${border2}`, background: `rgba(2, 6, 16, 0.95)`,
              display: "flex", flexDirection: "column", height: "calc(100vh - 72px)", position: "sticky", top: 72
            }}>
              <div style={{ padding: "24px", borderBottom: `1px solid ${border2}` }}>
                <button onClick={() => setActiveCourse(null)} style={{
                  background: "transparent", color: muted, border: "none", display: "flex", alignItems: "center", gap: 8,
                  cursor: "pointer", fontSize: 14, fontWeight: 600, padding: 0, transition: "color .2s"
                }} onMouseEnter={e => e.currentTarget.style.color = white} onMouseLeave={e => e.currentTarget.style.color = muted}>
                  ← Back to All Courses
                </button>
              </div>
              <div style={{ overflowY: "auto", flex: 1, padding: "16px", scrollbarWidth: "thin" }}>
                {COURSES.map(c => (
                  <div key={c.id} onClick={() => { setActiveCourse(c); window.scrollTo(0, 0); }} style={{
                    padding: "16px", borderRadius: 12, cursor: "pointer", marginBottom: 12,
                    background: activeCourse.id === c.id ? `${c.color}1a` : "transparent",
                    border: `1px solid ${activeCourse.id === c.id ? `${c.color}4d` : border2}`,
                    transition: "all .2s"
                  }} onMouseEnter={e => { if (activeCourse.id !== c.id) e.currentTarget.style.borderColor = `${c.color}66` }}
                    onMouseLeave={e => { if (activeCourse.id !== c.id) e.currentTarget.style.borderColor = border2 }}>
                    <div style={{ fontSize: 11, color: c.color, textTransform: "uppercase", fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>{c.category}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: activeCourse.id === c.id ? white : textCol, lineHeight: 1.3 }}>{c.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ flex: 1, padding: "60px 80px 140px 80px", position: "relative", overflowY: "auto", background: bg, scrollbarWidth: "thin" }}>
              <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                  <div>
                    <h1 style={{ fontSize: 44, fontWeight: 900, color: white, marginBottom: 16, lineHeight: 1.2 }}>{activeCourse.title}</h1>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                      <span style={{ fontSize: 13, background: `rgba(255,255,255,0.05)`, padding: "6px 14px", borderRadius: 6, color: textCol, fontWeight: 600 }}>{activeCourse.level}</span>
                      <span style={{ fontSize: 13, background: `rgba(255,255,255,0.05)`, padding: "6px 14px", borderRadius: 6, color: textCol, fontWeight: 600 }}>{activeCourse.duration}</span>
                      <span style={{ fontSize: 13, background: `rgba(255,255,255,0.05)`, padding: "6px 14px", borderRadius: 6, color: textCol, fontWeight: 600 }}>{activeCourse.mode}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ display: "flex", gap: 4, alignItems: "center", color: orange, fontSize: 15, fontWeight: 700, justifyContent: "flex-end", marginBottom: 8 }}>
                      ★ {activeCourse.rating} <span style={{ color: muted, fontWeight: 500 }}>({activeCourse.enrolled} students)</span>
                    </div>
                    {activeCourse.certificate && <div style={{ fontSize: 13, color: neon, fontWeight: 600 }}>✓ Certificate of Completion</div>}
                  </div>
                </div>

                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 40, maxWidth: 800 }}>{activeCourse.desc}</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 40, marginBottom: 60, padding: "32px", background: `rgba(255,255,255,0.02)`, borderRadius: 16, border: `1px solid rgba(255,255,255,0.05)` }}>
                  <div>
                    <h4 style={{ fontSize: 14, color: muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Target Roles</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {activeCourse.targetRoles.map((role, idx) => (
                        <span key={idx} style={{ fontSize: 13, color: cyan, background: `${cyan}1a`, padding: "6px 12px", borderRadius: 4, border: `1px solid ${cyan}33`, fontWeight: 600 }}>{role}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 14, color: muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Prerequisites</h4>
                    <p style={{ fontSize: 15, color: textCol, lineHeight: 1.6, margin: 0 }}>{activeCourse.prerequisites}</p>
                  </div>
                </div>

                <div style={{ marginBottom: 60 }}>
                  <h3 style={{ fontSize: 24, color: white, fontWeight: 800, marginBottom: 24 }}>What You'll Learn</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
                    {activeCourse.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div style={{ color: activeCourse.color, fontSize: 18, marginTop: -2, fontWeight: 800 }}>✓</div>
                        <div style={{ color: textCol, fontSize: 15, lineHeight: 1.6 }}>{outcome}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: 24, color: white, fontWeight: 800, marginBottom: 24 }}>Course Syllabus</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 16 }}>
                    {activeCourse.modules.map((mod, idx) => (
                      <div key={idx} style={{
                        background: card, padding: "24px", borderRadius: 12, border: `1px solid ${border2}`,
                        color: textCol, fontSize: 15, fontWeight: 600, display: "flex", alignItems: "center", gap: 16
                      }}>
                        <div style={{ width: 40, height: 40, borderRadius: 8, background: `${activeCourse.color}1a`, color: activeCourse.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                          {idx + 1}
                        </div>
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky bottom bar for Enrollment */}
              <div style={{
                position: "fixed", bottom: 0, left: 320, right: 0, padding: "16px 80px",
                background: `rgba(4, 10, 18, 0.9)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                display: "flex", justifyContent: "center", borderTop: `1px solid ${border2}`, zIndex: 10
              }}>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "40px", alignItems: "center", width: "100%", maxWidth: 1200 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: white }}>₹{activeCourse.price.toLocaleString()}</div>
                    {activeCourse.originalPrice && <div style={{ fontSize: 12, color: muted, textDecoration: "line-through", marginTop: 2 }}>₹{activeCourse.originalPrice.toLocaleString()}</div>}
                  </div>
                  <Btn onClick={() => navigate('/register')} style={{ padding: "10px 32px", fontSize: 14, background: activeCourse.color, borderColor: activeCourse.color, color: "#040e1a", fontWeight: 800 }}>Enroll Now</Btn>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
          >

            {/* 1. HERO SECTION */}
            <section style={{
              minHeight: "40vh", position: "relative", overflow: "hidden", marginTop: "72px",
              background: `linear-gradient(175deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%), url('/background%20for%20courses.png') center 40% / cover no-repeat`,
              display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 56px",
            }}>
              <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
                <div style={{ fontSize: 13, color: muted, marginBottom: 16, display: "flex", gap: 8, alignItems: "center", fontWeight: 600 }}>
                  <Link to="/" style={{ color: muted, textDecoration: "none", transition: "color .2s" }} onMouseEnter={e => e.currentTarget.style.color = white} onMouseLeave={e => e.currentTarget.style.color = muted}>Home</Link>
                  <span>&gt;</span>
                  <span style={{ color: neon }}>Courses</span>
                </div>
                <h1 style={{ fontSize: 46, fontWeight: 900, color: white, margin: "0 0 16px", letterSpacing: -0.5, textTransform: "uppercase" }}>
                  CYBERSECURITY <span style={{ color: neon }}>COURSES</span>
                </h1>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 600 }}>
                  Industry-aligned training programs built and taught by active security professionals.
                </p>
                <div style={{ display: "flex", gap: 24 }}>
                  {[["10+", "Courses"], ["5000+", "Students"], ["100%", "Hands-on"]].map(([v, l]) => (
                    <div key={l}>
                      <div style={{ fontSize: 24, fontWeight: 900, color: neon }}>{v}</div>
                      <div style={{ fontSize: 12, color: muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. FILTER & SEARCH */}
            <section style={{
              position: "sticky", top: 72, zIndex: 50,
              background: `${bg2}d9`, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              borderBottom: `1px solid ${border2}`, padding: "16px 56px"
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>

                <div style={{ position: "relative", flex: "1 1 300px", maxWidth: 400 }}>
                  <input
                    type="text" placeholder="Search courses..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{
                      width: "100%", padding: "12px 16px 12px 40px", borderRadius: 8,
                      background: `rgba(0,0,0,0.2)`, border: `1px solid ${border2}`,
                      color: white, fontSize: 14, outline: "none", transition: "border-color .2s"
                    }}
                    onFocus={e => e.target.style.borderColor = neon}
                    onBlur={e => e.target.style.borderColor = border2}
                  />
                  <span style={{ position: "absolute", left: 14, top: 12, color: muted }}>🔍</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["All", "Beginner", "Intermediate", "Advanced"].map(l => (
                      <button key={l} onClick={() => setLevel(l)} style={{
                        padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                        background: level === l ? neon : "transparent",
                        color: level === l ? "#040e1a" : muted,
                        border: `1px solid ${level === l ? neon : border2}`,
                        transition: "all .2s"
                      }}>{l}</button>
                    ))}
                  </div>

                  <div style={{ width: 1, height: 24, background: border2 }} />

                  <div style={{ display: "flex", gap: 8 }}>
                    {["All", "Online", "Offline", "Hybrid"].map(m => (
                      <button key={m} onClick={() => setMode(m)} style={{
                        padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                        background: mode === m ? cyan : "transparent",
                        color: mode === m ? "#040e1a" : muted,
                        border: `1px solid ${mode === m ? cyan : border2}`,
                        transition: "all .2s"
                      }}>{m === "All" ? "All Modes" : m}</button>
                    ))}
                  </div>

                  <div style={{ width: 1, height: 24, background: border2 }} />

                  <select value={sort} onChange={e => setSort(e.target.value)} style={{
                    background: "transparent", color: white, border: "none", outline: "none",
                    fontSize: 13, fontWeight: 600, cursor: "pointer"
                  }}>
                    <option value="Popular" style={{ background: card }}>Most Popular</option>
                    <option value="Newest" style={{ background: card }}>Newest</option>
                    <option value="Price: Low-High" style={{ background: card }}>Price: Low to High</option>
                    <option value="Price: High-Low" style={{ background: card }}>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </section>

            {/* 3. COURSE GRID */}
            <section className="section-container" style={{
              padding: "60px 56px", minHeight: "50vh", position: "relative",
              background: `#020610 radial-gradient(circle at 50% 0%, ${neon}15 0%, transparent 70%)`
            }}>
              <AnimatePresence>
                {filteredCourses.length === 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                    <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>No courses found</h3>
                    <p style={{ color: muted }}>Try adjusting your search or filters to find what you're looking for.</p>
                  </motion.div>
                ) : (
                  <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 30 }}>
                    {filteredCourses.map(course => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        key={course.id}
                        style={{
                          background: card, border: `1px solid ${border2}`, borderRadius: 16, overflow: "hidden",
                          display: "flex", flexDirection: "column", cursor: "pointer",
                          transition: "border-color .3s, transform .3s, box-shadow .3s"
                        }}
                        onClick={() => { setActiveCourse(course); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.borderColor = course.color;
                          e.currentTarget.style.boxShadow = `0 12px 30px ${course.color}26`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.borderColor = border2;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{ height: 6, background: course.color }} />
                        <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div style={{ fontSize: 12, color: course.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                              {course.category}
                            </div>
                            <div style={{ display: "flex", gap: 4, alignItems: "center", color: orange, fontSize: 12, fontWeight: 700 }}>
                              ★ {course.rating} <span style={{ color: muted, fontWeight: 500 }}>({course.enrolled})</span>
                            </div>
                          </div>

                          <h3 style={{ fontSize: 20, fontWeight: 800, color: white, marginBottom: 12, lineHeight: 1.3 }}>
                            {course.title}
                          </h3>

                          <p style={{ fontSize: 13, color: muted, lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
                            {course.desc}
                          </p>

                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                            <span style={{ fontSize: 11, background: `rgba(255,255,255,0.05)`, padding: "4px 10px", borderRadius: 4, color: textCol }}>{course.level}</span>
                            <span style={{ fontSize: 11, background: `rgba(255,255,255,0.05)`, padding: "4px 10px", borderRadius: 4, color: textCol }}>{course.duration}</span>
                            <span style={{ fontSize: 11, background: `rgba(255,255,255,0.05)`, padding: "4px 10px", borderRadius: 4, color: textCol }}>{course.mode}</span>
                          </div>

                          <div style={{ borderTop: `1px solid ${border2}`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <div>
                              {course.originalPrice && (
                                <div style={{ fontSize: 12, color: muted, textDecoration: "line-through", marginBottom: 2 }}>
                                  ₹{course.originalPrice.toLocaleString()}
                                </div>
                              )}
                              <div style={{ fontSize: 22, fontWeight: 900, color: white }}>
                                ₹{course.price.toLocaleString()}
                              </div>
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                              <Btn onClick={(e) => { e.stopPropagation(); setActiveCourse(course); window.scrollTo({ top: 0, behavior: "smooth" }); }} variant="outline" style={{ padding: "8px 16px", fontSize: 12, color: white, borderColor: border2 }}>Syllabus</Btn>
                              <Btn onClick={(e) => { e.stopPropagation(); navigate('/register'); }} style={{ padding: "8px 16px", fontSize: 12, background: course.color, borderColor: course.color, color: "#040e1a" }}>Enroll</Btn>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* 4. LEARNING PATHS (Skill Trees) */}
            <section style={{
              padding: "100px 56px",
              background: "#030303",
              borderTop: `1px solid rgba(255, 255, 255, 0.05)`, borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
              position: "relative", overflow: "hidden"
            }}>
              {/* Decorative background element */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", background: `radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 60%)`, pointerEvents: "none" }} />

              <div style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: 36, fontWeight: 900, color: white, margin: "0 0 16px" }}>Structured Learning Paths</h2>
                <p style={{ color: muted, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
                  Not sure where to start? Follow our guided career skill trees to go from beginner to hired professional.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {PATHS.map((path, idx) => (
                  <div key={idx} style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%), #000000`,
                    border: `1px solid rgba(255, 255, 255, 0.05)`, borderRadius: 24, padding: "40px",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.5)`,
                    position: "relative", overflow: "hidden",
                    transition: "transform .3s ease", cursor: "default"
                  }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>

                    {/* Path Top Accent Glow */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: path.color, boxShadow: `0 0 20px ${path.color}` }} />

                    <h3 style={{ fontSize: 24, fontWeight: 900, color: white, marginBottom: 8 }}>{path.title}</h3>
                    <div style={{ color: path.color, fontSize: 13, fontWeight: 700, marginBottom: 32, textTransform: "uppercase", letterSpacing: 1 }}>{path.steps.length} Milestones</div>

                    {/* Vertical Timeline / Skill Tree */}
                    <div style={{ position: "relative", paddingLeft: 24 }}>
                      {/* Connecting Line */}
                      <div style={{ position: "absolute", left: 7, top: 10, bottom: 30, width: 2, background: `linear-gradient(to bottom, ${path.color} 0%, transparent 100%)` }} />

                      {path.steps.map((step, sIdx) => (
                        <div key={sIdx} style={{ position: "relative", marginBottom: sIdx === path.steps.length - 1 ? 0 : 24 }}>
                          {/* Node Dot */}
                          <div style={{
                            position: "absolute", left: -21, top: 6, width: 10, height: 10,
                            borderRadius: "50%", background: "#000", border: `2px solid ${path.color}`,
                            boxShadow: `0 0 10px ${path.color}80`
                          }} />

                          {/* Step Content */}
                          <div style={{
                            background: `rgba(255, 255, 255, 0.02)`,
                            border: `1px solid rgba(255, 255, 255, 0.05)`,
                            color: white, padding: "12px 20px", borderRadius: 12, fontSize: 14, fontWeight: 600,
                            transition: "all .2s ease"
                          }} onMouseEnter={e => { e.currentTarget.style.background = `${path.color}1a`; e.currentTarget.style.borderColor = `${path.color}4d`; }}
                            onMouseLeave={e => { e.currentTarget.style.background = `rgba(255, 255, 255, 0.02)`; e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.05)`; }}>
                            <span style={{ color: muted, fontSize: 11, display: "block", marginBottom: 2 }}>Step 0{sIdx + 1}</span>
                            {step}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Btn onClick={() => alert('Full syllabus downloaded.')} variant="outline" style={{ width: "100%", marginTop: 40, borderColor: `${path.color}4d`, color: path.color }}>Explore Full Syllabus</Btn>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. UPCOMING BATCHES */}
            <section className="section-container" style={{
              padding: "80px 56px 120px", position: "relative",
              background: `#000000 repeating-linear-gradient(0deg, transparent, transparent 49px, ${border} 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, ${border} 50px)`,
              backgroundSize: "100% 100%, 50px 50px, 50px 50px"
            }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: white, marginBottom: 40 }}>Upcoming Live Batches</h2>
                <div style={{ background: card, border: `1px solid ${border2}`, borderRadius: 16, overflow: "hidden" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <thead>
                      <tr style={{ background: `rgba(255,255,255,0.03)`, borderBottom: `1px solid ${border2}` }}>
                        <th style={{ padding: "20px 30px", fontSize: 12, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>Course Program</th>
                        <th style={{ padding: "20px 30px", fontSize: 12, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>Start Date</th>
                        <th style={{ padding: "20px 30px", fontSize: 12, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>Mode</th>
                        <th style={{ padding: "20px 30px", fontSize: 12, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>Seats Left</th>
                        <th style={{ padding: "20px 30px", fontSize: 12, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i} style={{ borderBottom: i === BATCHES.length - 1 ? "none" : `1px solid ${border2}` }}>
                          <td style={{ padding: "20px 30px", fontSize: 15, fontWeight: 700, color: white }}>{b.course}</td>
                          <td style={{ padding: "20px 30px", fontSize: 14, color: textCol }}>{b.date}</td>
                          <td style={{ padding: "20px 30px" }}>
                            <span style={{
                              fontSize: 11, background: `${cyan}1a`, color: cyan,
                              padding: "4px 10px", borderRadius: 4, fontWeight: 700
                            }}>{b.mode}</span>
                          </td>
                          <td style={{ padding: "20px 30px", fontSize: 14, color: b.seats < 5 ? orange : textCol, fontWeight: b.seats < 5 ? 700 : 400 }}>
                            {b.seats < 5 ? `Only ${b.seats} left!` : b.seats}
                          </td>
                          <td style={{ padding: "20px 30px" }}>
                            <Btn onClick={() => navigate('/register')} variant="outline" style={{ fontSize: 12, padding: "6px 16px" }}>Register</Btn>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
