import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

    const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget value lower than the spending");
		} else if (val > 20000) {
            alert("You cannot exceed the budget limit of " + currency + "20,000");
        } else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
		}
	}
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            
                <input 
                    required='required'
                    type='number'
                    step='10'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , width: '100px'}}
                    onInput={(event) => changeBudget(event.target.value)}>
                </input>
            
            </span>
        </div>
    );
};
export default Budget;

