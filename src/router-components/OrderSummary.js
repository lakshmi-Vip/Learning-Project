import React from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

function OrderSummay() {
    const navback = useNavigate()
  return (
   <> 
   <div>
      Order Confirm ! hi
      <button onClick={() => {navback('/')}}>Go back</button>
    </div>
    </>
  )
}

export default OrderSummay
