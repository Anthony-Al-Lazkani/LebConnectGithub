import React, { useState } from 'react'
import './LoginSignup.css';
import { AiOutlineMail} from 'react-icons/ai'; // Import icons
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function LoginSignup() {
    
        const [passwordVisible, setPasswordVisible] = useState(false);


        const togglePasswordVisibility = () => {
            setPasswordVisible(!passwordVisible);
        };
        const [password, setPassword] = useState('');
        const [passwordError, setPasswordError] = useState('');

        const validatePassword = () => {
        const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters");
            return false; // prevent form submission
        }else{

        // Clear any previous error message
            setPasswordError('');
            return true; // allow form submission
            };
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validatePassword()) {
            // Handle form submission logic here
            console.log('Password is valid');
            }
        };



    return (
        <div className='container'>
            <div className='Login-Text'>
                <h2>Login</h2>
                <div className='Underline'></div>
            </div>
            <div className='Input-Box'>
                <div className='Email-Box'>
                    <div className='Email-Icon'>
                        <AiOutlineMail />
                    </div>
                    <input type='email' placeholder='Email...' className='Email-Input' required></input>
                </div>
                <div className='Password-Box'>
                    <form onSubmit={handleSubmit}>
                        <div className='Password-Icon'>
                                {passwordVisible ? (
                                    <BsEye onClick={togglePasswordVisibility} />
                                ) : (
                                    <BsEyeSlash onClick={togglePasswordVisibility} />
                                )}
                            </div>
                            <input type= {passwordVisible ? 'text' : 'password'} placeholder='Password...' className='Password-Input' required maxLength={50} onChange={(e) => setPassword(e.target.value)}></input>
                            {passwordError && <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px' }}>{passwordError}</div>}
                            <div className='Account'>
                                <p>Don't have an account ?</p>
                                <Link to="/LoginSignup">Click here</Link>
                        </div>
                    </form>
                </div>



                <div className='Login-Button-Box'>
                    <div className='Login-Button'>
                        <button type='submit'>Login</button>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default LoginSignup;
