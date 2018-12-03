import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import Dropdown from '../components/Dropdown'

const links = () => (
  <div className="navbar-links">
    <a
      className="navbar-item"
      href="https://www.etsy.com/it/shop/UfficioMisteri"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 className="title is-4">Shop</h4>
    </a>
    <Link className="navbar-item" to="/about">
      <h4 className="title is-4">About</h4>
    </Link>
  </div>
)

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Dropdown>
          {links()}
        </Dropdown>
        <Link to="/" className="logo">
          <img src={logo} alt="Ufficio Misteri Logo" />
        </Link>
      </div>
      <div className="navbar-end">
        {links()}
      </div>
    </div>
  </nav>
)

export default Navbar
