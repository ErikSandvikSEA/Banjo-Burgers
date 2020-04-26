import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from 'styled-components'

import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App";

const Body = styled.body`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff5d7;


`

ReactDOM.render(
<Body>
     <Router>
          <App />
     </Router >
     </Body>

     , document.getElementById("root"));