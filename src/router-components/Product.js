import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router'
const Product = () => {
  return (
      <>
    <div>
      <input type='search' placeholder="search product"></input>
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Product
