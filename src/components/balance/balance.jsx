import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import History from '../../pages/transaction-history/history';
import './balance.css'


const Balance = () =>
{
    const Navigate = useNavigate()
    const [balance, setBalance] = useState('');
    const userId = localStorage.getItem('userId');
console.log(userId)
    useEffect(() =>
    {
        // Fetch the user's balance from the backend API
        fetch(`https://olaitan01.onrender.com/users/${userId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('id', userId)}`,
            },
        })
            .then((response) => response.json())
            .then((data) =>
            {
                console.log(data)
                // Set the balance state with the fetched data
                setBalance(data.balance);
            })
            .catch((error) =>
            {
                console.error('Error fetching balance:', error);
            });
    }, [userId]);

    return (
        <div className='bal'>
            <h2>Welcome, Your Balance is:</h2>
            <p>₦{balance}</p>
            <div className='show-history'>
                <History className='hist-tab'/>
            </div>
            <div>
            <button type='' className='btn1' onClick={() => Navigate('/Deposit')}>Deposit</button>
                <button type='' className='btn2' onClick={() => Navigate('/Withdraw')}>Withdraw</button>

          </div>
        </div>
    );
};

export default Balance;
