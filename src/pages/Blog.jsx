import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { bg, bg2, card, border2, neon, cyan, white, muted, textCol, orange } from "../styles/tokens";
import { Btn } from "../components/ui/UI";
import { blogPosts } from "../data/blogPosts";

const CATEGORIES = ["All", "Ethical Hacking", "OSINT", "Malware Analysis", "Networking", "SOC", "Linux", "Threat Intelligence", "Bug Bounty", "Digital Forensics"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 3);
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCat === "All" || p.category === activeCat;
      return matchSearch && matchCat && !p.featured; // Hide featured from the bottom grid to avoid duplicates
    });
  }, [search, activeCat]);

  const getCategoryColor = (cat) => {
    if (cat.includes("Hacking") || cat.includes("Malware")) return orange;
    if (cat.includes("OSINT") || cat.includes("Forensics")) return cyan;
    return neon;
  };

  return (
    <main style={{ backgroundColor: bg, minHeight: "100vh", paddingTop: 72 }}>
      <Helmet>
        <title>Cybersecurity Knowledge Hub | Skillnetics × HaloTrace</title>
        <meta name="description" content="Tutorials, threat analysis, and security insights from our experts." />
      </Helmet>

      {/* 1. HERO */}
      <section style={{ 
        padding: "120px 56px 80px", 
        textAlign: "center", 
        background: `linear-gradient(180deg, rgba(2,6,12,0.5) 0%, ${bg} 100%), url('/blog.png') center center / cover no-repeat`,
        borderBottom: `1px solid rgba(255,255,255,0.05)` 
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: white, marginBottom: 16, textTransform: "uppercase" }}>
            CYBERSECURITY <span style={{ color: orange }}>KNOWLEDGE HUB</span>
          </h1>
          <p style={{ fontSize: 18, color: white, opacity:0.8 }}>
            Tutorials, threat analysis, and security insights from our experts.
          </p>
        </div>
      </section>

      {/* 2. FEATURED POSTS */}
      {search === "" && activeCat === "All" && (
        <section style={{ padding: "60px 56px", background: `linear-gradient(180deg, rgba(255,255,255,0.01) 0%, transparent 100%)` }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: white, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: neon }}>//</span> Featured Intel
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, minHeight: 480 }}>
            {/* Left Large Card */}
            {featuredPosts[0] && (
              <Link to={`/blog/${featuredPosts[0].slug}`} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ y: -5 }} style={{
                  height: "100%", background: card, border: `1px solid ${border2}`, borderRadius: 20, padding: 40,
                  display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: getCategoryColor(featuredPosts[0].category) }} />
                  <div style={{ marginBottom: "auto" }}>
                    <span style={{ background: `${getCategoryColor(featuredPosts[0].category)}1a`, color: getCategoryColor(featuredPosts[0].category), padding: "6px 12px", borderRadius: 4, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>
                      {featuredPosts[0].category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 36, fontWeight: 800, color: white, margin: "24px 0 16px", lineHeight: 1.2 }}>
                    {featuredPosts[0].title}
                  </h3>
                  <p style={{ color: muted, fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
                    {featuredPosts[0].excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: bg2, display: "flex", alignItems: "center", justifyContent: "center", color: white, fontWeight: 700 }}>
                        {featuredPosts[0].author[0]}
                      </div>
                      <div>
                        <div style={{ color: white, fontSize: 14, fontWeight: 600 }}>{featuredPosts[0].author}</div>
                        <div style={{ color: textCol, fontSize: 12 }}>{featuredPosts[0].date} • {featuredPosts[0].readTime}</div>
                      </div>
                    </div>
                    <div style={{ color: neon, fontWeight: 600, fontSize: 14 }}>Read More →</div>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Right Stacked Cards */}
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
              {featuredPosts.slice(1, 3).map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <motion.div whileHover={{ y: -5 }} style={{
                    height: "100%", background: card, border: `1px solid ${border2}`, borderRadius: 20, padding: 32,
                    display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: getCategoryColor(post.category) }} />
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ color: getCategoryColor(post.category), fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>
                        {post.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: white, margin: "0 0 12px", lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p style={{ color: muted, fontSize: 14, lineHeight: 1.5, marginBottom: "auto" }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
                      <div style={{ color: textCol, fontSize: 12 }}>{post.date} • {post.readTime}</div>
                      <div style={{ color: neon, fontWeight: 600, fontSize: 13 }}>Read More →</div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. FILTER BAR */}
      <section style={{
        position: "sticky", top: 72, zIndex: 40,
        background: `${bg}e6`, backdropFilter: "blur(16px)",
        borderTop: `1px solid ${border2}`, borderBottom: `1px solid ${border2}`, padding: "16px 56px"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Categories */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, flex: 1, scrollbarWidth: "none" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)} style={{
                padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                background: activeCat === cat ? neon : "transparent",
                color: activeCat === cat ? "#040e1a" : muted,
                border: `1px solid ${activeCat === cat ? neon : border2}`,
                transition: "all .2s"
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: "relative", width: 300 }}>
            <input
              type="text" placeholder="Search articles..."
              value={search} onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "10px 16px 10px 40px", borderRadius: 8,
                background: `rgba(0,0,0,0.3)`, border: `1px solid ${border2}`,
                color: white, fontSize: 14, outline: "none", transition: "border-color .2s"
              }}
              onFocus={e => e.target.style.borderColor = neon}
              onBlur={e => e.target.style.borderColor = border2}
            />
            <span style={{ position: "absolute", left: 14, top: 10, color: muted }}>🔍</span>
          </div>

        </div>
      </section>

      {/* 4. ALL POSTS GRID */}
      <section style={{ padding: "60px 56px 100px", minHeight: "50vh" }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: white, marginBottom: 32 }}>Latest Articles</h2>
        
        <AnimatePresence>
          {filteredPosts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📡</div>
              <h3 style={{ fontSize: 20, color: white, marginBottom: 8 }}>No transmissions found</h3>
              <p style={{ color: muted }}>Try adjusting your search parameters.</p>
            </motion.div>
          ) : (
            <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
              {filteredPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5, borderColor: getCategoryColor(post.category) }}
                    style={{
                      height: "100%", background: card, border: `1px solid ${border2}`, borderRadius: 16, overflow: "hidden",
                      display: "flex", flexDirection: "column", transition: "all .3s"
                    }}
                  >
                    <div style={{ height: 4, background: getCategoryColor(post.category) }} />
                    <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <div style={{ color: getCategoryColor(post.category), fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>
                        {post.category}
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: white, marginBottom: 12, lineHeight: 1.3 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: 14, color: muted, lineHeight: 1.5, marginBottom: 24, flex: 1 }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid rgba(255,255,255,0.05)`, paddingTop: 16 }}>
                        <div style={{ color: textCol, fontSize: 12 }}>{post.date} • {post.readTime}</div>
                        <div style={{ color: getCategoryColor(post.category), fontSize: 12, fontWeight: 600 }}>Read More →</div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. NEWSLETTER CTA */}
      <section style={{ padding: "80px 56px", background: `#000000`, borderTop: `1px solid rgba(255,255,255,0.05)`, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: `radial-gradient(circle, ${cyan}1a 0%, transparent 60%)`, zIndex: 0 }} />
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: white, marginBottom: 16 }}>Join the Intelligence Feed</h2>
          <p style={{ color: muted, fontSize: 16, marginBottom: 32 }}>
            Get weekly cybersecurity insights, zero-day analysis, and career tips delivered straight to your inbox.
          </p>
          <div style={{ display: "flex", gap: 12, maxWidth: 400, margin: "0 auto" }}>
            <input 
              type="email" placeholder="Enter your email address" 
              style={{ flex: 1, padding: "14px 20px", borderRadius: 8, border: `1px solid ${border2}`, background: `rgba(255,255,255,0.03)`, color: white, outline: "none" }}
            />
            <Btn onClick={() => alert('Thank you for subscribing!')} style={{ padding: "14px 24px", background: cyan, borderColor: cyan, color: "#000" }}>Subscribe</Btn>
          </div>
        </div>
      </section>

    </main>
  );
}
