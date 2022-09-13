import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
export default function Hamburger(props) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        {props.navState ? (
          <ClearIcon onClick={props.toggleNav} />
        ) : (
          <MenuIcon onClick={props.toggleNav} />
        )}
      </IconButton>
    </Stack>
  )
}
