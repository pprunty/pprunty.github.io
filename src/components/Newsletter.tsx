import { useState } from 'react';
import styled from 'styled-components';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setMessage('Email cannot be empty.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch("https://crossorigin.me/https://eu-central-1.aws.data.mongodb-api.com/app/data-dfmdz/endpoint/data/v1/action/insertOne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key": process.env.NEXT_PUBLIC_API_KEY,
          "x-requested-with": "XMLHttpRequest", // Add x-requested-with header
          "Origin": "https://patrickprunty.com"
        },
        body: JSON.stringify({
          collection: "emails",
          database: "newsletter",
          dataSource: "Cluster0",
          document: {
            email: email,
            timestamp: (new Date()).toISOString()
          }
        })
      });

      const data = await response.json();
      if (data.insertedId) {
        setMessage('Thank you for subscribing!');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('There was an error:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SubscribeContainer>
      <SubscribeTitle>Patrick Prunty's Newsletter</SubscribeTitle>
      <SubscribeSubtitle>Stay updated with my latest articles!</SubscribeSubtitle>
      <Form id="subscribe-form" onSubmit={handleSubmit}>
        <SubscribeInputContainer>
          <SubscribeInput
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <SubscribeButton type="submit" disabled={loading}>
            <ButtonText>{loading ? 'Loading...' : 'Subscribe'}</ButtonText>
          </SubscribeButton>
        </SubscribeInputContainer>
      </Form>
      {message && <Message className={message.includes('Thank you') ? 'success-message' : 'error-message'}>{message}</Message>}
    </SubscribeContainer>
  );
};

// Styled Components
const SubscribeContainer = styled.div`
  text-align: center;
  margin-top: 3.5em;
  margin-bottom: 3.5em;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const SubscribeTitle = styled.div`
  font-weight: 550;
  margin-bottom: 10px;
  font-size: 24px;
`;

const SubscribeSubtitle = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
`;

const SubscribeInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubscribeInput = styled.input`
  border: 1px solid #333;
  min-width: 280px;
  height: 50px;
  border: 1px solid #333;
  border-radius: 0px !important;
  font-size: 16px;
  border-right: none !important;
  background-color: #f0f0f0;
  padding-left: 10px;
  outline: none;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-width: 200px;
  }

//   &:disabled {
//     background-color: #f0f0f0;
//   }
`;

const SubscribeButton = styled.button`
  height: 50px;
  border-radius: 0px !important;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #333;
  font-weight: 600;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:active {
     background-color: #333;
     color: #F0F0F0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonText = styled.div`
  text-align: center;
  align-self: center;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 14px;

  &.success-message {
    color: #333;
    margin-top: 10px;
  }

  &.error-message {
    color: #FF0000;
    margin-top: 10px;
  }
`;

export default Newsletter;
