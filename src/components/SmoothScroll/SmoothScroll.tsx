import React, { useCallback, useEffect, useMemo, useRef } from 'react'

import './SmoothScroll.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

interface children {
  children: JSX.Element[]
}

type scrollData = {
  ease: number
  current: number
  previous: number
  rounded: number
}

export const SmoothScroll = ({ children }: children): JSX.Element => {
  const windowSize = useWindowSize()
  const scrollingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setBodyHeight()
  }, [windowSize.height])

  const setBodyHeight = (): void => {
    if (null !== scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`
    }
  }

  const data: scrollData = useMemo(
    () => ({
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  )

  const smoothScrollingHandler = useCallback(() => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    if (null !== scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`
    }

    requestAnimationFrame(() => smoothScrollingHandler())
  }, [data])

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
  }, [smoothScrollingHandler])
  return (
    <div className='parent'>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  )
}
