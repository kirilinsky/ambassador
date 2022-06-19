import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #f1f4f5;
  border-radius: 8px;
  padding: 30px;
  position: relative;
`;

const CardTitle = styled.h4`
  margin: 0;
  font-size: 28px;
  line-height: 110%;
  font-weight: 450;
  z-index: 5;
  position: relative;
`;

const CardImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 250px;
  z-index: 3;
`;

const Card = ({ children, img }) => {
  return (
    <CardWrapper>
      <CardTitle>{children}</CardTitle>
      <CardImage src={`/images/${img}.png`} title="prodcut" />
    </CardWrapper>
  );
};

export default Card;
