import React, { useState } from "react";
import "../styles/Navbar.css";
import { Fade as Hamburger } from "hamburger-react";
// import logo from "../assets/logo.png";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="parent">
      <div className="header d__flex justify__content__flex__end pxy__30">
        {/* <a href="/" id="home">
          <img src={logo} alt="" />
        </a> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav__items mx__15">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
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
        </ul>
        <Hamburger
          className="hamburger-react"
          color="white"
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
