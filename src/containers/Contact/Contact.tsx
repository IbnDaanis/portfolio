import React, { useState } from 'react'
import './Contact.scss'

interface IObjectKeys {
  [key: string]: string
}

interface IFormData extends IObjectKeys {
  'form-name': string
  name: string
  email: string
}

export const Contact = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const encode = (data: IFormData) => {
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
      console.log(key, data[key])
    })
    return formData
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const data: IFormData = { 'form-name': 'contactForm', name, email }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
  }

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
            onSubmit={handleSubmit}
            id='contactForm'
          >
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
