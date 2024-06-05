import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1 className="intro-greeting">Hi, I'm</h1>
        <h1 className="intro-name">Raymond Hoang</h1>
      </div>
      <p>
        I'm{" "}
        <ReactTypingEffect
          text={["a graduate developer...", "an assistant chef..."]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
      </p>
    </section>
  );
};

export default Home;
