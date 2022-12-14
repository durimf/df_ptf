import { Box, Button, Typography } from "@mui/material";
import { React } from "react";
import "../App.css";
import durim from "../images/34.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Me() {
  return (
    <Box
      display="flex"
      sx={{
        overflow: "auto",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: {
          xs: 10,
          md: 30,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: {
              xs: "center",
              md: "start",
            },
            width: {
              xs: 366,
              md: 600,
            },

            lineHeight: {
              xs: "40px",
              md: "70px",
            },
            fontSize: {
              xs: 36,
              md: 64,
            },
            color: "text.primary",
            fontWeight: {
              xs: 700,
            },
            mb: 3,
            letterSpacing: "-0.5px",
          }}
        >
          Hi, I am Durim <br></br>Front-End Developer.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: {
              xs: "center",
              md: "start",
            },
            width: {
              xs: 366,
              md: 435,
            },
            lineHeight: {
              xs: "26px",
              md: "36px",
            },
            fontSize: {
              xs: 18,
              md: 24,
            },
            color: "#959595",
            marginBottom: {
              sm: 5,
              md: 10,
            },
            fontWeight: {
              xs: 500,
              md: 300,
            },
            mb: {
              xs: 5,
              md: 3,
            },
            letterSpacing: "-0.5px",
          }}
        >
          I am self-taught and constantly learning and building new things.
        </Typography>
        <Button
          onClick={() => (window.location = "mailto:durimfetahaj@gmail.com")}
          variant="filled"
          startIcon={<EmailOutlinedIcon />}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 48px",
            backgroundColor: "#9D9D9D",
            borderRadius: "4px",
            color: "text.primary",
            width: {
              xs: "242px",
              md: "400px",
            },
            height: {
              xs: 64,
            },
            textTransform: "none",
            mb: {
              xs: 10,
            },
          }}
        >
          Durimfetahaj@gmail.com
        </Button>
      </Box>
      <Box
        alt="Remy Sharp"
        sx={{
          width: {
            xs: 240,
            md: 350,
          },
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: {
            xs: 240,
            md: 350,
          },
          backgroundImage: `url(${durim})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          borderRadius: 50,
          mr: {
            xs: "0px",
            md: "288px",
            lg: "188px",
          },
          mb: {
            xs: 10,
          },
        }}
      />
    </Box>
  );
}

export default Me;
