import React from 'react'
import BookingForm from '../components/BookingForm'
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../API/fakeAPI';
import { useNavigate } from 'react-router-dom';

const updateTimes =  (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())]

export default function BookingPage() {

  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes)

  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if(response){
      navigate('/confirmed')
    }
  }

  return (
    <>
      <BookingForm availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData}  />
    </>
  )
}
