import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Route, Link } from 'react-router-dom' // hook


const BurgerBuilder = (props) => {
     const { } = props
     return (
          <div>
               <div>
                    <label><h4>
                         Patties
               </h4>

                         <select
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
                         </select></label>
               </div>

               <div>
                    <label><h4>
                         Buns
               </h4>

                         <select
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
                         </select></label>
               </div>

               <div>
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
               </div>

          </div >
     )
}
export default BurgerBuilder
