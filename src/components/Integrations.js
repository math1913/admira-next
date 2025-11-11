import React from "react";
import "./Styles/Integrations.css";

function Integrations() {
  return (
    <section id="integrations" className="integrations">
      <h2>Integraciones</h2>
      <p>Admira Next se conecta con tus sistemas de cámaras, POS y BI favoritos.</p>
      <div className="logos">
        <div className="logo-box">Cámaras</div>
        <div className="logo-box">POS</div>
        <div className="logo-box">Google Analytics</div>
        <div className="logo-box">Power BI</div>
      </div>
    </section>
  );
}

export default Integrations;
