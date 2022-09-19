import React from 'react'
import cssImg from '../images/techstack/css.png'
import htmlImg from '../images/techstack/html.png'
import jsImg from '../images/techstack/js.png'
import reactImg from '../images/techstack/react.png'
import gitImg from '../images/techstack/git.png'
import vsImg from '../images/techstack/vscode.png'
import muiImg from '../images/techstack/mui.png'
import bootImg from '../images/techstack/bootstrap.png'
import gitHubImg from '../images/techstack/github.png'
import { Box, Container, Grid, Typography } from '@mui/material'
function Tech(props) {
  return (
    <Container
      sx={{
        display: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: {
          xs: 5,
          sm: 10,
          md: 30,
          lg: 40,
          xl: 50,
        },
      }}
    >
      <Box
        sx={{
          color: 'text.primary',
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h2"
          textAlign={'center'}
          m={1}
          className={'skillsTitle'}
          sx={{
            fontSize: {
              xs: 25,
              sm: 35,
              md: 70,
              lg: 75,
              xl: 85,
            },
            color: 'text.primary',
            fontWeight: {
              xs: 300,
              sm: 200,
              md: 100,
            },
          }}
        >
          My Skills
        </Typography>
        <Typography
          variant="h5"
          textAlign={'center'}
          sx={{
            fontSize: {
              xs: 12,
              md: 35,
              lg: 35,
              xl: 40,
            },

            color: 'text.primary',
            fontWeight: {
              xs: 200,
              sm: 200,
              md: 100,
            },
          }}
        >
          Skills I have so far
        </Typography>
      </Box>

      <Grid container spacing={8} marginBottom={10}>
        <Grid item xs={4}>
          <img src={cssImg} className="techImg" alt='cssLogo'/>
        </Grid>
        <Grid item xs={4}>
          <img src={htmlImg} className="techImg" alt='htmLogo' />
        </Grid>
        <Grid item xs={4}>
          <img
            src={jsImg}
            className="techImg"
            alt="jsLogo"
          />
        </Grid>
        <Grid item xs={4}>
          <img src={reactImg} className="techImg" alt="#"></img>
        </Grid>
        <Grid item xs={4}>
          <img src={gitImg} className="techImg" alt=""></img>
        </Grid>
        <Grid item xs={4}>
          <img src={vsImg} className="techImg" alt=""></img>
        </Grid>
        <Grid item xs={4}>
          <img src={muiImg} className="techImg" alt=""></img>
        </Grid>
        <Grid item xs={4}>
          <img src={bootImg} className="techImg" alt=""></img>
        </Grid>
        <Grid item xs={4}>
          <img src={gitHubImg} className="techImg" alt=""></img>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Tech
