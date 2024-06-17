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
    }
  ];

const ProjectSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" >
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
  )
}

export default ProjectSection