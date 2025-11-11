import React from "react";
import "./Styles/Features.css";

function Features() {
  const features = [
    {
      title: "Analiza el tráfico en tienda",
      desc: "Mide entradas, recorridos y conversiones para mejorar la experiencia del cliente.",
    },
    {
      title: "Optimiza la plantilla y horarios",
      desc: "Adapta tus recursos al flujo real de visitantes y reduce esperas.",
    },
    {
      title: "Visualiza zonas calientes",
      desc: "Identifica dónde pasan más tiempo los clientes con mapas de calor.",
    },
  ];

  return (
    <section id="features" className="features">
      <h2>Beneficios clave</h2>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
