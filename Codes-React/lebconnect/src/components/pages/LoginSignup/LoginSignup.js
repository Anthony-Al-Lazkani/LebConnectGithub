import React, { useState } from 'react'
import './LoginSignup.css';
import { AiOutlineMail} from 'react-icons/ai'; // Import icons
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link


function LoginSignup() {
    
        const [passwordVisible, setPasswordVisible] = useState(false);


        const togglePasswordVisibility = () => {
            setPasswordVisible(!passwordVisible);
        };
    

    return (
        <div className='container'>
            <div className='Login-Text'>
                <h2>Sign Up</h2>
                <div className='Underline'></div>
            </div>
            <div className='Input-Box'>
                <div className='FirstName-LastName'>
                    <div className='FirstName'>
                        <h3>First Name</h3>
                        <input type='text' placeholder='First Name...' className='FLInput' required maxLength={30}></input>
                    </div>
                    <div className='LastName'>
                        <h3>Last Name</h3>
                        <input type='text' placeholder='Last Name...' className='FLInput' required maxLength={30}></input>
                    </div>
                </div>
                <div className='FirstName-LastName'>
                    <div className='FirstName'>
                        <h3>Age</h3>
                        <input type='number' placeholder='Age...' className='FLInput' required min={0} max={110}></input>
                    </div>
                    <div className='LastName'>
                        <h3>Phone Number</h3>
                        <input type='tel' placeholder='Phone Number...' className='FLInput' required maxLength={30}></input>
                    </div>
                </div>

                <div className='Date-Box'>
                    <h3>Date Of Birth</h3>
                    <input type='date' className='Date-Input'></input>
                </div>

                <div className='Email-Box'>
                    <div className='Email-Icon'>
                        <AiOutlineMail />
                    </div>
                    <input type='email' placeholder='Email...' className='Email-Input' required maxLength={40}></input>
                </div>
                <div className='Email-Box'>
                    <div className='Password-Icon'>
                        {passwordVisible ? (
                            <BsEye onClick={togglePasswordVisibility} />
                        ) : (
                            <BsEyeSlash onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    
                    <input type= {passwordVisible ? 'text' : 'password'} placeholder='Password...' className='Password-Input' required maxLength={70}></input>
                    <div className='Password-Icon'>
                        {passwordVisible ? (
                            <BsEye onClick={togglePasswordVisibility} />
                        ) : (
                            <BsEyeSlash onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    
                    <input type= {passwordVisible ? 'text' : 'password'} placeholder='Confirm Password...' className='Email-Input' required maxLength={70}></input>
                    <div className='Login-Link'>
                        <p>Already have an account?</p>
                        <Link to="/login" className='Login-Link-reference'>Login</Link> {/* Add this line */}
                    </div>
                
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


export default LoginSignup;
