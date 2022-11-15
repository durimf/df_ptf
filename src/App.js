import React, { useLayoutEffect, useRef, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";
import { Container } from "@mui/system";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#DEDEDE",
      },
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
      // component = <Contact />;
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
      <Box
        sx={{
          px: {
            xs: "24px",
            md: "384px",
          },
          overflow: "hidden",
          backgroundColor: "#292929",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
