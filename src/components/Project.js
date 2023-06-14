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
        <Fade bottom>
          <h2 className="numbered-heading">Some Things I've Built</h2>
          <div className="project">
            <div className="project1-img">
              <img src={project1pic} alt="" />
            </div>
            <div className="project1-content">
              <div className="project-label">Featured Project</div>
              <h4 className="project-title">SCHR.</h4>
              <div className="project-details">
                <p>
                  E-commerce web application built using the MERN stack, and
                  inspired by my love for snowboarding and all things outdoors.
                </p>
                <ul>
                  <li>Styled-components</li>
                  <li>Stripe</li>
                  <li>Redux</li>
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
        </Fade>

        <div className="project">
          <div className="project2-content">
            <div className="project-label">Featured Project</div>
            <h4 className="project-title">Go To Snow</h4>
            <div className="project-details">
              <p>
                My first CRUD app to help you find your next U.S. ski resort
                vacation destination. Create an account to share your own
                experiences.
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
          <div className="project2-img">
            <img src={project2pic} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
