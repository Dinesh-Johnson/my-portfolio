import React from "react";
import profilePic from "../assets/profile.jpg";

function Hero() {
  return (
    <div id="home" className="bento-cell span-8 d-flex flex-column justify-content-center" data-aos="fade-up">
      <div className="d-flex flex-column flex-md-row align-items-center gap-4">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src={profilePic} 
            alt="Dinesh" 
            style={{ 
              width: "180px", 
              height: "180px", 
              borderRadius: "50%", 
              objectFit: "cover",
              border: "4px solid var(--card-border)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }} 
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-md-start">
          <h1 style={{ fontSize: "3.5rem", fontWeight: "900", letterSpacing: "-2px", marginBottom: "8px", textTransform: "uppercase" }}>
            Hi, I'm Dinesh 👋
          </h1>
          
          <div style={{ marginBottom: "16px" }}>
            <span className="pill-badge me-2 mb-2">☕ Java Full Stack</span>
            <span className="pill-badge mb-2">📍 Namakkal, India</span>
          </div>

          <p style={{ fontSize: "1.1rem", maxWidth: "500px", marginBottom: "24px" }}>
            I build scalable, high-performance enterprise backends and interactive, modern web applications.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
            <a href="/my-portfolio/resume.pdf" download className="btn" style={{ background: "var(--card-text)", color: "var(--card-bg)", fontWeight: "700", padding: "10px 24px", borderRadius: "8px" }}>
              Download Resume
            </a>
            <a href="https://github.com/Dinesh-Johnson" target="_blank" rel="noreferrer" className="btn" style={{ background: "var(--btn-bg)", color: "var(--card-text)", border: "1px solid var(--card-border)", fontWeight: "600", padding: "10px 16px", borderRadius: "8px" }}>
              <i className="bi bi-github fs-5"></i>
            </a>
            <a href="https://linkedin.com/in/dinesh-johnson" target="_blank" rel="noreferrer" className="btn" style={{ background: "var(--btn-bg)", color: "var(--card-text)", border: "1px solid var(--card-border)", fontWeight: "600", padding: "10px 16px", borderRadius: "8px" }}>
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
