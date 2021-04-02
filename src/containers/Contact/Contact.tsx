import React from 'react'
import './Contact.scss'

export const Contact = (): JSX.Element => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='contact-heading'>Get in contact with me</h2>
        <div className='contact-form-container'>
          <form className='contact-form' name='contact' method='POST' data-netlify='true'>
            <div className='contact-form-item'>
              <label htmlFor='name' className='contact-form-item-label'>
                Name:
              </label>
              <input type='text' id='name' name='name' className='contact-form-item-input' />
            </div>

            <p>
              <button type='submit'>Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
