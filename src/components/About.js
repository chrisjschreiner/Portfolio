import "../styles/About.css";
import me from "../assets/me-b&w.jpg";
import UpToTopButton from "./UpToTopButton";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <>
      <div className="component__space" id="about">
        <div className="container">
          <div className="row">
            <div className="col__2">
              {/* <Fade bottom> */}
              <h1 className="about__heading">About Me</h1>
              <p className="p__color">
                Hello, my name is Chris and I enjoy creating things that live on
                the internet. My interest in web development spawned from my
                passion for foreign languages, but the majority have suffered in
                some form, by injected humour, or randomised words which dont
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum.
              </p>
              <p className="p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable.
              </p>
              <p className="p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour
              </p>
              {/* <div className="about__button">
                <a href="/#">
                  <button className="about btn pointer">Download CV</button>
                </a>
              </div> */}
              <div>
                <a className="contact__link" href="#contact">
                  Contact
                </a>
              </div>
              {/* </Fade> */}
            </div>
            <div className="col__2">
              <Fade bottom>
                {/* <img src={me33} alt="" className="about__img" /> */}
                <div alt="" className="about__img">
                  <img src={me} />
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
