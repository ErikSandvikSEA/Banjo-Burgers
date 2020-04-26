import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'


import OrderInfo from './OrderInfo'
import BurgerBuilder from './BurgerBuilder'

const StyledButton = styled.a`
margin: 4%;

text-align: center;
display: flex;
flex-direction: column;

.example_c {
     color: #555;
   
     text-decoration: none;
     background: #ffffff;
     padding: 3%;
     border: 2px solid #555;
     border-radius: 10px;
     transition: all 0.4s ease 0s;
     }
     .example_c:hover {
     
          background: #fff5d7;
          border-color: tomato;
          transition: all 0.4s ease 0s;
          }
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

               
                   <OrderInfo/>
                    
                    <BurgerBuilder />
                    <StyledButton
                    >
                    <a href="#" class="example_c">Submit Order</a>
                  </StyledButton>
                  <StyledButton
                    >
                    <a href="#" class="example_c">Remove Item</a>
                  </StyledButton>
      
          </BurgerBuilderContainer>
     )
}
export default OrderForm
