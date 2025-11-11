import React, { useState } from "react";
import "./Styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias, te contactaremos pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
