import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ExportedImage from "next-image-export-optimizer";
import markdownToHtml from '../../../lib/markdownToHtml';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

interface Post {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  excerpt: string;
}

interface BlogListProps {
  posts: Post[];
}

// Utility function to format the date
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Extracted components for reusability
const BlogPost = ({ post, onClick }: { post: Post, onClick: () => void }) => (
  <PostItem onClick={onClick}>
    <PostContent>
      <PostText>
        <PostDateAuthor>{formatDate(post.date)} by Patrick Prunty</PostDateAuthor>
        <PostTitle>{post.title}</PostTitle>
        <PostExcerpt>
          {post.excerpt}... <SeeMore onClick={onClick}>Read more</SeeMore>
        </PostExcerpt>
      </PostText>
      <PostImageWrapper>
        <ExportedImage
          src={isExport ? `${post.image}` : post.image}
          alt={post.title}
          layout="fixed"
          width={800}
          height={500}
          objectFit="cover"
          placeholder={'blur'}
        />
      </PostImageWrapper>
    </PostContent>
  </PostItem>
);

export default function BlogList({ posts }: BlogListProps) {
  const router = useRouter();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll Y:', window.scrollY); // Debug statement
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group posts by year
  const postsByYear = posts.reduce<Record<number, Post[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  // Get an array of years sorted in descending order
  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);

  return (
    <>
      <Head>
        <title>Patrick Prunty - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My personal blog." />
        <meta property="og:type" content="blog" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Title>Patrick Prunty's Blog</Title>
      <Subtitle>Welcome to my personal blog where I share insights, stories, and updates on my work and interests. Explore the posts below to read more.</Subtitle>
      {years.map((year) => (
        <YearSection key={year}>
          <YearHeader>{year}</YearHeader>
          <PostList>
            {postsByYear[year].map((post) => (
              <BlogPost key={post.slug} post={post} onClick={() => router.push(`/blog/${post.slug}`)} />
            ))}
          </PostList>
        </YearSection>
      ))}
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop}>^</ScrollToTopButton>}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = await markdownToHtml(content);
    const excerpt = htmlContent.replace(/<[^>]*>?/gm, '').substring(0, 390);
    const slug = filename.replace(/\.md$/, '');
    return { slug, ...data, excerpt } as Post;
  }));

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { props: { posts } };
}

// Styled Components
const Title = styled.h1`
  font-size: 6vw;
  font-weight: 600;
  line-height: .9em;
  color: black;
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  @media(max-width: 768px) {
    font-size: 8vw;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #666;
  width: 100%;
  text-align: left;
  padding-bottom: 40px;

  @media(max-width: 768px) {
    font-size: 1.25rem;
    padding-bottom: 5px;
  }
`;

const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const YearSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const YearHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const PostItem = styled.li`
  margin-bottom: 20px;
  padding: 1rem;
  border: 1px solid #ddd;
  transition: border-color 0.2s, border 0.2s, transform 0.2s, opacity 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #333;
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    border-top: none;
    padding-right: 5px;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;

    &:hover {
      border-color: black;
    }
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

const PostText = styled.div`
  flex: 1;
  margin-right: 18px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const PostImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;
  }

  @media (max-width: 520px) {
    width: 110px;
    height: 110px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostExcerpt = styled.p`
  font-size: 1.2rem;
  color: #555;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  max-height: 9em;
  min-height: 4em;

  @media (max-width: 720px) {
    -webkit-line-clamp: 3;
    max-height: 4.5em;
    min-height: 3em;
    font-size: 1rem;
  }
`;

const SeeMore = styled.span`
  color: black;
  cursor: pointer;
  font-weight: 550;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDateAuthor = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
  margin-bottom: 10px;

  em {
    font-style: italic;
  }

  @media(max-width: 768px) {
    font-size: 12px;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #F0F0F0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    bottom: 20px;
    right: 20px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
    bottom: 15px;
    right: 15px;
  }
`;
