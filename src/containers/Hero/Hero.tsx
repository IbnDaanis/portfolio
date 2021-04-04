import React from 'react'
import { useScroll } from '../../hooks/useScroll'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  const positionY = useScroll()

  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 style={{ transform: `translateY(-${positionY * 0.1}px)` }}>Hello, I&#39;m Ikraam</h1>
          <h2 style={{ transform: `translateY(-${positionY * 0.05}px)` }}>
            Front-End Developer. Self Taught. From London. Looking forward to enter the Industry.
          </h2>
        </div>
      </div>
    </section>
  )
}
