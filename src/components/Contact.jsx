import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "32dfe04a-0207-407e-bd74-dc58f3861c95");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="bento-cell span-12 d-flex flex-column flex-md-row gap-5 justify-content-between align-items-center" data-aos="fade-up">
      <div className="flex-grow-1" style={{ maxWidth: "500px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px", color: "var(--text)" }}>Have a Question?</h2>
        <p style={{ fontSize: "1.05rem", color: "var(--subtext)", fontWeight: "400", lineHeight: "1.7" }}>
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="mt-5 d-flex gap-4">
          <a href="https://linkedin.com/in/dinesh-johnson" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: "var(--subtext)", fontWeight: "600", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--accent)"} onMouseOut={(e) => e.target.style.color = "var(--subtext)"}>
            <i className="bi bi-linkedin fs-5"></i> LinkedIn
          </a>
          <a href="https://github.com/Dinesh-Johnson" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: "var(--subtext)", fontWeight: "600", transition: "color 0.2s" }} onMouseOver={(e) => e.target.style.color = "var(--accent)"} onMouseOut={(e) => e.target.style.color = "var(--subtext)"}>
            <i className="bi bi-github fs-5"></i> GitHub
          </a>
        </div>
      </div>

      <div style={{ flexGrow: 1, width: "100%", maxWidth: "500px", background: "var(--bg-secondary)", padding: "32px", borderRadius: "16px", border: "1px solid var(--card-border)" }}>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <input 
              className="form-control" 
              placeholder="Your Name" 
              name="name" 
              required
              style={{ background: "var(--bg)", color: "var(--text)", padding: "16px", borderRadius: "8px", border: "1px solid var(--card-border)" }}
            />
          </div>
          <div className="mb-3">
            <input 
              type="email"
              className="form-control" 
              placeholder="Your Email" 
              name="email" 
              required
              style={{ background: "var(--bg)", color: "var(--text)", padding: "16px", borderRadius: "8px", border: "1px solid var(--card-border)" }}
            />
          </div>
          <div className="mb-4">
            <textarea 
              className="form-control" 
              placeholder="Your Message" 
              rows="4" 
              name="message" 
              required
              style={{ background: "var(--bg)", color: "var(--text)", padding: "16px", borderRadius: "8px", border: "1px solid var(--card-border)", resize: "none" }}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="btn-primary-custom w-100 py-3 mb-2 d-flex align-items-center justify-content-center gap-2"
          >
            {result || "Send Message"} <i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
