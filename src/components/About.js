import React from "react";
import "./About.css";
import me3 from "../assets/me3.jpg";
import UpToTopButton from "./UpToTopButton";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <div className="about component__space" id="about">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <Fade bottom>
                <img src={me3} alt="" className="about__img" />
              </Fade>
            </div>
            <div className="col__2">
              <Fade bottom>
                <h1 className="about__heading underline">About Me</h1>
                <p className="p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which dont look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum.
                </p>
                <p className="p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which dont look even
                  slightly believable.
                </p>
                <p className="p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour
                </p>
                <p className="p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which dont look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum
                </p>
                <p className="p__color">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered in some form, by
                  injected humour, or randomised words which dont look even
                  slightly believable.
                </p>
                <div className="about__button">
                  <a href="/#">
                    <button className="about btn pointer">Download CV</button>
                  </a>
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
