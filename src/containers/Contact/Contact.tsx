import React, { useState } from 'react'
import './Contact.scss'

export const Contact = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='contact-heading'>Get in contact with me</h2>
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
            <div className='contact-form-item'>
              <label htmlFor='name' className='contact-form-item-label'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='contact-form-item-input'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div className='contact-form-item'>
              <label htmlFor='email' className='contact-form-item-label'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='contact-form-item-input'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
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
                value={message}
                onChange={({ target }) => setMessage(target.value)}
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
