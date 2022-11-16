import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "../App.css";
import styled from "styled-components";
import GridSkillsPics from "./GridSkillsPics";

function Tech() {
  return (
    <Box
      sx={{
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.primary",
        mb: 30,
      }}
    >
      <Typography
        color="text.primary"
        sx={{
          fontSize: {
            xs: 28,
            md: 36,
          },
          fontWeight: 700,
          letterSpacing: 1,
          opacity: 0.7,
          mb: 5,
        }}
      >
        Skills
      </Typography>

      <Box width="100%">
        <GridSkillsPics />
      </Box>
    </Box>
  );
}

export default Tech;
