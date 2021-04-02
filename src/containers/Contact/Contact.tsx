import React from 'react'
import './Contact.scss'

export const Contact = (): JSX.Element => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='contact-heading'>Get in contact with me</h2>
        <div className='contact-form-container'>
          <form
            className='contact-form'
            name='contactForm'
            method='POST'
            data-netlify='true'
            id='contactForm'
          >
            <div className='contact-form-item'>
              <label htmlFor='name' className='contact-form-item-label'>
                Name:
              </label>
              <input type='text' id='name' name='name' className='contact-form-item-input' />
            </div>
            <div className='contact-form-item'>
              <label htmlFor='email' className='contact-form-item-label'>
                Email:
              </label>
              <input type='email' id='email' name='email' className='contact-form-item-input' />
            </div>
            <div className='contact-form-item'>
              <label htmlFor='message' className='contact-form-item-label '>
                Message:
              </label>
              <input
                type='text'
                id='message'
                name='message'
                className='contact-form-item-input message'
              />
            </div>
            <button type='submit' className='contact-form-submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
