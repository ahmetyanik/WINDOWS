import React from "react";
import { StyledContainer, StyledImage } from "./index.styles";
import logoLogin from "../../assets/svg/logoLogin.svg";
import { Text } from "../../atoms";

const Talrise = () => {
  return (
    <StyledContainer>
      <Text type="Headline1" className="text-talrise">
        <b> Welcome Back!</b>
      </Text>
      <StyledImage src={logoLogin} className="logo1" />
    </StyledContainer>
  );
};

export default Talrise;
