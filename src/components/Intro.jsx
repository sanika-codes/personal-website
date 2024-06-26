import React from "react";
import './Intro.scss';
import namaste from '../assets/images/namaste.png';
import myPhoto from '../assets/images/sanika.jpeg';
import myResume from "../assets/files/Sanika Patwardhan Resume.pdf";

function Intro() {
  return (
    <div className="introSection container">
      <div id="introImage" style={{'backgroundImage': `url(${myPhoto})`}}></div>
      <div id="introText">
      <h1> Namaskar! <img src={namaste} className="namaskar" alt=""/> <br/>
      I am a React JS Developer</h1>
      <p>
        My name is Sanika Patwardhan. I bring designs and ideas to (e-)life
        using modern front-end technologies like React.
      </p>
      <button className="cta theme-button"><a href={myResume} target="_blank" rel="noreferrer">Download my Resume</a></button>
      </div>
     
    </div>
  );
}

export default Intro;
