import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../styles/Project.scss";
import Fade from "react-reveal/Fade";
import project1pic from "../assets/project1_final.jpg";
import project2pic from "../assets/project2_final.jpg";

const Project = () => {
  return (
    <div className="project__space" id="projects">
      <section>
        <h2 className="numbered-heading">Some Things I've Built</h2>
        <div class="project">
          <div class="project1-img">
            <img src={project1pic} alt="" />
          </div>
          <div class="project1-content">
            <div class="project-label">Featured Project</div>
            <h4 class="project-title">SCHR.</h4>
            <div class="project-details">
              <p>
                E-commerce web application built using the MERN stack, and
                inspired by my love for snowboarding.
              </p>
              <ul>
                <li>Styled-components</li>
                <li>Stripe</li>
                <li>Mongoose</li>
                <li>JWT</li>
              </ul>
              <div className="project__links">
                <IconContext.Provider value={{}}>
                  <a
                    href="https://github.com/chrisjschreiner/SCHR.-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://schr.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="project2-content">
            <div class="project-label">Featured Project</div>
            <h4 class="project-title">Go To Snow</h4>
            <div class="project-details">
              <p>
                Lorem ipsum dolor amet you probably haven't heard of them
                bitters selvage listicle heirloom. Locavore kombucha street art
                ennui 90's.
              </p>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
                <li>Sass</li>
              </ul>
              <div className="project__links">
                <IconContext.Provider value={{}}>
                  <a
                    href="https://github.com/chrisjschreiner/gotosnow-master"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://go-to-snow.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div class="project2-img">
            <img src={project2pic} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
