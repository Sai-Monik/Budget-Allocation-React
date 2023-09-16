import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { budget, expenses,currency,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [validationMessage, setValidationMessage] = useState('');

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);

        

        if (updatedBudget >= expenses.reduce((total, expense) => total + expense.cost, 0)) {
            // new budget is not lower than the total expenses
            if (updatedBudget <= 20000) {
                // new budget is not higher than £20,000
                dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
                setNewBudget(updatedBudget);
                setValidationMessage('');
            } else {
                setValidationMessage('The budget cannot exceed £20,000.');
            }
        } else {
            setValidationMessage('The budget cannot be lower than the amount spent so far.');
        }
    };

  

    const budgetStyle = {
        display: 'flex',
        backgroundColor: '#ccc',
        padding: '23px',
        borderRadius: '5px',
        marginTop:'-6px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginRight: '10px',
    };

    const currencyStyle = {
        fontSize: '20px',
        marginRight:'5px', 
    };

    const inputStyle = {
        fontSize: '15px',
        marginRight: '10px',
        flex: 1,
    };

    const validationDivStyle = {
        marginTop: '10px', 
    };
    

    return (
        <div style={budgetStyle}>
            <span style={labelStyle}>Budget:</span>
            <span style={currencyStyle}>{currency}</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={inputStyle}></input>
                {newBudget !== budget && validationMessage && (
                    <div className="text-danger" style={validationDivStyle}>{validationMessage}</div>
                )}
            </div>
        </div>
    );
};

export default Budget;
