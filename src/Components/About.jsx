import React from "react";
import Logo from "../assets/logo2.png";

const About = () => {
  return (
    <section id="about" className="w-full bg-header py-fif">
      <div className="container grid lg:grid-cols-2 justify-between items-center md:text-right">
        <img src={Logo} alt="" data-aos="flip-right" data-aos-duration="1500" />
        <div className="flex gap-5 flex-col">
          <h1
            className="font-header md:text-6xl text-4xl uppercase"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            about
          </h1>
          <p className="" data-aos="fade-left" data-aos-duration="1000">
            Evil Floki is a notorious and enigmatic figure in the cryptocurrency
            world, known for their malicious actions and deceptive schemes.
            Inspired by the original Floki Inu cryptocurrency, Evil Floki
            represents a darker and more sinister counterpart, embodying the
            concept of deceit, manipulation, and chaos.
          </p>
          <p data-aos="fade-left" data-aos-duration="1000">
            Evil Floki operates with a hidden agenda, often targeting
            unsuspecting investors and manipulating the market for personal
            gain. They thrive on spreading fear and uncertainty, utilizing
            advanced hacking techniques and exploiting vulnerabilities in
            blockchain technology to carry out their nefarious activities.
          </p>
          <p data-aos="fade-left" data-aos-duration="1000">
            With an army of dedicated followers, Evil Floki creates an aura of
            mystique and power, drawing in individuals seeking to profit from
            their malicious endeavors. They have established an underground
            network where they conduct secret meetings and share insider
            information, allowing them to stay one step ahead of authorities and
            rival crypto enthusiasts.
          </p>

          <ul
            className="flex list-disc list-inside md:flex-row flex-col gap-5"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <li className="text-xl font-header capitalize">0% tax</li>
            <li className="text-xl font-header capitalize">1m supply</li>
            <li className="text-xl font-header capitalize">2% max wallet</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
