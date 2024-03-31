import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <div className='underline'></div>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className='underline'></div>

                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;