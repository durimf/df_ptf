import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton } from "@mui/material";
import "../App.css";

import logo from "../images/logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pages = ["Home", "Work", "Contact"];

  return (
    <AppBar
      id="navbar"
      sx={{
        position: "sticky",
        boxShadow: "none",
        width: "100vw",
        backgroundColor: "#323232",
        height: 72,
        opacity: 0.9,
        mb: {
          xs: "60px",
          md: "120px",
        },
        px: {
          xs: "24px",
          md: "384px",
          lg: "288px",
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
        <img src={logo} height={50} alt="web-logo" />
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
              href={`${page.toLowerCase()}`}
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
        <a href="/">
          <img src={logo} height={50} alt="web-logo" />
        </a>

        <Box
          sx={{
            display: "flex",
          }}
        >
          {pages.map((page) =>
            page.toLowerCase() === "work" ? (
              <a href="#work">
                <Button
                  key={page}
                  sx={{ display: "flex", color: "text.primary" }}
                >
                  {page}
                </Button>
              </a>
            ) : (
              <Button
                key={page}
                sx={{ display: "flex", color: "text.primary" }}
                href="/"
              >
                {page}
              </Button>
            )
          )}
        </Box>
      </Box>
      {/* End of Container md display */}
    </AppBar>
  );
};
