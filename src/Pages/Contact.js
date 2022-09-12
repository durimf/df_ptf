import { React, useState } from 'react'
import { Header } from '../Components/Header'
import ContactForm from './ContactForm'
import { Footer } from '../Components/Footer'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-main">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
