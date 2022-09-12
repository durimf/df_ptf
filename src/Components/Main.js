import React, { useState } from 'react'
import imgQwerty from '../images/qwerty.png'
import cssImg from '../images/techstack/css.png'
import htmlImg from '../images/techstack/html.png'
import jsImg from '../images/techstack/js.png'
import reactImg from '../images/techstack/react.png'
import gitImg from '../images/techstack/git.png'
import vsImg from '../images/techstack/vscode.png'
import muiImg from '../images/techstack/mui.png'
import bootImg from '../images/techstack/bootstrap.png'
import gitHubImg from '../images/techstack/github.png'

import Data from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
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
    <div>
      <div className="main ">
        <div className="me">
          <h1 className="introduction">
            Hi, My name is <span className="d">Durim</span> I am self-taught
            frontend developer and I <span className="love">love</span> what I
            do.
          </h1>
          <a
            className="main--img "
            src="../images/qwerty.png"
            href="https://www.linkedin.com/in/durimfetahaj/"
            target="_blank"
          >
            <img className="df-img"></img>
          </a>
        </div>
        <div className="main--tech" id="techId">
          <h1 className="main--tech--title">My Tech Stack</h1>
          <p className="techImages--description">Technologies I work with</p>
          <div className="techImages">
            <img src={cssImg}></img>
            <img src={htmlImg}></img>
            <img src={jsImg}></img>
            <img src={reactImg}></img>
            <img src={gitImg}></img>
            <img src={vsImg}></img>
            <img src={muiImg} height="100px"></img>
            <img src={bootImg} height="100px"></img>
            <img src={gitHubImg} height="100px"></img>
          </div>
        </div>
        <div className="projects-section" id="projectsId">
          <h1 className="projects-section--title">Projects</h1>
          <p className="projects-section--description">
            Things I've built so far
          </p>
          <div className="project">{getData}</div>
        </div>
      </div>
    </div>
  )
}
