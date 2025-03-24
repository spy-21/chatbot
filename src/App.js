import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="background">

        <Navbar />
        <HeroSection />
      </div>

    </>
  );
}

export default App;
