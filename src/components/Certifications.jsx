import React from "react";

function Certifications() {
  return (
    <div className="bento-cell span-4 d-flex flex-column text-center justify-content-center align-items-center" data-aos="fade-up">
      <div style={{
        width: "80px", height: "80px", borderRadius: "50%", background: "var(--accent)", 
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px",
        boxShadow: "0 8px 24px rgba(56, 189, 248, 0.2)"
      }}>
        <i className="bi bi-award-fill" style={{ fontSize: "2.5rem", color: "#0F172A" }}></i>
      </div>
      
      <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px", letterSpacing: "-0.01em" }}>Certified Developer</h3>
      <p style={{ fontSize: "1.05rem", fontWeight: "400", lineHeight: "1.7", color: "var(--subtext)", marginBottom: "32px" }}>
        Completed an intensive Java Full Stack Development training in Bangalore.
      </p>

      <a 
        href="/my-portfolio/java full satck Certificate.pdf" 
        target="_blank" 
        rel="noreferrer"
        className="btn-primary-custom mt-auto w-100 d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
        style={{ height: "56px", fontSize: "1.05rem" }}
      >
        View Certificate <i className="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
  );
}

export default Certifications;
