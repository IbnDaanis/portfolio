import React from 'react'
import { useScroll } from '../../hooks/useScroll'
import './Header.scss'

export const Header = (): JSX.Element => {
  const positionY = useScroll()

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const element = document.querySelector(`#${target.dataset.id}`)
    element && window.scrollTo(0, element.getBoundingClientRect().top + positionY)
  }

  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-list-item' onClick={handleClick} data-id='hero'>
            Top
          </li>
          <li className='navbar-list-item' onClick={handleClick} data-id='projects'>
            Projects
          </li>
          <li className='navbar-list-item' onClick={handleClick} data-id='contact'>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  )
}
