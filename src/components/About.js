import React from "react";
import "./About.css";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as DjangoIcon } from "../assets/icons/django.svg";
import { ReactComponent as HtmlIcon } from "../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../assets/icons/css.svg";
import { ReactComponent as JsIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as DockerIcon } from "../assets/icons/docker.svg";
import { ReactComponent as SqlIcon } from "../assets/icons/sql.svg";
import { ReactComponent as GitIcon } from "../assets/icons/git.svg";
import { ReactComponent as JiraIcon } from "../assets/icons/jira.svg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hi, I'm a recent Computer Science graduate from the University of the
        West of England. I am a passionate developer with a strong foundation in
        Python and Django, and I have a keen interest in front-end web
        development. I created this website as a way to learn React and to
        improve my JavaScript and CSS skills. Below are the technologies I have
        gained experience in while developing some of my projects.
      </p>
      <div className="skills">
        <div className="skill">
          <PythonIcon className="icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <DjangoIcon className="icon" />
          <p>Django</p>
        </div>
        <div className="skill">
          <HtmlIcon className="icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <CssIcon className="icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <JsIcon className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <ReactIcon className="icon" />
          <p>React</p>
        </div>
        <div className="skill">
          <DockerIcon className="icon" />
          <p>Docker</p>
        </div>
        <div className="skill">
          <SqlIcon className="icon" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <GitIcon className="icon" />
          <p>git</p>
        </div>
        <div className="skill">
          <JiraIcon className="icon" />
          <p>Jira</p>
        </div>
      </div>
    </section>
  );
};

export default About;
