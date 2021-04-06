import React from 'react'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='heading'>
            Hello, <span>I&#39;m Ikraam</span>
          </h1>
          <h2 className='sub-heading'>
            Front-End Developer. Self Taught. From London. Looking forward to enter the Industry.
          </h2>
        </div>
      </div>
    </section>
  )
}
