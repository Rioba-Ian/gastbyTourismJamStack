import { Link } from "gatsby";
import React from "react";
import links from "../constants/links";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-logo">
          <img src="" alt="" />
          <button></button>
        </div>

        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
