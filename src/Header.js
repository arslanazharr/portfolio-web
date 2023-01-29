import React from "react";
import "./header.css";
import document from "./document/Arslan-Resume.pdf";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-div">
          <p className="name-header">
            <a
              href="https://arslanazharr.github.io/portfolio-web/"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              Arslan Azhar
            </a>
          </p>
          <span>
            <a
              href="https://arslanazharr.github.io/portfolio-web/"
              style={{
                textDecoration: "none",
                backgroundColor: "inherit",
                color: "inherit",
              }}
            >
              Web Developer
            </a>
          </span>
          <ol className="contact-header">
            <li>
              <a
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
                href="mailto:arslanofcl@gmail.com"
                target="new"
              >
                Email
              </a>
            </li>
            <li>
              {" "}
              <a
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
                href="https://github.com/arslanazharr/"
                target="new"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
                href=""
                target="new"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  backgroundColor: "inherit",
                  color: "inherit",
                }}
                href={document}
                target="new"
              >
                Resume
              </a>
            </li>
          </ol>
        </div>
      </header>
    </>
  );
};

export default Header;
