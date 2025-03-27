import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
        <Navbar />
      <div className="background">

        <HeroSection />
        
      </div>
      <Footer />

    </>
  );
}

export default App;
