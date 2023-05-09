import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IconContext } from "react-icons";
import "../styles/Project.css";
import project1pic from "../assets/project1_final.jpg";
import project2pic from "../assets/project2_final.jpg";

// import Project1 from "../assets/project onee.jpg";
// import Project3 from "../assets/portfolio-3.jpg";
// import { Fade } from "react-reveal";

// function Project() {
//   return (
//     <div className="project component__space" id="projects">
//       <Fade bottom>
//         {/* <div className="heading"> */}
//         <h1 className="heading underline">Projects</h1>
//         <p className="heading p__color">
//           There are many variations of passages of Lorem Ipsum available,
//         </p>
//         <p className="heading p__color">
//           but the majority have suffered alteration.
//         </p>
//         {/* </div> */}
//       </Fade>
//       <Fade bottom>
//         <div className="container">
//           <div className="row">
//             <div className="col__3">
//               <div className="project__box pointer relative">
//                 <div className="project__box__img pointer relative">
//                   <div className="project__img__box">
//                     <img src={Project1} alt="" className="project__img" />
//                   </div>
//                   <div className="mask__effect"></div>
//                 </div>
//                 <div className="project__meta absolute">
//                   <h5 className="project__text">Full Stack</h5>
//                   <h4 className="project__text">
//                     CRUD / Node / Express / MongoDB
//                   </h4>
//                   <a
//                     target="_blank"
//                     rel="noreferrer"
//                     href="https://go-to-snow.onrender.com"
//                     className="project__btn"
//                   >
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col__3">
//               <div className="project__box pointer relative">
//                 <div className="project__box__img pointer relative">
//                   <div className="project__img__box">
//                     <img src={Project3} alt="" className="project__img" />
//                   </div>
//                   <div className="mask__effect"></div>
//                 </div>
//                 <div className="project__meta absolute">
//                   <h5 className="project__text">Development</h5>
//                   <h4 className="project__text">
//                     Getting tickets to the big show
//                   </h4>
//                   <a href="/#" className="project__btn">
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col__3">
//               <div className="project__box pointer relative">
//                 <div className="project__box__img pointer relative">
//                   <div className="project__img__box">
//                     <img src={Project3} alt="" className="project__img" />
//                   </div>
//                   <div className="mask__effect"></div>
//                 </div>
//                 <div className="project__meta absolute">
//                   <h5 className="project__text">Development</h5>
//                   <h4 className="project__text">
//                     Getting tickets to the big show
//                   </h4>
//                   <a href="/#" className="project__btn">
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fade>
//     </div>
//   );
// }

// export default Project;

const Project = () => {
  return (
    <div className="project__space" id="projects">
      <section>
        <h2 className="numbered-heading">Some Things I've Built</h2>

        <div className="project">
          <div className="first__project__left__column">
            <img className="img__project" src={project1pic} alt="" />
          </div>
          <div className="first__project__right__column">
            <h3 className="featured__project__text">Featured Project</h3>
            <h2 className="project__title">Go To Snow</h2>
            <p className="project__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour.
            </p>
            <ul className="tech__list">
              <li>Code</li>
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

        <div className="project">
          <div className="second__project__left__column">
            <h3 className="featured__project__text">Featured Project</h3>
            <h2 className="project__title">SCHR.</h2>
            <p className="project__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour.
            </p>
            <ul className="second__project__left__tech__list">
              <li>Code</li>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
              <li>Sass</li>
            </ul>
            <div className="second__project__left__project__links">
              <IconContext.Provider value={{}}>
                <a
                  href="https://github.com/chrisjschreiner?tab=repositories"
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
          <div className="second__project__right__column">
            <img className="img__project" src={project2pic} />
          </div>
        </div>

        <div className="project">
          <div className="third__project__left__column">
            <img className="img__project" src={project1pic} alt="" />
          </div>
          <div className="third__project__right__column">
            <h3 className="featured__project__text">Featured Project</h3>
            <h2 className="project__title">Go To Snow</h2>
            <p className="project__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour.
            </p>
            <ul className="tech__list">
              <li>Code</li>
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
      </section>
    </div>
  );
};

export default Project;
