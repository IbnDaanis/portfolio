import React, { useEffect, useState } from 'react'
import { Header, Scroll } from './components'
import { About, Contact, Hero, Projects } from './containers'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  useEffect(() => {
    console.clear()
  }, [])

  const [cursorPosition, setCursorPosition] = useState({ pageY: 0, pageX: 0 })
  const { pageY, pageX } = cursorPosition

  const [pointer, setPointer] = useState(false)

  useEffect(() => {
    // const toggleFocus = ({ target }: { target: EventTarget }) => {
    //   const element = document.querySelector('.project-image'!)
    //   // if (element?.current?.contains(target)) return
    //   !element.contains(target) && console.log('Hi')
    // }
    document.addEventListener('mousemove', event => {
      const element: HTMLAnchorElement | null = document.querySelector('.project-image a')
      if (event.target && element && element.contains(event.target as Node)) {
        // if (element?.current?.contains(target)) return
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
