import React from 'react'
import { Route, Routes, Router, useNavigate } from 'react-router-dom';
import BookingPage from '../sites/BookingPage'
import HomePage from '../sites/HomePage'
import Confirmation from '../sites/Confirmation'




export default function Main() {

  return (
    <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking"
          element={<BookingPage />} />
          <Route path="/confirmed" element={<Confirmation />} />
        </Routes>
    </main>
  )
}
