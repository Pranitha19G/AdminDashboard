import React from 'react'
import { useLocation } from 'react-router-dom'

export default function UserDetails() {
    const{state:val}= useLocation();
    console.log("val",val)
  return (
    <div>
      userDetails
    </div>
  )
}
