import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'
const SignupPage = () =>
{
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: '',
        confirm_password:''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        try
        {
            // Send signup request to the backend API
            const response = await fetch('https://wynk1.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok)
            {
                // Signup successful
                const userData = await response.json();
                console.log('Signup successful:', userData);
                setSuccessMessage('Signup successful. Redirecting to login page..');
                // Redirect to the login page or perform any other actions

                setTimeout(() =>
                {
                    Navigate('/login');
                }, 3000);
            } else
            {
                // Signup failed
                const errorData = await response.json();
                console.log('Signup failed:', errorData.message);
                setErrorMessage('Please input fields to sign up')
            }
        } catch (error)
        {
            console.error('Error during signup:', error);
        }
    };

    return (
        <React.Fragment >
            <div className='main-div'>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit} className='form'>
                    {errorMessage && <span>{errorMessage}</span>}
                    {successMessage && <p>{successMessage}</p>}
                    <label>
                        Username:
                        <input
                            type="text"
                            placeholder='Enter a username or Your name'
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            placeholder='Enter a password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            placeholder='Re-enter your password'
                            name="confirm_password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className='btn01'>Sign Up</button>
                    <br />
                    <button type='button' className='btn02' onClick={() => Navigate('/login')}>Login</button>

                </form>
            </div>
        </React.Fragment>
    );
};

export default SignupPage;
