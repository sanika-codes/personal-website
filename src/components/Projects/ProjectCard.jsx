import React from "react";
import sampleImage from "../../assets/images/Studio Booking.jpg";
import "./Projects.scss";

function ProjectCard({name, description, image, url}) {
  
  return (
    <a href={url} target="_blank" rel="noreferrer" className="project-card-wrapper">
    <div className="project-card" style={{backgroundImage : `url("${image ? image : sampleImage}")`,  backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
     <div className="image-overlay">

     </div>
       
        <div className="ProjectCard__info">
          <h3 className="ProjectCard__name">{name}</h3>{" "}
          <p className="ProjectCard__role">
            {description}
          </p>
        </div>
     
    </div>
    </a>
  );
}

export default ProjectCard;
