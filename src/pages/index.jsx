import React from "react";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import AniLink from "gatsby-plugin-transition-link";
import About from "../components/Home/About";
import Featured from "../components/Home/Featured";
import { graphql } from "gatsby";

export default function index({ data }) {
  return (
    <Layout>
      <StyledHero hero="true" img={data.file.childImageSharp.fluid}>
        <Banner
          title="Outdoor adventures"
          info="Come and get your head at ease, the right place to get you to relax with your family."
        >
          <AniLink paintDrip hex="#AEECEE" to="/places">
            explore places
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Featured />
    </Layout>
  );
}

export const query = graphql`
  query defaultBcg {
    file(relativePath: { eq: "travel-banner-img.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
