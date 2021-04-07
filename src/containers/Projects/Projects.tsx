import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'
import './Projects.scss'
import { Title } from '../../components'

export const Projects = (): JSX.Element => {
  useEffect(() => AOS.init({ once: true }), [])

  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <Title title='My Projects' />
        <div className='projects'>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
