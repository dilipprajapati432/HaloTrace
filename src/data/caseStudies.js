export const CASE_STUDIES = [
  {
    id: 1,
    title: "Web Application Security Assessment",
    slug: "web-app-security-assessment",
    industry: "E-commerce",
    duration: "3 Weeks",
    service: "VAPT",
    challenge: "An enterprise e-commerce platform with over 1M monthly active users was preparing to launch a major checkout update and needed to ensure zero risk of customer credit card data leakage or unauthorized order modifications.",
    approach: "We conducted a white-box assessment combined with credentialed API fuzzing to simulate both anonymous external attackers and malicious registered users.",
    methodology: "Our team followed the OWASP Web Security Testing Guide (WSTG) methodology, manually auditing business logic flaws, session management integrity, and injection vectors.",
    findings: [
      { issue: "Broken Object Level Authorization (BOLA) in Checkout API", severity: "Critical" },
      { issue: "SQL Injection vulnerability in search queries endpoint", severity: "High" },
      { issue: "Stored Cross-Site Scripting (XSS) in user review forms", severity: "Medium" },
      { issue: "Sensitive data exposure in verbose server response headers", severity: "Low" }
    ],
    outcome: [
      "Patched a critical BOLA exploit that allowed arbitrary pricing changes.",
      "Remediated SQL Injection vector by converting raw database queries to prepared statements.",
      "Sanitized all user-facing inputs to eliminate XSS vectors.",
      "Configured custom security headers to prevent disclosure of backend webserver version information."
    ],
    impact: "12 critical vulnerabilities found and remediated, security posture strengthened 85%",
    tags: ["Web App", "API Security", "OWASP Top 10", "Checkout Security"]
  },
  {
    id: 2,
    title: "Network Penetration Test — Financial Institution",
    slug: "network-penetration-test-banking",
    industry: "Banking",
    duration: "2 Weeks",
    service: "Network Pentest",
    challenge: "A regional commercial bank required an independent validation of their internal and external network boundaries to comply with banking regulations and prevent network lateral movement.",
    approach: "We simulated an external threat actor trying to breach the perimeter and a rogue contractor with physical access to an internal branch LAN port.",
    methodology: "Applying the Penetration Testing Execution Standard (PTES), we scanned 500+ internal hosts, performed AD service audits, and tested network segregation policies.",
    findings: [
      { issue: "Exposed Unauthenticated Router Admin Interface on WAN", severity: "Critical" },
      { issue: "Weak Active Directory Kerberos Pre-Authentication", severity: "High" },
      { issue: "Unencrypted LLMNR/NBT-NS protocols active internally", severity: "Medium" },
      { issue: "Outdated SSH version on branch backup servers", severity: "Low" }
    ],
    outcome: [
      "Secured and disabled WAN-facing administrative login interfaces.",
      "Reconfigured AD security groups and enforced 16-character complex password policies.",
      "Segregated branch offices from core transaction database segments.",
      "Disabled LLMNR/NBT-NS broadcast protocols company-wide."
    ],
    impact: "Identified exposed admin interfaces, segregated network segments",
    tags: ["Active Directory", "Internal Network", "External Network", "Banking Compliance"]
  },
  {
    id: 3,
    title: "Digital Forensic Investigation — Data Breach",
    slug: "digital-forensic-investigation-data-breach",
    industry: "Technology",
    duration: "1 Week",
    service: "DFIR",
    challenge: "A SaaS provider noticed anomalous egress data traffic from their staging customer database server and suspected an active intrusion.",
    approach: "Our Incident Response team was deployed within 2 hours to isolate affected systems, perform RAM memory analysis, and trace the attacker's point of entry.",
    methodology: "ISO 27037 incident handling standard: volatile memory capture, filesystem timeline analysis, and firewall log correlation.",
    findings: [
      { issue: "Exposed API access token stored in public Github repository", severity: "Critical" },
      { issue: "Lack of centralized log monitoring for staging environment", severity: "High" },
      { issue: "Anomalous SSH connection from unapproved geographical IP", severity: "Medium" },
      { issue: "Standard OS auditing logs configured with low storage limits", severity: "Low" }
    ],
    outcome: [
      "Traced root cause to a compromised developer API token checked into GitHub.",
      "Preserved forensically sound disk images for legal and insurance purposes.",
      "Successfully rotated all cloud infrastructure access keys and tokens.",
      "Implemented a comprehensive security logging monitoring setup."
    ],
    impact: "Root cause identified, attacker TTPs documented, evidence preserved for legal",
    tags: ["Incident Response", "Cloud Logs", "Data Egress", "Breach Containment"]
  },
  {
    id: 4,
    title: "Mobile App Security Testing",
    slug: "mobile-app-security-testing",
    industry: "Fintech",
    duration: "2 Weeks",
    service: "Mobile Security",
    challenge: "A mobile banking app preparing for a version 2.0 release needed to protect sensitive transaction processing API endpoints from client-side reverse engineering.",
    approach: "We conducted dynamic analysis using emulator hooking tools (Frida) and static code decompression of the compiled IPA and APK files.",
    methodology: "Following the OWASP Mobile Application Security Verification Standard (MASVS), we targeted SSL pinning, local file storage security, and root detection.",
    findings: [
      { issue: "Bypassed SSL Pinning leading to transaction interception", severity: "Critical" },
      { issue: "Hardcoded API cryptographic keys in application source code", severity: "High" },
      { issue: "Sensitive customer login credentials cached in local logs", severity: "Medium" },
      { issue: "Lack of obfuscation in Android dex bytecode", severity: "Low" }
    ],
    outcome: [
      "Hardened client-side certificate pinning routines with custom native checks.",
      "Migrated static cryptographic keys to secure Cloud Key Management Services.",
      "Disabled verbose log statements in release compilation builds.",
      "Applied ProGuard/DexGuard code obfuscation rules to prevent reverse engineering."
    ],
    impact: "8 high-severity flaws found, API authentication hardened",
    tags: ["iOS & Android", "SSL Pinning", "Frida Hooking", "Code Obfuscation"]
  },
  {
    id: 5,
    title: "Employee Security Awareness Training",
    slug: "employee-security-awareness-training",
    industry: "Manufacturing",
    duration: "4 Weeks",
    service: "Security Training",
    challenge: "A manufacturing corporation with 5,000+ desk employees fell victim to a ransomware attack initiated by a single employee clicking an email link.",
    approach: "We designed a multi-stage phishing simulation and interactive micro-learning campaign targeting finance, HR, and supply chain teams.",
    methodology: "Simulated spear-phishing baseline assessment followed by mandatory web learning modules and secondary tests for clickers.",
    findings: [
      { issue: "Phishing email link click rate at a dangerous 34% baseline", severity: "Critical" },
      { issue: "No reported phishing emails through support channels", severity: "High" },
      { issue: "Employees unable to identify look-alike phishing domain names", severity: "Medium" },
      { issue: "Password sharing behaviors observed in shared factory offices", severity: "Low" }
    ],
    outcome: [
      "Delivered customized video training courses and interactive phishing quizzes.",
      "Trained all department leads in secure reporting protocols.",
      "Developed a 'Phish Alert' single-click button plugin in corporate email clients.",
      "Reduced overall department email phishing click rate to under 6%."
    ],
    impact: "Phishing click rate reduced from 34% to 6%",
    tags: ["Phishing Simulation", "Ransomware Prevention", "Social Engineering", "Micro-Learning"]
  },
  {
    id: 6,
    title: "Cloud Infrastructure Security Assessment",
    slug: "cloud-infrastructure-security-assessment",
    industry: "SaaS Startup",
    duration: "3 Weeks",
    service: "Cloud Security",
    challenge: "A SaaS provider deploying microservices on public cloud platforms needed to verify that their automated Terraform scripts complied with secure configuration guidelines.",
    approach: "We analyzed cloud configuration architectures, reviewed infrastructure-as-code files, and checked active user roles in IAM databases.",
    methodology: "CIS Benchmarks compliance mapping, auditing S3 buckets, IAM user privileges, security group routes, and cloud audit logs.",
    findings: [
      { issue: "Publicly readable Amazon S3 buckets with backup database files", severity: "Critical" },
      { issue: "IAM administrator roles assigned to service user accounts", severity: "High" },
      { issue: "SSH port 22 open globally to 0.0.0.0/0 on staging instances", severity: "Medium" },
      { issue: "Multi-Factor Authentication (MFA) disabled on developer roles", severity: "Low" }
    ],
    outcome: [
      "Locked down S3 bucket access policies to strict private settings.",
      "Enforced Least Privilege access principles for cloud IAM roles.",
      "Configured secure VPN access and closed direct internet SSH endpoints.",
      "Enforced mandatory organization-wide MFA configuration profiles."
    ],
    impact: "3 S3 misconfigurations, IAM over-privileges resolved",
    tags: ["Terraform", "AWS Auditing", "IAM Policies", "CIS Compliance"]
  }
];
