import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Title } from '../../components'
import './Contact.scss'

export const Contact = (): JSX.Element => {
  useEffect(() => AOS.init({ once: true }), [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitting(true)
    const data = JSON.stringify({ name, email, message })

    fetch('https://formspree.io/f/meqvqvab', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        console.log(response)
        setMessage('')
        setSubmitting(false)
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 5000)
      })
      .catch(error => {
        console.error(error)
        setSubmitting(false)
        setError(error)
        setShowErrorMessage(true)
        setTimeout(() => {
          setShowErrorMessage(false)
        }, 5000)
      })
  }

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <Title title='Contact Me' />
        <div className='contact-form-container'>
          <form className='contact-form' id='contact' onSubmit={handleSubmit}>
            <p
              className='hello'
              data-aos='fade-up'
              data-aos-offset='250'
              data-aos-duration='800'
              data-aos-easing='ease-in-out'
            >
              Hello,
            </p>
            <div
              className='contact-form-item'
              data-aos='fade-up'
              data-aos-offset='250'
              data-aos-duration='800'
              data-aos-easing='ease-in-out'
            >
              <label htmlFor='name' className='contact-form-item-label'>
                My name is
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='contact-form-item-input'
                placeholder='Enter your name here'
                value={name}
                onChange={({ target }) => setName(target.value)}
                required
              />
            </div>
            <div
              className='contact-form-item'
              data-aos='fade-up'
              data-aos-offset='250'
              data-aos-duration='800'
              data-aos-easing='ease-in-out'
            >
              <label htmlFor='email' className='contact-form-item-label'>
                Here is my email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='contact-form-item-input'
                placeholder='Enter your email here'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>
            <div
              className='contact-form-item'
              data-aos='fade-up'
              data-aos-offset='250'
              data-aos-duration='800'
              data-aos-easing='ease-in-out'
            >
              <label htmlFor='message' className='contact-form-item-label '>
                Let&#39;s talk about
              </label>
              <input
                type='text'
                id='message'
                name='message'
                className='contact-form-item-input message'
                placeholder='Enter your message here'
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                required
              />
            </div>
            <div
              className='button-container'
              data-aos='fade-up'
              data-aos-offset='100'
              data-aos-duration='800'
              data-aos-easing='ease-in-out'
            >
              <button type='submit' className='contact-form-submit' disabled={submitting}>
                Send
              </button>
            </div>
            {showSuccessMessage && <p className='form-message'>Thank you for the message!</p>}
            {showErrorMessage && <p className='form-message'>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
