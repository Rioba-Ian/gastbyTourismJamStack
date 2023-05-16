// import { Link } from "gatsby";
import React from "react";
import "../css/navbar.css";
import links from "../constants/links";
import logo from "../images/travel-leisure-seeklogo.com.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import AniLink from "gatsby-plugin-transition-link";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <button>
          <GiHamburgerMenu />
        </button>

        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink paintDrip hex="#AEECEE" to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
