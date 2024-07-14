"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-8 mb-48">
        <div className="col-span-8 place-self-center text-center 
        sm:text-sm">
          <p className="text-[#FFFFFF] font-body 
          dark:text-[#525252]
          sm:text-2xl sm:mb-6
          lg:text-3xl lg:mt-24 lg:mb-10
          2xl:text-4xl
          3xl:text-5xl
          ">
            Hola, soy un
          </p>
          <h1 className="text-[#FFFFFF] font-extrabold font-body 
          dark:text-[#525252]
          sm:text-2xl 

          lg:text-3xl lg:mb-4
          2xl:text-4xl
          3xl:text-5xl">
            <TypeAnimation
              sequence={["WEB", 1000, "MOBILE", 1000, "SOFTWARE", 1000]}
              wrapper="span"
              speed={50}
             
              repeat={Infinity}
            />
            <br></br>
            <span className="text-[#F05454] font-body 
            sm:text-2xl 
            lg:text-3xl  lg:mb-4
            2xl:text-4xl
            3xl:text-5xl">
              DEVELOPER{" "}
            </span>
            <br></br>
           
          </h1>
          <div className="text-[#FFFFFF] font-body
           dark:text-[#525252] 
           sm:text-2xl sm:mb-20 sm:mt-6

           lg:text-3xl lg:mb-28 lg:mt-14
           2xl:text-4xl
           3xl:text-5xl">
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
            className="
            bg-[#FFFFFF] text-[#000000] hover:bg-transparent hover:text-[#FFFFFF] border border-[#FFFFFF] font-body 
            dark:bg-[#525252] dark:text-[#EFEFEF] dark:hover:bg-transparent dark:hover:text-[#525252] dark:border dark:border-[#525252]
            sm:w-fit sm:px-6 sm:py-3 sm:mr-4 sm:rounded-full 
           
            md:text-md
            lg:mt-10  lg:w-full lg:text-lg
            3xl:text-xl
            ">
              Contact me
            </Link>
            <Link href='#about' className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-[#F05454]  border border-[#F05454] hover:bg-[#F05454]  hover:text-[#222831] font-body mt-3 mb-40
            dark:hover:text-[#EFEFEF]
            md:text-md
            lg:text-lg
            3xl:text-xl">
              Know more
            </Link>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;
