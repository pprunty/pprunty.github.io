import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ExportedImage from 'next-image-export-optimizer';
import Head from 'next/head';
import markdownToHtml from '../../../lib/markdownToHtml';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState, useEffect, useMemo } from 'react';
import ShareButton from '@/components/ShareButton';
import Newsletter from '@/components/Newsletter';
import formatDate from '@/utils/formatDate';

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  image: string;
  description: string;
  artwork?: string;
}

const BlogPostHeader = ({ title, description, imagePath, router }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imagePath} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`${router.asPath}`} />
    <meta property="og:site_name" content="Your Site Name" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imagePath} />
    <link rel="canonical" href={`${router.asPath}`} />
  </Head>
);

const BlogPostContent: React.FC<{ title: string; date: string; content: string; imagePath: string; artwork?: string }> = ({ title, date, content, imagePath, artwork }) => {
  const router = useRouter();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/blog');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      if ((img.width - 100) > img.height) {
        setIsLandscape(true);
      }
    };
  }, [imagePath]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const readingTime = useMemo(() => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Assuming an average reading speed of 200 words per minute
    return minutes;
  }, [content]);

  return (
    <Container>
      <HeaderWrapper>
        <Title>{title}</Title>
        <MetaSection>
          <AuthorImage src="/images/logo3.svg" alt="Author" />
          <MetaInfo>
            <AuthorName>Patrick Prunty</AuthorName>
            <ReadingTime>{formatDate(date)} &#8226; {readingTime} min read</ReadingTime>
          </MetaInfo>
        </MetaSection>
      </HeaderWrapper>
      <ImageWrapper isLandscape={isLandscape}>
        <ExportedImage
          src={imagePath}
          alt={title}
          layout="responsive"
          width={750}
          height={400}
          placeholder={'blur'}
        />
        {artwork && <Artwork>Artwork: {artwork}</Artwork>}
      </ImageWrapper>
        <p style={{ textAlign: 'center' }}>
          <span style={{ margin: '0 10px' }}>&bull;</span>
          <span style={{ margin: '0 10px' }}>&bull;</span>
          <span style={{ margin: '0 10px' }}>&bull;</span>
        </p>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <BottomBar>
        <BackArrow onClick={handleBackClick}>&larr; Back</BackArrow>
        <ShareButton />
      </BottomBar>
      <Newsletter />
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop}><span>^</span></ScrollToTopButton>}
    </Container>
  );
};

export default function BlogPost({ title, date, content, image, description, artwork }: BlogPostProps) {
  const router = useRouter();
  const imagePath = isExport ? `${image}` : image;

  return (
    <>
      <BlogPostHeader title={title} description={description} imagePath={imagePath} router={router} />
      <BlogPostContent title={title} date={date} content={content} imagePath={imagePath} artwork={artwork} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);
  return { props: { ...data, content: htmlContent, artwork: data.artwork || null } };
};

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 680px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const BackArrow = styled.div`
  align-self: flex-start;
  text-transform: uppercase;
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding-left: 0px;
  &:hover {
    color: #B3B3B3;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    color: #555;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const TopBackArrow = styled(BackArrow)`
  position: absolute;
  top: 20px;

  @media (max-width: 480px) {
    top: 10px;
  }
`;

const BottomBackArrow = styled(BackArrow)`
  align-self: flex-start;
  margin-top: 20px;
`;

const Artwork = styled.p`
  color: #777;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: .85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ImageWrapper = styled.div<{ isLandscape: boolean }>`
  width: 100%;
  margin-bottom: 10px;
  max-width: 100%;

  @media (min-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.05em;
  margin-top: 100px;
  color: #000;
  text-align: left;
  max-width: 680px;
  margin-block-start: 0.6em !important;
  margin-block-end: 0.6em !important;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const MetaSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 680px;
  gap: 5px;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AuthorName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

const ReadingTime = styled.div`
    font-size: 1rem;
    color: #777;
    @media (min-width: 768px) {
      font-size: .95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
`;

const Date = styled.div`
  font-size: 1rem;
  color: #777;
  @media (min-width: 768px) {
    font-size: .95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


const Content = styled.div`
  font-size: 20px;
  line-height: 1.6;
  max-width: 680px;
  width: 100%;
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
  color: #333;

  h2, h3, h4, h5 {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  p {
    margin-bottom: 1em;
  }

    blockquote {
      font-style: italic;
      background-color: inherit;
      border-left: 4px solid #333;
      margin: 1.5em 10px;
      padding: 0.5em 20px;
      quotes: "\\201C""\\201D""\\2018""\\2019";

      &:before {
        color: ##b3b3b3;
        content: open-quote;
        font-size: 3em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
      }

      p {
        display: inline;
      }
    }

  a {
    color: #D04CFA;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  figure {
    text-align: center;
    margin: 20px 0;

    img {
      max-width: 100%;
      height: auto;
    }

    figcaption {
      font-size: 0.8rem;
      color: #666;
      margin-top: 8px;
      text-align: center;
    }
  }

  img {
    max-width: 60%;
    max-height: 600px;
    height: auto;
    margin: 0 auto;  // Adds automatic margins on both sides, centering the image
    display: block;  // Ensures the image is aligned properly without extra space around
  }

  pre {
    background: inherit;
    overflow-x: auto;
    code {
      font-family: monospace;
      font-size: 15px;
    }
  }

  b, strong {
//       font-family: "Museo Sans", sans-serif; // Updated font-family for bold/strong text
      font-weight: bold;
    }

  @media (max-width: 768px) {
    font-size: 20px;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }

  code {
//  font-family: "Courier New", Courier, monospace; // Change this to your desired font-family for inline code
    border-radius: 3px;
    font-size: 15px;
  }
`;


const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 30px;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #F0F0F0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-family: system-ui;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  font-weight: 200;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1000;

  span {
    margin-top: 5px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 30px;
    bottom: 20px;
    right: 20px;

    span {
      margin-top: 4px;
    }
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    font-size: 28px;
    bottom: 15px;
    right: 15px;

    span {
      margin-top: 4px;
    }
  }
`;
