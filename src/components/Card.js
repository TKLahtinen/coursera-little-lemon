import React from 'react'

export default function Card(props) {
  return (
    <div className='card-body'>
      <div className='card-image'>
        <img src={props.picture} alt='card'/>
      </div>
      <div className='card-title'>
        <h3>{props.name}</h3>
        <h4>$ {props.price}</h4>
      </div>
      <p>{props.description}</p>
      <button>Order a delivery</button>
    </div>
  )
}
