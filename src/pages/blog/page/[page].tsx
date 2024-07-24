import React, { useEffect, useState, useMemo } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ExportedImage from "next-image-export-optimizer";
import markdownToHtml from '../../../../lib/markdownToHtml';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Pagination from '@/components/Pagination'; // Adjust the path as needed
import PageLoader from '@/components/PageLoader'; // Adjust the path if needed
import formatDate from '@/utils/formatDate';

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';


const StyledLink = styled.a`
  color: #666; // Default text color
  text-decoration: none; // Remove underline by default
  transition: color 0.3s, text-decoration 0.3s;

  &:hover {
    color: #000; // Ensure color stays black on hover
    text-decoration: underline; // Underline text on hover
  }

//   display: inline-block;
  align-items: center;

  svg {
    margin: 0px 3px;
  }
`;


const SvgIcon = () => (
  <svg width="18" height="18" viewBox="0 0 30 30" fill="currentColor">
    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
  </svg>
);

interface Post {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
  excerpt: string;
  type: string;
}

interface Ad {
  isAd: boolean;
}

interface BlogListProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}


const BlogPost = ({ post, formattedDate, onClick }: { post: Post, formattedDate: string, onClick: () => void }) => {
  const contentToDisplay = (post.excerpt.length < 200 || post.excerpt.length > 15000 || post.type === "poem") ? post.description : post.excerpt;

  return (
    <PostItem onClick={onClick}>
      <PostContent>
        <PostText>
          <PostDateAuthor>{formattedDate} by Patrick Prunty</PostDateAuthor>
          <PostTitle>{post.title}</PostTitle>
          <PostExcerpt>
            {contentToDisplay} {post.type !== "poem" ? <> ... <SeeMore onClick={onClick}>Read more</SeeMore> </> : null}
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
};

export default function BlogList({ posts, currentPage, totalPages }: BlogListProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);



  const handlePostClick = (slug: string) => {
    setLoading(true);
    router.push(`/blog/${slug}`);
  };

  // Calculate a random position for the ad
  const randomIndex = Math.floor(Math.random() * (posts.length - 2)) + 1;

  // Insert the ad at the random position
  const postsWithAd = [
    ...posts.slice(0, randomIndex),
    { isAd: true },
    ...posts.slice(randomIndex)
  ];

  // Group posts by year, including ads, just for the displayed posts
  const postsByYear: Record<number, (Post | Ad)[]> = {};

  postsWithAd.forEach((post) => {
    if ('date' in post && post.date) {
      const year = new Date(post.date).getFullYear();
      if (!postsByYear[year]) {
        postsByYear[year] = [];
      }
      postsByYear[year].push(post);
    }
  });

  // Filter out years that have no posts to display on the current page
  const years = Object.keys(postsByYear)
    .map(Number)
    .filter(year => postsByYear[year].length > 0) // Ensure there are posts in this year
    .sort((a, b) => b - a);

  return (
    <>
      <Head>
        <title>Patrick Prunty - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Patrick Prunty's Blog" />
        <meta property="og:image" content="https://patrickprunty.com/images/favicon.png" />
        <meta property="og:description" content="Welcome to my personal blog where I share insights, stories, and updates on my work and interests." />
        <meta name="keywords" content="patrick prunty, jigsaw, programming, python, youtube, education, blog" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <PageLoader loading={loading} />
      <Title>Patrick Prunty's Blog</Title>
      <Subtitle>
        Welcome to my personal blog where I share insights, stories, and updates on my work and interests. I currently write for a variety of Medium Publications
        such as <StyledLink href="https://levelup.gitconnected.com/" target="_blank" rel="noopener noreferrer">Level Up Coding<SvgIcon /></StyledLink>,
        <StyledLink href="https://medium.com/digital-global-traveler" target="_blank" rel="noopener noreferrer"> Digital Global Traveler<SvgIcon /></StyledLink>,
        <StyledLink href="https://medium.com/swlh" target="_blank" rel="noopener noreferrer"> Start it Up<SvgIcon /></StyledLink>, and more. Explore the posts below to read more.
      </Subtitle>
      {years.map(year => (
        <YearSection key={year}>
          <YearHeader>{year}</YearHeader>
          <PostList>
            {postsByYear[year].map((post, index) => (
              <BlogPost
                key={(post as Post).slug}
                post={post as Post}
                formattedDate={formatDate((post as Post).date)}
                onClick={() => handlePostClick((post as Post).slug)}
              />
            ))}
          </PostList>
        </YearSection>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

const POSTS_PER_PAGE = 5;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = params?.page ? parseInt(params.page as string, 10) : 1;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const filteredFilenames = process.env.NODE_ENV === 'production'
    ? filenames.filter((filename) => /^\d+.*\.md$/.test(filename))
    : filenames;

  const posts = await Promise.all(
    filteredFilenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const htmlContent = await markdownToHtml(content);
      const excerpt = htmlContent.replace(/<[^>]*>?/gm, '').substring(0, 390);
      const slug = filename.replace(/\.md$/, '');
      return { slug, ...data, excerpt } as Post;
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return {
    props: {
      posts: paginatedPosts,
      currentPage: page,
      totalPages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const totalPosts = filenames.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

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
  border: 2px solid #ddd;
  transition: border-color 0.2s, border 0.2s, transform 0.2s, opacity 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #333;
  }

  &:active {
    transform: scale(0.99);
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
    border-bottom: 1.5px solid black;

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
  margin-right: 1.5em;

  @media (max-width: 768px) {
    margin-right: 8px;
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

  @media (max-width: 520px) {
    width: 100px;
    height: 100px;
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
  max-height: 9em; // Adjust this if needed to ensure it fits the excerpt and the SeeMore link
  min-height: 4em; // Adjust this to ensure visibility on all devices

  @media (max-width: 720px) {
    -webkit-line-clamp: 4; // Allows more text and makes sure "Read more" is visible
    max-height: 6em; // Increase if needed to fit the text and "Read more" link
    min-height: 4.5em; // Ensure this is enough to show the link
    font-size: 1rem;
  }

    @media (max-width: 420px) {
      max-width: 235px;
      margin-block-start: 0.7em !important;
    }
`;

const SeeMore = styled.span`
  color: black;
  cursor: pointer;
  font-weight: 550;
  display: inline !important; // Force it to always be inline

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

const AdWrapper = styled.div`
  margin: 20px 0;
`;
