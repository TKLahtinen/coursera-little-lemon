
import { useEffect, useState } from 'react'

const BookingForm = ( {availableTimes, dispatchOnDateChange, submitData} ) => {
  const occasions = ['Birthday', 'Anniversary']
  const [date, setDate] = useState(undefined)
  const [resTime, setResTime] = useState('17:00')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('Birthday')

// error states
  const [dateError, setDateError] = useState(false)
  const [guestsError, setGuestsError] = useState(false)

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(date === undefined){
      setDateError(true);
    }
    else if(guests === '' || guests < 1 || guests > 10) {
      setDateError(false);
      setGuestsError(true);
    }
    else {
    submitData(e)
    }
  }

  return (
    <div className='form-container'>
      <h2>Book a table</h2>
      <form>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" onChange={handleDateChange} className={dateError ? 'error' : ''} />
          {dateError && <p className='error-text'>Please select a date</p>}
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" onChange={((e) => setResTime(e.target.value))}>
            {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="Select how many guests are with you." min="1" max="10" id="guests" onChange={((e) => setGuests(e.target.value))} className={guestsError ? 'error' : ''}/>
          {guestsError && <p className='error-text'>Please select a number of guests between 1 and 10</p>}
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion"  onChange={((e) => setOccasion(e.target.value))}>
              {occasions.map((choice, index) => (
                  <option key={index}>{choice}</option>
              ))}
          </select>
          <button type="submit" onClick={handleSubmit} className='btn-reserve'>Make your reservation!</button>
      </form>
    </div>
  )
}

export default BookingForm
