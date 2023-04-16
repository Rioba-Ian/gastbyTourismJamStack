import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
