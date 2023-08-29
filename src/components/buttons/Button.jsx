import React from 'react';

const AuthButton = ({ text, onClick }) =>
{
    return <button onClick={onClick}>{text}</button>;
};

export default AuthButton;
