import React from 'react'
import Card from './Card'
import salad from '../assets/images/greek salad.jpg'
import bruchetta from '../assets/images/bruschetta.jpg'
import ldessert from '../assets/images/lemon dessert.jpg'

const dishes = {
    dish1: {
        name: 'Greek Salad',
        picture: salad,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '12.99'
    },
    dish2: {
        name: 'Bruschetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '5.89'
    },
    dish3: {
        name: 'Lemon Dessert',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
        price: '5.00'
    }

}

export default function Highlights() {
  return (
    <>
        <div className='highlights-text-container'>
            <h2>This weeks specials!</h2>
            <button className='btn-reserve'>Online Menu!</button>
        </div>
        <div className='highlights-card-container'>
            <Card name={dishes.dish1.name} picture={dishes.dish1.picture} description={dishes.dish1.description} price={dishes.dish1.price}/>
            <Card name={dishes.dish2.name} picture={bruchetta} description={dishes.dish2.description} price={dishes.dish2.price}/>
            <Card name={dishes.dish3.name} picture={ldessert} description={dishes.dish3.description} price={dishes.dish3.price}/>
        </div>
    </>
  )
}
