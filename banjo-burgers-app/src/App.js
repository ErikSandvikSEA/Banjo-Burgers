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
    id: uuid(),
    name: '',
    email: '',
    specialInstructions: '',
    patties: false,
    buns: false,
    toppings: {
      Cheese: false,
      Mushroom: false,
      Onion: false,
      Lettuce: false,
      Tomato: false,
      Pineapple: false,
      Bacon: false,
    }
  }

//sample order
const initialOrder =  [
{
  id: uuid(),
  name: 'Banjo Bill',
  email: 'BanjoBill@BanjoBurger.ca',
  specialInstructions: 'EXTRA Banjo Sauce!!',
  patties: '1/4 Lb Beef',
  buns: 'Sesame',
  toppings: [
    'cheese',
    'mushroom',
    'onion',
    'bacon',
  ]
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
        id: orderFormValues.id,
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
  
    const onCheckboxChange = e => {
      // a) pull the name of the checkbox from the event
      const { name } = e.target
      // b) pull whether checked true or false, from the event
      const isChecked = e.target.checked
      // c) set a new state for the whole form
      setOrderFormValues({
        ...orderFormValues,
        toppings: {
          ...orderFormValues.toppings,
          [name]: isChecked,
        }
      })
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
           onCheckboxChange={onCheckboxChange}
           />
      </Route>
 </Switch>

    </MainDiv>
  );
};
export default App;