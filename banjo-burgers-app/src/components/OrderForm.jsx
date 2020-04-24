import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook

import OrderInfo from './OrderInfo'
import BurgerBuilder from './BurgerBuilder'


const OrderForm = (props) => {
     const { } = props
     return (
          <div>
               <h1>
                   My Order
               </h1>

               <form>
                   <OrderInfo/>
                    
                    <BurgerBuilder />

                    <button
                    > + Add to Order</button>
                    <button
                    > ⨂ Remove from Order</button>
               </form>
          </div>
     )
}
export default OrderForm
