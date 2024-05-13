import React from 'react'
import Logo from '../assets/images/Logo .svg'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='confirmation-container'>
      <img src={Logo} alt='logo'/>
      <h2>Thank you for your reservation!</h2>
      <p>Your recervation has been received and is being booked.</p>
      <p>Welcome to enjoy our meals!</p>
      <Link to='/'><button className='btn-reserve' aria-label='On Click'>Back to homepage</button></Link>
    </div>
  )
}

export default Confirmation
