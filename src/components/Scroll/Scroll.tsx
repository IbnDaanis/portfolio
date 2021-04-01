import React, { useEffect, useRef } from 'react'
import { useScroll } from '../../hooks/useScroll'
import { useWindowSize } from '../../hooks/useWindowSize'
import './Scroll.scss'

export const Scroll = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  const size = useWindowSize()

  const app = useRef<HTMLDivElement>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)

  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer?.current?.getBoundingClientRect().height}px`
  }

  useEffect((): void => {
    setBodyHeight()
  }, [size])

  const positionY = useScroll()

  useEffect(() => {
    if (scrollContainer.current)
      scrollContainer.current.style.transform = `translate3d(0, -${positionY}px, 0)`
  }, [positionY])

  return (
    <div className='app-container' ref={app}>
      <div className='scroll-container' ref={scrollContainer}>
        {children}
      </div>
    </div>
  )
}
