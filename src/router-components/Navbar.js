import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>{/*insted of h ref we are using to */}
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/product'>Product</NavLink>
    </nav>
  )
}

export default Navbar
