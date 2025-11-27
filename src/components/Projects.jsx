import React from "react";
import milkloreImg from "../assets/milklore.png";
import appRegImg from "../assets/app-registration.png";
import passportImg from "../assets/passport-seva.png";

function Projects() {
  const projects = [
    {
      title: "MilkLore",
      desc: "A full-stack dairy management system for farmers & admins with milk collection, product management, and 15-day automated payments.",
      tech: ["Spring MVC", "Spring Security", "Hibernate", "JSP", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/MilkLore",
      image: milkloreImg,
    },
    {
      title: "App Registration",
      desc: "A user registration and authentication system using Spring Boot, JPA, Hibernate, and JSP with complete validation and profile management.",
      tech: ["Spring Boot", "JPA", "Hibernate", "JSP", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/JPA/tree/main/app-registration",
      image: appRegImg,
    },
    {
      title: "Passport Seva Registration",
      desc: "A Passport Seva web application built using Java, Spring MVC, Hibernate ORM, MySQL, JSP, JSTL with full MVC architecture.",
      tech: ["Spring MVC", "Hibernate", "JSP", "JSTL", "MySQL"],
      link: "https://github.com/Dinesh-Johnson/JPA/tree/32a7a1676c0f6664cab3d01f3d17f899ab634486/passport-seva",
      image: passportImg,
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center mb-5 fw-bold">My Projects</h2>

      <div className="row g-4">
        {projects.map((p, index) => (
          <div
            className="col-md-4 d-flex"
            key={index}
            data-aos="zoom-in"
          >
            <div className="card shadow-lg border-0 h-100 project-card">
              <div className="project-img-wrapper">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.title}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p>{p.desc}</p>

                <div className="mt-2 mb-3">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="badge bg-primary me-2 mb-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  className="btn btn-dark mt-auto w-100"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card CSS */}
      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
          }
          .project-card:hover {
            transform: translateY(-4px);
  box-shadow: none;
          }
          .project-img-wrapper {
            height: 200px;
            overflow: hidden;
            border-radius: 12px 12px 0 0;
          }
          .project-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
