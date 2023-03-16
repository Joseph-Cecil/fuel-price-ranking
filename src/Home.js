import React from "react";
import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";
import {FuelStation} from "./FuelStation";

const Home = () => {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <img src={background} alt="" className="w-full h-80 -cover" />
        </div>
        <article className="p-8">
          <h1 className="text-2xl text-center text-white font-bold mb-8 lg:text-3xl">
            GEOGRAPHIC FUEL PRICE RANKING
          </h1>

        </article>
        <FuelStation/>
      </section>
    </>
  );
};

export default Home;
