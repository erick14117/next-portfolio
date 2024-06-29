"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-6 gap-4 px-20">
        <div className="flex flex-col items-center">
          <Image src="/images/html.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            HTML
          </p>
        </div>
        {/*----------------1st item------------------------- */}
        <div className="flex flex-col items-center">
          <Image src="/images/javascript.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            JavaScript
          </p>
        </div>
        {/*----------------2nd item------------------------- */}
        <div className="flex flex-col items-center">
          <Image src="/images/css.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            CSS
          </p>
        </div>
        {/*----------------3rd item------------------------- */}
        <div className="flex flex-col items-center">
          <Image src="/images/typescript.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            TypeScript
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/angular.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            Angular
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/react.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            React
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/ionic.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            Ionic
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/drupal.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            Drupal
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/php.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            PHP
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/bootstrap.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
            Bootstrap
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/tailwind.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
          dark:text-[#525252]"
          >
           Tailwind
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/wordpress.svg" width={80} height={80} />
          <p
            className="font-semibold text-xl
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
      <ul>
        <li>
          &#8226; M.S.E Software Engineering at Arizona State University (2025)
        </li>
        <br></br>
        <li>
          &#8226; B.S. Computer Engineering at Technological Institute of Tepic
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 justify-items-center text-center">
        <li>Google UX Design &#40;in progress&#41;</li>
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
    <section className="text-white font-body dark:text-[#525252]" id="about">
      <div
        className="bg-gradient-to-b from-white from-0% to-transparent to-25% p-px rounded-3xl 
      dark:bg-gradient-to-b dark:from-[#525252] dark:from-0% to-transparent to-25% dark:p-px dark:rounded-3xl"
      >
        <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-[#222831] rounded-3xl dark:bg-[#EFEFEF] dark:rounded-3xl">
          <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
            <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F05454] mb-20">
              About Me
            </h2>
            <p className="text-justify text-3xl sm:text-4xl lg:text-5xl">
              I'm a Software Developer who loves to learn new things everyday to
              always keep my brain healthy.
              <br></br>
              <br></br>
              Future M.S.E Software Engineer graduate at Arizona State
              University in 2025.
            </p>
            <h3 className=" text-center text-xl sm:text-3xl lg:text-4xl font-extrabold  text-[#F05454] mt-16 mb-8">
              What I know
            </h3>

            <div className="flex flex-row mt-8 text-justify justify-center">
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

            <div className="mt-8 text-center text-2xl sm:text-5xl lg:text-3xl">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
