import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    const [error, setError] = useState('');

    const submitEvent = () => {
        const costValue = parseFloat(cost);

        if (isNaN(costValue)) {
            setError('Please enter a valid number for allocation.');
            return;
        }

        if (costValue > remaining) {
            setError(`The value cannot exceed remaining funds ${currency}${remaining}`);
            return;
        }

        setError('');

        const expense = {
            name: name,
            cost: costValue,
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };


return (
    <div className="row">
        <div className="col-md-3">
            <select className="form-control mb-2" onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose Department...</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Admin">Admin</option>
            </select>
        </div>
        <div className="col-md-3">
            <select className="form-control mb-2" onChange={(event) => setAction(event.target.value)}>
                <option value="Add">Add Allocation</option>
                <option value="Reduce">Reduce Allocation</option>
            </select>
        </div>
        <div className="col-md-3" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '5px' }}>{currency}</span>
            <input
                type="number"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                placeholder="Enter allocation amount"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <div className="col-md-3">
            <button style={{backgroundColor:'#05386B'}} className="btn btn-primary" onClick={submitEvent}>
                Save
            </button>
        </div>
    </div>
);
};

export default AllocationForm;