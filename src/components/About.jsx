import React from "react";
import "./About.scss";
import flowerImg from "../assets/images/logo192.png";

function About() {
  return (
    <div className="aboutSection container">
      <h2 className="section-heading">About me</h2>
      <p>
        I am a Masters in Computer Science graduate with 6 years of experience
        in the front-end domain. After having freelanced for the last 4 years, I
        am now open to taking up a full-time remote position as a front-end
        developer.
      </p>

      <div className="about-inner">
        <img src={flowerImg} className="flower" alt="" />
        <h3>Technical</h3>

        <p className="full-width-flex">
          Currently I am enrolled in a fellowship at{" "}
          <a href="https://pesto.tech" target="_blank" rel="noreferrer">
            Pesto
          </a>{" "}
          where I'm learning and building in the MERN Stack.
        </p>
        <div className="skills">
          {" "}
          <h2>Skills </h2>{" "}
          <ul >
            <li>React</li> <li>Javascript</li>
            <li>Node JS</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>{" "}
        </div>
      </div>
      <div className="about-inner">
        <img src={flowerImg} className="flower" alt="" />
        <h3>Personal</h3>
        <p>
          I live in Pune, India and cherish my sometimes peaceful-sometimes
          chaotic life as a remote professional. I'm always excited for my next
          vacation and next meal!
        </p>
      </div>
    </div>
  );
}

export default About;
