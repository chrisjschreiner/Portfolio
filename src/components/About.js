import "../styles/About.css";
import me from "../assets/me-b&w.jpg";
import UpToTopButton from "./UpToTopButton";
import Fade from "react-reveal/Fade";

function About() {
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
          <div className="row">
            <div className="col__2">
              {/* <Fade bottom> */}
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
              {/* </Fade> */}
            </div>
            <div className="col__2">
              <Fade bottom>
                <div alt="" className="about__img">
                  <img src={me} alt="" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <UpToTopButton />
    </>
  );
}

export default About;
