import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    blogBg: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function blog({ data }) {
  console.log(data);
  return (
    <Layout>
      <StyledHero img={data.blogBg.childImageSharp.fluid}>Blog Page</StyledHero>
    </Layout>
  );
}
