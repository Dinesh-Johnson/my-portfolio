import React, { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";

function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> Loading Java Runtime...\n✔ OK\n\n> Booting Spring Framework...\n✔ OK\n\n> Ready to build.";
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(intervalId);
    }, 25);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className="bento-cell span-8 d-flex flex-column justify-content-center" data-aos="fade-up" style={{ padding: "56px" }}>
      <div className="d-flex flex-column flex-md-row align-items-md-start gap-4">
        
        {/* Profile Image - Scaled up, closer crop, aligned with heading */}
        <div className="flex-shrink-0" style={{ position: "relative" }}>
          <div style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            marginTop: "8px" /* Align optically with heading text */
          }}>
            <img 
              src={profilePic} 
              alt="Dinesh" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transform: "scale(1.2)"
              }} 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center text-md-start w-100">
          <h1 style={{ fontSize: "2.75rem", fontWeight: "700", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Hi, I'm Dinesh 👋
          </h1>
          
          <p style={{ fontSize: "1.1rem", color: "var(--subtext)", lineHeight: "1.6", marginBottom: "24px", maxWidth: "90%" }} className="mx-auto mx-md-0">
            Java Full Stack Developer focused on building scalable, high-performance web applications with Spring Boot and React.
          </p>
          
          <div style={{ marginBottom: "40px" }}>
            <span className="pill-badge me-2 mb-2">☕ Java Full Stack</span>
            <span className="pill-badge mb-2">📍 Namakkal, India</span>
          </div>

          {/* Mini Terminal */}
          <div 
            className="mx-auto mx-md-0"
            style={{
              background: "var(--bg)",
              color: "var(--muted)",
              fontFamily: "monospace",
              padding: "12px 16px",
              borderRadius: "12px",
              border: "1px solid var(--card-border)",
              marginBottom: "56px",
              textAlign: "left",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
              fontSize: "0.85rem",
              lineHeight: "1.4",
              maxWidth: "85%" /* Reduced width */
            }}
          >
            <div style={{ whiteSpace: "pre-wrap" }}>
              {terminalText}
              <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
            </div>
          </div>

          <style>
            {`
              @keyframes blink {
                50% { opacity: 0; }
              }
            `}
          </style>

          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
            <a href="/my-portfolio/resume.pdf" download className="btn-primary-custom text-decoration-none d-flex align-items-center justify-content-center" style={{ height: "48px", padding: "0 32px" }}>
              Download Resume
            </a>
            <a href="https://github.com/Dinesh-Johnson" target="_blank" rel="noreferrer" className="btn-secondary-custom rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: "48px", height: "48px", padding: 0 }}>
              <i className="bi bi-github fs-5"></i>
            </a>
            <a href="https://linkedin.com/in/dinesh-johnson" target="_blank" rel="noreferrer" className="btn-secondary-custom rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: "48px", height: "48px", padding: 0 }}>
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
