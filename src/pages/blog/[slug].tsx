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

const BlogPostHeader = ({ title, description, imagePath, router, date, author, tags }) => (
  <Head>
    <title>{title} | Patrick Prunty Blog</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={tags.join(', ')} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`https://patrickprunty.com${imagePath}`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://patrickprunty.com${router.asPath}`} />
    <meta property="og:site_name" content="Patrick Prunty Blog" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://patrickprunty.com${imagePath}`} />
    <link rel="canonical" href={`https://patrickprunty.com${router.asPath}`} />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": {
          "@type": "ImageObject",
          "url": `https://patrickprunty.com${imagePath}`,
          "width": 1200,
          "height": 630
        },
        "datePublished": date,
        "dateModified": date,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Patrick Prunty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://patrickprunty.com/icon-512-maskable.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://patrickprunty.com${router.asPath}`
        },
        "keywords": tags.join(', '),
        "articleSection": "Blog"
      })}
    </script>
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
          <AuthorImage src="/images/avatar.svg" alt="Author" />
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
          loading="lazy"
        />
        {artwork && <Artwork>Artwork: {artwork}</Artwork>}
      </ImageWrapper>
        <p style={{ textAlign: 'center' }}>
          <span style={{ margin: '0 10px' }}>&bull;</span>
          <span style={{ margin: '0 10px' }}>&bull;</span>
          <span style={{ margin: '0 10px' }}>&bull;</span>
        </p>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
              <p style={{ textAlign: 'center' }}>
                <span style={{ margin: '0 10px' }}>&bull;</span>
                <span style={{ margin: '0 10px' }}>&bull;</span>
                <span style={{ margin: '0 10px' }}>&bull;</span>
              </p>
<Content dangerouslySetInnerHTML={{ __html: `
  <p><strong><em>Hold up...</em></strong> <em>Did you enjoy this article? Learn something new? If so, I'd be grateful if you'd <a href="https://medium.com/@pprunty" target="_blank" rel="noopener noreferrer">follow me on Medium</a>. Your
  support encourages me to keep writing and sharing my thoughts. Thank you for reading, and I look forward to connecting with you again soon. With appreciation. Patrick.</em></p>
`}} />
      <BottomBar>
        <BackArrow onClick={handleBackClick}>&larr; Back</BackArrow>
        <ShareButton />
      </BottomBar>
      <Newsletter />
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop}><span>^</span></ScrollToTopButton>}
    </Container>
  );
};

export default function BlogPost({ title, date, content, image, description, artwork, tags }: BlogPostProps) {
  const router = useRouter();
  const imagePath = image;

  return (
    <>
      <BlogPostHeader
        title={title}
        description={description}
        imagePath={imagePath}
        router={router}
        date={date}
        author="Patrick Prunty"
        tags={tags}
      />
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
  return {
    props: {
      ...data,
      content: htmlContent,
      artwork: data.artwork || null,
      tags: data.tags || []
    }
  };
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
  width: 44px;
  height: 44px;
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

 .katex-display {
    font-size: 15px;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 1em 0;
    padding: 0.5em 0;
  }

  @media (max-width: 768px) {
   .katex-display {
      overflow-x: auto;
      overflow-y: auto;
    }
  }


  /* Additional styles for specific elements */
  h2, h3, h4, h5 {
    margin-top: 1.2em;
//     margin-bottom: 0.5em;
    font-family: "Helvetica Neue", Arial, sans-serif;
    margin-block-end: -0.7em !important;
  }

  p {
    margin-bottom: 1em;
  }

  blockquote {
      font-style: italic;
      background-color: inherit;
      border-left: 4px solid #333;
      margin: 1.5em -22px;
      padding: 0.5em 20px;
    color: #444;
    &:before {
      color: #444;
      content: open-quote !important;
      font-size: 3em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
    &:after {
          content: close-quote;
          font-size: 3em;
          line-height: 0.1em;
          margin-left: 0.25em;
          vertical-align: -0.4em;
        }

    p {
      display: inline;
    }
     @media (max-width: 768px) {
         margin: 1.5em 10px;
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
    max-height: auto;
    object-fit: cover;
    height: auto;
    margin: 5px auto;  // Adds automatic margins on both sides, centering the image
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
    font-weight: bold;
  }

  /* Styles for TikTok embed container */
  .tiktok-embed {
    max-width: 605px;
    background-color: inherit;
    min-width: 325px;
    margin: 20px auto; /* Adjust margin as needed */
    /* Add any additional TikTok embed specific styles here */
    quotes: none;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 20px;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }

  ol li p {
    margin-block-start: 0em;
  }

  ol li p:first-child {
      margin-block-end: 0em;
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
    border-radius: 3px;
    font-size: 15px;
  }

    /* Styles for the iframe */
    iframe {
      width: 100%;
      height: 400px; /* Default height for desktop */
      border: none;

      @media (max-width: 768px) {
        height: 50vh; /* Adjust height for tablets and smaller devices */
      }

      @media (max-width: 480px) {
        height: 33vh; /* Adjust height for mobile devices */
      }
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
