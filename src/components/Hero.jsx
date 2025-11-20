import React from "react";

function Hero() {
  return (
    <section className="bg-dark text-light text-center d-flex align-items-center" style={{ height: "80vh" }}>
      <div className="container">
        <h1 className="fw-bold display-4">Hi, I'm Dinesh 👋</h1>
        <h3 className="text-secondary mb-4">Full Stack Developer</h3>
        <p className="mb-4 fs-5">I build modern web applications using Java, Spring Boot, React, and MySQL.</p>

        <a href="#projects" className="btn btn-primary btn-lg me-3">View Projects</a>
        <a href="#contact" className="btn btn-outline-light btn-lg">Hire Me</a>
      </div>
    </section>
  );
}

export default Hero;
