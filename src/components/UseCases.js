import React from "react";
import "./Styles/UseCases.css";

function UseCases() {
  return (
    <section id="usecases" className="usecases">
      <h2>Casos de uso</h2>
      <p>Cómo Admira Next transforma datos en resultados:</p>
      <div className="cases">
        <div className="case">
          <h3>Retail</h3>
          <p>Optimiza tiendas según tráfico y mejora la conversión.</p>
        </div>
        <div className="case">
          <h3>Centros comerciales</h3>
          <p>Analiza flujos, permanencia y eventos en tiempo real.</p>
        </div>
        <div className="case">
          <h3>Restauración</h3>
          <p>Evalúa afluencia, ocupación y rotación de mesas.</p>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
