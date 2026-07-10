import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
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
  }, []);

  return (
    <>
      <main className="bento-container">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Personality />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
