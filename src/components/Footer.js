import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/images/FooterLogo.png'
import {
  faFacebook,
  faInstagram,
  faTwitter
}
from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: faFacebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: faInstagram
  },
  {
    name: 'X',
    url: 'https://www.twitter.com',
    icon: faTwitter
  }
]
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
          <p>678 Pisa Ave, Chicago, IL 60611</p>
          <p>(312) 593-2744</p>
          <p>customer@littlelemon.com</p>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}><a href={link.url}><FontAwesomeIcon icon={link.icon} size='lg' /></a></li>
            ))}
          </ul>
        </div>
    </footer>
  )
}
