/* todo: update document theme-color on menu open using ThemeProvider */
import React, { useState, useEffect, useRef, ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";
import {updateMetaThemeColor,lightTheme} from '../styles/theme';
import PageLoader from '@/components/PageLoader'; // Adjust the path if needed

interface LayoutProps {
  children: ReactNode;
}

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';
const logo3Path = isExport ? `/images/logo3.svg` : "/images/logo3.svg";

const SvgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 30 30" fill="currentColor">
    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
  </svg>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [drawerHeight, setDrawerHeight] = useState(0);
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
      // Prevent routing if already on the page
      if (router.pathname === path) {
        setMenuOpen(false);
        return;
      }

      setMenuOpen(false);

      // Check if the navigation is for the Calendly link
      if (path.startsWith('https://')) {
        // Open in a new tab
        window.open(path, '_blank');
      } else {
        // Use the router to navigate within the app
        setLoading(true);
        router.push(path);
      }
  };

  const isActive = (path: string) => {
    if (path === '/blog') {
      return router.pathname.startsWith('/blog');
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
      const handleRouteChangeComplete = () => {
        setLoading(false);
      };

      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeComplete);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        router.events.off('routeChangeError', handleRouteChangeComplete);
      };
    }, [router.events]);

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
      <PageLoader loading={loading} />
      <Navbar>
        <LogoWrapper onClick={() => handleNavigation('/')}>
          <ExportedImage
            src={'/images/avatar2.svg'}
            alt="logo"
            layout="responsive"
            width={300}
            height={200}
            placeholder={'blur'}
            unoptimized={true}
          />
        </LogoWrapper>
        <Nav>
            <NavItem isActive={isActive('/')} onClick={() => handleNavigation('/')}>projects</NavItem>
            <NavItem isActive={isActive('/photography')} onClick={() => handleNavigation('/photography')}>Photography</NavItem>
{/*            <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videography</NavItem>

*/}{/*            <NavItem isActive={isActive('/project/jigsaw-academy')} onClick={() => handleNavigation('/project/jigsaw-academy')}>Lectures</NavItem>
*/
}            <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog/page/1')}>Blog</NavItem>
            <NavItem isActive={isActive('/newsletter')} onClick={() => handleNavigation('/newsletter')}>newsletter</NavItem>
<NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('https://calendly.com/jigsawpresents')}>
  Consultations
    <SvgIcon />
</NavItem>
        </Nav>
      </Navbar>
      <Content isMenuOpen={isMenuOpen} drawerHeight={drawerHeight}>
        <MobileNavbar>
          <MobileLogoWrapper onClick={() => handleNavigation('/')}>
            <ExportedImage
              src={'/images/avatar2.svg'}
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
{/*            <NavItem isActive={isActive('/videos')} onClick={() => handleNavigation('/videos')}>Videography</NavItem>

*/}{/*            <NavItem isActive={isActive('/project/jigsaw-academy')} onClick={() => handleNavigation('/project/jigsaw-academy')}>Lectures</NavItem>
*/
}             <NavItem isActive={isActive('/blog')} onClick={() => handleNavigation('/blog/page/1')}>Blog</NavItem>
            <NavItem isActive={isActive('/newsletter')} onClick={() => handleNavigation('/newsletter')}>newsletter</NavItem>
<NavItem isActive={isActive('/consultations')} onClick={() => handleNavigation('https://calendly.com/jigsawpresents')}>
  Consultations
    <SvgIcon />
</NavItem>
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
  min-height: 30vw;
  background-color: #F0F0F0;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px 20px;
  background-color: inherit;
  color: black;
  margin: 0 auto; /* Center the navbar */

  @media (max-width: 1000px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  width: 44px;

  img {
    width: 44px;
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
  color: ${({ isActive }) => (isActive ? '#DC70FF' : '#333')};
  font-weight: 600;
  cursor: pointer;
  transition: color 80ms ease-in-out;
  font-size: 16px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${({ isActive }) => (isActive ? '#DC70FF' : '#B3B3B3')};
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    font-size: 22px;
      font-weight: bold;
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
    width: 48px;

    img {
      width: 48px;
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
