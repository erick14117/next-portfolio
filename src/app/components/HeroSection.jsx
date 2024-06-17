"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-8">
        <div className="col-span-8 place-self-center text-center sm:text-">
          <p className="text-white text-3xl sm:text-5xl lg:text-6xl font-body mt-14 mb-10">
            Hello, I'm a
          </p>
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl  font-extrabold font-body">
            <TypeAnimation
              sequence={["WEB", 1000, "MOBILE", 1000, "SOFTWARE", 1000]}
              wrapper="span"
              speed={50}
             
              repeat={Infinity}
            />
            <br></br>
            <span className="text-transparent bg-clip-text bg-[#F05454] text-6xl font-body mb-4">
              DEVELOPER{" "}
            </span>
            <br></br>
           
          </h1>
          <div className= "text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-body mt-14">
            <TypeAnimation
              sequence={["I'm Erick, nice to meet you", 1000]}
              wrapper="span"
              speed={30}
              cursor={false}
              repeat={3}
            />
          </div>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#DDDDDD] text-black hover:bg-transparent hover:text-[#DDDDDD] border border-[#DDDDDD] font-body mt-8">
              Contact me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-[#DDDDDD]  border border-[#DDDDDD] hover:bg-[#DDDDDD]  hover:text-black  font-body mt-3">
              Know more
            </button>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;
