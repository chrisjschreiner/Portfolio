import React from "react";
import NameScramble from "./NameScramble";
import "./Hero.css";
import ArrowDown from "./ArrowDown";

const Hero = () => {
  return (
    <div className="container__home">
      <div className="text__home">
        <NameScramble />
        <h1 className="hero__text">Front-End</h1>
        <h1 className="hero__text">Web Developer</h1>
        <ArrowDown />
      </div>
    </div>
  );
};

export default Hero;
