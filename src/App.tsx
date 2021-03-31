import React from 'react'
import { Hero, SmoothScroll } from './components'

export const App = (): JSX.Element => {
  return (
    <div className='parent'>
      <SmoothScroll>
        <h2>Smooth Scrolling</h2>
        <Hero flexDirection='row' />
        <Hero flexDirection='row-reverse' />
        <Hero flexDirection='row' />
        <Hero flexDirection='row-reverse' />
        <Hero flexDirection='row' />
        <Hero flexDirection='row-reverse' />
      </SmoothScroll>
    </div>
  )
}
