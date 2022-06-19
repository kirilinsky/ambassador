import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100vw;
  padding: 100px 0;
  @media screen and (max-width: 790px) {
    padding: 80px 0;
  }
  @media screen and (max-width: 520px) {
    padding: 40px 0;
  }
`;

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;
