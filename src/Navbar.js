import React, { useEffect, useState } from "react";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./document/Arslan-Resume.pdf";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 500 });
  });

  const hideNav = () => {
    if (window.scrollY >= 1) {
      setHide(true);
    } else setHide(false);
  };

  window.addEventListener("scroll", hideNav);

  return (
    <>
      <div className="outer-nav">
        <div className={hide ? "navbar" : "show"} data-aos="zoom-in-up">
          <div className="nav-menu">
            <a href="mailto:arslanofcl@gmail.com" target="new" id="animation1">
              Email
            </a>
            <a href="https://github.com/arslanazharr/" id="animation2">
              Github
            </a>
            <a href="" target="new" id="animation3">
              LinkedIn
            </a>
            <a href={Resume} target="new" id="animation4">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
