import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'
import './Projects.scss'

export const Projects = (): JSX.Element => {
  useEffect(() => AOS.init({ once: true }), [])

  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2
          className='projects-heading'
          data-aos='fade-up'
          data-aos-offset='250'
          data-aos-duration='800'
          data-aos-easing='ease-in-out'
        >
          My Projects
        </h2>
        <div className='projects'>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
