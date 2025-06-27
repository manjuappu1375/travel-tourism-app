// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const HeaderWrapper = styled.header<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ darkMode }) => (darkMode ? '#1e293b' : 'linear-gradient(90deg, #f0f4ff 0%, #e0e7ff 100%)')};
  color: ${({ darkMode }) => (darkMode ? '#f1f5f9' : '#1e40af')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &::before {
    content: '🌐';
    font-size: 1.6rem;
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  top: 64px;
  right: ${({ open }) => (open ? '2rem' : '-100%')};
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    position: static;
    background: none;
    padding: 0;
    box-shadow: none;
  }
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1.2rem;
  border-radius: 9999px;
  background: #1d4ed8;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.25s ease;

  &:hover {
    background: #2563eb;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    transform: translateY(-1px);
  }
`;

const OutlineNavButton = styled(NavButton)`
  background: transparent;
  border: 1px solid #1d4ed8;
  color: #1d4ed8;

  &:hover {
    background: #1d4ed8;
    color: #fff;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  border: 1px solid #94a3b8;
  outline: none;
  font-size: 0.9rem;

  &:focus {
    border-color: #2563eb;
  }
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Search: ${searchTerm}`);
    }
  };

  return (
    <HeaderWrapper darkMode={darkMode}>
      <Logo to="/">TravelX</Logo>

      <form onSubmit={handleSearch} style={{ marginRight: '1rem' }}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <IconButton onClick={toggleDarkMode}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </IconButton>

      <IconButton onClick={toggleMenu} style={{ marginLeft: '0.5rem' }}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </IconButton>

      <Nav open={menuOpen}>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/explore">Explore</NavButton>
        <NavButton to="/wishlist">Wishlist</NavButton>
        <NavButton to="/profile">Profile</NavButton>
        <OutlineNavButton to="/login">Login</OutlineNavButton>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
