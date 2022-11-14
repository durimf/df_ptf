import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import Contact from "./Pages/Contact";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";
import { Container } from "@mui/system";
// import './App.css'

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#DEDEDE",
      },
      background: {
        default: "#202020",
      },
      mode: mode,
      ...(mode === "light" && {
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }),
    },
  });

  let component;
  switch (window.location.pathname) {
    case "https://duroportfolio.netlify.app/home":
      component = <Main />;
      break;
    case "https://duroportfolio.netlify.app/":
      component = <Main />;
      break;
    case "https://duroportfolio.netlify.app/contact":
      component = <Contact />;
      break;
    case "https://duroportfolio.netlify.app/projects":
      component = <Projects />;
      break;
    case "https://duroportfolio.netlify.app/tech%20stack":
      component = <Tech />;
      break;
    default:
      component = <Main />;
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box p={0} m={0} bgcolor="#202020">
        <Navbar />
        <Container
          sx={{
            px: "23px",
            bgcolor: "#202020",
          }}
        >
          {" "}
          <Main />
        </Container>
      </Box>

      {/* <Box
        sx={{
          mx: 24,
          bgcolor: "background.default",
          color: "text.secondary",
        }}
      >
        <Stack direction={"column"}>
          {component}
          <Footer />
        </Stack>
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
