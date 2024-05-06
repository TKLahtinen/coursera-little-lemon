import React from 'react'
import Logo from '../assets/images/Logo .svg'
import { useState } from 'react'
import hamburgericon from '../assets/images/hamburger_menu.svg'

export default function Nav() {

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav>
        <a href='/'><img src={Logo} alt='logo'/></a>
        <div className='hamburger' onClick={toggleNav}>
            <img src={hamburgericon} alt='hamburger icon'/>
        </div>
        <ul className={`nav-links ${navOpen ? 'active' : ''}`}>
            <li><a href='/' className='nav-item'>Home</a></li>
            <li><a href='/' className='nav-item'>About</a></li>
            <li><a href='/' className='nav-item'>Menu</a></li>
            <li><a href='/' className='nav-item'>Reservations</a></li>
            <li><a href='/' className='nav-item'>Order Online</a></li>
            <li><a href='/' className='nav-item'>Login</a></li>
        </ul>
    </nav>
  )
}
