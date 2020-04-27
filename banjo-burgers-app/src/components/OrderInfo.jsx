import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
margin: 5%;
padding:3%;
list-style:none;
background:#fff;
width: 80%;
float:left;
border:1px solid #eee;
border-radius: 7px;
box-shadow:0 5px 5px rgba(0,0,0,0.1);
color:#555;
font-weight:bolder;
transition:all 0.3s linear;
font-family: calibri;
     form {
          display: flex;
          flex-direction: column;
          input {
               margin: 2%;
               border: 1px #555 solid;
               border-radius: 3px;
          };
          textarea {
               margin: 2%;

          };
     };
`

const OrderInfo = (props) => {
     const { orderInfoValues, orderInputChange } = props
     return (
          <StyledDiv>
               <h4>
                    Enter Your Order Information
               </h4>

               <form>
                    <div className='errors'></div>

                    <label>&nbsp;Name:&nbsp;
                    <input
                              name='name'
                              type='text'
                              value={orderInfoValues.name}
                              onChange={orderInputChange}
                         />
                    </label>
                    <label>&nbsp;Email:&nbsp;
                    <input
                              name='email'
                              type='email'
                              value={orderInfoValues.email}
                              onChange={orderInputChange}
                         />
                    </label>
                    <label>&nbsp;Special Instructions:&nbsp;
                    <input
                              size='35'
                              name='specialInstructions'
                              type='text'
                              value={orderInfoValues.specialInstructions}
                              onChange={orderInputChange}
                         />
                    </label>
               </form>
          </StyledDiv>
     )
}
export default OrderInfo
