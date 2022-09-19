import React from 'react'
import Data from './Data'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Container, Typography } from '@mui/material'

function Projects(props) {
  const getData = Data.map((project) => {
    return (
      <div className="project--body">
        <div className="project--first">
          <img className="project--image" src={project.imageUrl} alt="#"></img>
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
    <Container className="projects-section" id="projectsId">
      <h1 className="projects-section--title">Projects</h1>
      <Typography variant='h5'>Things I've built so far</Typography>
      <Grid
        container spacing={2}
       className="project">
        
        <Grid item xs={8}
        
        >
          {/* <img src={cssImg}></img> */}
        </Grid>
        {getData}
       </Grid>
    </Container>
  )
}

export default Projects
