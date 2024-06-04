import React from "react";
import "./Projects.css";
import uweflixImage from "../assets/images/uweflix_website.png";
import clothingImage from "../assets/images/clothing_website.png";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg"; // Import the SVG as a React component

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <div className="project-image-wrapper">
            <img
              src={uweflixImage}
              alt="Cinema Ticket Booking Website"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h3>Cinema Ticket Booking Website</h3>
            <p>
              The Cinema Ticket Booking Website supports multiple user roles,
              including managers and different types of customers like students
              and club reps. Customers can buy tickets with user-specific
              pricing, processed securely via Stripe, and receive a QR code and
              receipt via email. Managers can manage movies, showings, and other
              details.
            </p>
            <div className="tech-container">
              <span className="tech">Python</span>
              <span className="tech">Django</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">JavaScript</span>
              <span className="tech">Stripe API</span>
              <span className="tech">Docker</span>
              <span className="tech">PostgreSQL</span>
            </div>
            <div className="project-buttons">
              <a
                href="https://github.com/ray7579/cinema_booking_system_group_project"
                className="icon"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-image-wrapper">
            <img
              src={clothingImage}
              alt="Clothing Recommendation Website"
              className="project-image"
            />
          </div>
          <div className="project-info">
            <h3>Clothing Recommendation Website</h3>
            <p>
              A Clothing Recommendation Website that suggests outfits based on
              user interactions. Logged-in users can like, dislike, and review
              clothes. Clothing data is sourced through web scraping from a
              clothing website.
            </p>
            <div className="tech-container">
              <span className="tech">Python</span>
              <span className="tech">Django</span>
              <span className="tech">Scikit-learn</span>
              <span className="tech">Beautiful Soup</span>
              <span className="tech">SQLite</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">JavaScript</span>
            </div>
            <div className="project-buttons">
              <a href="https://github.com/ray7579/DSP_clothes" className="icon">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
