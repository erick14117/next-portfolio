"use client";
import React, {useTransition,useState} from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab,setTab]= useState("skills");
  const [startTransition, isPending] = useTransition ();

const handleTabChange = (id) => {
  startTransition(() =>{
    setTab(id);
  })
}

  return (
    <section className="text-white font-body">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
      <div>
        <h2 className=" text-center lg:text-6xl sm:text:3xl font-extrabold mb-8">About Me</h2>
        <p className="text-center text-5xl">
          I'm a Software Developer who loves to learn new things everyday to
          always keep my brain healthy. I also love outer space, hence the name Supernova.
          <br></br>
          <br></br>
          Future M.S.E Software Engineer graduate at Arizona State University
          in 2025.
        </p>
        <div className="flex flex-row-8 mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
          <span className="mr-3 font-semibold hover:text-white text-[#DDDDDD] border-b border-[#F05454]">Skills</span>
          <span>Education</span>
          <span>Certifications</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
