import { bg, bg2, border2, neon, muted, textCol } from "./tokens";

const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${bg};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${textCol};
  }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: .15; } }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${bg2}; }
  ::-webkit-scrollbar-thumb { background: ${border2}; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: ${neon}66; }
  input::placeholder { color: ${muted}; }
  a { transition: color .15s; }
  button { font-family: inherit; }
`;

export default globalCSS;
