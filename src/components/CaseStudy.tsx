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
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 20px;

  @media(max-width: 767px) {
    font-size: 1.8rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;  /* Ensure the ImageWrapper does not extend outside its bounding div */
  overflow: hidden;
  cursor: pointer;
  transition: border-radius 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
  margin: 0 auto;

  @media(min-width: 768px) {
    width: 50%;
    margin-left: 20px;
  }

  &:hover {
    border-radius: 20%;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;  /* Ensure the image does not extend outside its bounding div */
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
    const isExternal = link.startsWith('http://') || link.startsWith('https://');
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(link);
    }
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
          height={400}
        />
      </ImageWrapper>
    </CaseStudyContainer>
  );
});

CaseStudyComponent.displayName = "CaseStudyComponent";

export default CaseStudyComponent;
