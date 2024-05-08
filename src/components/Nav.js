import React from 'react'
import Logo from '../assets/images/Logo .svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburgericon from '../assets/images/hamburger_menu.svg'

export default function Nav() {

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav>
        <Link to='/'><img src={Logo} alt='logo'/></Link>
        <div className='hamburger' onClick={toggleNav}>
            <img src={hamburgericon} alt='hamburger icon'/>
        </div>
        <ul className={`nav-links ${navOpen ? 'active' : ''}`}>
            <li><Link to='/' className='nav-item'>Home</Link></li>
            <li><Link to='/'className='nav-item'>About</Link></li>
            <li><Link to='/' className='nav-item'>Menu</Link></li>
            <li><Link to='/booking' className='nav-item'>Reservations</Link></li>
            <li><Link to='/' className='nav-item'>Order Online</Link></li>
            <li><Link to='/' className='nav-item'>Login</Link></li>
        </ul>
    </nav>
  )
}
