import React from "react";
import Title from "../Title";
import { graphql, useStaticQuery } from "gatsby";
import "../../css/about.css";
import Img from "gatsby-image";

const About = () => {
  const data = useStaticQuery(getAbout);

  console.log(data);

  return (
    <div className="about">
      <Title title="about" subtitle="Outdoors adventures" />
      <div className="about-content">
        <article className="img-content">
          <div className="img-container-about">
            <Img
              className="about-img"
              fixed={{
                ...data.file.childImageSharp.fixed,
                minWidth: 200,
              }}
              alt="tent house"
            />
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

const getAbout = graphql`
  query {
    file(relativePath: { eq: "aboutus.jpeg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default About;
