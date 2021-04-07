import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Intro.scss'

export const Intro = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
    }, 500)

    const handleComplete = (): void => {
      document.body.style.overflow = 'unset'
    }
    const tl = gsap.timeline({ onComplete: handleComplete })

    tl.to('.welcome', {
      delay: 1,
      duration: 0.5,
      ease: 'power3.out',
      opacity: 1,
    })
    tl.to('.welcome', {
      delay: 1.5,
      duration: 1,
      ease: 'power3.out',
      opacity: 0,
    })
    tl.to('.back', {
      duration: 1.5,
      ease: 'power3.out',
      y: '-100%',
    })
  }, [])

  return (
    <section className='intro'>
      <h1 className='welcome'>Welcome</h1>
      <div className='back'></div>
    </section>
  )
}
