import React from "react";
import NameScramble from "./NameScramble";
import "../styles/Hero.css";
import ArrowDown from "./ArrowDown";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="container__home">
      <div className="text__home">
        <NameScramble />
        <Fade bottom>
          <h1 className="hero__text">front end</h1>
          <h1 className="hero__text">web developer</h1>
        </Fade>
        <ArrowDown />
      </div>
    </div>
  );
};

export default Hero;
