import React from "react";

function Benefits() {
  const items = [
    "Mide la afluencia y conversión de tus tiendas.",
    "Optimiza el personal según el tráfico real.",
    "Descubre qué zonas generan más ventas.",
  ];

  return (
    <section className="benefits">
      <h2>Beneficios clave</h2>
      <ul>
        {items.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}

export default Benefits;
