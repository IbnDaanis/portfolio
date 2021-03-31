import React from 'react'
import { Hero, Scroll } from './components'

export const App = (): JSX.Element => {
  return (
    <>
      <Scroll>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Scroll>
    </>
  )
}
