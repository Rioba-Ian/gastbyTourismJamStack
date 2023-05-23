import React from "react";

import "../css/contact.css";
import Layout from "./Layout";
import StyledHero from "./StyledHero";
import { graphql } from "gatsby";

export default function Contact() {
  // console.log(data);
  return <StyledHero>Contact Page</StyledHero>;
}

export const query = graphql`
  query defaultBcg {
    file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
