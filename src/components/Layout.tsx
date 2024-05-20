import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false); // Close menu after navigation
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <Container>
      <Sidebar>
        <Title>PATRICK PRUNTY</Title>
        <Nav>
          <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>Home</NavItem>
          <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
          <NavItem isActive={isActive('/jigsaw-presents')} onClick={() => handleNavigation('/jigsaw-presents')}>Jigsaw Presents</NavItem>
          <NavItem isActive={isActive('/jigsaw-academy')} onClick={() => handleNavigation('/jigsaw-academy')}>Jigsaw Academy</NavItem>
          <NavItem isActive={isActive('/software')} onClick={() => handleNavigation('/software')}>Software</NavItem>
          <NavItem isActive={isActive('/contact')} onClick={() => handleNavigation('/contact')}>Contact</NavItem>
          <NavItem isActive={isActive('/about')} onClick={() => handleNavigation('/about')}>About</NavItem>
        </Nav>
      </Sidebar>
      <Content isMenuOpen={isMenuOpen}>
        <MobileNavbar>
          <MobileTitle>PATRICK PRUNTY</MobileTitle>
          <MenuButton onClick={toggleMenu}>MENU</MenuButton>
        </MobileNavbar>
        <MobileDrawer isMenuOpen={isMenuOpen}>
          <Nav>
            <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>Home</NavItem>
            <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
            <NavItem isActive={isActive('/jigsaw-presents')} onClick={() => handleNavigation('/jigsaw-presents')}>Jigsaw Presents</NavItem>
            <NavItem isActive={isActive('/jigsaw-academy')} onClick={() => handleNavigation('/jigsaw-academy')}>Jigsaw Academy</NavItem>
            <NavItem isActive={isActive('/software')} onClick={() => handleNavigation('/software')}>Software</NavItem>
            <NavItem isActive={isActive('/contact')} onClick={() => handleNavigation('/contact')}>Contact</NavItem>
            <NavItem isActive={isActive('/about')} onClick={() => handleNavigation('/about')}>About</NavItem>
          </Nav>
        </MobileDrawer>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0; /* Ensure consistent background color */
  @media (min-width: 520px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: inherit; /* Inherit background color from parent */
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
//   padding: 20px;
  @media (max-width: 520px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  cursor: pointer;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  margin: 2px 0;
  text-transform: uppercase;
  color: ${({ isActive }) => (isActive ? '#FF70CF' : 'black')};
  font-weight: bold;
  cursor: default;
  transition: color 120ms ease-in-out;
  &:hover {
    color: #9F9793;
    text-decoration: none;
  }
  @media (max-width: 520px) {
    font-size: 18px;
    color: ${({ isActive }) => (isActive ? '#FF70CF' : 'white')};
  }
`;

const MobileNavbar = styled.div`
  display: none;
  width: 100%;
  padding: 0px 10px;
  height: 50px;
  background-color: inherit;
  color: black;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 520px) {
    display: flex;
  }
`;

const MobileTitle = styled.h1`
  font-size: 1.5rem;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
   &:hover {
      color: #9F9793;
      text-decoration: none;
    }
`;

const MobileDrawer = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ isMenuOpen }) => (isMenuOpen ? '50px' : '-150px')}; /* Adjust based on content height */
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 1;
  transition: top 0.3s ease-in-out;
`;

const Content = styled.main<{ isMenuOpen: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '200px' : '0')}; /* Adjust based on content height */
  transition: margin-top 0.3s ease-in-out;
  @media (min-width: 520px) {
    margin-top: 0; /* Reset margin-top for desktop */
  }
`;
