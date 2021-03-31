import React from 'react'
import { Hero, Scroll, Work } from './components'

export const App = (): JSX.Element => {
  return (
    <>
      <Scroll>
        <Hero />
        <Work />
      </Scroll>
    </>
  )
}
