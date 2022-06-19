import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Section from "../../ui/Section";

/* mock */

const StyledSection = styled(Section)`
  background: #e6f3eb;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 64px;
  font-weight: 500;
  line-height: 110%;
  padding: 0;
`;

const LoyalView = () => {
  return (
    <StyledSection id="loyal">
      <Container>
        <Title>Программа «Друзья SPLAT»</Title>
      </Container>
    </StyledSection>
  );
};

export default LoyalView;
