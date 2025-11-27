import React from "react";
import {
  FaReact,
  FaJava,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import { SiSpring, SiMysql, SiHibernate, SiPostman, SiJson } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="skill-icon react" /> },
    { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
    { name: "Java", icon: <FaJava className="skill-icon java" /> },
    { name: "Spring Boot", icon: <SiSpring className="skill-icon spring" /> },
    { name: "Hibernate", icon: <SiHibernate className="skill-icon hib" /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
    { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="skill-icon bt" /> },
    { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
    { name: "GitHub", icon: <FaGithub className="skill-icon gh" /> },
    { name: "JSON", icon: <SiJson className="skill-icon json" /> },
    { name: "Postman", icon: <SiPostman className="skill-icon pm" /> },
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Skills</h2>

      <div className="row justify-content-center">
        {skills.map((s, index) => (
          <div key={index} className="col-6 col-md-3 col-lg-2 mb-4">
            <div className="skill-card text-center p-3 rounded shadow-sm" data-aos="zoom-in">
              {s.icon}
              <p className="mt-2 fw-semibold">{s.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
