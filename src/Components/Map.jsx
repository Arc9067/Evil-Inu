import React from "react";

const Map = () => {
  const milestones = [
    {
      title: "Phase 1",
      description: "Website launch & Complete contract",
    },
    {
      title: "Phase 2",
      description: "Token launch Community building CMC listing CG listing",
    },
    {
      title:"Phase 3",
      description:"CEX listings & Meme project partnerships"
    }
  ];
  return (
    <section className="py-fif w-full">
      <div className="container">
        <h1
          className="font-header md:text-6xl text-4xl uppercase"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          evil map
        </h1>
        <ul className="space-y-4 mt-10 grid md:grid-cols-2 items-center justify-between gap-8">
          {milestones.map((milestone, index) => (
            <li
              key={index}
              className="border border-header p-4 rounded-lg"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-semibold mb-2 font-header">
                {milestone.title}
              </h3>
              <p>{milestone.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Map;
