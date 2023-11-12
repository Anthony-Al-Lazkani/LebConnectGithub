import React, { useState } from 'react'
import './Login.css';
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
                    <input type='email' placeholder='Email...' className='Email-Input-Login' required maxLength={35}></input>
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
                            <input type= {passwordVisible ? 'text' : 'password'} maxLength={70} placeholder='Password...' className='Password-Input-Login' required maxLength={50} onChange={(e) => setPassword(e.target.value)}></input>
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
