import React, { useEffect } from 'react'
import hoverEffect from 'hover-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GithubIcon } from '../../assets'
import { IProject } from '../../data/projects'
import { Arrow } from '../Arrow/Arrow'
import './Project.scss'

export const Project = ({
  project: { title, description1, description2, list1, list2, repo, website, image1, image2 },
}: {
  project: IProject
}): JSX.Element => {
  useEffect(() => AOS.init({ once: true }), [])
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(`.${title}`),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      imagesRatio: 0.5625,
      easing: 'power3.out',
      speedIn: 0.8,
      speedOut: 0.8,
      image1,
      image2,
      displacementImage: `/dist/assets/images/distort-${Math.floor(Math.random() * 2) + 1}.jpg`,
    })
  }, [image1, image2, title])

  return (
    <article className='project'>
      <div
        className='project-details'
        data-aos='fade-up'
        data-aos-offset='250'
        data-aos-duration='800'
        data-aos-easing='ease-in-out'
      >
        <div className='project-details-container'>
          <h3 className='project-details-title'>{title}</h3>
          <p className='project-details-description'>{description1}</p>
          <p className='project-details-description'>{description2}</p>
          <h4 className='project-details-features'>Tech Stack and Features:</h4>
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
      <div
        className={`project-image project-image-${title}`}
        data-aos='fade-up'
        data-aos-offset='400'
        data-aos-duration='800'
        data-aos-easing='ease-in-out'
      >
        <a href={website} target='_blank' rel='noreferrer'>
          <div className={`${title}`}></div>
        </a>
      </div>
    </article>
  )
}
