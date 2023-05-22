import React from "react";
import Title from "../Title";
import "../../css/featured.css";
import featured from "../../constants/featured";
const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured">
        <Title title="Featured" subtitle="Tours" />
        <div className="featured-content">
          {featured.map((item, index) => {
            return (
              <article key={index}>
                <img src={item.imageUrl} alt="featured images" />
                <div className="text-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
