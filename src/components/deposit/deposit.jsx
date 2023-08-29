import React, { useState } from 'react';
import  './deposit.css'
const DepositPage = () =>
{
    const [formData, setFormData] = useState({
        meterNumber: '',
        amount: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleBuyUnit = async () =>
    {

        try
        {
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId');
            const depositResponse = await fetch(`https://wynk1.onrender.com/api/buy-light/${userId}`,
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token', token)}`,

                },
                body: JSON.stringify(formData),
            });

            if (depositResponse.ok)
            {
                const depositData = await depositResponse.json();
                console.log('Withdrawal successful:', depositData);
                const successful = depositData;

                // Display the error message
                setSuccessMessage(successful.message);
            } else
            {
                console.error('Deposit failed:', depositResponse.status);
                // Handle deposit failure
                // Show error message or perform any error handling
            }
        } catch (error)
        {
            console.error('Error during deposit:', error);
            // Handle deposit error
            // Show error message or perform any error handling
        }
    }


    return (
        <div className='container'>
            {successMessage && <p>{successMessage}</p>}

            <h2>RECHARGE METER</h2>
            <div className='recharge'> <label>
                Meter Number:
                <input type="number" name="meterNumber" value={formData.meterNumber} onChange={handleChange} />
            </label>
            <br />
            <label>
                Amount:
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
            </label>
            <br /></div>
           
            <button onClick={handleBuyUnit}>Buy Units</button>
            <div>
             

            </div>
        </div>
       
    );

}
export default DepositPage;
