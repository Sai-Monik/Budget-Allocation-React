import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

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
            <span style={labelStyle}>Spent so far: {currency}</span>
            <span style={currencyStyle}>{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;

