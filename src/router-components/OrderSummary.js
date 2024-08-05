import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navback = useNavigate()
  return (
   <> 
   <div>
      Order Confirm !
      <button onClick={() => {navback(-1)}}>Go back</button>
    </div>
    </>
  )
}

export default OrderSummary
