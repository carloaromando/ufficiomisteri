import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-1">
            UFFICIO MISTERI
          </h1>
        </Link>
      </div>
      <div className="navbar-start">
        
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://altairiv.bigcartel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="title is-4">Shop</h4>
        </a>
        <Link className="navbar-item" to="/about">
          <h4 className="title is-4">Contact</h4>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
