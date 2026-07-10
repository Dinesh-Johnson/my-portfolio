import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Personality from "./components/Personality";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize Scroll Animations
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    });

    // Ensure body doesn't have dark-theme from previous local storage
    document.body.classList.remove("dark-theme");
    
    // Global mouse tracker for the glow effect
    const handleMouseMove = (e) => {
      for(const card of document.querySelectorAll('.bento-cell')) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bento-container">
      <Hero />
      <Skills />
      <Projects />
      <Personality />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
