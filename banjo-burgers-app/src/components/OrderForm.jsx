import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'


import OrderInfo from './OrderInfo'
import BurgerBuilder from './BurgerBuilder'

const StyledButton = styled.div`
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
     const {
          values,
          onInputChange,
          onSubmit,
          onCheckboxChange,
          disabled,
          errors,
      } = props

     return (
          <BurgerBuilderContainer>
               <h1>
                   Burger Builder
               </h1>

               
                   <OrderInfo
                    orderInfoValues={values}
                    orderSubmit={onSubmit}
                    orderInputChange={onInputChange}
                    errors={errors}
                   />
                    
                    <BurgerBuilder
                         orderInfoValues={values}
                         orderSubmit={onSubmit}
                         orderInputChange={onInputChange}
                         onCheckboxChange={onCheckboxChange}
                         errors={errors}
                    />
                    <StyledButton
                    >
                    <button className="example_c"
                    disabled={disabled}
                    onClick={onSubmit}>
                         Submit Order</button>
                  </StyledButton>
                  <StyledButton
                    >
                    <button href="#" className="example_c">Remove Item</button>
                  </StyledButton>
      
          </BurgerBuilderContainer>
     )
}
export default OrderForm
