import React from "react";
import "../styles/Hero.css";
import ArrowDown from "./ArrowDown";
import TextScramble from "./TextScramble";

const Hero = () => {
  return (
    <div className="container__home">
      <div className="text__home">
        <h2 className="hero__text__intro">Hi, my name is</h2>
        <TextScramble />
        <h2 className="hero__text__title">I build things for the web.</h2>
        <p className="desc p__color">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <div>
          <a className="project__link" href="#projects">
            Check out my projects
          </a>
        </div>

        <ArrowDown />
      </div>
    </div>
  );
};

export default Hero;
