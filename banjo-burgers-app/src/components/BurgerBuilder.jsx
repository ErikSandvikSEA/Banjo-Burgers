import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook
import styled from 'styled-components'

const Wrapper = styled.div`
margin: 3%;

`

const ToppingsContainer = styled.div`
     display: flex;
     flex - direction: column;
          form {


              
               text - align: center;
          };


`
const StyledSelect = styled.select`
	display: block;
	font-size: 16px;
	font-family: calibri;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 60%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 1%;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;


&:hover {
     border-color: #888;

}
&:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
option {
     font-weight:bolder;
     background-color:#fff5d7;
     color: tomato;


}
`
const Checkbox = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
label {
     -webkit-touch-callout: none;
     -webkit-user-select: none;
     -khtml-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     }
     
     input[type=checkbox].css-checkbox {
            position: absolute; 
         overflow: hidden; 
         clip: rect(0 0 0 0); 
         height:1px; 
         width:1px; 
         margin:-1px; 
         padding:0;
         border:0;
     }
     
     input[type=checkbox].css-checkbox + label.css-label {
          padding-left:20px;
          height:15px; 
          display:inline-block;
          line-height:15px;
          background-repeat:no-repeat;
          background-position: 0 0;
          font-size:15px;
          vertical-align:middle;
          cursor:pointer;
     }
     
     input[type=checkbox].css-checkbox:checked + label.css-label {
          background-position: 0 -15px;
     }
     
     .css-label{
          background-image:url(http://csscheckbox.com/checkboxes/dark-check-green.png);
     }
     
     /*specific classes related to Checkbox skins*/
     
     .lite-green-check{background-image:url(http://csscheckbox.com/checkboxes/lite-green-check.png);}
     .lite-blue-check{background-image:url(http://csscheckbox.com/checkboxes/lite-blue-check.png);}
     .lite-gray-check{background-image:url(http://csscheckbox.com/checkboxes/lite-gray-check.png);}
     .lite-cyan-check{background-image:url(http://csscheckbox.com/checkboxes/lite-cyan-check.png);}
     .lite-orange-check{background-image:url(http://csscheckbox.com/checkboxes/lite-orange-check.png);}
     .lite-red-check{background-image:url(http://csscheckbox.com/checkboxes/lite-red-check.png);}
     
     .lite-x-cyan{background-image:url(http://csscheckbox.com/checkboxes/lite-x-cyan.png);}
     .lite-x-gray{background-image:url(http://csscheckbox.com/checkboxes/lite-x-gray.png);}
     .lite-x-blue{background-image:url(http://csscheckbox.com/checkboxes/lite-x-blue.png);}
     .lite-x-orange{background-image:url(http://csscheckbox.com/checkboxes/lite-x-orange.png);}
     .lite-x-red{background-image:url(http://csscheckbox.com/checkboxes/lite-x-red.png);}
     .lite-x-green{background-image:url(http://csscheckbox.com/checkboxes/lite-x-green.png);}
     
     .mac-style{background-image:url(http://csscheckbox.com/checkboxes/mac-style.png);}
     .mario-style{background-image:url(http://csscheckbox.com/checkboxes/mario-style.png);}
     .alert-style{background-image:url(http://csscheckbox.com/checkboxes/alert-style.png);}
     .lite-plus{background-image:url(http://csscheckbox.com/checkboxes/lite-plus.png);}
     .dark-plus{background-image:url(http://csscheckbox.com/checkboxes/dark-plus.png);}
     .dark-plus-cyan{background-image:url(http://csscheckbox.com/checkboxes/dark-plus-cyan.png);}
     .dark-plus-orange{background-image:url(http://csscheckbox.com/checkboxes/dark-plus-orange.png);}
     .dark-check-cyan{background-image:url(http://csscheckbox.com/checkboxes/dark-check-cyan.png);}
     .dark-check-green{background-image:url(http://csscheckbox.com/checkboxes/dark-check-green.png);}
     .dark-check-orange{background-image:url(http://csscheckbox.com/checkboxes/dark-check-orange.png);}
     
     
     .depressed-lite-small{background-image:url(http://csscheckbox.com/checkboxes/depressed-lite-small.png);}
     .elegant{background-image:url(http://csscheckbox.com/checkboxes/elegant.png);}
     .depressed{background-image:url(http://csscheckbox.com/checkboxes/depressed.png);}
     .chrome-style{background-image:url(http://csscheckbox.com/checkboxes/chrome-style.png);}
     .web-two-style{background-image:url(http://csscheckbox.com/checkboxes/web-two-style.png);}
     .vlad{background-image:url(http://csscheckbox.com/checkboxes/vlad.png);}
     .klaus{background-image:url(http://csscheckbox.com/checkboxes/klaus.png);}
     
     input[type=checkbox].css-checkbox.med + label.css-label.med {
          padding-left:22px;
         height:17px; 
          display:inline-block;
          line-height:17px;
          background-repeat:no-repeat;
          background-position: 0 0;
          font-size:15px;
          vertical-align:middle;
         cursor:pointer;
     }
     
     input[type=checkbox].css-checkbox.med:checked + label.css-label.med {
     
         background-position: 0 -17px;
     }
     input[type=checkbox].css-checkbox.sme + label.css-label.sme {
          padding-left:22px;
         height:16px; 
          display:inline-block;
          line-height:16px;
          background-repeat:no-repeat;
          background-position: 0 0;
          font-size:15px;
          vertical-align:middle;
         cursor:pointer;
     }
     
     input[type=checkbox].css-checkbox.sme:checked + label.css-label.sme{
     
         background-position: 0 -16px;
     }
     input[type=checkbox].css-checkbox.lrg + label.css-label.lrg {
          padding-left:22px;
         height:20px; 
          display:inline-block;
          line-height:20px;
          background-repeat:no-repeat;
          background-position: 0 0;
          font-size:15px;
          vertical-align:middle;
         cursor:pointer;
     }
     
     input[type=checkbox].css-checkbox.lrg:checked + label.css-label.lrg{
     
         background-position: 0 -20px;
     }
     
`

const BurgerBuilder = (props) => {
     const { orderInfoValues, orderInputChange, onCheckboxChange } = props
     return (
          <Wrapper>

               <div>
                    <label><h4>
                         Patties
               </h4>

                         <StyledSelect
                              name='patties'
                              value={orderInfoValues.patties}
                              onChange={orderInputChange}
                         >
                              <option value='Select Patty'>Select</option>
                              <option value='1/4 lb Beef'>1/4 lb Beef</option>
                              <option value='Ground Turkey'>Ground Turkey</option>
                              <option value='Grilled Chicken Breast'>Grilled Chicken Breast</option>
                              <option value='Salmon'>Salmon (+$1.50)</option>
                              <option value='Black Bean'>Black Bean</option>
                              <option value='Impossible Burger'>Impossible Burger (+$2.00)</option>
                              <option value='Beyond Burger'>Beyond Burger (+$2.00)</option>
                         </StyledSelect></label>
               </div>

               <div>
                    <label><h4>
                         Buns
               </h4>

                         <StyledSelect
                              name='buns'
                              value={orderInfoValues.buns}
                              onChange={orderInputChange}
                         >
                              <option value='Select Bun'>Select</option>
                              <option value='Plain'>Plain</option>
                              <option value='Sesame Seed'>Sesame Seed</option>
                              <option value='Potato'>Potato</option>
                              <option value='Whole Wheat'>Whole Wheat</option>
                              <option value='Lettuce Wrap'>Lettuce Wrap</option>
                              <option value='Pretzel'>Pretzel Roll (+$2.00)</option>
                              <option value='Gluten Free'>Gluten-Free (+$2.50)</option>
                         </StyledSelect></label>
               </div>

               <ToppingsContainer>
                    <form size='100'>
                         <h4>
                              Toppings
               </h4>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox1"  
                              name='Cheese'
                              checked={orderInfoValues.toppings.cheese}
                              onChange={onCheckboxChange}/> Cheese <label htmlFor="checkbox1"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox2"  
                              name='Mushroom'
                              checked={orderInfoValues.toppings.mushroom}
                              onChange={onCheckboxChange}/> Mushroom <label htmlFor="checkbox2"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox3"  
                              name='Onion'
                              checked={orderInfoValues.toppings.onion}
                              onChange={onCheckboxChange}/>Onion <label htmlFor="checkbox3"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox5"  
                              name='Lettuce'
                              checked={orderInfoValues.toppings.lettuce}
                              onChange={onCheckboxChange}/>Lettuce

                              <label htmlFor="checkbox5"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox6"  
                              name='Tomato'
                              checked={orderInfoValues.toppings.tomato}
                              onChange={onCheckboxChange}/>Tomato
                              <label htmlFor="checkbox6"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox7"  
                              name='Pineapple'
                              checked={orderInfoValues.toppings.pineapple}
                              onChange={onCheckboxChange}/>Pineapple

                              <label htmlFor="checkbox7"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                         <Checkbox>
                         <input 
                              type="checkbox" 
                              className="css-checkbox" 
                              id="checkbox8"  
                              name='Bacon'
                              checked={orderInfoValues.toppings.bacon}
                              onChange={onCheckboxChange}/>Bacon (+ $1.50)<label htmlFor="checkbox8"
                               name="checkbox1_lbl" 
                               className="css-label lite-orange-check"></label>
                         </Checkbox>
                    </form>
               </ToppingsContainer>

          </Wrapper >
     )
}
export default BurgerBuilder
