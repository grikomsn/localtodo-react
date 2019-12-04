import './Header.scss'

import React from 'react'

import logo from '../logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="React" />
      <h1>localtodo-react</h1>
      <p>your local todo list, now using react</p>
    </header>
  )
}
