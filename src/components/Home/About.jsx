import React from "react";
import Title from "../Title";
import img from "../../images/about-us-img.jpg";
import "../../css/about.css";
const About = () => {
  return (
    <div className="about">
      <Title title="about" subtitle="Outdoors adventures" />
      <div className="about-content">
        <article>
          <div className="img-container-about">
            <img src={img} alt="" />
          </div>
        </article>

        <article className="about-info">
          <h4>Our Story</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            quia repudiandae optio tempora eligendi architecto!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            fugiat molestias laudantium quis, corporis dolores et maiores ipsum
            nisi quia.
          </p>
          <a href="https://www.google.com" className="btn btn-primary">
            read more
          </a>
        </article>
      </div>
    </div>
  );
};

export default About;
