import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";

/* assets */
import vkLogo from "./VK.svg";
import okLogo from "./OK.svg";

const FooterWrapper = styled.footer`
  background: #d7eced;
  width: 100%;
  min-height: 277px;
`;

const StyledContainer = styled(Container)`
  padding-block: 60px;
  flex-direction: column;
  gap: 40px;
  display: flex;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  a {
    text-decoration: underline;
    font-size: 18px;
    font-weight: 400;
  }
`;

const Copyright = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const LinkLogo = styled.img`
  width: 44px;
  height: 40px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RulesLinks = styled.div`
  display: flex;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <StyledContainer>
        <FooterContent>
          <Logo />
          <LinksWrapper>
            <Link href="#">
              <LinkLogo src={vkLogo.src} alt="vk logo" />
            </Link>
            <Link href="#">
              <LinkLogo src={okLogo.src} alt="ok logo" />
            </Link>
          </LinksWrapper>
        </FooterContent>
        <FooterContent>
          <LinksWrapper>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Напишите нам</a>
          </LinksWrapper>

          <Copyright>© SPLAT 2022</Copyright>
        </FooterContent>
      </StyledContainer>
    </FooterWrapper>
  );
}
