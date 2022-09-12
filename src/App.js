import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Footer } from './Components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import './App.css'

function App() {
  let component
  switch (window.location.pathname) {
    case '/home':
      component = <Main />
      break
    case '/':
      component = <Main />
      break
    case '/contact':
      component = <Contact />
      break
    case '/about':
      component = <About />
      break
  }
  return (
    <div className="App">
      <Header />
      {component}
      <Footer />
      {/* <Contact /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  )
}

export default App
