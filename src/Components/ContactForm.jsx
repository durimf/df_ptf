import { React, useRef } from 'react'
// import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import emailjs from '@emailjs/browser'
import { Box, Typography } from '@mui/material'

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
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

  return (
    <Box
      className="ContactForm"
      sx={{
        background: 'background.default',
        color: 'text.primary',
        display: 'flex',
        justifyContent: 'center',
        height: '60%',
        width: '50%',
        border: '1px solid',
        borderColor: '#fff',
        borderRadius: 10,
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        padding: 5,
      }}
    >
      <form ref={form} className="form" onSubmit={sendEmail}>
        <Typography variant="h2" color={'text.primary'}>
          Send me a message
        </Typography>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <TextField
          id="text"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          name="message"
        />
        <Button
          type="submit"
          variant="contained"
          onClick={() =>
            alert('Thanks for messaging me you will be contacted shortly!')
          }
          sx={{
            backgroundColor: 'text.primary',
            color: 'background.default',
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default ContactForm
