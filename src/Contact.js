import React, { useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  });
  return (
    <>
      <h3 className="contact-heading" data-aos="fade-up">
        Get in touch with me
      </h3>
      <p className="contact-paragraph" data-aos="fade-up">
        If you want to team up or just chat, you can write me an{" "}
        <a href="mailto:arslanofcl@gmail.com" target="new">
          Email
        </a>{" "}
        or hit me up via{" "}
        <a href="https://www.linkedin.com/in/arslanazharr/" target="new">
          LinkedIn
        </a>
        . You can also find a small collection of my previous work on{" "}
        <a href="https://github.com/arslanazharr/" target="new">
          Github
        </a>
        .
      </p>
    </>
  );
};

export default Contact;
