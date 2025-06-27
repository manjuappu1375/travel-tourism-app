import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffffcc;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    padding: 0.5rem 1rem;
    background-color: #e0e7ff;
    color: #1e40af;
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  a:hover {
    background-color: #c7d2fe;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #c7d2fe;
  border-radius: 12px;
  outline: none;
  font-size: 1rem;
  width: 200px;

  &:focus {
    border-color: #2563eb;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <NavBar>
      <Logo>🌍 TravelX</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/map">Map</Link>

        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search tours..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </NavLinks>
    </NavBar>
  );
};

export default Navbar;
