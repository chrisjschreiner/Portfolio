import React from "react";
import "../styles/Project.css";
import Project1 from "../assets/project onee.jpg";
import Project3 from "../assets/portfolio-3.jpg";
import { Fade } from "react-reveal";

function Project() {
  return (
    <div className="project component__space" id="projects">
      <Fade bottom>
        {/* <div className="heading"> */}
        <h1 className="heading underline">Projects</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
        {/* </div> */}
      </Fade>
      <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Full Stack</h5>
                  <h4 className="project__text">
                    CRUD / Node / Express / MongoDB
                  </h4>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://go-to-snow.onrender.com"
                    className="project__btn"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project3} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="/#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col__3">
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project3} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">
                    Getting tickets to the big show
                  </h4>
                  <a href="/#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Project;
