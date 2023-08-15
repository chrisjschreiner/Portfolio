import { useEffect, useRef } from "react";
import "../styles/Hero.css";
import TextScramble from "./TextScramble";

const Hero = ({ timeline }) => {
  let { hero_item1, hero_item2, hero_item3, hero_item4, hero_item5 } =
    useRef(null);

  useEffect(
    () => {
      // function init() {
      timeline.from(
        [hero_item1, hero_item2, hero_item3, hero_item4, hero_item5],
        {
          // opacity: 0,
          autoAlpha: 0,
          y: 20,
          stagger: {
            amount: 0.5,
          },
        }
      );
    },
    // window.addEventListener("load", function (event) {
    //   init();
    // });
    [timeline, hero_item1, hero_item2, hero_item3, hero_item4, hero_item5]
  );

  return (
    <div className="container__home" id="/#">
      <div className="text__home">
        <h2
          style={{ visibility: "hidden" }}
          ref={(el) => (hero_item1 = el)}
          className="hero__text__intro"
        >
          Hi, my name is
        </h2>
        <div style={{ visibility: "hidden" }} ref={(el) => (hero_item2 = el)}>
          <TextScramble />
        </div>
        <h2
          style={{ visibility: "hidden" }}
          ref={(el) => (hero_item3 = el)}
          className="hero__text__title"
        >
          I build things for the web.
        </h2>
        <p
          style={{ visibility: "hidden" }}
          ref={(el) => (hero_item4 = el)}
          className="desc p__color"
        >
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <div style={{ visibility: "hidden" }} ref={(el) => (hero_item5 = el)}>
          <a className="project__link" href="#projects">
            Check out my projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
