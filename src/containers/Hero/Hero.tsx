import React, { useEffect } from 'react'
import gsap from 'gsap'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.line', {
      delay: 5,
      duration: 0.8,
      ease: 'power3.out',
      y: '100%',
      stagger: { each: 0.4 },
    })
  }, [])

  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='heading'>
            Hello, <span>I&#39;m Ikraam</span>
            <div className='line'></div>
          </h1>
          <h2 className='sub-heading'>
            <span>
              Front-End Developer. <div className='line'></div>
            </span>
            <span>
              Self Taught. From London.<div className='line'></div>
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
