import React from "react";
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link";
import links from "../constants/links";
import "../css/footer.css";
import socialIcons from "../constants/social-icons";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="links-pages">
          {links.map((item, index) => {
            return (
              <AniLink paintDrip hex="#AEECEE" key={index} to={item.path}>
                {item.text}
              </AniLink>
            );
          })}
        </div>

        <div className="links-icons">
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>

        <div className="copyright">
          copyright &copy; Amazing Travel Website {new Date().getFullYear()} All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
}
