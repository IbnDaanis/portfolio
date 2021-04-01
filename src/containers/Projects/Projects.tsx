import React from 'react'
import './Projects.scss'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'

export const Projects = (): JSX.Element => {
  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2 className='projects-heading'>Here&#39;s what I&#39;ve been up to...</h2>
        <div className='projects'>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
