import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import material from "../images/techstack/mui.png";
import html from "../images/techstack/html.png";
import css from "../images/techstack/css.png";
import js from "../images/techstack/js.png";
import react from "../images/techstack/react.png";
import "../App.css";

export default function GridSkillsPics() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "1px solid #DEDEDE",
        borderRadius: 1,
        p: 5,
      }}
    >
      <Grid container spacing={{ xs: 15, md: 20 }}>
        <Grid item xs={6} md={3}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={html}
              id="onHover"
              className="activeColor"
              alt="html-logo"
            />
          </a>
        </Grid>
        <Grid item xs={6} md={3}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src={css}
              id="onHover"
              className="activeColor"
              alt="css-logo"
            />
          </a>
        </Grid>
        <Grid item xs={6} md={3}>
          <a
            href="https://www.javascript.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={js} id="onHover" className="activeColor" alt="js-logo" />
          </a>
        </Grid>
        <Grid item xs={6} md={3}>
          <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
            <img
              src={react}
              id="onHover"
              className="activeColor"
              alt="react-logo"
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
