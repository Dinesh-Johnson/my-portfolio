import React from "react";

function Skills() {
  const skills = [
    "React.js", "JavaScript", "Bootstrap", 
    "Java", "Spring Boot", "MySQL", 
    "Git", "REST APIs"
  ];

  return (
    <section className="container py-5" id="skills">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-6 mb-3" key={index}>
            <div className="card shadow-sm text-center p-3">
              <h5>{skill}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
