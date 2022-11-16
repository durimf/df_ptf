import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#DEDEDE",
      },
    },
  });

  
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
