import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { bg, cyan, white, muted, textCol, neon as greenNeon, card, card2, border2 } from "../styles/tokens";
import { Btn } from "../components/ui/UI";
import { GLOSSARY_TERMS } from "../data/glossaryData";

// Override the global green neon with cyber-orange exclusively for this page
const neon = "#ff6b00";

// --- CORE DATA ---
const RAW_TOOLS = [
  { name: "Nmap", category: "Reconnaissance", desc: "The ultimate network mapper. Used for discovering hosts and services on a computer network." },
  { name: "Wireshark", category: "Traffic Analysis", desc: "The world's foremost and widely-used network protocol analyzer." },
  { name: "Burp Suite", category: "Web Exploitation", desc: "An integrated platform for performing security testing of web applications." },
  { name: "Metasploit", category: "Exploitation", desc: "A penetration testing framework that makes hacking simple. Essential in ethical hacking." },
];

const RAW_NEWS = [
  { title: "Critical Vulnerability Found in Popular Open Source Library", date: "Oct 24, 2024", summary: "Security researchers have disclosed a high-severity zero-day vulnerability affecting millions of deployments worldwide." },
  { title: "Ransomware Gang Demands $50M in Latest Healthcare Breach", date: "Oct 21, 2024", summary: "A major healthcare provider was forced to take systems offline after a devastating ransomware attack crippled operations." },
  { title: "HaloTrace Announces New Advanced SOC Operations Course", date: "Oct 15, 2024", summary: "Skillnetics by HaloTrace launches a comprehensive hands-on training for aspiring Security Operations Center analysts." },
];

const RAW_FREE_RESOURCES = [
  { title: "Nmap Cheat Sheet", type: "PDF", desc: "A quick reference guide for Nmap commands, scripts, and flags." },
  { title: "Web App Pentesting Methodology", type: "Checklist", desc: "A comprehensive checklist to ensure you don't miss anything during a web app assessment." },
  { title: "Linux Privilege Escalation Guide", type: "Guide", desc: "Step-by-step methodology for finding and exploiting privesc vectors on Linux." },
];

// Glossary terms are now imported from src/data/glossaryData.js

const TABS = [
  { id: "all", label: "All Assets" },
  { id: "tools", label: "Security Tools" },
  { id: "news", label: "Intel & News" },
  { id: "free-resources", label: "Downloads" },
  { id: "glossary", label: "Glossary" },
];

// --- STUNNING GLASSMORPHIC CARDS ---
const GlassCard = ({ item }) => {
  const baseStyle = {
    background: "rgba(9, 24, 40, 0.6)", // Matches the global 'card' token
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${border2}`,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
    borderRadius: 16,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = `0 12px 40px rgba(255, 107, 0, 0.15)`;
    e.currentTarget.style.borderColor = `rgba(255, 107, 0, 0.3)`;
  };
  const handleMouseLeave = (e, defaultBorder = border2) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.6)";
    e.currentTarget.style.borderColor = defaultBorder;
  };

  if (item.type === "tools") {
    return (
      <div style={baseStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${greenNeon}, transparent)` }}></div>
        <div style={{ fontSize: 11, color: cyan, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, background: cyan, borderRadius: "50%", display: "inline-block", boxShadow: `0 0 10px ${cyan}` }}></span>
          {item.category}
        </div>
        <h3 style={{ fontSize: 28, fontWeight: 900, color: white, marginBottom: 16, letterSpacing: -0.5 }}>{item.name}</h3>
        <p style={{ fontSize: 16, color: textCol, lineHeight: 1.7, marginBottom: 32 }}>{item.desc}</p>
        <div style={{ marginTop: "auto" }}>
          <Btn style={{ padding: "12px 0", width: "100%", justifyContent: "center", fontSize: 14, fontWeight: 800, background: `${greenNeon}1a`, borderColor: `${greenNeon}4d`, color: greenNeon, textTransform: "uppercase", letterSpacing: 1 }}>Execute</Btn>
        </div>
      </div>
    );
  }

  if (item.type === "news") {
    return (
      <div style={baseStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{ fontSize: 12, color: muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, borderBottom: `1px solid rgba(255,255,255,0.1)`, paddingBottom: 12, display: "flex", justifyContent: "space-between" }}>
          <span>{item.date}</span>
          {item.source && <span style={{ color: neon }}>{item.source}</span>}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: white, marginBottom: 16, lineHeight: 1.4 }}>
          {item.title.length > 70 ? item.title.substring(0, 70) + "..." : item.title}
        </h3>
        <p style={{ fontSize: 15, color: textCol, lineHeight: 1.6, marginBottom: 24 }}>
          {item.summary && item.summary.length > 120 ? item.summary.substring(0, 120) + "..." : item.summary}
        </p>
        <div style={{ marginTop: "auto" }}>
          <Btn
            onClick={() => item.url && window.open(item.url, "_blank")}
            style={{ padding: "10px 0", width: "100%", justifyContent: "center", fontSize: 13, background: "transparent", borderColor: "rgba(255, 107, 0, 0.3)", color: cyan, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}
          >
            Read Full Article →
          </Btn>
        </div>
      </div>
    );
  }

  if (item.type === "free-resources") {
    return (
      <div style={{ ...baseStyle, border: `1px solid rgba(255, 107, 0, 0.1)` }} onMouseEnter={handleMouseEnter} onMouseLeave={(e) => handleMouseLeave(e, "rgba(255, 107, 0, 0.1)")}>
        <div style={{ position: "absolute", top: 0, right: 0, background: `${greenNeon}`, color: "#000", padding: "6px 16px", fontSize: 12, fontWeight: 900, borderBottomLeftRadius: 16, boxShadow: `0 0 20px ${greenNeon}80` }}>
          FREE RESOURCES
        </div>
        <div style={{ fontSize: 12, color: neon, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>📥 Download</div>
        <h3 style={{ fontSize: 24, fontWeight: 900, color: white, marginBottom: 16 }}>{item.title}</h3>
        <p style={{ fontSize: 15, color: textCol, lineHeight: 1.6, marginBottom: 32 }}>{item.desc}</p>
        <div style={{ marginTop: "auto" }}>
          <Btn style={{ padding: "12px 0", width: "100%", justifyContent: "center", fontSize: 14, background: cyan, borderColor: cyan, color: "#000", fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>Download Asset</Btn>
        </div>
      </div>
    );
  }

  if (item.type === "glossary") {
    const [isFlipped, setIsFlipped] = useState(false);

    const glossaryStyle = {
      ...baseStyle,
      position: "absolute",
      inset: 0,
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      transition: "none" // Disable CSS transitions here to let Framer Motion handle it smoothly
    };

    const frontContent = (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%" }}>
        <div style={{ fontSize: 12, color: cyan, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>{item.domain}</div>
        <h3 style={{ fontSize: 26, fontWeight: 900, color: neon, letterSpacing: 0.5, margin: 0 }}>{item.term}</h3>
        <div style={{ marginTop: 24, fontSize: 12, color: greenNeon, textTransform: "uppercase", letterSpacing: 2 }}>Click to Reveal ⤵</div>
      </div>
    );

    const backContent = (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h3 style={{ fontSize: 18, fontWeight: 900, color: neon, marginBottom: 12, borderBottom: `1px solid ${border2}`, paddingBottom: 8 }}>{item.term}</h3>
        <p style={{ fontSize: 14, color: textCol, lineHeight: 1.6, marginBottom: 16 }}>{item.def}</p>
        {item.example && (
          <p style={{ fontSize: 13, color: muted, lineHeight: 1.5, marginBottom: 16, background: card2, padding: 12, borderRadius: 8, borderLeft: `2px solid ${cyan}` }}>
            <em>{item.example}</em>
          </p>
        )}
        {item.related && (
          <div style={{ marginTop: "auto", display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 16 }}>
            {item.related.map(r => (
              <span key={r} style={{ fontSize: 11, padding: "4px 10px", background: card2, color: greenNeon, borderRadius: 50, border: `1px solid ${border2}` }}>{r}</span>
            ))}
          </div>
        )}
      </div>
    );

    return (
      <div style={{ perspective: 1500, cursor: "pointer", height: "100%", position: "relative" }} onClick={() => setIsFlipped(!isFlipped)}>
        
        {/* GHOST WRAPPER: Ensures the card sizes itself naturally to fit the tallest content */}
        <div style={{ ...baseStyle, visibility: "hidden", pointerEvents: "none" }}>
          {backContent}
        </div>

        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(255, 107, 0, 0.15)" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, transformStyle: "preserve-3d", borderRadius: 16 }}
        >
          {/* FRONT OF CARD */}
          <div style={glossaryStyle}>
            {frontContent}
          </div>

          {/* BACK OF CARD */}
          <div style={{ ...glossaryStyle, transform: "rotateY(180deg)" }}>
            {backContent}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default function Resources() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get("tab") || "all";

  const [liveNews, setLiveNews] = useState(RAW_NEWS.map(t => ({ ...t, type: "news", id: `news-${t.title}` })));

  useEffect(() => {
    const fetchNews = async () => {
      const feeds = [
        "https://feeds.feedburner.com/TheHackersNews",
        "https://cybersecuritynews.com/feed/",
        "https://thecyberwire.com/feed"
      ];

      const apiKey = import.meta.env.VITE_RSS2JSON_API_KEY;
      const apiKeyParam = apiKey ? `&api_key=${apiKey}` : "";

      try {
        const fetchPromises = feeds.map(feed =>
          fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}${apiKeyParam}`)
            .then(res => res.json())
            .catch(() => null)
        );

        const results = await Promise.all(fetchPromises);

        let allArticles = [];

        results.forEach(data => {
          if (data && data.status === "ok" && data.items) {
            const itemsWithSource = data.items.map(item => ({ ...item, source: data.feed.title || "News Source" }));
            allArticles = [...allArticles, ...itemsWithSource];
          }
        });

        if (allArticles.length > 0) {
          // Sort all articles by publish date (newest first)
          allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

          // Take top 9 most recent articles across all feeds
          const formattedNews = allArticles.slice(0, 9).map(article => {
            // Strip HTML tags from description if present
            const cleanDesc = article.description ? article.description.replace(/<[^>]*>?/gm, '').trim() : "Click to read the full article.";

            return {
              title: article.title,
              date: new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              summary: cleanDesc,
              url: article.link,
              source: article.source,
              type: "news",
              id: `news-${article.link}`
            };
          });

          setLiveNews(formattedNews);
        }
      } catch (error) {
        console.error("Error fetching live RSS news:", error);
      }
    };

    fetchNews();
  }, []);

  const ALL_ITEMS = [
    ...RAW_TOOLS.map(t => ({ ...t, type: "tools", id: `tool-${t.name}` })),
    ...liveNews,
    ...RAW_FREE_RESOURCES.map(t => ({ ...t, type: "free-resources", assetType: t.type, id: `res-${t.title}` })),
    ...GLOSSARY_TERMS.map(t => ({ ...t, type: "glossary", id: `gloss-${t.term}` }))
  ];

  const handleTabClick = (id) => {
    navigate(`/resources?tab=${id}`, { replace: true });
  };

  const filteredItems = ALL_ITEMS.filter(item => currentTab === "all" || item.type === currentTab);

  return (
    <>
      <Helmet>
        <title>Cyber Showcase | HaloTrace</title>
        <meta name="description" content="A premium directory of cybersecurity assets." />
      </Helmet>

      <div style={{ background: bg, minHeight: "100vh", position: "relative" }}>

        {/* PREMIUM BACKGROUND EFFECTS */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 0%, rgba(255, 107, 0, 0.08), transparent 60%)`, pointerEvents: "none" }}></div>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: "40px 40px", pointerEvents: "none", opacity: 0.5 }}></div>

        <div style={{ position: "relative", zIndex: 10 }}>
          {/* HERO SECTION */}
          <section style={{ paddingTop: 180, paddingBottom: 60, textAlign: "center" }}>
            <h1 style={{ fontSize: 64, fontWeight: 900, color: white, marginBottom: 24, letterSpacing: -2, textShadow: `0 0 40px #FF6B004d` }}>
              Cyber Showcase
            </h1>
            <p style={{ fontSize: 20, color: muted, maxWidth: 700, margin: "0 auto", lineHeight: 1.6, marginBottom: 60 }}>
              Access our premier collection of industry-grade security tools, critical threat intelligence, and high-value operational assets.
            </p>

            {/* NEON FILTER PILLS */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", padding: "0 20px" }}>
              {TABS.map(tab => {
                const active = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    style={{
                      padding: "12px 32px",
                      background: active ? `rgba(255, 107, 0, 0.15)` : "rgba(4, 10, 18, 0.6)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${active ? neon : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 50,
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      color: active ? neon : white,
                      fontWeight: active ? 900 : 600,
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      boxShadow: active ? `0 0 20px ${neon}4d, inset 0 0 10px ${neon}33` : "none",
                      outline: "none"
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = `rgba(255,255,255,0.1)`;
                        e.currentTarget.style.borderColor = `rgba(255,255,255,0.2)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "rgba(4, 10, 18, 0.6)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      }
                    }}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </section>

          {/* GRID AREA */}
          <section style={{ padding: "40px 40px 120px 40px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 32, alignItems: "stretch" }}>
                <AnimatePresence mode="popLayout">
                  {filteredItems.map(item => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                      key={item.id}
                      style={{ height: "100%" }}
                    >
                      <GlassCard item={item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
