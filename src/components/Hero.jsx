import React from "react";
import profilePic from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="premium-hero d-flex flex-column align-items-center text-center"
      data-aos="fade-up"
    >
      {/* Thin vertical accent line */}
      <div className="hero-accent"></div>

      {/* MAIN TITLE */}
      <h1 className="hero-title fade-up">
        Hi, I'm <span className="highlight">Dinesh</span> 👋
      </h1>

      {/* SUBTITLE */}
      <p className="hero-sub fade-up">
        Full Stack Developer who builds fast, scalable, and modern web applications.
      </p>

      {/* BUTTONS */}
      <div className="hero-buttons fade-up">
        <a href="/my-portfolio/resume.pdf" download className="btn resume-btn">
          Download Resume
        </a>
        <a href="#projects" className="btn outline-btn">
          View Projects
        </a>
      </div>

      {/* ABOUT MERGED */}
      <div className="hero-about fade-up d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">

        {/* PHOTO LEFT SIDE */}
        <div className="about-left text-center">
          <div className="img-frame hover-frame">
            <img src={profilePic} className="about-img" alt="Dinesh" />
          </div>

          <p className="location-text mt-3 fade-up-delayed">📍 Coimbatore, India</p>

          <div className="social-links fade-up-delayed">
            <a href="https://github.com/Dinesh-Johnson" target="_blank" className="social-icon">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/dinesh-johnson" target="_blank" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:danealdinesh@gmail.com" className="social-icon">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

        {/* TEXT RIGHT SIDE */}
        <div className="about-text text-md-start text-center">
          <h2 className="about-title fade-up">About Me</h2>

          <p className="about-desc fade-up-delayed">
            I am a Full Stack Developer passionate about building modern, fast and optimized
            applications using React, Java, Spring Boot and MySQL.
          </p>

          <p className="about-desc fade-up-delayed">
            I focus on writing clean, maintainable code and delivering meaningful, real-world
            digital experiences.
          </p>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <div className="scroll-indicator fade-up-delayed">
        <span></span>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .premium-hero {
          padding: 60px 20px;
          min-height: 100vh;
          background: #000;
          color: #fff;
          position: relative;
        }

        /* Accent line */
        .hero-accent {
          width: 3px;
          height: 60px;
          background: #00adee;
          margin-bottom: 25px;
          border-radius: 2px;
          opacity: 0.8;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .highlight {
          color: #00adee;
        }

        .hero-sub {
          max-width: 650px;
          color: #aaa;
          font-size: 1.2rem;
          margin-bottom: 25px;
        }

        .hero-buttons {
          margin-bottom: 50px;
        }

        .btn {
          padding: 12px 28px;
          font-size: 1.05rem;
          border-radius: 8px;
          font-weight: 600;
          transition: 0.25s ease;
        }

        .resume-btn {
          background: #fff;
          color: #000;
        }
        .resume-btn:hover {
          background: #eaeaea;
          transform: translateY(-2px);
        }

        .outline-btn {
          border: 2px solid #fff;
          color: #fff;
        }
        .outline-btn:hover {
          background: #ffffff15;
          transform: translateY(-2px);
        }

        /* IMAGE FRAME */
        .img-frame {
          padding: 6px;
          border-radius: 16px;
          background: linear-gradient(130deg, #333, #111);
          transition: 0.3s ease;
        }

        .hover-frame:hover {
          transform: translateY(-3px);
        }

        .about-img {
          width: 240px;
          height: 240px;
          border-radius: 12px;
          object-fit: cover;
        }

        /* LOCATION */
        .location-text {
          font-size: 1rem;
          color: #bbb;
        }

        /* SOCIAL ICONS */
        .social-links {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 10px;
        }

        .social-icon {
          font-size: 1.8rem;
          color: #fff;
          transition: 0.25s ease;
        }

        .social-icon:hover {
          color: #00adee;
          transform: translateY(-3px);
        }

        /* ABOUT TEXT */
        .about-title {
          font-size: 2.4rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
          margin-bottom: 18px;
        }

        .about-title::after {
          content: "";
          width: 60px;
          height: 3px;
          background: #00adee;
          position: absolute;
          bottom: -8px;
          left: 0;
        }

        .about-desc {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        /* SCROLL INDICATOR */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
        }
        .scroll-indicator span {
          width: 26px;
          height: 40px;
          border: 2px solid #444;
          border-radius: 20px;
          display: inline-block;
          position: relative;
        }
        .scroll-indicator span:after {
          content: "";
          width: 6px;
          height: 6px;
          background: #00adee;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          animation: scroll-dot 1.6s infinite;
        }

        @keyframes scroll-dot {
          0% { top: 8px; opacity: 1; }
          100% { top: 26px; opacity: 0; }
        }

        /* ANIMATIONS */
        .fade-up {
          animation: fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        .fade-up-delayed {
          animation: fadeUp 1.1s ease forwards;
          opacity: 0;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.6rem;
          }
          .about-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
