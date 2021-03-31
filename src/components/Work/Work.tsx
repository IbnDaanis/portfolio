import React from 'react'
import UltraStore from '../assets/images/ultrastore.png'
import { GithubIcon } from '../assets'

import './Work.scss'

export const Work = (): JSX.Element => {
  return (
    <section id='work' className='work'>
      <div className='container'>
        <h2 className='work-heading'>Here&#39;s what I&#39;ve been up to...</h2>
        <div className='projects'>
          <article className='project'>
            <div className='project-details'>
              <h3 className='project-details title'>UltraStore</h3>
              <p className='project-details-description'>
                This is my first big project. It&#29;s an E-commerce store build with React, Node
                JS, MongoDB and Express. Many hours was spent building the backend using and pairing
                that with a user-friendly font-end with a simple and professional design thanks to
                React Bootstrap and my own CSS.{' '}
                <a href='https://github.com/IbnDaanis/ultrastore' rel='noreferrer' target='_blank'>
                  <GithubIcon />
                </a>
              </p>
              <h4 className='project-details-features'>Features Include:</h4>
              <div className='project-details-features-lists'>
                <ul className='list'>
                  <li>- Shopping Cart</li>
                  <li>- PayPal Payment</li>
                  <li>- Account Creation</li>
                  <li>- User Reviews</li>
                </ul>
                <ul className='list'>
                  <li>- Checkout Process</li>
                  <li>- Add/Remove Products</li>
                  <li>- Product Search</li>
                  <li>- Admin Controls</li>
                </ul>
              </div>
            </div>
            <div className='project-image'>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                title='Click to visit this project on a new tab'
              >
                <img src={UltraStore} alt='Project Image' />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
