import { React, useState } from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Components/Navbar'
import Hamburger from './Hamburger'

export const Header = () => {
  const [isShown, setIsShown] = useState(false)

  const toggleNav = () => {
    setIsShown(!isShown)
  }

  return (
    <div className="header">
      <a href="/home" className="">
        <img src={logo} className="logo"></img>
      </a>
      <div className="navbar-container">
        <Navbar />
        <Hamburger handleClick={toggleNav} />
      </div>
    </div>
  )
}
