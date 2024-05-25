import React, { memo } from 'react';
import styled from 'styled-components';
import ExportedImage from 'next-image-export-optimizer';
import { useRouter } from 'next/router';

const CaseStudyContainer = styled.div`
  display: flex;
  align-items: stretch;
  padding: 20px 0;
  border-top: 2px solid black;
  cursor: pointer;
  flex-direction: column;
  width: 100%;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 40px 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    padding-right: 20px;
    border-right: 2px solid black;
    margin-bottom: 0;
  }
`;

const CaseStudyLabel = styled.div`
  font-size: 0.875rem;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const CaseStudyTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;

  @media(max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const CaseStudyDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const ViewCaseStudyButton = styled.button`
  padding: 15px 20px;
  width: 170px;
  font-size: 1rem;
  color: #333;
  background-color: #F0F0F0;
  text-decoration: none;
  border: 2px solid #333;
  border-radius: 0;
  cursor: pointer;
  font-weight: 600;
  transition: border-radius 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);

  &:hover {
    background-color: #333;
    color: #F0F0F0;
    border-radius: 40px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: border-radius 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  margin-left: 0;

  @media(min-width: 768px) {
    width: 50%;
    margin-left: 20px;
  }

  &:hover {
    border-radius: 60px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

interface CaseStudyProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CaseStudyComponent: React.FC<CaseStudyProps> = memo(({ index, title, description, imageUrl, link }) => {
  const router = useRouter();

  const navigateToCaseStudy = () => {
    router.push(`/${link}`);
  };

  return (
    <CaseStudyContainer onClick={navigateToCaseStudy}>
      <TextContainer>
        <CaseStudyLabel>● Project {index + 1}</CaseStudyLabel>
        <CenteredContent>
          <CaseStudyTitle>{title}</CaseStudyTitle>
          <CaseStudyDescription>{description}</CaseStudyDescription>
          <ViewCaseStudyButton>View Project</ViewCaseStudyButton>
        </CenteredContent>
      </TextContainer>
      <ImageWrapper>
        <ExportedImage
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={730}
          height={200}
        />
      </ImageWrapper>
    </CaseStudyContainer>
  );
});

export default CaseStudyComponent;
