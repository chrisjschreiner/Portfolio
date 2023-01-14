import React from "react";
import "./About.css";
import aboutImg from "../assets/about.jpg";
import UpToTopButton from "./UpToTopButton";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <>
      <div className="about component__space" id="about">
        <div className="container">
          <div className="row">
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              animateOnce={true}
              className="col__2"
            >
              <img src={aboutImg} alt="" className="about__img" />
            </AnimationOnScroll>
            {/* <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
            </div> */}
            <AnimationOnScroll
              animateIn="animate__fadeInRightBig"
              animateOnce={true}
              className="col__2"
            >
              <h1 className="about__heading">About Me</h1>
              <p className="p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              <div className="about__button">
                <a href="#">
                  <button className="about btn pointer">Download CV</button>
                </a>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <UpToTopButton />
    </>
  );
}

export default About;
