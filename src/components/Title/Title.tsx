import React from 'react'
import './Title.scss'

type text = string

export const Title = ({ title }: { title: text }): JSX.Element => {
  return (
    <h2
      className='title'
      data-aos='fade-up'
      data-aos-offset='250'
      data-aos-duration='800'
      data-aos-easing='ease-in-out'
    >
      {title}
    </h2>
  )
}
