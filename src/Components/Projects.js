import React from 'react'
import Data from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function Projects(props) {
  const getData = Data.map((project) => {
    return (
      <div className="project--body">
        <div className="project--first">
          <img className="project--image" src={project.imageUrl}></img>
        </div>
        <div className="project--second">
          <h3 className="project--title">{project.Title}</h3>
          <span className="project--description">{project.Description}</span>
          <span className="project--tech">Tech Stack: {project.Tech}</span>
          <div className="outside-links">
            <div className="project--link">
              <FontAwesomeIcon className="icon" icon={faLink} />
              <span className="project--link--live">
                <a href={project.ProjectUrl}>Live Preview</a>
              </span>
            </div>
            <div className="source-link">
              <FontAwesomeIcon className="icon" icon={faGithub} />
              <span className="source--link--viewcode">
                <a href={project.GitUrl}>View Code</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="projects-section" id="projectsId">
      <h1 className="projects-section--title">Projects</h1>
      <p className="projects-section--description">Things I've built so far</p>
      <div className="project">{getData}</div>
    </div>
  )
}

export default Projects
