import React, { useEffect } from "react";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 70 });
  });

  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="quote" data-aos="fade-up">
          Thanks for your time!
        </div>
        <p className="copyright">All rights reserved &copy; {year} </p>
      </footer>
    </>
  );
};

export default Footer;
