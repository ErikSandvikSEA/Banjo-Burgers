import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import MyOrder from './MyOrder'
import OrderForm from './OrderForm'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'

const StyledUl = styled.ul`


margin:0;
padding:0;
list-style:none;
transform:skew(-10deg);

 li{
  background:#fff;
  float:left;
  border-right:1px solid #eee;
  box-shadow:0 2px 1px rgba(0,0,0,0.1);
  color:#555;
  font-weight:bolder;
  transition:all 0.3s linear;

  a{
     display:block;
     padding:1em 2em;
     color:inherit;
     text-decoration:none;
     transform:skew();
   };

  &:first-child{
    border-radius:7px 0 0 7px;
  };
  
  &:last-child{
    border-right:none;
    border-radius:0 7px 7px 0;
  };
  
  &:hover{
    background:#eee;
    color:tomato;
  };
  

}


`

const NavBar = () => {
     return (
          <nav>
               <StyledUl>
                    <li><Route path='/'>
                         <a><Link to='/'>Home</Link></a>
                    </Route>
                    </li>
                    <li><a><Link to='/order-form'>Start Burger Builder</Link></a></li>
                    <li><a><Link to='/order-form/my-order'>My Order</Link></a></li>

               </StyledUl>
          </nav>
     )
}
export default NavBar