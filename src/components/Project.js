import { useEffect, useRef } from "react";
import useRefs from "react-use-refs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../styles/Project.scss";
import project1pic from "../assets/project1_final.jpg";
import project2pic from "../assets/project2_final.jpg";
import project3pic from "../assets/project3_final.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const h2_ref = useRef(null);
  const [project1_ref, project2_ref, project3_ref] = useRefs(null);

  useEffect(() => {
    const el = h2_ref.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  useEffect(() => {
    const el = project1_ref.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  useEffect(() => {
    const el = project2_ref.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  useEffect(() => {
    const el = project3_ref.current;
    gsap.from(el, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  return (
    <div className="project__space" id="projects">
      <section>
        <h2 ref={h2_ref} className="numbered-heading">
          Some Things I've Built
        </h2>
        <div ref={project3_ref} className="project">
          <div className="project1-img">
            <img src={project3pic} alt="" />
          </div>
          <div className="project1-content">
            <div className="project-label">Featured Project</div>
            <h4 className="project-title">Verbzy</h4>
            <div className="project-details">
              <p>
                {" "}
                Conjugate 600+ Spanish verbs into all moods and tenses. My
                students finally have an app to beef up their skills, with no
                annoying ads or confusing navigation.
              </p>
              <ul>
                <li>React</li>
                <li>Tailwind</li>
                <li>Vite</li>
              </ul>
              <div className="project__links">
                <IconContext.Provider value={{}}>
                  <a
                    href="https://github.com/chrisjschreiner/spanish-verb-conjugator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://spanish-verb-conjugator.onrender.com/"
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

        <div ref={project2_ref} className="project">
          <div className="project2-content">
            <div className="project-label">Featured Project</div>
            <h4 className="project-title">Go To Snow</h4>
            <div className="project-details">
              <p>
                Explore U.S. ski resort destinations on a map. Learn of others'
                experiences or create an account to share your own.
              </p>
              <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>REST</li>
                <li>MongoDB</li>
                <li>Geocoding</li>
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
                    href="https://go-to-snow.cyclic.app"
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

        <div ref={project1_ref} className="project">
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
                Due to free hosting, may need to wait up to 45 seconds to
                initially view products.
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
                    href="https://github.com/chrisjschreiner/ecommerce"
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
      </section>
    </div>
  );
};

export default Project;
