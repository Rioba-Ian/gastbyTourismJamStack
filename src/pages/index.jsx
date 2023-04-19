import React from "react";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import { Link } from "gatsby";
import About from "../components/Home/About";
import Featured from "../components/Home/Featured";

export default function index() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="Outdoor adventures"
          info="Come and get your head at ease, the right place to get you to relax with your family."
        >
          <Link to="/places">explore places</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Featured />
    </Layout>
  );
}
