import { Box, Typography } from '@mui/material'
import { React } from 'react'
import '../App.css'

function Me(props) {
  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
          },
          justifyContent: {
            xs: 'center',
            xl: 'space-around',
          },
          alignItems: 'center',
          marginX: {
            sm: 8,
            md: 5,
            lg: 15,
            xl: 40,
          },
          marginBottom: {
            xs: 10,
            md: 50,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: {
              xs: 300,
              sm: 400,
              md: 500,
              lg: 550,
              xl: 600,
            },
            fontSize: {
              xs: 18,
              sm: 30,
              md: 35,
              lg: 40,
              xl: 50,
            },
            marginY: {
              xs: 5,
              sm: 8,
              md: 1,
            },
            color: 'text.primary',
            marginBottom: {
              sm: 5,
              md: 10,
            },
            fontWeight: {
              xs: 300,
              sm: 200,
              lg: 100,
            },
          }}
        >
          Hi, My name is <span className="d">Durim</span> I am self-taught
          frontend developer and I <span className="love">love</span> what I do.
        </Typography>
        <a
          rel="noreferrer"
          className="me--img"
          src="../images/qwerty.png"
          href="https://www.linkedin.com/in/durimfetahaj/"
          target="_blank"
        >
          <img className="df-img" alt=""></img>
        </a>
      </Box>
    </>
  )
}

export default Me
