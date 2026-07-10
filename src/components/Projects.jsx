import React from "react";
import milkloreImg from "../assets/milklore.png";
import appRegImg from "../assets/app-registration.png";
import passportImg from "../assets/passport-seva.png";

function Projects() {
  const projects = [
    {
      title: "MilkLore",
      desc: "Full-stack dairy management system with 15-day automated payments.",
      tech: ["Spring MVC", "Hibernate", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/MilkLore",
      image: milkloreImg,
    },
    {
      title: "App Registration",
      desc: "User auth system with complete validation and profile management.",
      tech: ["Spring Boot", "JPA", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/JPA/tree/main/app-registration",
      image: appRegImg,
    },
    {
      title: "Passport Seva",
      desc: "Passport registration web application built using Java.",
      tech: ["Spring MVC", "JSTL", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/JPA/tree/32a7a1676c0f6664cab3d01f3d17f899ab634486/passport-seva",
      image: passportImg,
    },
  ];

  return (
    <>
      {projects.map((p, index) => (
        <div className="bento-cell span-4 d-flex flex-column p-0" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
          <div style={{ height: "180px", overflow: "hidden", borderBottom: "1px solid var(--card-border)" }}>
            <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%) sepia(20%)" }} />
          </div>
          
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h3 style={{ fontSize: "1.3rem", fontWeight: "900", marginBottom: "8px", textTransform: "uppercase" }}>{p.title}</h3>
            <p style={{ fontSize: "0.95rem", flexGrow: 1, fontWeight: "500" }}>{p.desc}</p>

            <div className="mb-3 d-flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span key={i} className="pill-badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noreferrer" className="btn w-100" style={{
              background: "var(--card-text)", color: "var(--card-bg)", fontWeight: "700", borderRadius: "8px", textTransform: "uppercase"
            }}>
              <i className="bi bi-github me-2"></i> View Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
