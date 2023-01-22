import React, { useEffect, useState } from "react";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "./document/Resume.pdf";

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
            <a href="mailto:arslanofcl@gmail.com" target="new">
              Email
            </a>
            <a href="https://github.com/arslanazharr/">Github</a>
            <a href="https://www.linkedin.com/in/arslanazharr/" target="new">
              LinkedIn
            </a>
            <a href={Resume} target="new">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
