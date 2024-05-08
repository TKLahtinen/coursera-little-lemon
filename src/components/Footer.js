import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <img src='https://placehold.co/200x400' alt='logo'/>
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
