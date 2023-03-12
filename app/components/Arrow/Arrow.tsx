import React from 'react'
import './Arrow.scss'
import { ArrowIcon } from '../../assets'

export const Arrow = (): JSX.Element => {
  return (
    <div className='arrow-container'>
      <div className='arrow-ring'>
        <ArrowIcon className={'arrow'} />
      </div>
    </div>
  )
}
