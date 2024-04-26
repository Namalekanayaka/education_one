import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cuuting-edge curriculum is designed to empower students with the
          knowlage,skills,and experience needed to excel in the dynamic filed of
          education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
