import React from "react";
import Layout from "../components/Layout";
import "../css/error.css";
import { Link } from "gatsby";
import Banner from "../components/Banner";
export default function error() {
  return (
    <Layout>
      <header className="error">
        <Banner title="oops it's a dead end">
          <Link to="/">Back to Home</Link>
        </Banner>
      </header>
    </Layout>
  );
}
