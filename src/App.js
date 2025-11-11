import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Benefits />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
