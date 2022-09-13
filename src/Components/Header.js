import { React, useState, useEffect } from 'react'
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
  const [isScroll, setIsScroll] = useState(false)

  const toggleNav = () => {
    setIsShown(!isShown)
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.pageYOffset)
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`header ${isScroll ? 'showBackground' : ''}`}>
      <a href="/home" className="">
        <img src={logo} className="logo"></img>
      </a>
      <div className="navbar-container">
        <Navbar navState={isShown} />
        <Hamburger
          className="hamburgerBtn"
          toggleNav={toggleNav}
          navState={isShown}
        />
      </div>
    </div>
  )
}
