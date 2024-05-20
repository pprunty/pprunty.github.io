import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";

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
        <LogoWrapper onClick={() => handleNavigation('/')}>
          <BoldImage src="/images/logo4.svg" alt="Logo" layout="fixed" width={600} height={100} />
        </LogoWrapper>
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
          <MobileLogoWrapper>
            <BoldImage src="/images/logo4.svg" alt="Logo" layout="fixed" width={300} height={100} />
          </MobileLogoWrapper>
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
  width: 270px;
  background-color: inherit; /* Inherit background color from parent */
  color: black;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: flex-start;
  @media (max-width: 520px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 600px;
`;

const BoldImage = styled(ExportedImage)`
  filter: brightness(0) saturate(300%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(300%) contrast(400%);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  margin: 1px 0;
  text-transform: uppercase;
  color: ${({ isActive }) => (isActive ? '#FF70CF' : 'black')};
  font-weight: bold;
  cursor: default;
  transition: color 120ms ease-in-out;
  font-size: 16px;
  &:hover {
    color: #B3B3B3;
    text-decoration: none;
  }
  @media (max-width: 520px) {
    font-size: 22px;
    color: ${({ isActive }) => (isActive ? 'white' : '#B3B3B3')};
  }
`;

const MobileNavbar = styled.div`
  display: none;
  width: 100%;
  padding: 0 10px;
  height: 50px;
  background-color: inherit;
  color: black;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 520px) {
    display: flex;
  }
`;

const MobileLogoWrapper = styled.div`
  font-size: 1.5rem;
  margin-top: 28px;
  width: 150px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #B3B3B3;
    text-decoration: none;
  }
`;

const MobileDrawer = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ isMenuOpen }) => (isMenuOpen ? '0px' : '-255px')}; /* Adjust based on content height */
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 1;
  transition: top 150ms ease-in-out;
`;

const Content = styled.main<{ isMenuOpen: boolean }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: ${({ isMenuOpen }) => (isMenuOpen ? '255px' : '0')}; /* Adjust based on content height */
  transition: margin-top 150ms ease-in-out;
  @media (min-width: 520px) {
    margin-top: 0; /* Reset margin-top for desktop */
  }
`;
