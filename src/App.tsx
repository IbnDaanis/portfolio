import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Hero } from './components'
import { useWindowSize } from './hooks/useWindowSize'

export const App = (): JSX.Element => {
  const size = useWindowSize()

  const app = useRef<HTMLDivElement>(null)
  const scrollContainer = useRef<HTMLDivElement>(null)

  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer?.current?.getBoundingClientRect().height}px`
  }

  useEffect((): void => {
    setBodyHeight()
  }, [size.height])

  const data = useMemo(
    () => ({
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  )

  const skewScrolling = useCallback(() => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 1.5

    if (scrollContainer.current)
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`

    requestAnimationFrame(() => skewScrolling())
  }, [data, size.width])

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [skewScrolling])

  return (
    <div className='app' ref={app}>
      <h2>Smooth Scrolling</h2>
      <div className='scroll-container' ref={scrollContainer}>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </div>
    </div>
  )
}
