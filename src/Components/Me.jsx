import { Avatar, Box, Typography } from "@mui/material";
import { React } from "react";
import "../App.css";
import durim from "../images/1.1.png";

function Me(props) {
  return (
    <>
      <Box
        display="flex"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          },
          justifyContent: {
            xs: "center",
            xl: "space-around",
          },
          alignItems: "center",
          marginX: {
            sm: 8,
            md: 5,
            lg: 15,
            xl: 40,
          },
          marginBottom: {
            xs: 10,
            md: 50,
          },
        }}
      >
        <Box
          alt="Remy Sharp"
          src={""}
          sx={{
            width: {
              xs: 240,
              md: 400,
            },
            height: {
              xs: 240,
              md: 400,
            },
            backgroundImage: `url(${durim})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            borderRadius: 50,
            marginBottom: "70px",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            width: {
              xs: 350,
              sm: 400,
              md: 500,
              lg: 550,
              xl: 600,
            },
            fontSize: {
              xs: "36px",
              sm: 30,
              md: 35,
              lg: 64,
              xl: 64,
            },
            marginY: {
              xs: 5,
              sm: 8,
              md: 1,
            },
            color: "text.primary",
            marginBottom: {
              sm: 5,
              md: 10,
            },
            fontWeight: {
              xs: 300,
              sm: 200,
              lg: 100,
            },
          }}
        >
          Hi, I am Durim A Front-End Developer based in Kosovo.
        </Typography>
      </Box>
    </>
  );
}

export default Me;
