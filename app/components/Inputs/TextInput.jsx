import React from 'react';

const TextInput = ({ id, value, label, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                className="form-control"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;