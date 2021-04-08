import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import './Title.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

type text = string

export const Title = ({ title }: { title: text }): JSX.Element => {
  const { width } = useWindowSize()

  const titleEl = useRef<HTMLHeadingElement>(null)
  const lineEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (titleEl.current && lineEl.current) {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleEl.current,
          start: width < 600 ? 'top 80%' : '50% 90%',
        },
      })

      titleTl.to([titleEl.current], {
        duration: 1,
        y: 0,
        ease: 'power3.out',
      })

      const lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: lineEl.current,
          start: width < 600 ? 'top 80%' : '50% 90%',
        },
      })

      lineTl.to([lineEl.current], {
        delay: -0.8,
        duration: 1.5,
        ease: 'power3.out',
        width: '100%',
      })
    }
  }, [width, title])

  return (
    <div className='title-container'>
      <h2 className={`title title-${title.replace(' ', '')}`} ref={titleEl}>
        {title}
      </h2>
      <div className={`title-line title-line-${title.replace(' ', '')}`} ref={lineEl}></div>
    </div>
  )
}
