import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'


import OrderInfo from './OrderInfo'
import BurgerBuilder from './BurgerBuilder'

const StyledButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

`
const BurgerBuilderContainer = styled.div`
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
`


const OrderForm = (props) => {
     const { } = props

     return (
          <BurgerBuilderContainer>
               <h1>
                   My Order
               </h1>

               <form>
                   <OrderInfo/>
                    
                    <BurgerBuilder />
                    <StyledButton
                    > + Add to Order</StyledButton>
                    <button
                    > ⨂ Remove from Order</button>
               </form>
          </BurgerBuilderContainer>
     )
}
export default OrderForm
