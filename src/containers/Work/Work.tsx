import React from 'react'
import './Work.scss'
import { Project } from '../../components/Project/Project'
import { projects } from '../../data/projects'

export const Work = (): JSX.Element => {
  return (
    <section id='work' className='work'>
      <div className='container'>
        <h2 className='work-heading'>Here&#39;s what I&#39;ve been up to...</h2>
        <div className='projects'>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
