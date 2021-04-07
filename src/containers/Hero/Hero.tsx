import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)
  useEffect(() => {
    gsap.to([line1.current, line2.current, line3.current], 1, {
      delay: 1.5,
      ease: 'power3.out',
      y: '110%',
      stagger: 0.4,
    })
  }, [line1, line2])

  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='heading'>
            Hello, <span>I&#39;m Ikraam</span>
            <div className='line' ref={line1}></div>
          </h1>
          <h2 className='sub-heading'>
            <span>
              Front-End Developer. <div className='line' ref={line2}></div>
            </span>
            <span>
              Self Taught. From London.<div className='line' ref={line3}></div>
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
