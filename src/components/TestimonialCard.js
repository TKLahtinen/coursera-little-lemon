import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TestimonialCard = ({ review }) => {
  return (
    <div className='testimonial-card'>
      <img src={review.image} alt={review.fullName} />
      <h3>{review.fullName}</h3>
      <span>
        {review.rating.map((star, index) => (
          <i key={index} style={{ color: star ? 'orange' : 'gray' }}>
            <FontAwesomeIcon icon={faStar} />
          </i>
        ))}
      </span>
      <p>{review.review}</p>
    </div>
  )
}

export default TestimonialCard
