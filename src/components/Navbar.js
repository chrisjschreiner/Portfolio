import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = ({ timeline }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const { menu_item1, menu_item2, menu_item3, menu_item4 } = useRef(null);

  useEffect(() => {
    timeline.from([menu_item1, menu_item2, menu_item3, menu_item4], {
      delay: 0.7,
      opacity: 0,
      y: -20,
      stagger: {
        amount: 0.5,
      },
    });
  }, [timeline, menu_item1, menu_item2, menu_item3, menu_item4]);

  return (
    <div className="parent">
      <div className="header d__flex justify__content__flex__end pxy__30">
        <ul className={click ? "nav-menu active" : "nav-menu counter"}>
          <li ref={(el) => (menu_item1 = el)} className="nav__items mx__15">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li ref={(el) => (menu_item2 = el)} className="nav__items mx__15">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li ref={(el) => (menu_item3 = el)} className="nav__items mx__15">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li ref={(el) => (menu_item4 = el)}>
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
