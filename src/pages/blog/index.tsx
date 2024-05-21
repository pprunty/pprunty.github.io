import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ExportedImage from "next-image-export-optimizer";

const isExport = process.env.NEXT_PUBLIC_IS_EXPORT === 'true';

export default function BlogList({ posts }) {
  const router = useRouter();

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Get an array of years sorted in descending order
  const years = Object.keys(postsByYear).sort((a, b) => b - a);

  return (
    <Container>
      {years.map((year) => (
        <YearSection key={year}>
          <YearHeader>{year}</YearHeader>
          <PostList>
            {postsByYear[year].map((post) => (
              <PostItem key={post.slug} onClick={() => router.push(`/blog/${post.slug}`)}>
                <PostImageWrapper>
                  <ExportedImage
                    src={isExport ? `/patrickprunty${post.image}` : post.image}
                    alt={post.title}
                    layout="responsive"
                    width={800}
                    height={400}
                    placeholder={'blur'}
                  />
                </PostImageWrapper>
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.description}</PostDescription>
              </PostItem>
            ))}
          </PostList>
        </YearSection>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '');
    return { slug, ...data };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { props: { posts } };
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

const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10px 0;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const YearSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
`;

const YearHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const PostItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.2s;
  cursor: pointer; /* Add cursor pointer to indicate clickable item */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

const PostDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
