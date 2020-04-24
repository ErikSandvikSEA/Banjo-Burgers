import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook


const OrderInfo = (props) => {
     const { } = props
     return (
          <div>
               <h4>
                    Enter Your Order Information
               </h4>

               <form>
                    <div className='errors'></div>

                    <label>&nbsp;Name:&nbsp;
                    <input
                              name='name'
                              type='text'
                         />
                    </label>
                    <label>&nbsp;Email:&nbsp;
                    <input
                              name='email'
                              type='email'
                         />
                    </label>
                    <label>&nbsp;Special Instructions:&nbsp;
                    <input
                              name='specialInstructions'
                              type='text'
                         />
                    </label>
               </form>
          </div>
     )
}
export default OrderInfo
