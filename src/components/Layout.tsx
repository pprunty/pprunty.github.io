/* todo: update document theme-color on menu open using ThemeProvider */
import React, { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";
import {updateMetaThemeColor,lightTheme} from '../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';
const logo2Path = isExport ? `/images/logo2.svg` : "/images/logo2.svg";

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
    setMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/blog') {
      return router.pathname.startsWith('/blog/page');
    }
    return router.pathname === path;
  };

  const memoizedUpdateMetaThemeColor = useCallback((color: string) => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const metaTag = document.createElement('meta');
      metaTag.name = "theme-color";
      metaTag.content = color;
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }
  }, []);

  useEffect(() => {
    const calculateHeight = () => {
      if (drawerRef.current) {
        setDrawerHeight(drawerRef.current.scrollHeight);
      }
    };

    calculateHeight();

    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);

  useEffect(() => {
    // Update the meta theme color based on the menu state
    if (isMenuOpen) {
      memoizedUpdateMetaThemeColor('black'); // Set to black when menu is open
    } else {
      memoizedUpdateMetaThemeColor(lightTheme.colorBackground); // Set to background color of light theme when menu is closed
    }
  }, [isMenuOpen, memoizedUpdateMetaThemeColor]);


  return (
    <Container>
      <Navbar>
        <LogoWrapper onClick={() => handleNavigation('/')}>
          <ExportedImage
            src={'/images/logo.svg'}
            alt="logo"
            layout="responsive"
            width={200}
            height={100}
            placeholder={'blur'}
            unoptimized={true}
          />
        </LogoWrapper>
        <Nav>
            <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>projects</NavItem>
            <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
            <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videography</NavItem>
            <NavItem isActive={isActive('/project/jigsaw-academy')} onClick={() => handleNavigation('/project/jigsaw-academy')}>Lectures</NavItem>
            <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog/page/1')}>Blog</NavItem>
            <NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('/consultations')}>Consultations</NavItem>
        </Nav>
      </Navbar>
      <Content isMenuOpen={isMenuOpen} drawerHeight={drawerHeight}>
        <MobileNavbar>
          <MobileLogoWrapper onClick={() => handleNavigation('/')}>
            <ExportedImage
              src={'/images/logo.svg'}
              alt="logo"
              layout="responsive"
              width={250}
              height={75}
              placeholder={'blur'}
              unoptimized={true}
            />
          </MobileLogoWrapper>
          <MenuButton onClick={toggleMenu}>MENU</MenuButton>
        </MobileNavbar>
        <MobileDrawer ref={drawerRef} isMenuOpen={isMenuOpen} drawerHeight={drawerHeight}>
          <Nav>
            <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>projects</NavItem>
            <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
            <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videography</NavItem>
            <NavItem isActive={isActive('/project/jigsaw-academy')} onClick={() => handleNavigation('/project/jigsaw-academy')}>Lectures</NavItem>
            <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog/page/1')}>Blog</NavItem>
            <NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('/consultations')}>Consultations</NavItem>
          </Nav>
        </MobileDrawer>
        {children}
      </Content>
    </Container>
  );
};

export default React.memo(Layout);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F0F0F0;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  background-color: inherit;
  border-bottom: 1px solid black;
  color: black;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 40px;

  img {
    width: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 4px;
  }
`;

const NavItem = styled.div<{ isActive?: boolean }>`
  text-transform: uppercase;
  color: ${({ isActive }) => (isActive ? '#FF70CF' : 'black')};
  font-weight: bold;
  cursor: pointer;
  transition: color 80ms ease-in-out;
  font-size: 14px;

  &:hover {
    color: ${({ isActive }) => (isActive ? '#FF70CF' : '#B3B3B3')};
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    font-size: 22px;
    color: ${({ isActive }) => (isActive ? '#F0F0F0' : '#B3B3B3')};
      margin-bottom: 3px;

    &:hover {
      color: ${({ isActive }) => (isActive ? '#F0F0F0' : '#B3B3B3')};
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

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MobileLogoWrapper = styled.div`
  font-size: 1.5rem;
  margin-top: 15px;
  cursor: pointer;
  width: 480px;

  img {
    width: 480px;
  }

  @media (max-width: 1000px) {
    margin-top: 0.5rem;
    width: 45px;

    img {
      width: 45px;
    }
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

  @media (min-width: 1000px) {
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

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;
