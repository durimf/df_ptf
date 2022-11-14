import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import darkLogo from "../images/logo-white.png";
import lightLogo from "../images/logo-black.png";
import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import {
  DarkModeOutlined,
  GitHub,
  LightMode,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import logo from "../images/logo.png";

export const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const pages = ["Home", "Work", "Contact"];

  return (
    <AppBar
      position="sticky"
      sx={{
        px: "23px",
        backgroundColor: "#323232",
        height: 72,
        opacity: 0.9,
        mb: {
          xs: "60px",
          md: "120px",
        },
        px: {
          xs: "24px",
          md: "96px",
        },
      }}
    >
      {/* Container XS display */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: "16px",
        }}
      >
        <img src={logo} height={50} />
        <Box onClick={(e) => setOpen(true)} p={0} m={0}>
          <IconButton>
            <MenuIcon></MenuIcon>
          </IconButton>
        </Box>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              href={
                page === "tech stack" ? "techstack" : `${page.toLowerCase()}`
              }
              // onClick={handleCloseNavMenu}
              sx={{ display: "flex", color: "text.primary", m: 1 }}
            >
              {page}
            </Button>
          ))}
        </Menu>
      </Box>
      {/* End of Container XS display */}

      {/* Container md display */}
      <Box
        sx={{
          m: 2,
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={logo} height={40} />

        <Box
          sx={{
            display: "flex",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              href={
                page === "tech stack" ? "techstack" : `${page.toLowerCase()}`
              }
              sx={{ display: "flex", color: "text.primary" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Box>
      {/* End of Container md display */}
    </AppBar>
  );
};
