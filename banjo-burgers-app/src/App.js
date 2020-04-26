import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import MyOrder from './components/MyOrder'
import OrderForm from './components/OrderForm'
import NavBar from './components/NavBar'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'

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

`;

const Header = styled.header`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const App = () => {
  return (
    <MainDiv>

      <Header>
        <Title>Banjo Burgers</Title>
        <NavBar />
      </Header>

      <Switch>
      <Route path='/order-form/my-order'>
           <MyOrder />
      </Route>


      <Route path='/order-form'>
           <OrderForm />
      </Route>
 </Switch>

    </MainDiv>
  );
};
export default App;