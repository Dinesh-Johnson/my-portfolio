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
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <form className="col-md-6 mx-auto" onSubmit={submitForm}>
        <input className="form-control mb-3" placeholder="Your Name" name="name" onChange={handleChange} />
        <input className="form-control mb-3" placeholder="Email" name="email" onChange={handleChange} />
        <textarea className="form-control mb-3" placeholder="Message" rows="4" name="message" onChange={handleChange}></textarea>
        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
