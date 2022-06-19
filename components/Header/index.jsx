import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";

/* mock */
import { routes } from "../../data/routes";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 95px;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Link = styled.a`
  font-family: Futura;
  font-weight: 450;
  font-size: 24px;
  line-height: 120%;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <StyledContainer>
        <Logo />
        <LinksWrapper>
          {routes.map((link) => (
            <Link key={link.id} href={"#" + link.path}>
              {link.title}
            </Link>
          ))}
        </LinksWrapper>
      </StyledContainer>
    </HeaderWrap>
  );
};

export default Header;
