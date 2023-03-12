import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Hero.scss'
import { useScroll } from '../../hooks/useScroll'

export const Hero = ({ introComplete }: { introComplete: boolean }): JSX.Element => {
  const positionY = useScroll()

  useEffect(() => {
    if (introComplete) {
      const tl = gsap.timeline()
      tl.to('.line', {
        duration: 0.8,
        ease: Expo.easeIn,
        y: '100%',
        stagger: { each: 0.4 },
      })
    }
  }, [introComplete])

  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <div className='content'>
          <h1 className='heading' style={{ transform: `translateY(-${positionY * 0.1}px)` }}>
            <span>I&#39;m Ikraam</span>
            <div className='line'></div>
          </h1>
          <h2 className='sub-heading' style={{ transform: `translateY(-${positionY * 0.08}px)` }}>
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
