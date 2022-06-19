import React from "react";
import styled from "styled-components";

const Blured = styled.div`
  position: relative;
  margin-bottom: 20px;
  line-height: 120%;
  font-size: 22px;
  z-index:3;
`;

const BluredImage = styled.img`
  position: absolute;
  top: -5%;
  left: -5%;
  height: 39px;
  z-index: 2;
`;

const Blur = ({ id, children }) => {
  return (
    <Blured>
      <BluredImage src={`/images/blur${id}.png`} alt="blur" />
      {children}
    </Blured>
  );
};

export default Blur;
