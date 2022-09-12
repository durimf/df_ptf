import { React, useState, useRef } from 'react'
// import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ThemeProvider, createMuiTheme } from '@mui/material/styles'
import emailjs from 'emailjs-com'

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    alert('Thank you for emailing me! I will come shortly to you.')
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xxc4yyq',
        'template_fw5n67j',
        form.current,
        'D4NwaFcWjG9gMnFFY',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#784BA0',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="ContactForm">
        <form ref={form} className="form" onSubmit={sendEmail}>
          <h1 className="form-title">Send me a message</h1>
          <Input
            style={{
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            className="Input"
            placeholder="Name"
            id="input"
            color="primary"
            name="name"
          />
          <Input
            placeholder="Email"
            id="input"
            color="primary"
            name="user_email"
          />
          <Input
            placeholder="Subject"
            id="input"
            color="primary"
            name="subject"
          />
          <TextField
            id="text"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            color="primary"
            name="message"
          />
          <Button
            type="submit"
            className="form-btn"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </ThemeProvider>
  )
}

export default ContactForm
