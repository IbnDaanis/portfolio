import React from 'react'
import { Scroll } from './components'
import { Hero, Work } from './containers'

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
