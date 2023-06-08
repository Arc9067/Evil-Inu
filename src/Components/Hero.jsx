import React from "react";
import logo from "../assets/logo.png";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="py-fif  min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container gap-4 flex flex-col justify-center items-center">
        <img src={logo} alt="" className="w-11/12 md:w-[20rem]" />
        <h1 className="font-header md:text-6xl text-4xl text-center uppercase italic">
          welcome to evil inu 犬
        </h1>
        <p className="text-xl capitalize text-shadow">
          a notorious and enigmatic figure
        </p>
        <div className="flex gap-3">
          <a href="" className="text-3xl">
            <FaTelegram />
          </a>
          <a href="" className="text-3xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
