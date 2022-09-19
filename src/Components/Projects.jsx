import React from 'react'
import Data from './Data'
import { Box, Button, Container, Typography } from '@mui/material'
import { GitHub, Link } from '@mui/icons-material'

function Projects(props) {
  const getData = Data.map((project) => {
    return (
      <Container>
        <Box
          m={0}
          p={0}
          className="project--body"
          sx={{
            bgcolor: 'text.primary',
            color: 'background.default',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <img className="project--image" src={project.imageUrl} alt=""/>
        </Box>
        <Box
          className="project--second"
          bgcolor={'text.primary'}
          color={'background.default'}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 20,
                sm: 25,
                md: 25,
                lg: 25,
                xl: 30,
              },
            }}
          >
            {project.Title}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 15,
                sm: 20,
                md: 20,
                lg: 20,
                xl: 18,
              },
            }}
          >
            {project.Description}
          </Typography>
          <span className="project--tech">Tech Stack: {project.Tech}</span>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              size="small"
              startIcon={<Link />}
              target="_blank"
              rel="noreferrer"
              href={project.ProjectUrl}
              sx={{
                display: 'flex',
                color: 'background.default',
              }}
            >
              Live Preview
            </Button>
            <Button
              size="small"
              startIcon={<GitHub />}
              target="_blank"
              rel="noreferrer"
              href={project.GitUrl}
              sx={{
                display: 'flex',
                color: 'background.default',
              }}
            >
              View Code
            </Button>
          </Box>
        </Box>
      </Container>
    )
  })

  return (
    <Box
      sx={{
        color: 'text.primary',
      }}
      className="projects-section"
      id="projectsId"
    >
      <Typography
        variant="h2"
        color="text.primary"
        m={1}
        sx={{
          fontSize: {
            xs: 25,
            sm: 35,
            md: 70,
            lg: 75,
            xl: 85,
          },
          fontWeight: {
            xs: 300,
            sm: 200,
            md: 100,
          },
        }}
      >
        Projects
      </Typography>
      <Typography
        variant="h5"
        color="text.primary"
        sx={{
          fontSize: {
            xs: 12,
            md: 20,
            lg: 35,
            xl: 40,
          },
          fontWeight: {
            xs: 200,
            sm: 200,
            md: 100,
          },
        }}
      >
        Things I've built so far
      </Typography>
      <div className="project">{getData}</div>
    </Box>
  )
}

export default Projects
