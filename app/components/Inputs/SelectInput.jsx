import React from 'react';

const SelectInput = ({ options, id, label, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                name={id}
                className="form-control"
                onChange={onChange}
            >
                {options.map((index, option) => { return (<option key={index}>{option}</option>); })}
            </select>
        </div>
    );
};

export default SelectInput;