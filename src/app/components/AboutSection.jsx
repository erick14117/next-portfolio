"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>TypeScript</li>
        <li>Angular</li>
        <li>React</li>
        <li>Ionic</li>
        <li>Drupal</li>
        <li>PHP</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>M.S.E Software Engineering at Arizona State University (2025)</li>
        <li>B.S. Computer Engineering at Technological Institute of Tepic</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 justify-items-center text-center">
        <li>Google UX Design</li>
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
    <section className="text-white font-body" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <h2 className=" text-center text-base lg:text-6xl sm:text:3xl font-extrabold mb-8">
          About Me
        </h2>
        <p className="text-center text-5xl">
          I'm a Software Developer who loves to learn new things everyday to
          always keep my brain healthy. I also love outer space, hence the name
          Supernova.
          <br></br>
          <br></br>
          Future M.S.E Software Engineer graduate at Arizona State University in
          2025.
        </p>
  
        <div className="flex flex-row mt-8 text-center justify-start">
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
        
        <div className="mt-8 text-center font-extralight">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
