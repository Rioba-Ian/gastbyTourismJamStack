import React from "react";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import SimpleHero from "../components/SimpleHero";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact-us.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function contact({ data }) {
  console.log(data);
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}>
        Contact Page
      </StyledHero>
    </Layout>
  );
}
