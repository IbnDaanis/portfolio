import React from 'react'
import { Scroll } from './components'
import { Hero, Projects } from './containers'

export const App = (): JSX.Element => {
  return (
    <>
      <Scroll>
        <Hero />
        <Projects />
      </Scroll>
    </>
  )
}
