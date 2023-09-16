import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

   
    const remainingBudget = budget - totalExpenses;
    const totalStyle = {
        display: 'flex',
        backgroundColor: '#ccc', 
        padding: '15px',
        borderRadius: '5px',
    };

    const labelStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        marginRight: '3px',
    };

    const currencyStyle = {
        fontSize: '20px',
        marginRight: '5px',
    };

    return (
        <div className='alert alert-primary' style={totalStyle}>
            <span style={labelStyle}>Remaining: {currency}</span>
            <span style={currencyStyle}>{remainingBudget}</span>
        </div>
    );
};

export default Remaining;

