import React, { useState } from "react";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  const allSkills = [
    { name: "Java", icon: "☕" },
    { name: "Spring", icon: "🍃" },
    { name: "React", icon: "⚛️" },
    { name: "MySQL", icon: "🐬" },
    { name: "Hibernate", icon: "📦" },
    { name: "JS", icon: "🟨" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Git", icon: "🐙" },
    { name: "GitHub", icon: "🐈" },
    { name: "JSON", icon: "📋" },
    { name: "Postman", icon: "🚀" }
  ];

  const visibleSkills = showAll ? allSkills : allSkills.slice(0, 5);

  return (
    <div className="bento-cell span-4 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
      <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Core Stack</h3>
      <p style={{ fontSize: "0.95rem" }}>The tools I use to bring ideas to life.</p>

      <div className="mt-auto pt-4" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
        {visibleSkills.map((s, index) => (
          <div key={index} className="d-flex flex-column align-items-center justify-content-center text-center gap-1" style={{ 
            background: "var(--bg-secondary)", 
            border: "1px solid var(--card-border)", 
            padding: "12px 4px", 
            borderRadius: "12px",
            transition: "transform 0.2s ease, border-color 0.2s ease",
            cursor: "default"
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ fontSize: "1.4rem" }}>{s.icon}</span> 
            <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--subtext)" }}>{s.name}</span>
          </div>
        ))}
        
        {!showAll && (
          <button 
            onClick={() => setShowAll(true)}
            className="d-flex flex-column align-items-center justify-content-center text-center gap-1" 
            style={{ 
              background: "transparent",
              border: "1px dashed var(--muted)", 
              padding: "12px 4px", 
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--text)"; e.currentTarget.style.color = "var(--text)"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--muted)"; e.currentTarget.style.color = "var(--muted)"; }}
          >
            <span style={{ fontSize: "1.2rem", color: "inherit" }}>+</span>
            <span style={{ fontSize: "0.75rem", fontWeight: "600", color: "inherit" }}>More</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Skills;
