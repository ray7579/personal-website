import React from "react";
import Typical from "react-typical";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1 className="intro-greeting">Hi, I'm</h1>
        <h1 className="intro-name">Raymond Hoang</h1>
      </div>
      <p>
        I'm
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[" a graduate developer...", 2000]}
          startDelay={5000}
        />
      </p>
    </section>
  );
};

export default Home;
