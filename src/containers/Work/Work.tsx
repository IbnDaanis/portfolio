import React from 'react'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'

import './Work.scss'

export const Work = (): JSX.Element => {
  return (
    <section id='work' className='work'>
      <div className='container'>
        <h2 className='work-heading'>Here&#39;s what I&#39;ve been up to...</h2>
        <div className='projects'>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}

          {/* <article className='project'>
            <div className='project-image'>
              <a
                href='https://ibndaanis-shopping-cart.netlify.app/'
                target='_blank'
                title='Click to visit this project on a new tab.'
                rel='noreferrer'
              >
                <img src={Friedrik} alt='Project Image' />
              </a>
            </div>
            <div className='project-details right'>
              <h3 className='project-details-title'>Friedrik</h3>
              <p className='project-details-description'>
                This project started with me practising React Hooks to make a functional shopping
                cart. However, I got carried away, I tried to make it look very nice... Then I
                decided to add animations to it to make it look more interesting. Framer Motion for
                the animations and SCSS for styling.{' '}
                <a
                  href='https://github.com/IbnDaanis/shopping-cart'
                  rel='noreferrer'
                  target='_blank'
                >
                  Click here to see the repo.
                </a>
              </p>
              <h4 className='project-details-features'>Features Include:</h4>
              <div className='project-details-features-lists'>
                <ul className='list'>
                  <li>- Shopping Cart</li>
                  <li>- Individual Product Page</li>
                  <li>- React Router</li>
                  <li>- Framer Motion Animations</li>
                </ul>
                <ul className='list'>
                  <li>- Page Transitions</li>
                  <li>- Dark mode if set on system</li>
                  <li>- Layout Transitions</li>
                </ul>
              </div>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  )
}
