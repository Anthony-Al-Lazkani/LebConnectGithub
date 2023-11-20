import React, { useState } from 'react';
import './Login.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginSignup() {
    const history = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters");
            return false; // prevent form submission
        } else {
            // Clear any previous error message
            setPasswordError('');
            return true; // allow form submission
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword()) {
            login(); // Call login function if the password is valid
        }
    };

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:8000/login', {
                email,
                password,
            });

            if (response.data.status === 'exist') {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log(token);
                history('/', { state: {isLoggedin:true } });
            } else if (response.data === 'notexist') {
                alert('User has not signed up yet');
            } else if (response.data === 'incorrectPassword') {
                alert('Incorrect password');
            }
        } catch (error) {
            alert(error)
            alert('An error occurred');
            console.log(error);
        }
    };



    return (
        <div className='container-Login'>
            <div className='Login-Text-Login'>
                <h2>Login</h2>
                <div className='Underline-Login'></div>
            </div>
            <div className='Input-Box-Login'>
                <div className='Email-Box-Login'>
                    <div className='Email-Icon-Login'>
                        <AiOutlineMail />
                    </div>
                    <input type='email' placeholder='Email...' className='Email-Input-Login' required maxLength={35} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='Password-Box-Login'>
                    <form onSubmit={handleSubmit}>
                        <div className='Password-Icon-Login'>
                            {passwordVisible ? (
                                <BsEye onClick={togglePasswordVisibility} />
                            ) : (
                                <BsEyeSlash onClick={togglePasswordVisibility} />
                            )}
                        </div>
                        <input type={passwordVisible ? 'text' : 'password'} maxLength={70} placeholder='Password...' className='Password-Input-Login' required onChange={(e) => setPassword(e.target.value)}></input>
                        {passwordError && <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px' }}>{passwordError}</div>}
                        <div className='Account'>
                            <p>Don't have an account ?</p>
                            <Link to="/signup">Click here</Link>
                        </div>
                    </form>
                </div>



                <div className='Login-Button-Box'>
                    <div className='Login-Button'>
                        <button type='submit' onClick={login}>Login</button>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default LoginSignup;