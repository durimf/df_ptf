import React from 'react'
import imgQwerty from '../images/qwerty.png'

function Me(props) {
  return (
    <>
      <div className="me">
        <h1 className="introduction">
          Hi, My name is <span className="d">Durim</span> I am self-taught
          frontend developer and I <span className="love">love</span> what I do.
        </h1>
        <a
          className="me--img"
          src="../images/qwerty.png"
          href="https://www.linkedin.com/in/durimfetahaj/"
          target="_blank"
        >
          <img className="df-img"></img>
        </a>
      </div>
    </>
  )
}

export default Me
