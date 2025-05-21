import React from 'react'

export default function Orders() {

  const userRole= JSON.parse(localStorage.getItem("role"))


  return (
    <div>
      {userRole==="user"||"admin"?<h2>You  have  no access to order</h2>: 
      <div>
        orders
        </div>
      
      }
    </div>
  )
}
