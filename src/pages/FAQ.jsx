import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { bg, card, cyan, white, muted, textCol, neon } from "../styles/tokens";

const faqs = [
  {
    category: "Training & Certification (Skillnetics)",
    items: [
      {
        q: "Are the training programs suitable for absolute beginners?",
        a: "Yes, our Skillnetics platform offers foundational paths like 'Cybersecurity 101' and 'Networking Basics' designed specifically for individuals with zero prior IT experience, seamlessly transitioning them into advanced concepts."
      },
      {
        q: "What prerequisites do I need for advanced offensive courses?",
        a: "For advanced courses like our Red Team Operator track, we recommend at least 1-2 years of IT/networking experience or completion of our foundational pathways. Familiarity with Linux command line and basic scripting (Python/Bash) is highly recommended."
      },
      {
        q: "Are the certifications recognized by employers and the industry?",
        a: "Absolutely. Skillnetics certifications are performance-based, meaning you must hack a live lab environment to pass. Employers highly value this over traditional multiple-choice exams because it proves actual, hands-on capability."
      },
      {
        q: "Do I get access to virtual labs, and how do they work?",
        a: "Every training package includes dedicated, cloud-based virtual environments. You connect via a secure VPN or your web browser to safely practice exploitation, pivoting, and defense without affecting your own machine."
      },
      {
        q: "How long do I have access to the course material and labs?",
        a: "Most individual certification tracks provide lifetime access to static course materials and 90 days of dedicated lab time. You can easily purchase lab extensions if you need more time to prepare for the exam."
      },
      {
        q: "Do you offer corporate or team training packages?",
        a: "Yes! We offer bulk licensing and customized training portals for enterprise security teams. Managers can track team progress, assign specific learning modules, and view performance metrics."
      },
      {
        q: "What happens if I fail the certification exam?",
        a: "Don't worry. Your first retake is always included for free. If you fail a second time, you can purchase additional retake vouchers at a heavily discounted rate."
      }
    ]
  },
  {
    category: "Enterprise Security Services (HaloTrace)",
    items: [
      {
        q: "How long does a typical VAPT engagement take?",
        a: "A standard web or mobile application Vulnerability Assessment and Penetration Testing (VAPT) engagement usually takes 1 to 3 weeks, depending on the scope, complexity, and specific compliance requirements."
      },
      {
        q: "What deliverables do I receive after a penetration test?",
        a: "You receive a comprehensive executive summary outlining business risk, alongside a highly detailed technical report containing reproducible steps, Proof of Concepts (PoCs), and exact remediation guidance for your developers."
      },
      {
        q: "Do you provide remediation assistance and re-testing?",
        a: "Yes. We don't just hand you a report. Our engineers work directly with your development team to verify patches. One free re-test is included in all standard VAPT packages to ensure vulnerabilities are properly fixed."
      },
      {
        q: "Can you help us achieve compliance (ISO 27001, SOC2, HIPAA)?",
        a: "Yes, our consulting division specializes in gap assessments, policy development, and technical control implementation to help you achieve and maintain major security compliance frameworks."
      },
      {
        q: "What happens if we experience a live cyber attack right now?",
        a: "We have an elite Digital Forensics and Incident Response (DFIR) team on standby 24/7. We can rapidly deploy to contain the breach, evict the threat actor, secure evidence, and safely recover your systems."
      },
      {
        q: "Do you perform social engineering and physical penetration testing?",
        a: "Yes, as part of our comprehensive Red Teaming engagements, we simulate full-scope attacks which can include phishing campaigns, vishing (voice phishing), and authorized physical intrusion attempts."
      },
      {
        q: "Do you test cloud environments (AWS, Azure, GCP)?",
        a: "Yes, our cloud security architects conduct deep-dive architecture reviews, IAM permission audits, and container escape assessments for all major cloud providers."
      },
      {
        q: "Will your testing bring down our production servers?",
        a: "No. Our testing methodologies are designed to be non-destructive. While we do test for vulnerabilities, we do not launch actual Denial of Service (DoS) attacks or exploit fragile systems without explicit prior consent."
      }
    ]
  },
  {
    category: "Platform, Billing & Accounts",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, PayPal, Apple Pay, and bank transfers for corporate invoicing. Enterprise clients can also utilize Net-30 purchase orders (POs)."
      },
      {
        q: "Do you offer refunds?",
        a: "For training courses, we offer a 7-day money-back guarantee, provided you have not accessed more than 20% of the course material or initiated the certification exam."
      },
      {
        q: "I forgot my student portal password. How do I reset it?",
        a: "You can click the 'Forgot Password' link on the login page. A secure reset link will be emailed to your registered address immediately."
      },
      {
        q: "Can I share my training account with a colleague?",
        a: "No, accounts are strictly for individual use to maintain the integrity of our certification process. Concurrent logins from different IP addresses may trigger automated account suspension."
      },
      {
        q: "How do I download my digital certificate?",
        a: "Once you pass your final practical exam, your digital certificate and verified Credly badge will automatically appear in your student portal under the 'Achievements' tab."
      },
      {
        q: "Do you offer student discounts?",
        a: "Yes, we offer a 20% discount for currently enrolled university students. Please email our support team from your active .edu email address to receive your discount code."
      }
    ]
  },
  {
    category: "Legal, Privacy & General",
    items: [
      {
        q: "Are you willing to sign a Non-Disclosure Agreement (NDA)?",
        a: "Absolutely. Security and confidentiality are our core principles. We sign mutual NDAs before any scoping discussions or penetration testing begins."
      },
      {
        q: "How is HaloTrace different from other security firms?",
        a: "We bridge the gap between human capability and technical defense. By integrating our Skillnetics training ecosystem with our high-end HaloTrace enterprise services, we don't just secure your infrastructure—we upskill your internal teams simultaneously."
      },
      {
        q: "Do you have a bug bounty program?",
        a: "Yes, we actively encourage responsible disclosure. Please review our Responsible Disclosure policy page for rules of engagement, safe harbors, and submission guidelines."
      },
      {
        q: "Where is your company headquartered?",
        a: "We are a fully remote, global company with security experts and instructors distributed across multiple time zones to provide 24/7 coverage for our enterprise clients."
      },
      {
        q: "How do you handle client data after a penetration test?",
        a: "All sensitive client data, vulnerability reports, and credentials gathered during an engagement are securely encrypted at rest. After the final report delivery and remediation period, all sensitive artifacts are securely wiped."
      }
    ]
  }
];

export default function FAQ() {
  const [openQ, setOpenQ] = useState(null);

  const toggleQ = (id) => {
    setOpenQ(openQ === id ? null : id);
  };

  return (
    <main style={{
      background: bg, minHeight: "100vh",
      padding: "120px 20px 80px",
      color: textCol,
      position: "relative", overflow: "hidden",
    }}>
      <Helmet>
        <title>FAQ | HaloTrace & Skillnetics</title>
        <meta name="description" content="Frequently Asked Questions about HaloTrace cybersecurity services and Skillnetics training." />
      </Helmet>

      {/* Background Glow */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%",
        width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${neon}15 0%, transparent 70%)`,
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h1 style={{
            fontSize: 48, fontWeight: 800, color: white,
            margin: "0 0 16px",
            letterSpacing: 1, textTransform: "uppercase"
          }}>
            Frequently Asked <span style={{ color: cyan }}>Questions</span>
          </h1>
          <p style={{ fontSize: 16, color: muted, maxWidth: 600, margin: "0 auto" }}>
            Find answers to common questions about our cybersecurity services, training programs, and corporate solutions.
          </p>
        </div>

        {/* FAQ Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {faqs.map((cat, cIdx) => (
            <div key={cIdx}>
              <h3 style={{
                color: neon, fontSize: 20, fontWeight: 700,
                margin: "0 0 24px",
                borderBottom: `1px solid rgba(255,255,255,0.08)`,
                paddingBottom: 12
              }}>
                {cat.category}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cat.items.map((item, iIdx) => {
                  const id = `${cIdx}-${iIdx}`;
                  const isOpen = openQ === id;
                  return (
                    <div key={id} style={{
                      background: `linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%), ${card}`,
                      border: `1px solid ${isOpen ? cyan : "rgba(255,255,255,0.05)"}`,
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "all 0.3s ease"
                    }}>
                      <button
                        onClick={() => toggleQ(id)}
                        style={{
                          width: "100%", textAlign: "left",
                          padding: "20px 24px",
                          background: "none", border: "none",
                          color: white, fontSize: 16, fontWeight: 600,

                          display: "flex", justifyContent: "space-between",
                          alignItems: "center", cursor: "pointer",
                        }}
                      >
                        <span style={{ paddingRight: 20 }}>{item.q}</span>
                        <span style={{
                          color: isOpen ? cyan : muted,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                          fontSize: 14
                        }}>
                          ▼
                        </span>
                      </button>

                      <div style={{
                        maxHeight: isOpen ? 300 : 0,
                        opacity: isOpen ? 1 : 0,
                        transition: "all 0.3s ease",
                        padding: isOpen ? "0 24px 24px" : "0 24px 0",
                        color: muted, fontSize: 15, lineHeight: 1.6
                      }}>
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: 60, padding: 32, textAlign: "center",
          background: "rgba(0, 255, 135, 0.05)",
          border: `1px solid rgba(0, 255, 135, 0.2)`,
          borderRadius: 16
        }}>
          <h4 style={{ color: white, fontSize: 18, fontWeight: 600, margin: "0 0 12px" }}>
            Still have questions?
          </h4>
          <p style={{ color: muted, fontSize: 14, margin: "0 0 20px" }}>
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: neon, color: "#040a12",
            padding: "10px 24px", borderRadius: 8, fontWeight: 700,
            textDecoration: "none", fontSize: 14,
            transition: "opacity 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </main>
  );
}
