import React from 'react';
import styled from 'styled-components';
import ExportedImage from "next-image-export-optimizer";
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
      gap: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-height: auto;
  max-width: 600px;
`;

const images = [
  '/images/0a94d7f5-834a-4567-86db-93f1ce8dc3ca.JPG',
  '/images/2d8324a2-e783-47d8-aa1c-3891e7a8b541.JPG',
  '/images/9977ee3f-d4bd-4ce6-a57c-04397898b222.JPG',
//   '/images/a8b62ad2-008f-4084-af78-e5f5babfd5ea.JPG',
//   '/images/af1874ac-3277-435d-83dd-5ba41fb4b7af.JPG',
//   '/images/c57ad8ca-ee1e-4d3d-a9f6-9b0222e211da.JPG'
];

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

const Photography: React.FC = () => {
 return (
 <>
               <Head>
                   <title>Patrick Prunty - Photography</title>
                   <meta name="viewport" content="width=device-width, initial-scale=1" />
                   <link rel="icon" href="/images/favicon.ico" />
               </Head>
     <Container>
       <Grid>
         {images.map((src, index) => {
           const imagePath = isExport ? `${src}` : src;
           return (
             <ImageWrapper key={index}>
               <ExportedImage
               src={imagePath}
               alt={`Photography ${index + 1}`}
               layout="responsive"
               width={600}
               height={500}
               objectFit="cover"
                                placeholder={'blur'}

                />
             </ImageWrapper>
           );
         })}
       </Grid>
     </Container>
     </>
   );
};

export default Photography;
