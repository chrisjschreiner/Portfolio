import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  window.addEventListener("scroll", function () {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active", window.scrollY > 0);
  });

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="parent">
      <div className="header d__flex pxy__30">
        <a href="/" id="home">
          <img src={logo} alt="" />
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav__items mx__15">
            <a href="/" id="home" onClick={closeMenu}>
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
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={26} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={23} style={{ color: "#ffffff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
