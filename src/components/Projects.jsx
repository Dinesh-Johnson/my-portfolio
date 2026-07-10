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
          <div style={{ height: "200px", overflow: "hidden", borderBottom: "1px solid var(--card-border)" }}>
            <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.70)", transition: "filter 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.filter="brightness(0.95)"} onMouseOut={(e) => e.currentTarget.style.filter="brightness(0.70)"} />
          </div>
          
          <div className="p-4 p-md-5 d-flex flex-column flex-grow-1">
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "12px", letterSpacing: "-0.01em" }}>{p.title}</h3>
            <p style={{ fontSize: "0.95rem", flexGrow: 1, marginBottom: "24px" }}>{p.desc}</p>

            <div className="mb-4 d-flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <span key={i} className="pill-badge" style={{ fontSize: "0.75rem", padding: "6px 14px", fontWeight: "600" }}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noreferrer" className="btn-secondary-custom text-center text-decoration-none w-100 mt-auto">
              <i className="bi bi-github me-2"></i> View Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
