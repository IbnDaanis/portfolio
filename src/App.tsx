import React, { useEffect } from 'react'
import { Header, Scroll } from './components'
import { Contact, Hero, Projects } from './containers'
import { userAgentMobile } from './utils/userAgentMobile'

export const App = (): JSX.Element => {
  useEffect(() => {
    console.clear()
  }, [])

  return (
    <>
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
