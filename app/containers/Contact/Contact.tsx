import React, { useState } from "react";
import { Title } from "../../components";
import "./Contact.scss";

export const Contact = (): JSX.Element => {
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
    <section id="contact" className="contact">
      <div className="container">
        <Title title="Contact Me" />
        <div className="contact-form-container">
          <form className="contact-form" id="contact" onSubmit={handleSubmit}>
            <p className="hello">Hello,</p>
            <div className="contact-form-item">
              <label htmlFor="name" className="contact-form-item-label">
                My name is
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-form-item-input"
                placeholder="Enter your name here"
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
              />
            </div>
            <div className="contact-form-item">
              <label htmlFor="email" className="contact-form-item-label">
                Here is my email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-form-item-input"
                placeholder="Enter your email here"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>
            <div className="contact-form-item">
              <label htmlFor="message" className="contact-form-item-label ">
                Let&#39;s talk about
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className="contact-form-item-input message"
                placeholder="Enter your message here"
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="contact-form-submit"
                disabled={submitting}
              >
                Send
              </button>
            </div>
            <div className="form-message-container">
              <p
                className={`form-message ${
                  showSuccessMessage ? "visible" : ""
                }`}
              >
                Thank you for the message!
              </p>

              <p
                className={`form-message ${showErrorMessage ? "visible" : ""}`}
              >
                {error}
              </p>
            </div>{" "}
          </form>
        </div>
      </div>
    </section>
  );
};
