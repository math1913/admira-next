import React from "react";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Admira Next · Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
