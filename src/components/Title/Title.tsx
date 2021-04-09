import React, { MutableRefObject, useEffect, useRef } from 'react'
import './Title.scss'
import { gsap, ScrollTrigger } from 'gsap/all'
import { useWindowSize } from '../../hooks/useWindowSize'

type TText = string

interface IAnimation {
  [key: string]: number | string
}

export const Title = ({ title }: { title: TText }): JSX.Element => {
  const { width } = useWindowSize()

  const titleEl = useRef() as MutableRefObject<HTMLHeadingElement>
  const lineEl = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const titleAnimation = (element: HTMLHeadingElement | HTMLDivElement, options: IAnimation) => {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: width < 600 ? 'top 80%' : '50% 90%',
        },
      })
      tl.to(element, {
        ...options,
      })
    }

    titleAnimation(titleEl.current, { duration: 1, y: 0, ease: 'power3.out' })
    titleAnimation(lineEl.current, {
      delay: -0.8,
      duration: 1.5,
      ease: 'power3.out',
      width: '100%',
    })
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
