  export const GLOSSARY_TERMS = [
  // --- OFFENSIVE SECURITY ---
  {
    term: "Zero-Day",
    domain: "Offensive Security",
    def: "A software vulnerability that is unknown to the vendor. Attackers exploit it before a patch or fix is available.",
    example: "The Stuxnet worm heavily relied on multiple zero-day vulnerabilities to compromise Iranian nuclear centrifuges.",
    related: ["Exploit", "Payload"]
  },
  {
    term: "Advanced Persistent Threat (APT)",
    domain: "Offensive Security",
    def: "A stealthy threat actor, typically a nation-state or state-sponsored group, which gains unauthorized access to a computer network and remains undetected for an extended period.",
    example: "APT29 (Cozy Bear) breached multiple government networks to silently exfiltrate intelligence.",
    related: ["Backdoor", "C2 (Command & Control)"]
  },
  {
    term: "Buffer Overflow",
    domain: "Offensive Security",
    def: "An anomaly where a program, while writing data to a buffer, overruns the buffer's boundary and overwrites adjacent memory locations.",
    example: "Attackers use buffer overflows to overwrite the execution path of an application and run malicious code.",
    related: ["Zero-Day", "Exploit"]
  },
  {
    term: "Command and Control (C2)",
    domain: "Offensive Security",
    def: "The infrastructure (servers and protocols) used by an attacker to maintain communication with compromised systems within a target network.",
    example: "Cobalt Strike is a popular framework used to establish a C2 beacon on compromised hosts.",
    related: ["APT", "Botnet"]
  },
  {
    term: "Privilege Escalation",
    domain: "Offensive Security",
    def: "The act of exploiting a bug, design flaw, or configuration oversight to gain elevated access to resources that are normally protected.",
    example: "An attacker logs in as a low-level guest user and exploits a kernel bug to gain 'root' access.",
    related: ["Exploit", "Lateral Movement"]
  },
  {
    term: "Lateral Movement",
    domain: "Offensive Security",
    def: "Techniques that attackers use to move through a network after gaining initial access, searching for higher-value targets or data.",
    example: "Using stolen credentials to move from an exploited web server to a secure database server.",
    related: ["Privilege Escalation", "APT"]
  },
  {
    term: "Phishing",
    domain: "Social Engineering",
    def: "A deceptive attempt to steal sensitive information (like passwords or credit cards) by disguising as a trustworthy entity in electronic communication.",
    example: "An email claiming to be from your bank asking you to 'verify your account' by clicking a malicious link.",
    related: ["Spear Phishing", "Whaling"]
  },
  {
    term: "Spear Phishing",
    domain: "Social Engineering",
    def: "A highly targeted phishing attack aimed at a specific individual or organization, often utilizing deep reconnaissance to appear legitimate.",
    example: "An attacker emails the CFO pretending to be the CEO, referencing a specific ongoing project to request a wire transfer.",
    related: ["Phishing", "Whaling"]
  },
  {
    term: "Botnet",
    domain: "Malware",
    def: "A network of private computers infected with malicious software and controlled as a group without the owners' knowledge.",
    example: "The Mirai botnet infected hundreds of thousands of IoT devices to launch a massive DDoS attack.",
    related: ["DDoS", "Malware"]
  },
  {
    term: "Ransomware",
    domain: "Malware",
    def: "A type of malicious software designed to block access to a computer system or encrypt data until a sum of money is paid.",
    example: "WannaCry ransomware encrypted files on hospital networks and demanded payment in Bitcoin for the decryption key.",
    related: ["Malware", "Extortion"]
  },
  {
    term: "Rootkit",
    domain: "Malware",
    def: "A clandestine computer program designed to provide continued privileged access to a computer while actively hiding its presence.",
    example: "A rootkit intercepts operating system API calls to hide its own malicious files from the antivirus scanner.",
    related: ["Malware", "Privilege Escalation"]
  },
  // --- DEFENSIVE SECURITY ---
  {
    term: "SIEM",
    domain: "Defensive Security",
    def: "Security Information and Event Management. A software solution that aggregates and analyzes activity from many different resources across your entire IT infrastructure.",
    example: "Using Splunk (a SIEM) to correlate a failed VPN login with a subsequent database alert.",
    related: ["SOC", "SOAR"]
  },
  {
    term: "SOAR",
    domain: "Defensive Security",
    def: "Security Orchestration, Automation, and Response. Technologies that enable organizations to collect inputs monitored by the security operations team and execute automated responses.",
    example: "A SOAR platform automatically isolating a laptop from the network when the SIEM detects ransomware.",
    related: ["SIEM", "EDR"]
  },
  {
    term: "EDR",
    domain: "Defensive Security",
    def: "Endpoint Detection and Response. An integrated endpoint security solution that combines real-time continuous monitoring and collection of endpoint data with rules-based automated response.",
    example: "CrowdStrike Falcon identifying and killing a malicious PowerShell script executing on an employee's laptop.",
    related: ["XDR", "Antivirus"]
  },
  {
    term: "XDR",
    domain: "Defensive Security",
    def: "Extended Detection and Response. An evolution of EDR that integrates telemetry from across the entire security stack (endpoints, cloud, network, and email).",
    example: "Tracing an attack path from a phishing email to a cloud workload using a unified XDR dashboard.",
    related: ["EDR", "SIEM"]
  },
  {
    term: "Honeypot",
    domain: "Defensive Security",
    def: "A decoy computer system intended to attract cyberattacks, acting as a decoy to study attacker behavior or distract them from legitimate targets.",
    example: "Deploying a fake, intentionally vulnerable database to alert the SOC when attackers are probing the internal network.",
    related: ["Deception Technology", "Blue Team"]
  },
  {
    term: "SOC (Security Operations Center)",
    domain: "Defensive Security",
    def: "A centralized function within an organization employing people, processes, and technology to continuously monitor and improve an organization's security posture.",
    example: "A team of tier 1 analysts monitoring the SIEM 24/7 to triage incoming security alerts.",
    related: ["SIEM", "Incident Response"]
  },
  {
    term: "Incident Response (IR)",
    domain: "Defensive Security",
    def: "An organized approach to addressing and managing the aftermath of a security breach or cyberattack to limit damage and reduce recovery time.",
    example: "The IR team isolating infected servers, identifying the root cause, and restoring from clean backups.",
    related: ["SOC", "Forensics"]
  },
  // --- CRYPTOGRAPHY ---
  {
    term: "Hash Function",
    domain: "Cryptography",
    def: "A mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a hash or digest). It is a one-way function.",
    example: "Using SHA-256 to verify that a downloaded file has not been tampered with.",
    related: ["Salt", "Encryption"]
  },
  {
    term: "Salt",
    domain: "Cryptography",
    def: "Random data that is used as an additional input to a one-way function that hashes data, passwords, or passphrases, defending against dictionary attacks.",
    example: "Adding a unique 16-byte salt to every user's password before hashing it in the database.",
    related: ["Hash Function", "Rainbow Table"]
  },
  {
    term: "Asymmetric Encryption",
    domain: "Cryptography",
    def: "A cryptographic system that uses pairs of keys: public keys (which may be disseminated widely) and private keys (which are known only to the owner).",
    example: "Using RSA to encrypt a message with the recipient's public key so that only they can decrypt it with their private key.",
    related: ["Symmetric Encryption", "PKI"]
  },
  {
    term: "PKI (Public Key Infrastructure)",
    domain: "Cryptography",
    def: "A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption.",
    example: "The system that allows your browser to trust that you are actually securely connected to your bank's website via HTTPS.",
    related: ["Asymmetric Encryption", "Certificate Authority"]
  },
  // --- WEB SECURITY ---
  {
    term: "SQL Injection (SQLi)",
    domain: "Web Security",
    def: "A code injection technique that might destroy your database. It occurs when malicious SQL statements are inserted into entry fields for execution.",
    example: "Entering `' OR 1=1 --` into a login field to bypass authentication.",
    related: ["XSS", "Injection"]
  },
  {
    term: "Cross-Site Scripting (XSS)",
    domain: "Web Security",
    def: "A vulnerability where an attacker injects malicious executable scripts into the code of a trusted application or website.",
    example: "Injecting a JavaScript payload into a forum post that steals the session cookies of anyone who views the post.",
    related: ["SQLi", "CSRF"]
  },
  {
    term: "CSRF (Cross-Site Request Forgery)",
    domain: "Web Security",
    def: "An attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.",
    example: "Tricking an authenticated bank user into clicking a link that silently transfers funds to the attacker's account.",
    related: ["XSS", "Authentication"]
  },
  {
    term: "SSRF (Server-Side Request Forgery)",
    domain: "Web Security",
    def: "A vulnerability where an attacker abuses the functionality of a server to cause it to access or manipulate information in the realm of that server.",
    example: "Forcing a web server to make an internal HTTP request to the AWS metadata service to extract cloud credentials.",
    related: ["CSRF", "Cloud Security"]
  },
  // --- COMPLIANCE & ARCHITECTURE ---
  {
    term: "Zero Trust",
    domain: "Architecture",
    def: "A security framework requiring all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated.",
    example: "Removing the concept of a 'trusted internal network' and requiring MFA for every internal application access.",
    related: ["IAM", "Microsegmentation"]
  },
  {
    term: "IAM (Identity and Access Management)",
    domain: "Architecture",
    def: "A framework of policies and technologies for ensuring that the proper people in an enterprise have the appropriate access to technology resources.",
    example: "Using Okta or Active Directory to enforce password policies, MFA, and role-based access control.",
    related: ["Zero Trust", "Privileged Access Management"]
  },
  {
    term: "DDoS (Distributed Denial of Service)",
    domain: "Network Security",
    def: "A malicious attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target with a flood of Internet traffic.",
    example: "A botnet sending millions of requests per second to a website, causing it to crash and go offline.",
    related: ["Botnet", "Availability"]
  },
  {
    term: "WAF (Web Application Firewall)",
    domain: "Network Security",
    def: "A specific form of application firewall that filters, monitors, and blocks HTTP traffic to and from a web service.",
    example: "Deploying Cloudflare WAF to automatically block incoming SQL injection attempts.",
    related: ["Firewall", "Web Security"]
  }
];
