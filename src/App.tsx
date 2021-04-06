import React, { useEffect, useState } from 'react'
import { Header, Scroll } from './components'
import { About, Contact, Hero, Projects } from './containers'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  useEffect(() => {
    console.clear()
  }, [])

  const [cursorPosition, setCursorPosition] = useState({ pageY: -30, pageX: -30 })
  const { pageY, pageX } = cursorPosition

  const [pointer, setPointer] = useState(false)
  useEffect(() => {
    document.addEventListener('mouseleave', () => {
      setCursorPosition({ pageY: -30, pageX: -30 })
    })
    document.addEventListener('mousemove', event => {
      const element: HTMLAnchorElement | null = document.querySelector('.project-image a')
      if (event.target && element && element.contains(event.target as Node)) {
        setPointer(true)
        return setCursorPosition({ pageY: event.clientY - 20, pageX: event.clientX - 20 })
      }
      setPointer(false)
      setCursorPosition({ pageY: event.clientY - 10, pageX: event.clientX - 10 })
    })
  }, [])

  return (
    <>
      <Header />
      {userAgentMobile ? (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <Scroll>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Scroll>
      )}
      {!userAgentMobile && (
        <div
          className={`cursor ${pointer ? 'cursor-pointer' : ''}`}
          style={{ top: pageY, left: pageX }}
        ></div>
      )}
    </>
  )
}
