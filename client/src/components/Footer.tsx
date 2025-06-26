// src/components/Footer.tsx
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa'

const FooterWrapper = styled.footer`
  background-color: #f1f5f9; /* light slate */
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;
`

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #1e40af;

  svg {
    color: #10b981;
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: #334155;
    text-decoration: none;
    font-size: 0.95rem;

    &:hover {
      text-decoration: underline;
      color: #1e40af;
    }
  }
`

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: #64748b;
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      color: #1e40af;
      transform: scale(1.1);
    }
  }
`

const Copy = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #94a3b8;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <Brand>
          <FaGlobe /> TravelX
        </Brand>
        <NavLinks>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </NavLinks>
      </FooterTop>

      <SocialIcons>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </SocialIcons>

      <Copy>© 2025 TravelX. All rights reserved.</Copy>
    </FooterWrapper>
  )
}

export default Footer
