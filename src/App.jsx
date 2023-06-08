import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-black text-white font-primary">
        <Header />
        <Hero />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
