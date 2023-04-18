import React from "react";
import styled from "styled-components";
const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span>{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: "Chivo Mono", serif;
  margin-bottom: 1em;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: #000;
  }

  .title {
    color: #000;
  }

  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;

export default Title;
