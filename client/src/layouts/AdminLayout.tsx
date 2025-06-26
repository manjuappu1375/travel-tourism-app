import { Outlet, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f1f5f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Sidebar = styled.aside`
  width: 250px;
  background-color: #1e3a8a;
  color: #ffffff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #93c5fd;
  text-align: center;
`

const StyledNavLink = styled(NavLink)`
  color: #dbeafe;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    background-color: #2563eb;
    color: white;
  }

  &:hover {
    background-color: #3b82f6;
    color: white;
  }
`

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`

const AdminLayout = () => {
  return (
    <AdminContainer>
      <Sidebar>
        <SidebarTitle>🛠️ Admin Panel</SidebarTitle>
        <StyledNavLink to="/admin">Dashboard</StyledNavLink>
        <StyledNavLink to="/admin/tour-stats">Tour Stats</StyledNavLink>
        <StyledNavLink to="/admin/booking-stats">Booking Stats</StyledNavLink>
        <StyledNavLink to="/admin/reviews">Reviews</StyledNavLink>
        <StyledNavLink to="/admin/support">Support</StyledNavLink>
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </AdminContainer>
  )
}

export default AdminLayout
