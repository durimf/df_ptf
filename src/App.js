import React, { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import Contact from './Pages/Contact'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import Projects from './Components/Projects'
import Tech from './Components/Tech'
// import './App.css'

function App() {
  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      mode: mode,
      ...(mode === 'light' && {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }),
    },
  })

  let component
  switch (window.location.pathname) {
    case '/home':
      component = <Main />
      break
    case '/':
      component = <Main />
      break
    case '/contact':
      component = <Contact />
      break
    case '/projects':
      component = <Projects />
      break
    case '/tech%20stack':
      component = <Tech />
      break
    default:
      component = <Main />
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.secondary',
        }}
      >
        <Stack direction={'column'}>
          <Navbar mode={mode} setMode={setMode} />
          {component}
          <Footer />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
