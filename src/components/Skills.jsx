import React from "react";

function Skills() {
  const allSkills = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "React", icon: "⚛️" },
    { name: "Hibernate", icon: "📦" },
    { name: "MySQL", icon: "🐬" },
    { name: "Git", icon: "🐙" },
    { name: "GitHub", icon: "🐈" },
    { name: "REST API", icon: "🌐" },
    { name: "Docker", icon: "🐳" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Postman", icon: "🚀" }
  ];

  return (
    <div className="bento-cell span-4 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
      <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Core Stack</h3>
      <p style={{ fontSize: "0.95rem", marginBottom: "0" }}>The tools I use to bring ideas to life.</p>

      <div className="mt-auto pt-4" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", alignContent: "end" }}>
        {allSkills.map((s, index) => (
          <div key={index} className="d-flex flex-column align-items-center justify-content-center text-center" style={{ 
            background: "var(--bg-secondary)", 
            border: "1px solid var(--card-border)", 
            padding: "16px 8px", 
            borderRadius: "12px",
            transition: "transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease",
            cursor: "default"
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)"; 
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
          }}
          onMouseOut={(e) => { 
            e.currentTarget.style.borderColor = "var(--card-border)"; 
            e.currentTarget.style.transform = "translateY(0)"; 
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            <span style={{ fontSize: "1.3rem", marginBottom: "6px" }}>{s.icon}</span> 
            <span style={{ fontSize: "0.7rem", fontWeight: "600", color: "var(--subtext)", letterSpacing: "0.2px" }}>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
