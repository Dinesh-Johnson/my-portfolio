import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    alert("Message sent! (Frontend only version)");
  }

  return (
    <div 
      className="bento-cell span-12 d-flex flex-column flex-md-row gap-5 justify-content-between align-items-center" 
      data-aos="fade-up"
      style={{
        background: "var(--accent)", 
        color: "var(--accent-text)", 
        border: "none"
      }}
    >
      <div className="flex-grow-1" style={{ maxWidth: "500px" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "16px", textTransform: "uppercase", color: "var(--accent-text)" }}>Have a Question?</h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(223, 220, 213, 0.8)", fontWeight: "500" }}>
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="mt-5 d-flex gap-4">
          <a href="https://linkedin.com/in/dinesh-johnson" style={{ color: "var(--accent-text)", textDecoration: "none", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>LinkedIn</a>
          <a href="https://github.com/Dinesh-Johnson" style={{ color: "var(--accent-text)", textDecoration: "none", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>GitHub</a>
        </div>
      </div>

      <div style={{ flexGrow: 1, width: "100%", maxWidth: "500px" }}>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <input 
              className="form-control" 
              placeholder="Your Name" 
              name="name" 
              onChange={handleChange} 
              required
              style={{ background: "rgba(0,0,0,0.1)", color: "var(--accent-text)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
          <div className="mb-3">
            <input 
              type="email"
              className="form-control" 
              placeholder="Your Email" 
              name="email" 
              onChange={handleChange} 
              required
              style={{ background: "rgba(0,0,0,0.1)", color: "var(--accent-text)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
          <div className="mb-4">
            <textarea 
              className="form-control" 
              placeholder="Your Message" 
              rows="4" 
              name="message" 
              onChange={handleChange}
              required
              style={{ background: "rgba(0,0,0,0.1)", color: "var(--accent-text)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}
            ></textarea>
          </div>
          <button 
            className="btn w-100 py-3"
            style={{
              background: "var(--card-bg)",
              color: "var(--card-text)",
              border: "none",
              fontWeight: "800",
              fontSize: "1.1rem",
              borderRadius: "8px",
              textTransform: "uppercase"
            }}
          >
            Send Message <i className="bi bi-send-fill ms-2"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
