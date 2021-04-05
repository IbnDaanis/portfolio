import React from 'react'
import { useScroll } from '../../hooks/useScroll'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  const positionY = useScroll()

  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='heading' style={{ transform: `translateY(-${positionY * 0.2}px)` }}>
            Hello, <span>I&#39;m Ikraam</span>
          </h1>
          <h2 className='sub-heading' style={{ transform: `translateY(-${positionY * 0.1}px)` }}>
            Front-End Developer. Self Taught. From London. Looking forward to enter the Industry.
          </h2>
        </div>
      </div>
    </section>
  )
}
