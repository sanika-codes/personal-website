import React from "react";
import './Intro.scss';
import namaste from '../assets/images/namaste.png';
import myPhoto from '../assets/images/sanika.jpeg';

function Intro() {
  return (
    <div className="introSection container">
      <div id="introImage" style={{'backgroundImage': `url(${myPhoto})`}}></div>
      <div id="introText">
      <h1> Namaskar! <img src={namaste} className="namaskar" alt=""/> <br/>
      I am a React JS Developer</h1>
      <p>
        My name is Sanika Patwardhan. I bring designs and ideas to (e-)life
        using modern front-end technologies like React and Next.js
      </p>
      <button class="cta">Download my Resume</button>
      </div>
     
    </div>
  );
}

export default Intro;
