import React, { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import './Title.scss'

type text = string

export const Title = ({ title }: { title: text }): JSX.Element => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const titleTl = gsap.timeline({
      scrollTrigger: `.title-${title.replace(' ', '')}`,
      start: 0,
    })

    titleTl.from(`.title-${title.replace(' ', '')}`, {
      duration: 1,
      y: '100%',
      ease: 'power3.out',
    })

    const lineTl = gsap.timeline({
      scrollTrigger: `.title-line-${title.replace(' ', '')}`,
      start: 0,
    })

    lineTl.to(`.title-line-${title.replace(' ', '')}`, {
      delay: -0.8,
      duration: 1.5,
      ease: 'power3.out',
      width: '100%',
    })
  }, [title])

  return (
    <div className='title-container'>
      <h2 className={`title title-${title.replace(' ', '')}`}>{title}</h2>
      <div className={`title-line title-line-${title.replace(' ', '')}`}></div>
    </div>
  )
}
