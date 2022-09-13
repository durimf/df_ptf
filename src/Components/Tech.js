import React from 'react'
import cssImg from '../images/techstack/css.png'
import htmlImg from '../images/techstack/html.png'
import jsImg from '../images/techstack/js.png'
import reactImg from '../images/techstack/react.png'
import gitImg from '../images/techstack/git.png'
import vsImg from '../images/techstack/vscode.png'
import muiImg from '../images/techstack/mui.png'
import bootImg from '../images/techstack/bootstrap.png'
import gitHubImg from '../images/techstack/github.png'
function Tech(props) {
  return (
    <>
      <div className="tech" id="techId">
        <h1 className="tech-title">My Skills</h1>
        <p className="tech-description">Skills I have so far</p>
        <div className="tech-images">
          <img src={cssImg}></img>
          <img src={htmlImg}></img>
          <img src={jsImg}></img>
          <img src={reactImg}></img>
          <img src={gitImg}></img>
          <img src={vsImg}></img>
          <img src={muiImg} height="100px"></img>
          <img src={bootImg} height="100px"></img>
          <img src={gitHubImg} height="100px"></img>
        </div>
      </div>
    </>
  )
}

export default Tech
