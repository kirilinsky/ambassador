import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";

/* mock */
import { routes } from "../../data/routes";
import menuIcon from "./assets/menu.svg";
import closeIcon from "./assets/close.svg";

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
  @media screen and (max-width: 800px) {
    gap: 24px;
  }
`;

const Link = styled.a`
  font-family: Futura;
  font-weight: 450;
  font-size: 24px;
  line-height: 120%;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 21px;
`;

const ButtonHeader = styled.button`
  border: none;
  background: transparent;
  align-items: center;
  justify-content: center;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    display: flex;
  }
`;

const ButtonHeaderClose = styled(ButtonHeader)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ButtonImage = styled.img`
  width: 32px;
  height: 32px;
`;

const MobileMenu = styled.div`
  position: fixed;
  right: ${({ show }) => (show ? "0" : "-200%")};
  top: 0;
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  transition: 0.4s linear;
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 25px;
  padding: 20px;
`;

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggleMobileMenu = (e, value = !mobileMenu) => {
    document.body.style.position = value ? "fixed" : "unset";

    setmobileMenu(value);
  };

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
          <ButtonHeader onClick={toggleMobileMenu}>
            <ButtonImage src={menuIcon.src} />
          </ButtonHeader>
        </LinksWrapper>
      </StyledContainer>

      <MobileMenu show={mobileMenu}>
        <ButtonHeaderClose onClick={toggleMobileMenu}>
          <ButtonImage src={closeIcon.src} />
        </ButtonHeaderClose>
        <MobileMenuLinks>
          {routes.map((link) => (
            <MobileLink key={link.id} href={"#" + link.path}>
              {link.title}
            </MobileLink>
          ))}
        </MobileMenuLinks>
      </MobileMenu>
    </HeaderWrap>
  );
};

export default Header;
