"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-8 mb-48">
        <div className="col-span-8 place-self-center text-center sm:text-">
          <p className="text-white text-3xl sm:text-5xl lg:text-6xl font-body mt-24 mb-10 dark:text-[#525252]">
            Hello, I'm a
          </p>
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl  font-extrabold font-body dark:text-[#525252]">
            <TypeAnimation
              sequence={["WEB", 1000, "MOBILE", 1000, "SOFTWARE", 1000]}
              wrapper="span"
              speed={50}
             
              repeat={Infinity}
            />
            <br></br>
            <span className="text-transparent bg-clip-text bg-[#F05454] text-3xl sm:text-5xl lg:text-6xl font-body mb-4">
              DEVELOPER{" "}
            </span>
            <br></br>
           
          </h1>
          <div className= "text-white mb-28 text-3xl sm:text-5xl lg:text-6xl font-body mt-14 dark:text-[#525252]">
            <TypeAnimation
              sequence={["I'm Erick, nice to meet you", 1000]}
              wrapper="span"
              speed={30}
              cursor={false}
              repeat={3}
            />
          </div>
          <div className="">
            <Link href='#contact' className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#ffffff] text-black hover:bg-transparent hover:text-white border border-[#ffffff] font-body mt-10
            dark:bg-[#525252] dark:text-[#EFEFEF] dark:hover:bg-transparent dark:hover:text-[#525252] dark:border dark:border-[#525252] ">
              Contact me
            </Link>
            <Link href='#about' className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-[#F05454]  border border-[#F05454] hover:bg-[#F05454]  hover:text-white font-body mt-3 mb-40
            dark:hover:text-[#EFEFEF]">
              Know more
            </Link>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;
