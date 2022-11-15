import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Button,
  IconButton,
  ImageListItemBar,
  Link,
  Typography,
} from "@mui/material";
import { bgcolor, Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import VideoModal from "./VideoModal";

export default function ProjectsImageList() {
  return (
    <>
      <ImageList
        cols={3}
        gap={10}
        rowHeight={800}
        sx={{
          transform: "translateZ(0)",
        }}
      >
        <ImageListItem
          sx={{
            borderRadius: 1,
            rows: 0.5,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt={"Cmimi I Naftes React Native App"}
            loading="lazy"
            cols={2}
            position="bottom"
          />
          <ImageListItemBar
            title={"Cmimi I Naftes React Native App"}
            position={"top"}
          />

          <ImageListItemBar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            subtitle={"Live preview"}
            actionIcon={
              <IconButton
                sx={{ color: "white" }}
                // href={item.github}
                target={"_blank"}
              >
                <VideoModal />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>

        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              borderRadius: 1,
              rows: 0.5,
            }}
          >
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              cols={2}
              position="bottom"
            />
            <ImageListItemBar title={item.title} position={"top"} />

            <ImageListItemBar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                  href={item.github}
                  target={"_blank"}
                >
                  <GitHubIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1616509091215-57bbece93654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    title: "Reddit Minimal Client App",
    author: (
      <IconButton
        target={"_blank"}
        href="https://redditminimalclientapp.netlify.app/"
      >
        <LaunchRoundedIcon />
      </IconButton>
    ),
    github: "https://github.com/durimf/redditClientAppPortfolio",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  //   title: "Cmimi I Naftes React Native App",
  //   author: (
  //     <IconButton target={"_blank"}>
  //       <LaunchRoundedIcon />
  //     </IconButton>
  //   ),
  // },
  {
    img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Simple Calculator",
    author: (
      <IconButton
        target={"_blank"}
        href="https://simplecalculatordf.netlify.app/"
      >
        <LaunchRoundedIcon />
      </IconButton>
    ),
    github: "https://github.com/durimf/CalculatorApp",
  },
];
