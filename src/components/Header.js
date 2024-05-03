import React from 'react'
import Logo from '../assets/images/Logo .svg'
import Nav from './Nav'

export default function Header() {
  return (
    <header>
        <img src={Logo} alt="logo" />
        <Nav />
    </header>
  )
}
