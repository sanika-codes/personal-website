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
        autoplay="false"
        navigation="true"
        theme-color="#000000"
        breakpoints="{&quot;400&quot;:{&quot;slidesPerView&quot;:1.5},&quot;1024&quot;:{&quot;slidesPerView&quot;:3.5}}"

        
      >
        
       {
        projectsList.map( project => {
          return <swiper-slide  key={project.name}><ProjectCard {...project}/></swiper-slide>
        })
       }
      </swiper-container>

      <p>You can also check out my past work as a Wordpress Website Developer <a href="http://theamberhorizons.com/work" target="_blank" rel="noreferrer">here</a></p>
      </div>

  );
}

export default Projects;
