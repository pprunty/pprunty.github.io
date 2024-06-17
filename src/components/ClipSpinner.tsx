import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoaderProps {
    loading: boolean;
    size?: number;
    color?: string;
}

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const ClipSpinner: React.FC<LoaderProps> = React.memo(({ loading, size = 35, color = "#F0F0F0" }) => {
    return (
        <LoaderContainer>
            <ClipLoader color={color} loading={loading} size={size} />
        </LoaderContainer>
    );
});

export default ClipSpinner;
