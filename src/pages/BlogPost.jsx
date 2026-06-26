import React, { useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { bg, bg2, card, border2, neon, cyan, white, muted, textCol, orange } from "../styles/tokens";
import { Btn, Tag } from "../components/ui/UI";
import { blogPosts } from "../data/blogPosts";

// CSS for the article content and syntax highlighting
const ARTICLE_CSS = `
  .article-content {
    font-size: 17px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
  }
  .article-content h2 {
    font-size: 28px;
    font-weight: 800;
    color: ${white};
    margin: 48px 0 24px;
    letter-spacing: -0.5px;
  }
  .article-content h3 {
    font-size: 22px;
    font-weight: 700;
    color: ${white};
    margin: 32px 0 16px;
  }
  .article-content p {
    margin-bottom: 24px;
  }
  .article-content ul, .article-content ol {
    margin-bottom: 24px;
    padding-left: 24px;
  }
  .article-content li {
    margin-bottom: 8px;
  }
  .article-content a {
    color: ${neon};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }
  .article-content a:hover {
    border-bottom-color: ${neon};
  }
  
  /* Callout Boxes */
  .article-callout {
    background: rgba(0, 255, 156, 0.05);
    border-left: 4px solid ${neon};
    padding: 20px 24px;
    border-radius: 0 8px 8px 0;
    margin: 32px 0;
    font-size: 16px;
  }
  .article-callout strong {
    color: ${neon};
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Syntax Highlighting Simulation */
  .article-content pre {
    background: #0d1117;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 20px;
    overflow-x: auto;
    margin: 32px 0;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 14px;
    line-height: 1.6;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
  }
  .article-content code {
    font-family: inherit;
    color: #e6edf3;
  }
  /* Inline code */
  .article-content p code, .article-content li code {
    background: rgba(255,255,255,0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: ${cyan};
  }
  
  /* Token classes */
  .token.keyword { color: #ff7b72; font-weight: bold; }
  .token.string { color: #a5d6ff; }
  .token.function { color: #d2a8ff; }
  .token.comment { color: #8b949e; font-style: italic; }
  .token.operator { color: #79c0ff; }
  .token.number { color: #79c0ff; }
  .token.class { color: ${orange}; }
`;

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);
  
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: bg, paddingTop: 72 }}>
        <h1 style={{ fontSize: 48, color: white, marginBottom: 16 }}>Post Not Found</h1>
        <p style={{ color: muted, marginBottom: 32 }}>The transmission you are looking for has been moved or deleted.</p>
        <Btn onClick={() => navigate('/blog')}>Return to Blog</Btn>
      </main>
    );
  }

  const getCategoryColor = (cat) => {
    if (cat.includes("Hacking") || cat.includes("Malware")) return orange;
    if (cat.includes("OSINT") || cat.includes("Forensics")) return cyan;
    return neon;
  };

  const catColor = getCategoryColor(post.category);

  return (
    <main style={{ backgroundColor: bg, minHeight: "100vh", paddingTop: 72 }}>
      <Helmet>
        <title>{post.title} | Skillnetics Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <style>{ARTICLE_CSS}</style>

      {/* 1. HEADER */}
      <section style={{ padding: "80px 56px 60px", borderBottom: `1px solid rgba(255,255,255,0.05)`, background: `radial-gradient(circle at 50% 100%, ${catColor}1a 0%, transparent 60%)` }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ background: `${catColor}1a`, color: catColor, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, border: `1px solid ${catColor}4d` }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: white, marginBottom: 24, lineHeight: 1.1, letterSpacing: -1 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 20, color: muted, lineHeight: 1.5, marginBottom: 32 }}>
            {post.excerpt}
          </p>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: card, border: `1px solid ${border2}`, display: "flex", alignItems: "center", justifyContent: "center", color: white, fontWeight: 800, fontSize: 18 }}>
                {post.author[0]}
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: white, fontSize: 16, fontWeight: 700 }}>{post.author}</div>
                <div style={{ color: textCol, fontSize: 14 }}>Security Researcher</div>
              </div>
            </div>
            <div style={{ width: 1, height: 40, background: border2 }}></div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: textCol, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Published</div>
              <div style={{ color: white, fontSize: 15, fontWeight: 600 }}>{post.date}</div>
            </div>
            <div style={{ width: 1, height: 40, background: border2 }}></div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: textCol, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Read Time</div>
              <div style={{ color: white, fontSize: 15, fontWeight: 600 }}>{post.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY & SIDEBAR */}
      <section style={{ padding: "80px 56px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: 64, alignItems: "start" }}>
        
        {/* Main Article Content */}
        <article className="article-content">
          <p>
            The landscape of cybersecurity is evolving at an unprecedented pace. As organizations accelerate their digital transformation initiatives, they inadvertently expand their attack surfaces. This article dives deep into the core mechanics of modern threats, exploring how adversaries operate and what defenders must do to stay ahead.
          </p>

          <h2 id="anatomy">1. The Anatomy of a Modern Exploit</h2>
          <p>
            Exploits are no longer just simple buffer overflows. Modern attack chains often involve a sequence of subtle vulnerabilities—from initial misconfigurations to complex logical flaws that bypass traditional WAFs (Web Application Firewalls). 
          </p>
          <div className="article-callout">
            <strong>Pro Tip</strong>
            When auditing web applications, do not solely rely on automated scanners. Business logic vulnerabilities, such as IDOR (Insecure Direct Object Reference) and privilege escalation, require manual contextual analysis to uncover.
          </div>
          <p>
            Let's look at a typical command injection scenario. An application might sanitize input for database queries, but fail to do so when passing parameters to system-level binaries.
          </p>

          <pre><code>
<span className="token comment"># Vulnerable Python snippet demonstrating command injection</span>
<span className="token keyword">import</span> os
<span className="token keyword">from</span> flask <span className="token keyword">import</span> request

<span className="token keyword">def</span> <span className="token function">ping_host</span>():
    target = request.args.<span className="token function">get</span>(<span className="token string">'ip'</span>)
    <span className="token comment"># No sanitization on 'target'</span>
    result = os.<span className="token function">popen</span>(<span className="token string">f"ping -c 4 {target}"</span>).<span className="token function">read</span>()
    <span className="token keyword">return</span> result
          </code></pre>

          <p>
            An attacker could easily append a semicolon followed by a malicious command: <code>?ip=127.0.0.1; cat /etc/passwd</code>. This highlights the absolute necessity of strict input validation and utilizing secure APIs instead of shelling out.
          </p>

          <h2 id="defense">2. Essential Defense Methodologies</h2>
          <p>
            Defending against these advanced threats requires a defense-in-depth strategy. It's not enough to build a strong perimeter; you must assume breach.
          </p>
          <ul>
            <li><strong>Zero Trust Architecture:</strong> Never trust, always verify. Strict access controls based on identity and context, regardless of network location.</li>
            <li><strong>Continuous Monitoring:</strong> Deploying robust SIEM solutions combined with active Threat Hunting to detect anomalies that evade automated alerts.</li>
            <li><strong>Principle of Least Privilege:</strong> Restricting system and user permissions to the absolute minimum necessary to perform their functions.</li>
          </ul>

          <h2 id="conclusion">3. Conclusion and Next Steps</h2>
          <p>
            Security is a continuous process, not a destination. By understanding the offensive mindset and the mechanics of modern attacks, defenders can build more resilient systems. We recommend setting up a local lab environment to practice these concepts safely.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12, marginTop: 48, flexWrap: "wrap" }}>
            {post.tags.map(tag => (
              <Tag key={tag} color={border2} style={{ color: white }}>#{tag}</Tag>
            ))}
          </div>

          {/* Share & Author Footer */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${border2}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{ color: textCol, fontWeight: 600 }}>Share:</span>
              <button onClick={() => window.open('https://twitter.com/intent/tweet?url='+window.location.href, '_blank')} style={{ background: "transparent", border: "none", color: white, cursor: "pointer", fontWeight: 600 }}>Twitter</button>
              <button onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url='+window.location.href, '_blank')} style={{ background: "transparent", border: "none", color: white, cursor: "pointer", fontWeight: 600 }}>LinkedIn</button>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }} style={{ background: "transparent", border: "none", color: white, cursor: "pointer", fontWeight: 600 }}>Copy Link</button>
            </div>
          </div>
          
          <div style={{ marginTop: 32, background: card, border: `1px solid ${border2}`, borderRadius: 16, padding: 32, display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: bg2, border: `1px solid ${catColor}`, display: "flex", alignItems: "center", justifyContent: "center", color: white, fontWeight: 900, fontSize: 32, flexShrink: 0 }}>
              {post.author[0]}
            </div>
            <div>
              <h4 style={{ color: white, fontSize: 20, margin: "0 0 8px" }}>{post.author}</h4>
              <p style={{ color: muted, margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                Lead Security Researcher at Skillnetics. Specializes in offensive security, vulnerability research, and advanced persistent threat tracking.
              </p>
            </div>
          </div>

        </article>

        {/* Sidebar (Sticky ToC) */}
        <aside style={{ position: "sticky", top: 120 }}>
          <div style={{ background: card, border: `1px solid ${border2}`, borderRadius: 16, padding: 32 }}>
            <h3 style={{ color: white, fontSize: 16, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 24, borderBottom: `1px solid ${border2}`, paddingBottom: 16 }}>
              Table of Contents
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <li><a href="#anatomy" style={{ color: white, textDecoration: "none", fontSize: 14, opacity: 0.9, transition: "color .2s" }} onMouseEnter={e => e.target.style.color = catColor} onMouseLeave={e => e.target.style.color = white}>1. The Anatomy of a Modern Exploit</a></li>
              <li><a href="#defense" style={{ color: white, textDecoration: "none", fontSize: 14, opacity: 0.9, transition: "color .2s" }} onMouseEnter={e => e.target.style.color = catColor} onMouseLeave={e => e.target.style.color = white}>2. Essential Defense Methodologies</a></li>
              <li><a href="#conclusion" style={{ color: white, textDecoration: "none", fontSize: 14, opacity: 0.9, transition: "color .2s" }} onMouseEnter={e => e.target.style.color = catColor} onMouseLeave={e => e.target.style.color = white}>3. Conclusion and Next Steps</a></li>
            </ul>
          </div>
          
          <div style={{ marginTop: 24, background: `radial-gradient(circle at top right, ${neon}1a 0%, transparent 80%), ${card}`, border: `1px solid ${border2}`, borderRadius: 16, padding: 32, textAlign: "center" }}>
            <h3 style={{ color: white, fontSize: 18, fontWeight: 800, marginBottom: 12 }}>Ready to hack?</h3>
            <p style={{ color: muted, fontSize: 14, marginBottom: 24 }}>Put theory into practice in our fully isolated virtual lab environments.</p>
            <Btn style={{ width: "100%", justifyContent: "center" }} onClick={() => navigate('/labs')}>Access Labs</Btn>
          </div>
        </aside>

      </section>

      {/* 3. RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "80px 56px", background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.02) 100%)`, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: white, marginBottom: 32 }}>Related Intel</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    height: "100%", background: card, border: `1px solid ${border2}`, borderRadius: 16, padding: 24,
                    display: "flex", flexDirection: "column", transition: "transform .2s", cursor: "pointer"
                  }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                    <div style={{ color: getCategoryColor(rp.category), fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>
                      {rp.category}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: white, marginBottom: 12, lineHeight: 1.3 }}>
                      {rp.title}
                    </h3>
                    <p style={{ fontSize: 14, color: muted, lineHeight: 1.5, marginBottom: "auto" }}>
                      {rp.excerpt}
                    </p>
                    <div style={{ marginTop: 24, color: textCol, fontSize: 12 }}>{rp.date} • {rp.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. FINAL CTA */}
      <section style={{ padding: "80px 56px", textAlign: "center", background: "#000000", borderTop: `1px solid rgba(255,255,255,0.05)` }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, color: white, marginBottom: 16 }}>Master Real-World Scenarios</h2>
        <p style={{ color: muted, fontSize: 18, marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
          Don't just read about cybersecurity. Learn from active professionals and validate your skills in our hands-on ranges.
        </p>
        <Btn style={{ padding: "16px 32px", fontSize: 16 }} onClick={() => navigate('/courses')}>Explore Certification Courses</Btn>
      </section>

    </main>
  );
}
