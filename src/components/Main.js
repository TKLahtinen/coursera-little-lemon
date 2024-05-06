import React from 'react'
import {Route, Routes, Router } from 'react-router-dom';
import BookingPage from '../sites/BookingPage'
import HomePage from '../sites/HomePage'

export default function Main() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
    </main>
  )
}
