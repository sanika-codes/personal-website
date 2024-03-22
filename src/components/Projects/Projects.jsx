import React from "react";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import {projectsList} from "./ProjectsList.js";
import ProjectCard from "./ProjectCard";

function Projects() {
  useEffect(() => {
    // register Swiper custom elements
    register();
  }, []);

  return (
    <div className="projectsSection container">
      <h2 className="section-heading">Projects</h2>
      <p>A collection of React projects that I have worked on. (Count this website too!)</p>
   
      <swiper-container
       
        speed="500"
        loop="true"
        freeMode="true"
        space-between = "20"
        centered-slides = "true"
        centered-slides-bounds = "true"
        autoplay="true"
        navigation="true"
        theme-color="#000000"
        breakpoints="{&quot;640&quot;:{&quot;slidesPerView&quot;:2},&quot;1024&quot;:{&quot;slidesPerView&quot;:3.5}}"

        
      >
        
       {
        projectsList.map( project => {
          return <swiper-slide height="500" key={project.name}><ProjectCard {...project}/></swiper-slide>
        })
       }
      </swiper-container>
      </div>

  );
}

export default Projects;
