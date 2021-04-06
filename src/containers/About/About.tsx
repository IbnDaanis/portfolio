import React from 'react'
import './About.scss'

export const About = (): JSX.Element => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2 className='about-heading'>About Me</h2>
        <div className='content'>
          <p className='about-content'>
            Learning to code has been a tough journey. With the help of{' '}
            <a
              href='https://www.youtube.com/channel/UCSKr_gILoWAETdYpAoCxB0w/channels?view=56&shelf_id=0'
              target='blank'
              rel='noreferrer'
              className='link'
            >
              developers on YouTube,
            </a>{' '}
            I have learnt so much. I remember once being overwhelmed by HTML and SCSS, now I&#39;m
            creating this website in React and TypeScript.
          </p>
          <p className='about-content'>
            With the help of YouTube, Udemy, Scrimba, and many other resources, I have learnt many
            Web Development technologies. HTML, CSS, SCSS, Styled Components, JavaScript, ES6+,
            React, Redux, NodeJs, Express and MongoDB, just to name a few.
          </p>
          <p className='about-content'>
            I&#39;m a quick learner. Eager to find out new things. In fact, the more I learn, the
            more I realise I don&#39;t know much. I&#39;m never satisfied with mediocre. If I do
            something, I do it with perfection. Look below.
          </p>
        </div>
      </div>
    </section>
  )
}
