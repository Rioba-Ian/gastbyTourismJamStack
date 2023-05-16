import React from "react";
import Layout from "../components/Layout";
import "../css/error.css";
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link";
import Banner from "../components/Banner";
export default function error() {
  return (
    <Layout>
      <header className="error">
        <Banner title="oops it's a dead end">
          <AniLink paintDrip hex="#AEECEE" to="/">
            Back to Home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}
