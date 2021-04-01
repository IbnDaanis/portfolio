import React from 'react'
import './Project.scss'
import { GithubIcon } from '../../assets'
import { IProject } from '../../data/projects'
import { Arrow } from '../Arrow/Arrow'

export const Project = ({
  project: { title, description1, description2, list1, list2, repo, website, image },
}: {
  project: IProject
}): JSX.Element => {
  return (
    <article className='project'>
      <div className='project-details'>
        <div className='project-details-container'>
          <h3 className='project-details-title'>{title}</h3>
          <p className='project-details-description'>{description1}</p>
          <p className='project-details-description'>{description2}</p>
          <h4 className='project-details-features'>Features Include:</h4>
          <div className='project-details-features-lists'>
            <ul className='list'>
              {list1.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <ul className='list'>
              {list2.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <p className='github'>
            <a href={repo} rel='noreferrer' target='_blank'>
              <span>Link to Repo:</span>
              <GithubIcon />
            </a>
          </p>
        </div>
        <Arrow />
      </div>
      <div className='project-image'>
        <a
          href={website}
          target='_blank'
          rel='noreferrer'
          title='Click to visit this project on a new tab'
        >
          <img src={image} alt='Project Image' />
        </a>
      </div>
    </article>
  )
}
