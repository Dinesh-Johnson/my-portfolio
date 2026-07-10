import React, { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";

function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> Initializing Dinesh OS...\n> Loading Java Skills... OK\n> Booting Spring Framework... OK\n> System Ready.";
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(intervalId);
    }, 40);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className="bento-cell span-8 d-flex flex-column justify-content-center" data-aos="fade-up">
      <div className="d-flex flex-column flex-md-row align-items-center gap-5">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src={profilePic} 
            alt="Dinesh" 
            style={{ 
              width: "160px", 
              height: "160px", 
              borderRadius: "50%", 
              objectFit: "cover",
              border: "1px solid var(--card-border)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
            }} 
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-md-start w-100">
          <h1 style={{ fontSize: "3rem", fontWeight: "700", letterSpacing: "-1px", marginBottom: "12px" }}>
            Hi, I'm Dinesh 👋
          </h1>
          
          <div style={{ marginBottom: "24px" }}>
            <span className="pill-badge me-2 mb-2">☕ Java Full Stack</span>
            <span className="pill-badge mb-2">📍 Namakkal, India</span>
          </div>

          {/* Mini Terminal */}
          <div 
            style={{
              background: "var(--bg)",
              color: "var(--subtext)",
              fontFamily: "monospace",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid var(--card-border)",
              marginBottom: "32px",
              textAlign: "left",
              minHeight: "115px",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)"
            }}
          >
            <div style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem", lineHeight: "1.6" }}>
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
            <a href="/my-portfolio/resume.pdf" download className="btn-primary-custom text-decoration-none">
              Download Resume
            </a>
            <a href="https://github.com/Dinesh-Johnson" target="_blank" rel="noreferrer" className="btn-secondary-custom d-flex align-items-center justify-content-center text-decoration-none" style={{ width: "48px", padding: 0 }}>
              <i className="bi bi-github fs-5"></i>
            </a>
            <a href="https://linkedin.com/in/dinesh-johnson" target="_blank" rel="noreferrer" className="btn-secondary-custom d-flex align-items-center justify-content-center text-decoration-none" style={{ width: "48px", padding: 0 }}>
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
