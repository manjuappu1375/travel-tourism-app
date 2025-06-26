import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf8ff, #e0e7ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

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
`

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #2563eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

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
`

function App() {
  const { pathname } = useLocation()
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <AppContainer>
      {!isAdminRoute && (
        <NavBar>
          <Logo>🌍 TravelX</Logo>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/login">Login</Link>
          </NavLinks>
        </NavBar>
      )}

      <AppRoutes />

      {!isAdminRoute && <Footer />}
    </AppContainer>
  )
}

export default App
