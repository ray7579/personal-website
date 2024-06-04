import React, { useEffect } from "react";
import "./Header.css";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > header.offsetHeight) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="left-content">
        <span className="name">Raymond Hoang</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
              projects
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/ray7579" className="icon">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/raymond-hoang" className="icon">
            <LinkedinIcon />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
