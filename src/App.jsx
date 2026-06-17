import globalCSS from "./styles/global";
import { bg } from "./styles/tokens";

import Navbar              from "./components/layout/Navbar";
import Hero                from "./components/sections/Hero";
import TrustBar            from "./components/sections/TrustBar";
import DivisionSplit       from "./components/sections/DivisionSplit";
import Services            from "./components/sections/Services";
import Courses             from "./components/sections/Courses";
import Labs                from "./components/sections/Labs";
import CaseAndTestimonials from "./components/sections/CaseAndTestimonials";
import Partners            from "./components/sections/Partners";
import Blog                from "./components/sections/Blog";
import CTABanner           from "./components/sections/CTABanner";
import Footer              from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <style>{globalCSS}</style>
      <div style={{ minHeight: "100vh", background: bg }}>
        <Navbar />
        <Hero />
        <TrustBar />
        <DivisionSplit />
        <Services />
        <Courses />
        <Labs />
        <CaseAndTestimonials />
        <Partners />
        <Blog />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
