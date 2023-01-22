import React, { useEffect } from "react";
import resturant from "./images/resturant.svg";
import portfolio from "./images/portfolio.svg";
import todo from "./images/todo app.svg";
import "./work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 200 });
  });
  return (
    <>
      <h3 className="work-heading" data-aos="fade-up">
        Recent apps I have worked on
      </h3>
      <div className="container">
        <div className="box" data-aos="zoom-in-up">
          <a href="https://arslanazharr.github.io/my-portfolio/" target="new">
            <img src={portfolio}></img>
            <div className="overlay">
              <h3>Arslan Azhar</h3>
            </div>
          </a>
        </div>

        <div className="box" data-aos="zoom-in-up">
          <a
            href="https://arslanazharr.github.io/resturant-website/"
            target="new"
          >
            <img src={resturant}></img>
            <div className="overlay">
              <h3>Dine-In</h3>
            </div>
          </a>
        </div>
        <div className="box" data-aos="zoom-in-up">
          <a href="https://arslanazharr.github.io/todo-app/" target="new">
            <img src={todo}></img>
            <div className="overlay">
              <h3>To-do App</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
