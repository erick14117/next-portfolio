"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center">
        <li className="mr-8 mb-8">
          <Image src="/images/html.svg" width={96} height={96} />
        </li>
        <li className="mr-8">
          <Image src="/images/javascript.svg" width={96} height={96} />
        </li>
        <li className="mr-8 mb-8">
          <Image src="/images/css.svg" width={96} height={64} />
        </li>
        <li className="mr-8">
          <Image src="/images/typescript.svg" width={96} height={96} />
        </li>
        <li className="mr-8 mb-8">
          <Image src="/images/angular.svg" width={96} height={96} />
        </li>
        <li className="mr-8">
          <Image src="/images/react.svg" width={96} height={96} />
        </li>
        <li className="mr-8 mb-8">
          <Image src="/images/ionic.svg" width={96} height={96} />
        </li>
        <li className="mr-8">
          <Image src="/images/drupal.svg" width={96} height={96} />
        </li>
        <li className="mr-8 mb-8">
          <Image src="/images/php.svg" width={96} height={64} />
        </li>
        <li className="mr-8">
          <Image src="/images/bootstrap.svg" width={96} height={64} />
        </li>
        <li className="mr-8">
          <Image src="/images/tailwind.svg" width={96} height={64} />
        </li>
        <li className="mr-8">
          <Image src="/images/wordpress.svg" width={96} height={64} />
        </li>
      </ul>
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
    <section className="text-white font-body " id="about">
      <div className="bg-gradient-to-b from-white from-0% to-transparent to-25% p-px rounded-3xl">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-[#222831] rounded-3xl ">
        <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
          <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F05454] mb-20">
            About Me
          </h2>
          <p className="text-justify text-3xl sm:text-4xl lg:text-5xl">
            I'm a Software Developer who loves to learn new things everyday to
            always keep my brain healthy.
            <br></br>
            <br></br>
            Future M.S.E Software Engineer graduate at Arizona State University
            in 2025.
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
