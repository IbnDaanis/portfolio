import React, { useEffect, useState } from 'react'
import { Header, Scroll } from './components'
import { About, Contact, Hero, Intro, Projects } from './containers'
import { DisplayAppContext, useDisplayAppContext } from './hooks/useDisplayAppContext'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  useEffect(() => {
    // console.clear()
  }, [])

  const [cursorPosition, setCursorPosition] = useState({ pageY: -30, pageX: -30 })
  const { pageY, pageX } = cursorPosition

  const [pointer, setPointer] = useState(false)
  useEffect(() => {
    document.addEventListener('mouseleave', () => {
      setCursorPosition({ pageY: -55, pageX: -55 })
    })
    document.addEventListener('mousemove', event => {
      const element: NodeList | null = document.querySelectorAll('.project-image a')
      if ([...element].some(el => el.contains(event.target as Node)) && event.target && element) {
        setPointer(true)
        return setCursorPosition({ pageY: event.clientY - 50, pageX: event.clientX - 50 })
      }
      setPointer(false)
      setCursorPosition({ pageY: event.clientY - 10, pageX: event.clientX - 10 })
    })
  }, [])

  const { displayApp, setDisplayApp } = useDisplayAppContext()

  return (
    <DisplayAppContext.Provider value={{ displayApp, setDisplayApp }}>
      <Header />
      <Intro />
      {displayApp ? (
        userAgentMobile ? (
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
        )
      ) : null}
      {!userAgentMobile && (
        <div
          className={`cursor ${pointer ? 'cursor-pointer' : ''}`}
          style={{ top: pageY, left: pageX }}
        >
          <span>{pointer && 'Click to view'}</span>
        </div>
      )}
    </DisplayAppContext.Provider>
  )
}
