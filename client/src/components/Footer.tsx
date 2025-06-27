// src/components/Footer.tsx
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #f8fafc, #e2e8f0);
  padding: 2.5rem 1rem;
  text-align: center;
  border-top: 1px solid #cbd5e1;
  margin-top: auto;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e3a8a;

  svg {
    color: #10b981;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  a {
    color: #334155;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #1e3a8a;
      transform: translateY(-2px);
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    color: #64748b;
    font-size: 1.3rem;
    background: #e2e8f0;
    padding: 0.5rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: #1e3a8a;
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

const Copy = styled.p`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #64748b;
`;

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
  );
};

export default Footer;
