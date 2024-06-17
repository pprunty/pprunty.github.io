import React from 'react';
import styled from 'styled-components';
import ClipSpinner from '@/components/ClipSpinner';

interface LoaderProps {
    loading: boolean;
    size?: number;
    color?: string;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F0F0F0;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageLoader: React.FC<LoaderProps> = React.memo(({ loading = true, size = 20, color = "#ddd" }) => {
    return (
        <Overlay isOpen={loading}>
            <LoaderContainer>
                <ClipSpinner color={color} loading={loading} size={size} />
            </LoaderContainer>
        </Overlay>
    );
});

export default PageLoader;
