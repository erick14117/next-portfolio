"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-8">
        <div className="col-span-8 place-self-center text-center sm:text-">
          <p className="text-[#DDDDDD] text-base sm:text-lg mb-2 lg:text-4xl font-body ">
            Hello, I'm a
          </p>
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl  font-extrabold font-body">
            <span className="text-transparent bg-clip-text bg-[#F05454] text-6xl font-body">
              SOFTWARE{" "}
            </span>

            <br></br>
            <TypeAnimation
              sequence={["DEVELOPER", 1000, "ENGINEER", 1000]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#DDDDDD] text-base sm:text-lg mb-6 lg:text-4xl font-body">
            I'm Erick, nice to meet you.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#DDDDDD] text-black hover:bg-transparent hover:text-[#DDDDDD] border border-[#DDDDDD] font-body">
              Contact me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-[#DDDDDD]  border border-[#DDDDDD] hover:bg-[#DDDDDD]  hover:text-black  font-body mt-3">
              Know more
            </button>
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>
    </section>
  );
};

export default HeroSection;
