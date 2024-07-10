"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div
        className="
        sm:grid sm:grid-cols-2 sm:gap-6 sm:px-1
        md:gap-4
        lg:grid-cols-3 lg:gap-8 lg:px-10 
        2xl:grid-cols-4 2xl:gap-6 2xl:px-16"
      >
        <div className="flex flex-col items-center">
          <Image src="/images/html.svg" width={80} height={80} />
          <p
            className="font-semibold
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            HTML
          </p>
        </div>
        {/*----------------1st item------------------------- */}
        <div className="flex flex-col items-center">
          <Image src="/images/javascript.svg" width={80} height={80} />
          <p
            className="font-semibold l
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            JavaScript
          </p>
        </div>
        {/*----------------2nd item------------------------- */}
        <div className="flex flex-col items-center">
          <Image src="/images/css.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            CSS
          </p>
        </div>
        {/*----------------3rd item------------------------- */}
        <div className="flex flex-col items-center ">
          <Image src="/images/typescript.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            TypeScript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/angular.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Angular
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/react.svg" width={80} height={80} />
          <p
            className="font-semibold lg:text-md md:text-md sm:text-xs
             2xl:text-lg
          dark:text-[#525252]"
          >
            React
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/ionic.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Ionic
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/drupal.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Drupal
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/php.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            PHP
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/bootstrap.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Bootstrap
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/tailwind.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Tailwind
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/wordpress.svg" width={80} height={80} />
          <p
            className="font-semibold 
            sm:text-sm
            md:text-md 
            lg:text-md  
            2xl:text-lg
          dark:text-[#525252]"
          >
            Wordpress
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className=" flex flex-col items-center">
        <div>
          <li
            className="text-justify
        sm:text-md
        lg:text-lg
        2xl:text-xl
        3xl:text-2xl
      
        "
          >
            &#8226; M.S.E Software Engineering at Arizona State University
            (2025).<br></br>
            &#8226; B.S.E. Computer Systems Engineering at Technological
            Institute of Tepic.
          </li>
        </div>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li
          className="text-center
        sm:text-md
         lg:text-lg
          2xl:text-xl
          3xl:text-2xl
         "
        >
          Google UX Design &#40;in progress&#41;
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="text-white font-body 
    dark:text-[#525252]"
    >
      <div
        className="bg-gradient-to-b from-[#FFFFFF] from-0% to-transparent to-10% p-px rounded-3xl
      dark:bg-gradient-to-b dark:from-[#525252] dark:from-0% dark:to-transparent dark:to-10% dark:p-px dark:rounded-3xl"
      >
        <div
          className=" bg-[#222831] rounded-3xl gap-8 items-center   py-8 px-4 
        dark:bg-[#EFEFEF] dark:rounded-3xl 
        sm:py-10
        md:grid md:grid-cols-1
        lg:gap-16 lg:px-16
        "
        >
          <div
            className="text-center flex flex-col h-full
         
         md:mt-0
         lg:mt-4 
          "
          >
            <h2
              className="text-center font-extrabold text-[#F05454] 
             sm:text-2xl sm:mb-10
             lg:text-3xl  lg:mb-20
             2xl:text-4xl
             3xl:text-5xl
             "
            >
              About me
            </h2>
            <div className="flex justify-center">
              <div className="text-left">
                <p
                  className="
          
            sm:text-md 
            md:text-lg
            lg:text-xl
            3xl:text-2xl
            
        
            "
                >
                  I'm a Software Developer who loves to learn new things
                  everyday to always keep my brain healthy and young.
                  <br></br>
                  <br></br>
                  Also a future M.S.E Software Engineer graduate at Arizona
                  State University in 2025.
                </p>
              </div>
            </div>
            <h3
              className=" font-extrabold  text-[#F05454]
             sm:text-xl sm:mb-10 sm:mt-14
             lg:text-2xl  lg:mb-20
             2xl:text-3xl
             3xl:text-4xl"
            >
              What I know
            </h3>

            <div
              className="flex flex-row  text-justify 
            md:justify-center"
            >
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>

            <div
              className="mt-8 sm:mb-20 text-center  sm:text-sm 
            md:text-md 
            lg:text-lg 
           "
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
