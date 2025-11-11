import React from "react";
import "./Styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Analítica inteligente para tu espacio físico</h1>
        <p>
          Admira Next te ayuda a entender el comportamiento de tus clientes en tienda.
          Convierte datos de tráfico, permanencia y ventas en decisiones rentables.
        </p>
        <button>Solicita una demo</button>
      </div>
    </section>
  );
}

export default Hero;
