import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'

const Wrapper = styled.div`
margin: 3%;

`

const ToppingsContainer = styled.div`
     form {
     display: flex;
     flex-direction: column;
     }
`
const StyledSelect = styled.select`
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;


&:hover {
     border-color: #888;
     border: 2px solid;
}
&:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
option {
	font-weight:normal;
}
`


const BurgerBuilder = (props) => {
     const { } = props
     return (
          <Wrapper>
               <div>
                    <label><h4>
                         Patties
               </h4>

                         <StyledSelect
                              name='patties'
                         >
                              <option value='selectBun'>Select</option>
                              <option value='quarterPoundBeef'>1/4 lb Beef</option>
                              <option value='groundTurkey'>Ground Turkey</option>
                              <option value='chickenBreast'>Grilled Chicken Breast</option>
                              <option value='salmon'>Salmon (+$1.50)</option>
                              <option value='blackBeanBurger'>Black Bean</option>
                              <option value='impossibleBurger'>Impossible Burger (+$2.00)</option>
                              <option value='beyondBurger'>Beyond Burger (+$2.00)</option>
                         </StyledSelect></label>
               </div>

               <div>
                    <label><h4>
                         Buns
               </h4>

                         <StyledSelect
                              name='buns'
                         >
                              <option value='selectBun'>Select</option>
                              <option value='plain'>Plain</option>
                              <option value='sesameSeed'>Sesame Seed</option>
                              <option value='potato'>Potato</option>
                              <option value='wholeWheat'>Whole Wheat</option>
                              <option value='lettuceWrap'>Lettuce Wrap</option>
                              <option value='pretzel'>Pretzel Roll (+$2.00)</option>
                              <option value='glutenFree'>Gluten-Free (+$2.50)</option>
                         </StyledSelect></label>
               </div>

               <ToppingsContainer>
                    <form>
                         <label><h4>
                              Toppings
               </h4></label>
                         <label>
                              <input
                              name='cheese'
                              type="checkbox" />&nbsp;Cheese&nbsp;
                         </label>
                         <label>
                              <input
                              name='mushroom'
                              type="checkbox" />&nbsp;Mushroom&nbsp;
                         </label>
                         <label>
                              <input
                              name='onion'
                              type="checkbox" />&nbsp;Onion&nbsp;
                         </label>
                         <label>
                              <input
                              name='pickles'
                              type="checkbox" />&nbsp;Pickles&nbsp;
                         </label>
                         <label>
                              <input
                              name='pineapple'
                              type='checkbox' />&nbsp;Grilled Pineapple&nbsp;
                         </label>
                         <label>
                              <input
                              name='bacon'
                              type="checkbox" />&nbsp;Bacon (+$1.50)&nbsp;
                         </label>
                    </form>
               </ToppingsContainer>

          </Wrapper >
     )
}
export default BurgerBuilder
