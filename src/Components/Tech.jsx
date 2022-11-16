import React from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";
import material from "../images/techstack/mui.png";
import html from "../images/techstack/html.png";
import css from "../images/techstack/css.png";
import js from "../images/techstack/js.png";
import react from "../images/techstack/react.png";

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
            // xs: 25,
            md: 36,
          },
          fontWeight: {
            md: 700,
          },
          letterSpacing: 1,
          opacity: 0.7,
          mb: 5,
        }}
      >
        Skills
      </Typography>

      <Box width="100%">
        <Box
          sx={{
            border: "1px solid #DEDEDE",
            borderRadius: 1,
            p: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target={"_blank"} rel="noreferrer"
          >
            <img src={html} id="onHover" className="activeColor" alt='html-logo' />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target={"_blank"} rel="noreferrer"
          >
            <img src={css} id="onHover" className="activeColor" alt='css-logo'/>
          </a>
          <a href="https://www.javascript.com/" target={"_blank"}>
            <img src={js} id="onHover" className="activeColor" alt='js-logo' />
          </a>
          <a href="https://mui.com/" target={"_blank"}>
            <img src={material} id="onHover" className="activeColor" alt='material-logo'/>
          </a>
          <a href="https://reactjs.org/" target={"_blank"}>
            <img src={react} id="onHover" className="activeColor" alt='react-logo'/>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Tech;
