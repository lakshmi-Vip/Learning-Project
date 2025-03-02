import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
export default function Users() {
  return (
    <div>
      <nav>
        <Link to='admin'>Admin</Link>
        <Link to='userId'>UserDetails</Link>
      </nav>
      {/* <Outlet /> */}
      <h3> User lists1</h3>
      <h3> User lists2</h3>
      <h3> User lists3</h3>
      <Outlet />
    </div>
    
  )
}
