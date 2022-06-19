import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1400px) {
    width: 100%;
    padding: 0 80px;
  }
  @media screen and (max-width: 790px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 520px) {
    padding: 0 20px;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
