import React, { useEffect } from "react";
import "./intro.css";
import image from "./images/front.svg";
import image2 from "./images/pc.svg";
import image3 from "./images/pakistani landscape.svg";
import SouthIcon from "@mui/icons-material/South";
import Clock from "./Clock";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <>
      <h1 className="intro-heading" data-aos="fade-up">
        Hi there, my name is Arslan <img className="pic" src={image}></img>. I'm
        a Web Developer <img className="pic" src={image2}></img> based in
        Pakistan <img className="pic" src={image3}></img>.
      </h1>
      <span className="arrow-after-intro">
        <SouthIcon />
      </span>
      <span className="clock-after-intro">
        <span className="clock-icon-after-intro">
          <AccessTimeIcon />
        </span>
        <Clock />
      </span>
      <h3 className="second-intro-heading" data-aos="fade-up">
        Words about myself
      </h3>

      <p className="intro-paragraph" data-aos="fade-up">
        Professional software engineer with an experience in software
        development, web development, and mobile app development. I have
        expertise in Javascript, React, Redux, Ionic, Tailwind, Material UI,
        Firebase, and so on. <br /> <br /> At the moment, I'm working full time
        at{" "}
        <a href="https://www.cinnova.com/" target="new">
          Cinnova Technologies
        </a>{" "}
        in Lahore, Pakistan, where I also support the best team ever creating
        memorable brands and identities. <br /> <br /> When I'm not developing,
        you can find me spending quality time with my family, working out,
        hiking and generally spending time outdoors (but also playing table
        tennis and snooker).
      </p>
    </>
  );
};

export default Intro;
