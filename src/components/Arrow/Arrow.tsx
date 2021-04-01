import React from 'react'
import { ArrowIcon } from '../../assets'

import './Arrow.scss'

export const Arrow = (): JSX.Element => {
  return (
    <div className='arrow-container'>
      <div className='arrow-ring'>
        <ArrowIcon className={'arrow'} />
      </div>
    </div>
  )
}
