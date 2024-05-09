import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/images/FooterLogo.png'

export default function Footer() {
  return (
    <footer>
        <div className='footer-image-container'>
          <img src={footerLogo} alt='logo'/>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/'>Order Online</Link></li>
            <li><Link to='/'>Login</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
    </footer>
  )
}
