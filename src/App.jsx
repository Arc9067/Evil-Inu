import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen w-full bg-black text-white font-primary">
      <Header />
      <Hero />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
