import React from "react";
import styled from "styled-components";

/* assets */
import logo from "./assets/logo.svg";

const LogoImage = styled.img`
  width: 102px;
  height: 95px;
  @media screen and (max-width: 800px) {
     width: 80px;
     height: 75px;
  }
  @media screen and (max-width: 520px) {
     width: 69px;
     height: 64px;
  }
`;

const Logo = () => {
  return (
    <a
      traget="_blank"
      rel="noopener noreferrer"
      href="https://en.splatglobal.com/"
    >
      <LogoImage src={logo.src} alt="Splat Logo" />
    </a>
  );
};

export default Logo;
