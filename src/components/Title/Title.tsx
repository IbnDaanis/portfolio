import React, { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import './Title.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

type text = string

export const Title = ({ title }: { title: text }): JSX.Element => {
  const { width } = useWindowSize()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: `.title-${title.replace(' ', '')}`,
        start: width < 600 ? 'top 80%' : 'top bottom',
      },
    })

    titleTl.to(`.title-${title.replace(' ', '')}`, {
      duration: 1,
      y: 0,
      ease: 'power3.out',
    })

    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: `.title-line-${title.replace(' ', '')}`,
        start: width < 600 ? 'top 80%' : 0,
      },
    })

    lineTl.to(`.title-line-${title.replace(' ', '')}`, {
      delay: -0.8,
      duration: 1.5,
      ease: 'power3.out',
      width: '100%',
    })
  }, [width, title])

  return (
    <div className='title-container'>
      <h2 className={`title title-${title.replace(' ', '')}`}>{title}</h2>
      <div className={`title-line title-line-${title.replace(' ', '')}`}></div>
    </div>
  )
}
