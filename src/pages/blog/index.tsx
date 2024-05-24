import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ExportedImage from "next-image-export-optimizer";
import markdownToHtml from '../../../lib/markdownToHtml';
import Head from 'next/head';

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

export default function BlogList({ posts }: BlogListProps) {
  const router = useRouter();

  // Group posts by year
  const postsByYear = posts.reduce<Record<number, Post[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
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
    <Container>
      {years.map((year) => (
        <YearSection key={year}>
          <YearHeader>{year}</YearHeader>
          <PostList>
            {postsByYear[year].map((post) => (
              <PostItem key={post.slug} onClick={() => router.push(`/blog/${post.slug}`)}>
                <PostContent>
                  <PostText>
                    <PostDateAuthor>{formatDate(post.date)} by Patrick Prunty</PostDateAuthor>
                    <PostTitle>{post.title}</PostTitle>
                    <PostExcerpt>
                      {post.excerpt}... <SeeMore onClick={() => router.push(`/blog/${post.slug}`)}>Read more</SeeMore>
                    </PostExcerpt>
                  </PostText>
                  <PostImageWrapper>
                    <ExportedImage
                      src={isExport ? `${post.image}` : post.image}
                      alt={post.title}
                      layout="fixed"
                      width={800}
                      height={500} // Adjust height to match the new dimensions
                      objectFit="cover"
                      placeholder={'blur'}
                    />
                  </PostImageWrapper>
                </PostContent>
              </PostItem>
            ))}
          </PostList>
        </YearSection>
      ))}
    </Container>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts: Post[] = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = await markdownToHtml(content);
    const excerpt = htmlContent.replace(/<[^>]*>?/gm, '').substring(0, 200); // Remove HTML tags and take first 200 characters
    const slug = filename.replace(/\.md$/, '');
    return { slug, ...data, excerpt } as Post;
  }));

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { props: { posts } };
}

// Styled Components
const Container = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  padding: 18px;
`;

const PostTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
//   margin: 10px 0;
  color: black;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: none;
  }
`;

const YearSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const YearHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 18px;
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
  transition: border-color 0.2s, transform 0.2s, opacity 0.2s; /* Add transform and opacity transitions */
  cursor: pointer; /* Add cursor pointer to indicate clickable item */

  &:hover {
    border-color: #333; /* Darken the border color on hover */
  }

  &:active {
    transform: scale(0.99); /* Scale down slightly when pressed */
    opacity: 0.8; /* Slightly reduce opacity when pressed */
  }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1 px solid black;

        &:hover {
          border-color: black; /* Darken the border color on hover */
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
//     margin-bottom: 18px;
  }
`;

const PostImageWrapper = styled.div`
  width: 150px; // Increase width
  height: 150px; // Increase height
  overflow: hidden;

  @media (max-width: 768px) {
     width: 125px; // Increase width
     height: 125px; // Increase height
  }

    @media (max-width: 520px) {
       width: 110px; // Increase width
       height: 110px; // Increase height
    }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Ensure the image covers the entire wrapper
  }
`;

const PostExcerpt = styled.p`
  font-size: 16px;
  color: #555;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* Limit to 4 lines */
  overflow: hidden;
  max-height: 6em; /* 1.5em * 4 lines */
  min-height: 4em; /* Ensure minimum height */

  @media (max-width: 480px) {
    -webkit-line-clamp: 3; /* Limit to 3 lines on mobile */
    max-height: 4.5em; /* 1.5em * 3 lines */
    min-height: 3em; /* Ensure minimum height */
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
  font-size: 12px;
  color: #777;
  margin: 0;
  margin-bottom: 10px;

  em {
    font-style: italic;
  }
`;
