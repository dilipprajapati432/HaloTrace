import CaseStudies from "./CaseStudies";
import Testimonials from "./Testimonials";
import { bg } from "../../styles/tokens";

export default function CaseAndTestimonials() {
  return (
    <section className="section-container" style={{ padding: "60px 56px", background: bg }}>
      <div className="case-testimonial-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}>
        <CaseStudies />
        <Testimonials />
      </div>
    </section>
  );
}
