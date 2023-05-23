import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

export default function places({ data }) {
  console.log(data);
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}>Places page</StyledHero>
    </Layout>
  );
}

export const query = graphql`
  query defaultBcg {
    file(relativePath: { eq: "travel-banner-img.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
