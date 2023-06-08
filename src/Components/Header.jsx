import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu } from "iconsax-react";
import { CloseSquare } from "iconsax-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  function Toggle() {
    setOpen((prev) => !prev);
  }
  useEffect(() => {
    document.querySelectorAll(".link").forEach((ele) => {
      ele.addEventListener("click", () => {
        setOpen(false);
      });
    });
  }, []);
  return (
    <header className="py-3  z-40 w-full bg-header">
      <nav className="container flex justify-between items-center">
        <a
          href="#"
          className="flex text-shadow items-center text-3xl gap-3 capitalize font-bold font-header"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={Logo} alt="" className="w-logo" />
          evil inu
        </a>
        <button
          onClick={Toggle}
          className="absolute z-50 top-6 right-4 md:hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {isOpen ? <CloseSquare /> : <Menu />}
        </button>
        <div
          className={`flex tran flex-col transition absolute md:relative ${
            isOpen ? "h-full" : "h-0"
          } overflow-hidden  w-full md:h-auto md:!w-auto items-center left-0 justify-center md:justify-between top-0 bg-header md:flex-row capitalize gap-8`}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <a href="" className="link font-header hover:text-red-600">
            home
          </a>
          <a href="#about" className="link font-header hover:text-red-600">
            about
          </a>
          <a
            href="/#tokenomics"
            className="link font-header hover:text-red-600"
          >
            tokenomics
          </a>
          <a to="/#roadmap" className="link font-header hover:text-red-600">
            roadmap
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
