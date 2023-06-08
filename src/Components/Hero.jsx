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
        <img
          src={logo}
          data-aos="zoom-out"
          data-aos-duration="1500"
          alt=""
          className="w-11/12 md:w-[20rem]"
        />
        <h1
          className="font-header md:text-6xl text-4xl text-center uppercase italic"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          welcome to evil inu 犬
        </h1>
        <p
          className="text-xl capitalize text-shadow text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          a notorious and enigmatic figure
        </p>

        <p
          className="text-xl capitalize text-shadow text-center"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          0x09a1784767c43321a56A84A881DeF1c73D151a4C
        </p>
        <div className="flex gap-3" data-aos="zoom-in" data-aos-duration="1500">
          <a
            href="https://t.me/EvilInuEntry"
            target="_blank"
            className="text-3xl"
          >
            <FaTelegram />
          </a>
          <a
            href="https://twitter.com/EvilInuERC"
            target="_blank"
            className="text-3xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
