import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import MyOrder from './components/MyOrder'
import OrderForm from './components/OrderForm'
import NavBar from './components/NavBar'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

const MainDiv = styled.div`
// Ragin Beige
background-color: #fff5d7;


display: flex;
flex-direction: column;
align-items: center;

box-sizing: border-box;
max-width: 1000px;
`
const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: tomato;
  text-shadow:0 4px 2px rgba(0,0,0,0.2);
  
`;

const Header = styled.header`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const initialOrderValues = {
    name: '',
    email: '',
    specialInstructions: '',
    patties: false,
    buns: false,
    toppings: {
      cheese: false,
      mushroom: false,
      onion: false,
      lettuce: false,
      tomato: false,
      pineapple: false,
      bacon: false,
    }
  }


const initialOrder =  [
{
  id: uuid(),
  name: 'Banjo Bill',
  email: 'BanjoBill@BanjoBurger.ca',
  specialInstructions: 'EXTRA Banjo Sauce!!',
  patties: 'quarterPoundBeef',
  buns: 'sesame',
  toppings: {
    cheese: true,
    mushroom: true,
    onion: true,
    lettuce: false,
    tomato: false,
    pineapple: false,
    bacon: true,
  },
},
]





const App = () => {
  const [orderFormValues, setOrderFormValues] = useState(initialOrderValues)
  const [orders, setOrders] = useState(initialOrder)
  
  const onInputChange = e => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setOrderFormValues({
      ...orderFormValues,
      [inputName]: inputValue
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const newOrder = {
        name: orderFormValues.name,
        email: orderFormValues.email,
        specialInstructions: orderFormValues.specialInstructions,
        patties: orderFormValues.patties,
        buns: orderFormValues.buns,
        toppings: Object.keys(orderFormValues.toppings)
        .filter(topping => orderFormValues.toppings[topping] === true)
      }
      setOrders(
        [ ...orders, newOrder ]
      )
      setOrderFormValues(initialOrderValues)
    }
  


  return (
    <MainDiv>

      <Header>
        <Title>Banjo Burgers</Title>
        <NavBar />
      </Header>

      <Switch>
      <Route path='/order-form/my-order'>
        <div>
           {
             orders.map(order => {
               return (
               <MyOrder key={order.id} details={order}/>
               )
             })
           }
           </div>
      </Route>


      <Route path='/order-form'>
           <OrderForm 
           values={orderFormValues}
           onInputChange={onInputChange}
           onSubmit={onSubmit}
           />
      </Route>
 </Switch>

    </MainDiv>
  );
};
export default App;