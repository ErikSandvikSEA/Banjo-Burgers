import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import MyOrder from './components/MyOrder'
import OrderForm from './components/OrderForm'
import axios from 'axios'
import * as yup from 'yup'



const App = () => {
  return (
    <>
      <header>
        <h1>Banjo Burgers</h1>
        <Route path='/'>
          <Link to='/'>Home</Link>
        </Route>
      </header>

      <Link to='/order-form'>Start Building Your Burger</Link>


    <Switch>
      <Route path='/order-form/my-order'>
        <MyOrder />
      </Route>


      <Route path='/order-form'>
        <OrderForm />
      </Route>
    </Switch>

    </>
  );
};
export default App;