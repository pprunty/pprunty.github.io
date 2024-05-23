import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";
import Footer from './Footer'; // Adjust the path if needed

interface LayoutProps {
  children: ReactNode;
}

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';
const logoPath = isExport ? `/images/logo4.svg` : "/images/logo4.svg";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false); // Close menu after navigation
  };

  const isActive = (path: string) => router.pathname === path;

  useEffect(() => {
    // Calculate the drawer height after the component mounts
    const calculateHeight = () => {
      if (drawerRef.current) {
        setDrawerHeight(drawerRef.current.scrollHeight);
      }
    };

    calculateHeight();

    // Add event listener to recalculate height on window resize
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  return (
    <Container>
      <Sidebar>
        <LogoWrapper onClick={() => handleNavigation('/')}>
          <ExportedImage src={logoPath} alt="Logo" layout="responsive" width={200}
          height={100}
                                          placeholder={'blur'}

           />
        </LogoWrapper>
        <Nav>
          <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>PATRICK PRUNTY</NavItem>
          <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
          <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videos</NavItem>
          <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog')}>Blog</NavItem>
          <NavItem isActive={isActive('/software')} onClick={() => handleNavigation('/software')}>Software Services</NavItem>
          <NavItem isActive={isActive('/jigsaw-presents')} onClick={() => handleNavigation('/jigsaw-presents')}>Jigsaw Presents</NavItem>
          <NavItem isActive={isActive('/jigsaw-academy')} onClick={() => handleNavigation('/jigsaw-academy')}>Jigsaw Academy</NavItem>
          <NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('/consultations')}>Book a consultation</NavItem>
        </Nav>
      </Sidebar>
      <Content isMenuOpen={isMenuOpen} drawerHeight={drawerHeight}>
        <MobileNavbar>
          <MobileLogoWrapper onClick={() => handleNavigation('/')}>
            <ExportedImage src={logoPath} alt="Logo" layout="responsive" width={250} height={75}
                                                       placeholder={'blur'}
             />
          </MobileLogoWrapper>
          <MenuButton onClick={toggleMenu}>MENU</MenuButton>
        </MobileNavbar>
        <MobileDrawer ref={drawerRef} isMenuOpen={isMenuOpen} drawerHeight={drawerHeight}>
          <Nav>
            <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>PATRICK PRUNTY</NavItem>
            <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
            <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videos</NavItem>
            <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog')}>Blog</NavItem>
            <NavItem isActive={isActive('/software')} onClick={() => handleNavigation('/software')}>Software Products</NavItem>
            <NavItem isActive={isActive('/jigsaw-presents')} onClick={() => handleNavigation('/jigsaw-presents')}>Jigsaw Presents</NavItem>
            <NavItem isActive={isActive('/jigsaw-academy')} onClick={() => handleNavigation('/jigsaw-academy')}>Jigsaw Academy</NavItem>
            <NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('/consultations')}>Book a consultation</NavItem>
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
  background-color: #FFFFFF; /* Ensure consistent background color */
  @media (min-width: 736px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: inherit; /* Inherit background color from parent */
  color: black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  @media (max-width: 736px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 400px;
  img {
    width: 400px; /* Adjust based on your design */
  }
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
  cursor: pointer;
  transition: color 80ms ease-in-out;
  font-size: 16px;

  &:hover {
    color: ${({ isActive }) => (isActive ? '#FF70CF' : '#B3B3B3')};
    text-decoration: none;
  }

  @media (max-width: 736px) {
    font-size: 22px;
    color: ${({ isActive }) => (isActive ? 'white' : '#B3B3B3')};

    &:hover {
      color: ${({ isActive }) => (isActive ? 'white' : '#B3B3B3')};
    }
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
  @media (max-width: 736px) {
    display: flex;
  }
`;

const MobileLogoWrapper = styled.div`
  font-size: 1.5rem;
  margin-top: 28px;
  cursor: pointer;
  width: 480px;
  img {
    width: 480px; /* Adjust based on your design */
  }
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

const MobileDrawer = styled.div<{ isMenuOpen: boolean; drawerHeight: number }>`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${({ isMenuOpen, drawerHeight }) => (isMenuOpen ? '0px' : `-${drawerHeight}px`)};
  left: 0;
  width: 100%;
  background-color: black;
  z-index: 1;
  transition: top 180ms ease-in-out;
  overflow: hidden;
  max-height: ${({ isMenuOpen, drawerHeight }) => (isMenuOpen ? `${drawerHeight}px` : '0')};
  @media (min-width: 736px) {
    display: none;
  }
`;

const Content = styled.main<{ isMenuOpen: boolean; drawerHeight: number }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: ${({ isMenuOpen, drawerHeight }) => (isMenuOpen ? `${drawerHeight}px` : '0')};
  transition: margin-top 180ms ease-in-out;
  @media (min-width: 736px) {
    margin-top: 0; /* Reset margin-top for desktop */
  }
`;
