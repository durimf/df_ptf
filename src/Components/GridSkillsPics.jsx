import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import material from "../images/techstack/mui.png";
import html from "../images/techstack/html.png";
import css from "../images/techstack/css.png";
import js from "../images/techstack/js.png";
import react from "../images/techstack/react.png";
import figma from "../images/techstack/figma.png";
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
      <Grid container spacing={{ xs: 10, md: 20 }}>
        <Grid item xs={6} md={2}>
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
        <Grid item xs={6} md={2}>
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
        <Grid item xs={6} md={2}>
          <a
            href="https://www.javascript.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={js} id="onHover" className="activeColor" alt="js-logo" />
          </a>
        </Grid>
        <Grid item xs={6} md={2}>
          <a href="https://mui.com/core/" target={"_blank"} rel="noreferrer">
            <img
              src={material}
              id="onHover"
              className="activeColor"
              alt="material-logo"
            />
          </a>
        </Grid>
        <Grid item md={2}>
          <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
            <img
              src={react}
              id="onHover"
              className="activeColor"
              alt="react-logo"
            />
          </a>
        </Grid>
        <Grid item md={2}>
          <a href="https://www.figma.com/" target={"_blank"} rel="noreferrer">
            <img
              src={figma}
              id="onHover"
              className="activeColor"
              alt="figma-logo"
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
