import React from 'react';

const SelectInput = ({ options, id, label, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={id}
                className="form-control"
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => { return (<option key={index}>{option}</option>); })}
            </select>
        </div>
    );
};

export default SelectInput;