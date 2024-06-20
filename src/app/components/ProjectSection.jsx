"use client";
import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
      id: 1,
      title: "Las Palmas LLC",
      description: "Landscaping Services",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://www.laspalmaslawncarellc.com/"
    },
    {
      id: 2,
      title: "Orion Homes LLC",
      description: "Orion Homes Website",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://www.orion-homes.com/"
    },
    {
      id: 3,
      title: "Secret Project",
      description: "Coming soon",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
    }
  ];

const ProjectSection = () => {
  return (
    <section id="projects">
    <>
    <h2 className="text-center font-body text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F05454] mt-20 mb-40 " >
        My Projects
    </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
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
        </>
        </section>
  )
}

export default ProjectSection