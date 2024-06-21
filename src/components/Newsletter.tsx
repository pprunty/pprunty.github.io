import { useState } from 'react';
import styled from 'styled-components';
import ClipSpinner from './ClipSpinner'; // Adjust the path if needed

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

    const scriptUrl = "https://script.google.com/macros/s/AKfycbxYXBP_GiOutJgd6hSkO2_PGXOrRNd7yQV066B7Sq3iOCE7nKFgO-mr7gQwy9BhKZNI/exec";

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: 'no-cors', // Important as Apps Script does not support CORS
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email
        })
      });

      // Since 'no-cors' mode is used, the response is opaque and we cannot read its contents.
      // We'll assume the subscription is successful if no error is thrown.
      setMessage('Thank you for subscribing!');
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
      <SubscribeSubtitle>Be part of a growing community of { /* process.env.NEXT_PUBLIC_SUBSCRIBERS + '+'*/} subscribers and stay updated with my latest blog posts!</SubscribeSubtitle>
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
            <ButtonContent>
              {loading ? <ClipSpinner loading={true} size={20} color="#F0F0F0" /> : 'Subscribe'}
            </ButtonContent>
          </SubscribeButton>
        </SubscribeInputContainer>
      </Form>
      {message && <Message className={message.includes('Thank you') ? 'success-message' : 'error-message'}>{message}</Message>}
    </SubscribeContainer>
  );
};

export default Newsletter;

// Styled Components
const SubscribeContainer = styled.div`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 420px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const SubscribeTitle = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 2rem;
  color: #000;
`;

const SubscribeSubtitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  color: #4D4D4D;
`;

const Form = styled.form`
  width: 100%;
`;

const SubscribeInputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubscribeInput = styled.input`
  border: 1px solid #000;
  min-width: 280px;
  height: 50px;
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
`;

const SubscribeButton = styled.button`
  height: 50px;
  width: 120px; /* Set a fixed width for the button */
  border-radius: 0px !important;
  padding: 0; /* Remove padding to maintain consistent size */
  font-size: 16px;
  cursor: pointer;
  background-color: #333;
  border: 1px solid #333;
  font-weight: 600;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover, &:active, &.active {
     background-color: #4D4D4D;
     color: #F0F0F0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensure the content container takes full width of the button */
`;

const Message = styled.div`
  margin-top: 30px;
  font-size: 14px;

  &.success-message {
    color: #333;
  }

  &.error-message {
    color: #FF0000;
  }
`;
