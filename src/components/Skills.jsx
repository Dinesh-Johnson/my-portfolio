import React, { useState } from "react";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  const allSkills = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "React", icon: "⚛️" },
    { name: "MySQL", icon: "🐬" },
    { name: "Hibernate", icon: "📦" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Git", icon: "🐙" },
    { name: "GitHub", icon: "🐈" },
    { name: "JSON", icon: "📋" },
    { name: "Postman", icon: "🚀" }
  ];

  const visibleSkills = showAll ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="bento-cell span-4 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
      <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>My Core Stack</h3>
      <p style={{ fontSize: "0.95rem" }}>The tools I use to bring ideas to life.</p>

      <div className="mt-auto d-flex flex-wrap gap-2 pt-3">
        {visibleSkills.map((s, index) => (
          <div key={index} className="d-flex align-items-center gap-2" style={{ 
            background: "var(--btn-bg)", 
            border: "1px solid var(--card-border)", 
            padding: "8px 12px", 
            borderRadius: "8px",
            fontSize: "0.9rem",
            fontWeight: "600"
          }}>
            <span style={{ fontSize: "1.2rem" }}>{s.icon}</span> {s.name}
          </div>
        ))}
        
        {!showAll && (
          <div 
            onClick={() => setShowAll(true)}
            className="d-flex align-items-center gap-2" 
            style={{ 
              background: "var(--card-text)", color: "var(--card-bg)", padding: "8px 12px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "700", cursor: "pointer", transition: "transform 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            + More...
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
