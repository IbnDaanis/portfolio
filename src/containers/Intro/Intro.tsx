import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Intro.scss'
import { Expo } from 'gsap/all'

export const Intro = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = 'hidden'
    }, 500)

    const handleComplete = (): void => {
      setTimeout(() => {
        document.body.style.overflow = 'unset'
      }, 4000)
    }

    const tl = gsap.timeline({ onComplete: handleComplete })

    tl.to('.welcome', {
      delay: 1,
      duration: 0.5,
      ease: Expo.easeInOut,
      opacity: 1,
    })
    tl.to('.letter', {
      delay: 1.5,
      duration: 1,
      ease: Expo.easeInOut,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'random',
      },
    })
    tl.to('.back', {
      duration: 1.5,
      ease: Expo.easeInOut,
      y: '-120%',
    })
  }, [])

  return (
    <section className='intro'>
      <h1 className='welcome'>
        <span className='letter'>W</span>
        <span className='letter'>e</span>
        <span className='letter'>l</span>
        <span className='letter'>c</span>
        <span className='letter'>o</span>
        <span className='letter'>m</span>
        <span className='letter'>e</span>
      </h1>
      <div className='back'></div>
    </section>
  )
}
