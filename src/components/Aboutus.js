import React from 'react'
import MarioAdrian1 from '../assets/images/MarioAdrian1.jpg'
import MarioAdrian2 from '../assets/images/MarioAdrian2.jpg'

const Aboutus = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-text'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ultrices, est nec ultricies interdum, libero erat ultricies leo, nec
            elementum justo nunc et leo. Nulla facilisi. Sed auctor, nunc eget
            ultrices ultricies, justo odio ultricies nunc, nec ultricies elit
            turpis at orci. Nulla facilisi. Sed auctor, nunc eget ultrices
            ultricies, justo odio ultricies nunc, nec ultricies elit turpis at
            orci.
        </p>
      </div>
      <div className='about-us-images'>
        <img src={MarioAdrian1} alt='Mario Adrian 1' />
        <img src={MarioAdrian2} alt='Mario Adrian 2' />
      </div>
    </div>
  )
}

export default Aboutus
