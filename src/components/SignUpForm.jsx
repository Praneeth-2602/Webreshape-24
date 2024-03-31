import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        password: '',
        email: '',
        geolocation: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                password: credentials.password,
                email: credentials.email,
                location: credentials.geolocation
            })
        });

        const json = await response.json();
        console.log(json);
        if (json.success) {
            alert('User created successfully');
            setCredentials({
                name: '',
                password: '',
                email: '',
                geolocation: ''
            });
        }
        if (!json.success) {
            alert('Enter valid credentials');
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter your Full Name'

                            value={credentials.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email address</label>
                        <input
                            type='email'
                            id='email'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                            name='email'
                            value={credentials.email}
                            onChange={onChange}
                        />
                        <small id='emailHelp' className='form-text text-muted'>
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Password'
                            name='password'
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='geolocation'>Address</label>
                        <input
                            type='text'
                            id='geolocation'
                            name='geolocation'
                            value={credentials.geolocation}
                            onChange={onChange}
                        />
                    </div>
                    <div className='button-group'>
                        <button type='submit' style={{ marginTop: '5px' }}>
                            Submit
                        </button>
                        <Link to='/login'>
                            <button>Already a User</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUpForm;