import React from 'react'
import { Scroll } from './components'
import { Contact, Hero, Projects } from './containers'

export const App = (): JSX.Element => {
  return (
    <>
      <Scroll>
        <Hero />
        <Projects />
        <Contact />
      </Scroll>
    </>
  )
}
