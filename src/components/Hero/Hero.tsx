import React from 'react'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <h1>
          Hello, I&#39;m <span>Ikraam</span>
        </h1>
        <h2>
          Front-End Developer. Self Taught. Looking forward to enter the Industry.
          <br />
          <span>ASAP</span>
        </h2>
        <svg width='389' height='380' viewBox='0 0 389 380' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 290.64V0H100V380L0 290.64Z'></path>
          <path d='M270 0H0V100H270V0Z'></path>
          <path d='M389 89.36V380H289V0L389 89.36Z'></path>
          <path d='M119 380H389V280H119V380Z'></path>
        </svg>
      </div>
    </section>
  )
}
