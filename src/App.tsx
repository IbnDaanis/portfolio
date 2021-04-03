import React from 'react'
import { Header, Scroll } from './components'
import { Contact, Hero, Projects } from './containers'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Scroll>
        <Hero />
        <Projects />
        <Contact />
      </Scroll>
    </>
  )
}
