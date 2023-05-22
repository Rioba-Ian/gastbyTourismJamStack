import React from "react";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link";
import About from "../components/Home/About";
import Featured from "../components/Home/Featured";
import { graphql } from "gatsby";

export default function index() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Outdoor adventures"
          info="Come and get your head at ease, the right place to get you to relax with your family."
        >
          <AniLink paintDrip hex="#AEECEE" to="/places">
            explore places
          </AniLink>
        </Banner>
      </SimpleHero>
      <About />
      <Featured />
    </Layout>
  );
}

export const query = graphql`
  query GetImages {
    file(relativePath: { eq: "travel-banner-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
