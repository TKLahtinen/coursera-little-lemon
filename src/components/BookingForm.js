import React from 'react'
import { useState } from 'react'

const BookingForm = () => {
  
  const resTimes = ['19:00', '17:00', '20:00', '21:00', '22:00', '18:00']
  const occasions = ['Birthday', 'Anniversary']
  const [date, setDate] = useState('')
  const [resTime, setResTime] = useState('19:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Date:', date)
    console.log('Time:', resTime)
    console.log('Guests:', guests)
    console.log('Occasion:', occasion)
  }
  
  return (
    <form>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)}/>
        <label for="res-time">Choose time</label>
        <select id="res-time" onChange={((e) => setResTime(e.target.value))}>
            {resTimes.map((time, index) => (
                <option key={index}>{time}</option>
            ))}
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={((e) => setGuests(e.target.value))}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" onChange={((e) => setOccasion(e.target.value))}>
            {occasions.map((choice, index) => (
                <option key={index}>{choice}</option>
            ))}
        </select>
        <input type="submit" value="Make Your reservation" onClick={handleFormSubmit}/>
    </form>
  )
}

export default BookingForm
