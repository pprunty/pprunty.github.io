import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
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

const PostWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .substack-post-embed {
    width: 100%;
    height: auto;
  }

  .substack-post-embed p {
    margin: 0;
    padding: 0;
  }

  .substack-post-embed a {
    display: block;
    margin-top: 10px;
  }
`;

const substackPosts = [
  {
    title: "What I Read This Week... by Chamath Palihapitiya",
    description: "Google's Deepmind releases a new biology prediction tool, Apple is finalizing a deal with OpenAI, and more than a third of 18-24 year-olds reported no income in 2022",
    link: "https://chamath.substack.com/p/what-i-read-this-week-2ec",
  },
  {
    title: "What OpenAI did by Ethan Mollick",
    description: "A new model opens up new possibilities",
    link: "https://www.oneusefulthing.org/p/what-openai-did",
  },
  {
      title: "What OpenAI did by Ethan Mollick",
      description: "A new model opens up new possibilities",
      link: "https://www.oneusefulthing.org/p/what-openai-did",
    }
  // Add more posts here
];

const Post: React.FC<{ post: { title: string; description: string; link: string } }> = ({ post }) => {
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postRef.current) {
      const script = document.createElement('script');
      script.src = 'https://substack.com/embedjs/embed.js';
      script.async = true;
      script.charset = 'utf-8';
      postRef.current.appendChild(script);
    }
  }, []);

  return (
    <PostWrapper ref={postRef}>
      <div className="substack-post-embed">
        <p lang="en">{post.title}</p>
        <p>{post.description}</p>
        <a data-post-link href={post.link} target="_blank" rel="noopener noreferrer">
          Read on Substack
        </a>
      </div>
    </PostWrapper>
  );
};

const Writing: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to My Next.js Writing Page!</Title>
      <Grid>
        {substackPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Grid>
    </Container>
  );
};

export default Writing;