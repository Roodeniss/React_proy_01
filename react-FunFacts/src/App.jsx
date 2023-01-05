import { useState } from 'react'
import reactLogo from './assets/react-logo.png'
import './App.css'

function Header() {
  return (
      <header>
          <nav className="nav">
              <img className="nav-logo" src={reactLogo}></img>
              <h4 className="nav-logo-text">ReactFacts</h4>
              <h5 className="nav-text">React Course - Project 1</h5>
          </nav>
      </header>
  )
}

function Body() {
  return (
      <main>
          <h3 className = "text-h3">Fun facts about React</h3>
          <ul className = "text-ul">
              <li>Was first realeased in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps,
                  incluiding mobile apps</li>
          </ul>
      </main>
  )
}

function App() {
  return (
      <div>
          <div className="header">
              <Header />
          </div>
          <div className="body">
              <Body />
          </div>
      </div>
  )
}

export default App
