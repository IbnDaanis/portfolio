import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useScroll } from '../../hooks/useScroll'
import './Header.scss'

export const Header = (): JSX.Element => {
  const positionY = useScroll()

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const element = document.querySelector(`#${target.dataset.id}`)
    element && window.scrollTo(0, element.getBoundingClientRect().top + positionY)
  }

  useEffect(() => {
    const handleComplete = (): void => {
      document.body.style.overflow = 'unset'
    }
    const tl = gsap.timeline({ onComplete: handleComplete })

    tl.to('.navbar-list-item', {
      delay: 6.5,
      duration: 0.8,
      ease: 'power3.out',
      opacity: 1,
      stagger: { each: 0.4 },
    })
  }, [])

  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-list-item' onClick={handleClick} data-id='about'>
            About
          </li>
          <li className='navbar-list-item' onClick={handleClick} data-id='projects'>
            Projects
          </li>
          <li className='navbar-list-item' onClick={handleClick} data-id='contact'>
            Contact
          </li>
          <li className='navbar-list-item'>
            <a href='https://github.com/IbnDaanis' target='blank' rel='noreferrer'>
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
