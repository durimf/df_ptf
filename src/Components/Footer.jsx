import { Box, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Footer = () => {
  const date = new Date();

  return (
    <Box
      color={"text.primary"}
      sx={{
        borderTop: "1px solid #696969",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          letterSpacing: "-0.5px",
          color: "#959595",
        }}
      >
        Made by DF — Copyright {date.getFullYear()}
      </Typography>
      <Box
        color={"#959595"}
        sx={{
          width: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="https://github.com/durimf" target={"_blank"} rel="noreferrer" >
          <GitHubIcon className="socialIcons" sx={{ color: "#959595" }} />
        </a>
        <a href="https://www.linkedin.com/in/durimfetahaj/" target={"_blank"}  rel="noreferrer">
          <LinkedInIcon className="socialIcons" sx={{ color: "#959595" }} />
        </a>
        <a href="https://twitter.com/FetahajDurim" target={"_blank"}  rel="noreferrer">
          <TwitterIcon className="socialIcons" sx={{ color: "#959595" }} />
        </a>
      </Box>
    </Box>
  );
};
