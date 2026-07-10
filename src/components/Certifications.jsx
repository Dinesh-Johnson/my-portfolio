import React from "react";

function Certifications() {
  return (
    <div className="bento-cell span-4 d-flex flex-column text-center justify-content-center align-items-center" data-aos="fade-up">
      <div style={{
        width: "80px", height: "80px", borderRadius: "50%", background: "var(--card-text)", 
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"
      }}>
        <i className="bi bi-award-fill" style={{ fontSize: "2.5rem", color: "var(--card-bg)" }}></i>
      </div>
      
      <h3 style={{ fontSize: "1.4rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "12px" }}>Certified Developer</h3>
      <p style={{ fontSize: "0.95rem", fontWeight: "500" }}>
        Completed an intensive Java Full Stack Development training in Bangalore.
      </p>

      <a 
        href="/my-portfolio/java full satck Certificate.pdf" 
        target="_blank" 
        rel="noreferrer"
        className="btn mt-auto w-100 d-inline-flex align-items-center justify-content-center gap-2"
        style={{
          background: "var(--card-text)",
          color: "var(--card-bg)",
          border: "none",
          fontWeight: "700",
          padding: "12px 24px",
          borderRadius: "8px",
          textTransform: "uppercase"
        }}
      >
        View Certificate <i className="bi bi-box-arrow-up-right"></i>
      </a>
    </div>
  );
}

export default Certifications;
