"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-8 mb-48">
        <div className="col-span-8 place-self-center text-center sm:text-sm">
          <p className="text-[#FFFFFF] font-body 
          dark:text-[#525252]
          sm:text-2xl sm:mb-6
      
          lg:text-6xl lg:mt-24 lg:mb-10
          
          ">
            Hello, I'm a
          </p>
          <h1 className="text-[#FFFFFF] font-extrabold font-body 
          dark:text-[#525252]
          sm:text-2xl 

          lg:text-6xl lg:mb-4">
            <TypeAnimation
              sequence={["WEB", 1000, "MOBILE", 1000, "SOFTWARE", 1000]}
              wrapper="span"
              speed={50}
             
              repeat={Infinity}
            />
            <br></br>
            <span className="text-[#F05454] font-body 
            sm:text-2xl 
            lg:text-6xl  lg:mb-4">
              DEVELOPER{" "}
            </span>
            <br></br>
           
          </h1>
          <div className="text-[#FFFFFF] font-body
           dark:text-[#525252] 
           sm:text-2xl sm:mb-20 sm:mt-6

           lg:text-6xl lg:mb-28 lg:mt-14">
            <TypeAnimation
              sequence={["I'm Erick, nice to meet you", 1000]}
              wrapper="span"
              speed={30}
              cursor={false}
              repeat={3}
            />
          </div>
          <div className="">
            <Link href='#contact' 
            className="px-6 py-3 w-full rounded-full mr-4 bg-[#ffffff] text-black hover:bg-transparent hover:text-white border border-[#ffffff] font-body 
            dark:bg-[#525252] dark:text-[#EFEFEF] dark:hover:bg-transparent dark:hover:text-[#525252] dark:border dark:border-[#525252]
            sm:w-fit

            lg:mt-10
            ">
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
