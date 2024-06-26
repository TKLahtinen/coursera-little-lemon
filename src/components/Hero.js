import React from 'react'
import bannerImage from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='banner-container'>
        <div className='banner-text'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='/booking'>
              <button className='btn-reserve' aria-label='On Click'>Reserve a Table</button>
            </Link>
        </div>
        <div className='banner-image'>
            <img src={bannerImage} />
        </div>
    </div>
  )
}
