import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { Fade as Hamburger } from "hamburger-react";
import logo from "../assets/logo.png";
import resume from "../assets/tech_resume.pdf";

const Navbar = ({ timeline }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  click
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  let { logo_icon, menu_item1, menu_item2, menu_item3, menu_item4, burger } =
    useRef(null);

  useEffect(() => {
    timeline.from(
      [logo_icon, menu_item1, menu_item2, menu_item3, menu_item4, burger],
      {
        delay: 0.7,
        autoAlpha: 0,
        y: -20,
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, [
    timeline,
    logo_icon,
    menu_item1,
    menu_item2,
    menu_item3,
    menu_item4,
    burger,
  ]);

  return (
    <div className="parent">
      <div className="header">
        <a
          style={{ visibility: "hidden" }}
          alt=""
          ref={(el) => (logo_icon = el)}
          href="/#"
          className="logo"
        >
          <img src={logo} alt="" />
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu counter"}>
          <li
            style={{ visibility: "hidden" }}
            ref={(el) => (menu_item1 = el)}
            className="nav__items mx__15"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li
            style={{ visibility: "hidden" }}
            ref={(el) => (menu_item2 = el)}
            className="nav__items mx__15"
          >
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li
            style={{ visibility: "hidden" }}
            ref={(el) => (menu_item3 = el)}
            className="nav__items mx__15"
          >
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li style={{ visibility: "hidden" }} ref={(el) => (menu_item4 = el)}>
            <a
              className="resume__link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <div
          style={{ visibility: "hidden" }}
          ref={(el) => (burger = el)}
          className="hamburger-react"
        >
          <Hamburger
            color="#64ffda"
            size={30}
            direction="right"
            rounded
            toggled={click}
            onToggle={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
