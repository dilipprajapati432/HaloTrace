import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import globalCSS from "./styles/global";
import "./styles/responsive.css";
import { bg } from "./styles/tokens";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import AIAssistant from "./components/ui/AIAssistant";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Courses = React.lazy(() => import("./pages/Courses"));
const Services = React.lazy(() => import("./pages/Services"));
const Labs = React.lazy(() => import("./pages/Labs"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const Contact = React.lazy(() => import("./pages/Contact"));
const BookConsultation = React.lazy(() => import("./pages/BookConsultation"));
const CaseStudies = React.lazy(() => import("./pages/CaseStudies"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const SecurityPolicy = React.lazy(() => import("./pages/SecurityPolicy"));
const ResponsibleDisclosure = React.lazy(() => import("./pages/ResponsibleDisclosure"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const FAQ = React.lazy(() => import("./pages/FAQ"));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <style>{globalCSS}</style>
        <div style={{ minHeight: "100vh", background: bg, display: "flex", flexDirection: "column" }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Suspense fallback={<div style={{ minHeight: "100vh", background: bg }} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/services" element={<Services />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-consultation" element={<BookConsultation />} />
                <Route path="/casestudies" element={<CaseStudies />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/security" element={<SecurityPolicy />} />
                <Route path="/disclosure" element={<ResponsibleDisclosure />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <AIAssistant />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
