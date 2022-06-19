import React from "react";
import Section from "../../ui/Section";
import styled from "styled-components";
import Container from "../../ui/Container";

const StyledSection = styled(Section)`
  min-height: 100vh;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 56px;
  font-weight: 450;
  text-align: center;
  margin-bottom: 66px;
`;

const GridContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const GridCell = styled.div`
  width: 347px;
  height: 222px;
  background: #cccccc;
  &.wide {
    flex-basis: 31%;
  }
`;

const ButtonCta = styled.button`
  background: #ba0c2f;
  border-radius: 30px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  width: max-content;
  font-size: 16px;
  margin: 30px auto 0;
  border: none;
`;

export default function BonusesView() {
  return (
    <StyledSection id="bonuses">
      <Container>
        <Title>Что приятного в программе для вас:</Title>
        <GridContent>
          <GridCell className="wide">1</GridCell>
          <GridCell className="wide">2</GridCell>
          <GridCell>3</GridCell>
          <GridCell>4</GridCell>
          <GridCell>5</GridCell>
        </GridContent>
        <ButtonCta>стать другом splat</ButtonCta>
      </Container>
    </StyledSection>
  );
}
