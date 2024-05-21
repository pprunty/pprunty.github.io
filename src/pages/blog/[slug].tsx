import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../../../lib/markdownToHtml';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

export default function BlogPost({ title, date, content, image }) {
  const router = useRouter();
  const imagePath = isExport ? `/patrickprunty${image}` : image;

  const handleBackClick = () => {
    router.back();
  };

  return (
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
  padding: 20px;
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
    grid-template-columns: repeat(1, 1fr);
  margin-bottom: 40px;
  }

  &:hover {
    text-decoration: none; /* Ensure no underline on hover */
    color: #555; /* Optional: slightly lighter color on hover */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Increased font size */
  font-weight: 700; /* Bold */
  margin-bottom: 15px;
  color: #333; /* Darker color */
  text-align: center; /* Center alignment */
  line-height: 1.2; /* Better line height */
`;

const Date = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 1rem;
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
`;
