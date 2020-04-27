import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook


const MyOrder = (props) => {
     const {
          key,
          details
     } = props


  if (!details) {
    return <h3>Working fetching your order details...</h3>
  }
  return (
    <div className='teamMember container'>
           <div>
      <h2>Name: {details.name}</h2>
      <h2>Email: {details.email}</h2>
      <p>Special Instructions: {details.specialInstructions}</p>
     <p>Patty: {details.patties}</p>
     <p>Bun: {details.buns}</p>
      </div>
      <ul>
            {
              
              details.toppings.map((topping, idx) => {
              return (<li key={key}>{topping}</li>)
              })
            }
          </ul>
     
          <form>
      <input></input>
      <input></input>
      <input></input>

      <input></input>
      </form>

      
    </div>
  )
}

     export default MyOrder
