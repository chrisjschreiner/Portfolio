import React, { useState } from "react";
import "../styles/Navbar.css";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="parent">
      <div className="header d__flex justify__content__flex__end pxy__30">
        <ul className={click ? "nav-menu active" : "nav-menu counter"}>
          <li className="nav__items mx__15">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav__items mx__15">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav__items mx__15">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            <a className="resume__link" href="#projects">
              Resume
            </a>
          </li>
        </ul>

        <Hamburger
          className="hamburger-react"
          color="#64ffda"
          size={30}
          direction="right"
          rounded
          toggled={click}
          onToggle={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
