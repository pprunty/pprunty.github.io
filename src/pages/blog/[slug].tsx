import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../../lib/markdownToHtml';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";
import Head from 'next/head';

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

export default function BlogPost({ title, date, content, image, description }) {
  const router = useRouter();
  const imagePath = isExport ? `/patrickprunty${image}` : image;

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePath} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${router.asPath}`} />
      </Head>
      <Container>
        <BackArrow onClick={handleBackClick}>&larr; Back</BackArrow>
        <ImageWrapper>
          <ExportedImage
            src={imagePath}
            alt={title}
            layout="responsive"
            width={800}
            height={400}
            placeholder={'blur'}
          />
        </ImageWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);
  return { props: { ...data, content: htmlContent } };
}

// Styled Components
const Container = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 18px;
`;

const BackArrow = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #000; /* Change color to black */
  cursor: pointer;
  text-decoration: none; /* Ensure no underline */

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }

  &:hover {
    text-decoration: none; /* Ensure no underline on hover */
    color: #555; /* Optional: slightly lighter color on hover */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 800px; /* Default max-width for larger screens */
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    max-width: 400px; /* Smaller max-width for desktop devices */
  }

  @media (max-width: 1024px) {
    max-width: 800px; /* Original max-width for smaller screens */
  }
`;


const Title = styled.h1`
  font-size: 2.5rem; /* Increased font size */
  font-weight: 700; /* Bold */
  margin-bottom: 15px;
  color: #333; /* Darker color */
  text-align: center; /* Center alignment */
  line-height: 1.2; /* Better line height */

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Smaller font size on mobile devices */
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 18px;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  width: 100%;

  h2, h3, h4 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Smaller font size on mobile devices */
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; /* Smaller font size on mobile devices */
  }
`;
