import React, { useEffect, useState } from 'react'
import { Header, Scroll } from './components'
import { About, Contact, Hero, Intro, Projects } from './containers'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  const [cursorPosition, setCursorPosition] = useState({ pageY: -30, pageX: -30 })
  const { pageY, pageX } = cursorPosition

  useEffect(() => {
    document.addEventListener('mouseleave', () => {
      setCursorPosition({ pageY: -55, pageX: -55 })
    })
    document.addEventListener('mousemove', event => {
      setCursorPosition({ pageY: event.clientY - 10, pageX: event.clientX - 10 })
    })
  }, [])

  const [displayApp, setDisplayApp] = useState(false)

  setTimeout(() => {
    setDisplayApp && setDisplayApp(true)
    document.body.style.background = '#151515'
  }, 1550)

  useEffect(() => {
    displayApp && console.clear()
  }, [displayApp])

  return (
    <>
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
      {!userAgentMobile && <div className='cursor' style={{ top: pageY, left: pageX }}></div>}
    </>
  )
}
