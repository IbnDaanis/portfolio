import React from 'react'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'
import './Projects.scss'
import { Title } from '../../components'

export const Projects = (): JSX.Element => {
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
