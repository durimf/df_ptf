import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectsImageList from "./ProjectsImageList";

function Projects() {
  return (
    <Box
      id="work"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        mb: 50,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 8,
        }}
      >
        <Typography
          color="text.primary"
          sx={{
            fontSize: {
              // xs: 25,
              md: 36,
            },
            fontWeight: {
              md: 700,
            },
            letterSpacing: 1,
            opacity: 0.7,
          }}
        >
          Projects
        </Typography>
      </Box>
      <Box width="100%">
        <ProjectsImageList />
      </Box>
    </Box>
  );
}

export default Projects;
