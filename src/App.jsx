import { BrowserRouter, Routes, Route } from "react-router-dom";
import globalCSS from "./styles/global";
import "./styles/responsive.css";
import { bg } from "./styles/tokens";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <style>{globalCSS}</style>
      <div style={{ minHeight: "100vh", background: bg, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
