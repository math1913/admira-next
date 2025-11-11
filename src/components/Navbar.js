import React from "react";
import "./Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Admira Next</div>
      <ul className="nav-links">
        <li><a href="#features">Características</a></li>
        <li><a href="#usecases">Casos de uso</a></li>
        <li><a href="#integrations">Integraciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
