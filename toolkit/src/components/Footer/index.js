import React from 'react'
import {
  StyledFooter,
  FooterContainer,
  StyledYear,
  StyledLinkContainer,
  StyledFooterLink,
  StyledImg,
} from './index.styles'
import EnglishNavi from '../../assets/svg/Navigation.svg'

const Footer = () => {
  return (
      <StyledFooter>
        <FooterContainer>
          <StyledYear>&copy; 2022 Talrise</StyledYear>
          <StyledLinkContainer>
            <StyledFooterLink>Term & Conditions</StyledFooterLink>
            <StyledFooterLink>
              <a className='link' href='/privacy'>Privacy Policy</a>
            </StyledFooterLink>
            <StyledFooterLink>Help</StyledFooterLink>
            <StyledFooterLink>
              English <StyledImg src={EnglishNavi} alt="english" />
            </StyledFooterLink>
          </StyledLinkContainer>
        </FooterContainer>
      </StyledFooter>
  )
}

export default Footer
