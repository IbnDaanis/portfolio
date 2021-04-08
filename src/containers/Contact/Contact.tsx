import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Contact.scss'
import { Title } from '../../components'

export const Contact = (): JSX.Element => {
  useEffect(() => AOS.init({ once: true }), [])

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <Title title='Contact Me' />
        <div className='contact-form-container'>
          <form
            className='contact-form'
            name='contact'
            method='POST'
            data-netlify='true'
            action='/?success=true'
            id='contact'
          >
            <input type='hidden' name='form-name' value='contact' />
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
              <button type='submit' className='contact-form-submit'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
