import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Map from "./Components/Map";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-black text-white font-primary">
        <Header />
        <Hero />
        <About />
        <Map />
      </div>
    </BrowserRouter>
  );
};

export default App;
