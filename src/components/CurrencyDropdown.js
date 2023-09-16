import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    const currencyOptions = [
        { value: '£', label: 'Pound' },
        { value: '$', label: 'Dollar' },
        { value: '₹', label: 'Rupee' },
        { value: '€', label: 'Euro' },
    ];

    const currencyStyle = {
        fontSize: '20px',
        marginRight: '5px',
        fontWeight: 'bold',
    };

    const selectStyle = {
        display: 'flex',
        padding: '9px',
        borderRadius: '20px',
        marginBottom: '20px',
        border: '5px solid #ccc', 
        backgroundColor: isHovered ? '#F3E0DC' : '#ccc',
        cursor: 'pointer', 
        transition: 'background-color 0.3s ease', 
    };

    const optionStyle = {
        backgroundColor: '#F3E0DC', 
    };

    return (
        <div
            className="custom-dropdown"
            style={selectStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <select
                className="form-control"
                value={currency}
                onChange={handleCurrencyChange}
                style={{ border: 'none', outline: 'none', appearance: 'none', width: '100%' }} 
            >
                {currencyOptions.map((option) => (
                    <option
                        value={option.value}
                        key={option.value}
                        style={{ ...optionStyle, cursor: 'pointer' }} 
                    >
                        {option.value} <span style={currencyStyle}>{option.label}</span>
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;
