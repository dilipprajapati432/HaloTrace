# Skillnetics × HaloTrace — Homepage

Cybersecurity Training & Enterprise Security Solutions landing page built with **React + Vite**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
skillnetics-halotrace/
├── public/
│   └── favicon.svg
├── src/
│   ├── styles/
│   │   ├── tokens.js           # Design tokens (colors, spacing)
│   │   └── global.js           # Global CSS reset & animations
│   ├── components/
│   │   ├── UI.jsx              # Shared atoms: Tag, Btn, Check, DotBullet
│   │   ├── Navbar.jsx          # Fixed top navigation bar
│   │   ├── ThreatMap.jsx       # Animated canvas live threat map
│   │   ├── Hero.jsx            # Hero section with threat map
│   │   ├── TrustBar.jsx        # 4-stat trust indicators
│   │   ├── DivisionSplit.jsx   # Skillnetics vs HaloTrace split cards
│   │   ├── Services.jsx        # 8-icon security services grid
│   │   ├── Courses.jsx         # 6 popular courses grid
│   │   ├── Labs.jsx            # 5 cyber labs grid
│   │   ├── CaseStudies.jsx     # Case study card
│   │   ├── Testimonials.jsx    # Auto-advancing testimonial carousel
│   │   ├── CaseAndTestimonials.jsx  # Layout wrapper for above two
│   │   ├── Partners.jsx        # Partner logos row
│   │   ├── Blog.jsx            # 3-column blog posts
│   │   ├── CTABanner.jsx       # Call-to-action banner
│   │   └── Footer.jsx          # Full 5-column footer
│   ├── App.jsx                 # Root component — composes all sections
│   └── main.jsx                # React DOM entry point
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## Sections

| Component | Description |
|---|---|
| `Navbar` | Fixed, blur-on-scroll, active link underline, dropdown chevrons |
| `Hero` | Two-column layout + animated live cyber threat map canvas |
| `TrustBar` | 5000+ students · 150+ assessments · 100+ workshops · 24/7 |
| `DivisionSplit` | Skillnetics (green/training) vs HaloTrace (blue/services) |
| `Services` | 8-icon grid: VAPT, Web, Mobile, API, Forensics, IR, Cloud, Consulting |
| `Courses` | 6 courses with level tags, thumbnails, enroll buttons |
| `Labs` | 5 cyber lab demos with scanline overlay effect |
| `CaseStudies` | Featured case study card with metrics |
| `Testimonials` | Carousel with animated dot indicators |
| `Partners` | Palo Alto · Fortinet · AWS · Google Cloud · Microsoft · EC-Council · OffSec · (ISC)² |
| `Blog` | 3 latest articles with gradient thumbnails |
| `CTABanner` | Full-width CTA with glow effect |
| `Footer` | 5-column grid, contact info, newsletter signup, legal links |

---

## Design System

All colors and tokens live in `src/styles/tokens.js`:

```js
bg      = "#050d1a"   // Page background
bg2     = "#081424"   // Section alternate background
card    = "#091828"   // Card background
neon    = "#00ff9c"   // Primary accent (Skillnetics green)
cyan    = "#00ccff"   // Secondary accent (HaloTrace blue)
```

To retheme the site, edit only `tokens.js`.

---

## Tech Stack

- **React 18** — UI
- **Vite 5** — Dev server & bundler
- **Pure inline styles** — No CSS framework dependency, fully portable
