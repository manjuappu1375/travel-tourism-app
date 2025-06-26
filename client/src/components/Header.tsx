// src/components/Header.tsx
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffffcc;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
`

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #1e40af;
`

const Nav = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const NavButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #e0e7ff;
  border: none;
  border-radius: 0.5rem;
  color: #1e3a8a;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c7d2fe;
    transform: translateY(-2px);
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>🌍 TravelX</Logo>
      <Nav>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/explore">Explore</NavButton>
        <NavButton to="/wishlist">Wishlist</NavButton>
        <NavButton to="/profile">Profile</NavButton>
        <NavButton to="/login">Login / Register</NavButton>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
