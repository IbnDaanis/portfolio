import React from 'react'

import './Hero.scss'

export const Hero = (): JSX.Element => {
  return (
    <div className='section'>
      <div className='left-container'>
        <div className='block'></div>
      </div>

      <div className='right-container'>
        <div className='container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In laudantium esse fugiat illum
            tempore sapiente soluta labore voluptas iusto deleniti ab suscipit dolores quisquam
            corrupti facilis, id temporibus mollitia repellat omnis tempora commodi eveniet.
            Incidunt, perspiciatis, adipisci laboriosam dolores quos dolor voluptate odio magnam
            aperiam, alias asperiores pariatur! Nisi, libero!
          </p>
        </div>
      </div>
    </div>
  )
}
