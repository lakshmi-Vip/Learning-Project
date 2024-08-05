import React from 'react'
import { Outlet } from 'react-router'

export default function Users() {
  return (
    <div>
      <h3> User lists1</h3>
      <h3> User lists2</h3>
      <h3> User lists3</h3>
      <Outlet />
    </div>
  )
}
