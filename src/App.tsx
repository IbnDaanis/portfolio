import React from 'react'
import { Hero, Scroll, Work } from './containers'

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
