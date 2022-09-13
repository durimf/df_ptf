import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
  return (
    <>
      <nav className={`navbar ${props.navState ? 'show' : ''}`}>
        <ul>
          <li>
            <a href="/">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a className="techAnchor" href="/#techId">
              <p>Tech Stack</p>
            </a>
          </li>
          <li>
            {' '}
            <a href="/#projectsId">
              <p>Projects</p>
            </a>
          </li>
          <li>
            <a href="contact">
              <p>Contact</p>
            </a>
          </li>
        </ul>
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/durimf" target="_blank">
                {' '}
                <FontAwesomeIcon className="icons" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/durimfetahaj/"
                target="_blank"
              >
                {' '}
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FetahajDurim" target="_blank">
                {' '}
                <FontAwesomeIcon className="icons" icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
