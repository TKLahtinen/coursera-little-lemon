import React from 'react'
import customer1Img from '../assets/images/customer1.jpg'
import customer2Img from '../assets/images/customer2.jpg'
import customer3Img from '../assets/images/customer3.jpg'
import customer4Img from '../assets/images/customer4.jpg'
import TestimonialCard from './TestimonialCard'

const reviews = [
  {
    fullName: 'Jane Doe',
    image: customer1Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: [1, 1, 1, 1, 0],
  },
  {
    fullName: 'Joe Doe',
    image: customer2Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: [1, 1, 1, 1, 1],
  },
  {
    fullName: 'Alice Doe',
    image: customer3Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: [1, 1, 1, 0, 0],
  },
  {
    fullName: 'Bob Doe',
    image: customer4Img,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: [1, 1, 1, 1, 1],
  },
]

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <h2>Testimonials</h2>
        <div className='testimonials-card-container'>
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </div>
    </div>
  )
}

export default Testimonials
