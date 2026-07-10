import React from "react";

function Experience() {
  const experiences = [
    {
      company: "X-Workz ODC",
      location: "Bangalore, Karnataka",
      role: "Java Developer Intern",
      date: "05/2025 - Present",
      bullets: [
        "Developed full-stack Java web applications using Java, JSP, Servlets, MySQL, and Spring MVC.",
        "Built and optimized REST APIs to improve data flow and backend performance.",
        "Resolved bugs and collaborated with senior developers to enhance architecture and code quality.",
        "Utilized Git/GitHub for version control and participated in team-based code reviews."
      ]
    },
    {
      company: "K.S.S Construction & Santhosh Builders",
      location: "Salem, TN",
      role: "Site Engineer / Supervisor",
      date: "07/2019 - 05/2025",
      bullets: [
        "Managed project execution, planning, and coordination with multiple teams and stakeholders.",
        "Used digital tools and AutoCAD for planning, technical reporting, and data reference.",
        "Solved on-site technical issues under strict deadlines and ensured quality compliance."
      ]
    }
  ];

  return (
    <div className="bento-cell span-12 d-flex flex-column" data-aos="fade-up">
      <h3 style={{ fontSize: "1.75rem", marginBottom: "24px" }}>Work Experience</h3>
      
      <div className="d-flex flex-column gap-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={{ 
              background: "var(--bg-secondary)", 
              border: "1px solid var(--card-border)", 
              padding: "32px", 
              borderRadius: "16px",
              transition: "transform 0.2s ease, border-color 0.2s ease"
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--card-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-4">
              <div>
                <h4 style={{ margin: 0, fontWeight: "700", fontSize: "1.25rem", color: "var(--text)" }}>{exp.role}</h4>
                <p style={{ margin: "4px 0 0 0", fontWeight: "500", color: "var(--subtext)", fontSize: "1rem" }}>
                  {exp.company} <span style={{ opacity: 0.7 }}>• {exp.location}</span>
                </p>
              </div>
              <span className="pill-badge active mt-3 mt-md-0" style={{ whiteSpace: "nowrap" }}>
                {exp.date}
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--subtext)" }}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={{ marginBottom: "12px", fontWeight: "400", fontSize: "0.95rem", lineHeight: "1.6" }}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
