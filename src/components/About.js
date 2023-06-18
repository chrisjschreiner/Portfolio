import { useEffect, useRef } from "react";
import "../styles/About.css";
import me from "../assets/me-b&w.jpg";
import UpToTopButton from "./UpToTopButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const about_reveal = useRef(null);

  useEffect(() => {
    const el = about_reveal.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Sass",
    "MongoDB",
  ];
  return (
    <>
      <div className="about__space" id="about">
        <div className="container">
          <div ref={about_reveal} className="row">
            <div className="col__2">
              <h1 className="about__heading">About Me</h1>
              <p className="p__color">
                Hello! My name is Chris Schreiner, and I'm a teacher and
                software developer based in beautiful Central Oregon.
              </p>
              <p className="p__color">
                I have a master's degree in education and have been teaching
                Spanish for eight years. My love for languages and tech fuels my
                inspiration to learn and build incessantly things that live on
                the web.
              </p>
              <p className="p__color">
                Here are a few technologies that I've been working with
                recently:
              </p>
              <div>
                <ul className="skills__list">
                  {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col__2">
              <div alt="" className="about__img">
                <img src={me} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpToTopButton />
    </>
  );
}

export default About;
