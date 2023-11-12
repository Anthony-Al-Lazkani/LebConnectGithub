import React, { useState } from 'react'
import './LoginSignup.css';
import { AiOutlineMail} from 'react-icons/ai'; // Import icons
import {BsEye, BsEyeSlash} from 'react-icons/bs';


function LoginSignup2() {
    
        const [passwordVisible, setPasswordVisible] = useState(false);


        const togglePasswordVisibility = () => {
            setPasswordVisible(!passwordVisible);
        };
    

    return (
        <div className='container'>
            <div className='Login-Text'>
                <h2>Login</h2>
                <div className='Underline'></div>
            </div>
            <div className='Input-Box'>
                <div className='FirstName-LastName'>
                    <div className='FirstName'>
                        <h3>First Name</h3>
                        <input type='text' placeholder='First Name...' className='FLInput' required></input>
                    </div>
                    <div className='LastName'>
                        <h3>Last Name</h3>
                        <input type='text' placeholder='Last Name...' className='FLInput' required></input>
                    </div>
                </div>
                <div className='Age-Box'>
                    <h3>Age</h3>
                    <input type='age' placeholder='Age...'></input>
                </div>

                <div className='Date-Box'>
                    <h3>Date Of Birth</h3>
                    <input type='date' className='Date-Input'></input>
                </div>

                <div className='Email-Box'>
                    <div className='Email-Icon'>
                        <AiOutlineMail />
                    </div>
                    <input type='email' placeholder='Email...' className='Email-Input' required></input>
                </div>
                <div className='Email-Box'>
                    <div className='Email-Icon'>
                        {passwordVisible ? (
                            <BsEye onClick={togglePasswordVisibility} />
                        ) : (
                            <BsEyeSlash onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <input type= {passwordVisible ? 'text' : 'password'} placeholder='Password...' className='Email-Input' required></input>
                </div>


                <div className='Login-Button-Box'>
                    <div className='Login-Button'>
                        <button>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default LoginSignup2;
