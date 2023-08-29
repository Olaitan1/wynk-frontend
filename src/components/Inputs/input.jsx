import React from 'react';

const FormInput = ({ type, placeholder, value, onChange, name }) =>
{
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
};

export default FormInput;
