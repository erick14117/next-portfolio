"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Las Palmas LLC",
    description: "Landscaping Services",
    image: "/images/projects/1.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.laspalmaslawncarellc.com/",
  },
  {
    id: 2,
    title: "Orion Homes LLC",
    description: "Orion Homes Website",
    image: "/images/projects/2.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.orion-homes.com/",
  }
];

const ProjectSection = () => {
  return (
    <section id="projects"
      className="text-[#FFFFFF] font-body
      dark:text-[#525252]" >
      <div className="bg-gradient-to-b from-white from-0% to-transparent to-10% p-px rounded-3xl
      dark:bg-gradient-to-b dark:from-[#525252] dark:from-0% dark:to-transparent dark:to-10% dark:p-px dark:rounded-3xl
     
      
    ">

        <div className="items-center gap-8  py-8 px-4  bg-[#222831] rounded-3xl 
        dark:bg-[#EFEFEF] dark:rounded-3xl">
          <div>
            <h2 className="text-center font-body font-extrabold text-[#F05454]
             sm:text-2xl sm:mb-14 sm:mt-8
             lg:text-3xl  lg:mb-20
             2xl:text-4xl">
              My Projects
            </h2>
            <div className="grid gap-8 
  md:gap-12
            2xl:grid-cols-2  xl:px-10
          
            dark: text-[#525252] text-center">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
