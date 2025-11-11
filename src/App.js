import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Integrations from "./components/Integrations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Integrations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
