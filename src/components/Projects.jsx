import React from "react";

function Projects() {
  const projects = [
  {
    title: "MilkLore",
    desc: "A full-stack dairy management system connecting farmers and admins for milk collection, product management, and 15-day automated payments with email receipts.",
    tech: ["Spring MVC", "Spring Security", "Hibernate", "JSP", "MySQL"],
    link: "https://github.com/Dinesh-Johnson/MilkLore",
    image: "/milklore.png"
  }
];


  return (
    <section id="projects" className="container py-5">
  <h2 className="text-center mb-5">My Projects</h2>

  <div data-aos="zoom-in" className="card shadow-lg h-100 border-0">
    {projects.map((p, index) => (
      <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">
        <div className="card shadow-lg h-100 border-0">
          {p.image && (
            <img 
              src={p.image} 
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
              alt={p.title}
            />
          )}

          <div className="card-body">
            <h5 className="card-title fw-bold">{p.title}</h5>
            <p>{p.desc}</p>

            <div className="mb-2">
              {p.tech.map((t, i) => (
                <span key={i} className="badge bg-primary me-2 mb-2">{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" className="btn btn-dark w-100">
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Projects;
