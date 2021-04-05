import React, { useEffect, useState } from 'react'
import { Header, Scroll } from './components'
import { Contact, Hero, Projects } from './containers'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  useEffect(() => {
    console.clear()
  }, [])

  const [cursorPosition, setCursorPosition] = useState({ pageY: 0, pageX: 0 })
  const { pageY, pageX } = cursorPosition

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      // console.log(event.target)
      setCursorPosition({ pageY: event.clientY - 10, pageX: event.clientX - 10 })
    })
  }, [])

  return (
    <>
      <div className='cursor' style={{ top: pageY, left: pageX }}></div>
      <Header />
      {userAgentMobile ? (
        <>
          <Hero />
          <Projects />
          <Contact />
        </>
      ) : (
        <Scroll>
          <Hero />
          <Projects />
          <Contact />
        </Scroll>
      )}
    </>
  )
}
