import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { theme } from "../../styles/globalStyle";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    const data = JSON.stringify({ name, email, message });

    const handleError = (error: string): void => {
      setError(error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
    };

    fetch("https://formspree.io/f/meqvqvab", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        console.log(response);
        setSubmitting(false);

        if (response.status === 200) {
          setMessage("");
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          return;
        }

        handleError("There was a problem sending your message.");
      })
      .catch(error => {
        console.error(error);
        setSubmitting(false);
        handleError("There was a problem sending your message.");
      });
  };

  return (
    <Container id="contact">
      <Title title="Contact Me" />
      <FormContainer>
        <Form id="contact" onSubmit={handleSubmit}>
          <Hello>Hello,</Hello>
          <FormItem>
            <FormItemLabel htmlFor="name">My name is</FormItemLabel>
            <FormItemInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
          </FormItem>
          <FormItem>
            <FormItemLabel htmlFor="email">Here is my email</FormItemLabel>
            <FormItemInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </FormItem>
          <FormItem>
            <FormItemLabel htmlFor="message">
              Let&#39;s talk about
            </FormItemLabel>
            <FormItemInput
              type="text"
              id="message"
              name="message"
              placeholder="Enter your message here"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
              required
            />
          </FormItem>
          <ButtonContainer>
            <SubmitButton type="submit" disabled={submitting}>
              Send
            </SubmitButton>
          </ButtonContainer>
          <MessageContainer>
            <FormMessage className={`${showSuccessMessage ? "visible" : ""}`}>
              Thank you for the message!
            </FormMessage>
            <FormMessage className={`${showErrorMessage ? "visible" : ""}`}>
              {error}
            </FormMessage>
          </MessageContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 95%;
  width: 1920px;
  margin: 0 auto;
  padding: 0 0 15rem;

  @media (max-width: 1000px) {
    max-width: 85%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Hello = styled.p`
  margin-right: 25rem;
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, calc(34px + 106 * (100vw - 420px) / 1600), 8.25rem);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 1000px) {
    align-self: flex-start;
    margin-bottom: 1rem;
  }
`;

const FormItem = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`;

const FormItemLabel = styled.label`
  flex-grow: 1;
  flex-shrink: 0;
  width: fit-content;
  margin-right: 1rem;
  font-size: clamp(2rem, calc(34px + 106 * (100vw - 420px) / 1600), 8.25rem);
  font-weight: 600;
  line-height: 100%;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  letter-spacing: 0.5px;
`;
const FormItemInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 0.7rem;
  color: ${theme.$placeholder};
  font-size: clamp(1.2rem, calc(16px + 10 * (100vw - 420px) / 1600), 2rem);
  font-weight: 500;
  text-align: center;
  border: 0;
  border-bottom: 2px solid ${theme.$placeholder};
  background: 0;
  border-radius: 0;
  outline: 0;
  transition: 0.2s ease-in-out;

  &:focus {
    color: ${theme.$textWhite};
    border-bottom: 2px solid ${theme.$lightPink};
  }

  @media (max-width: 1000px) {
    padding: 0.5rem 0.2rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;

const SubmitButton = styled.button`
  width: 10rem;
  height: 10rem;
  font-size: 2.5rem;
  font-weight: 600;
  background: ${theme.$lightPink};
  outline: 0;
  border: 0;
  border-radius: 50%;
  transition: 0.2s ease-in-out;

  @media (max-width: 600px) {
    width: 7rem;
    height: 7rem;
    font-size: 1.5rem;
  }

  &:hover {
    filter: brightness(1.05);
    transform: scale(1.05);
  }

  &:active {
    background: ${theme.$textWhite};
  }
`;

const MessageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1.5rem;
`;

const FormMessage = styled.p`
  position: absolute;
  left: 50%;
  font-size: 1.2rem;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%);
  transition: 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;
