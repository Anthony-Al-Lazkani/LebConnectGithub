import React, { useState } from 'react'
import './signup.css';
import { AiOutlineMail } from 'react-icons/ai'; // Import icons
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';


function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState(''); // Add this line     
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    async function signup(e) {
        e.preventDefault();
        if (!email || !password || !firstName || !lastName || !age || !dateofbirth || !phonenumber || !password1) {
            alert('Please fill in all the fields');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters');
            return;
        }


        if (password !== password1) {
            alert("Passwords do not match, Please Renconfirm Password");
            return;
        }

        try {
            await axios.post("http://localhost:8000/signup",
                { email, firstName, lastName, age, dateofbirth, phonenumber, password, password1 }
            )
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already exists")
                    }
                    else if (res.data.status === "notexist") {
                        const token = res.data.token;
                        localStorage.setItem('token', token);
                        console.log(token);
                        history("/", { state: { isLoggedin: true } })
                    }
                })
                .catch(e => {
                    alert(e)
                    console.log(e);
                })

        }


        catch (e) {
            console.log(e);

        }
    }

    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    return (
        <motion.div className='container' initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}>
            <div className='Login-Text'>
                <h2>Sign Up</h2>
                <div className='Underline-Signup'></div>
            </div>
            <form action="POST">
                <div className='Input-Box'>
                    <div className='FirstName-LastName'>
                        <div className='FirstName'>
                            <h3>First Name</h3>
                            <input type='text' placeholder='First Name...' className='FLInput' required maxLength={30} onChange={(e) => { setFirstName(e.target.value) }}></input>
                        </div>
                        <div className='LastName'>
                            <h3>Last Name</h3>
                            <input type='text' placeholder='Last Name...' className='FLInput' required maxLength={30} onChange={(e) => { setLastName(e.target.value) }}></input>
                        </div>
                    </div>
                    <div className='FirstName-LastName'>
                        <div className='FirstName'>
                            <h3>Age</h3>
                            <input type='number' placeholder='Age...' className='FLInput' required min={0} max={110} onChange={(e) => { setAge(e.target.value) }}></input>
                        </div>
                        <div className='LastName'>
                            <h3>Phone Number</h3>
                            <input type='tel' placeholder='Phone Number...' className='FLInput' required maxLength={30} onChange={(e) => { setPhonenumber(e.target.value) }}></input>
                        </div>
                    </div>

                    <div className='Date-Box'>
                        <h3>Date Of Birth</h3>
                        <input type='date' className='Date-Input' onChange={(e) => { setDateofbirth(e.target.value) }}></input>
                    </div>

                    <div className='Email-Box'>
                        <div className='Email-Icon'>
                            <AiOutlineMail />
                        </div>
                        <input type='email' placeholder='Email...' className='Email-Input' required maxLength={40} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='Password-Box'>
                        <div className='Password-Icon'>
                            {passwordVisible ? (
                                <BsEye onClick={togglePasswordVisibility} />
                            ) : (
                                <BsEyeSlash onClick={togglePasswordVisibility} />
                            )}
                        </div>

                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Password...' className='Password-Input' required maxLength={70} onChange={(e) => { setPassword(e.target.value) }}></input>
                        <div className='Password-Icon'>
                            {passwordVisible ? (
                                <BsEye onClick={togglePasswordVisibility} />
                            ) : (
                                <BsEyeSlash onClick={togglePasswordVisibility} />
                            )}
                        </div>

                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Confirm Password...' className='Password-Input' required maxLength={70} onChange={(e) => { setPassword1(e.target.value) }}></input>
                        <div className='Login-Link'>
                            <p>Already have an account?</p>
                            <Link to="/login" className='Login-Link-reference'>Login</Link> {/* Add this line */}
                        </div>

                    </div>
                    <div className='Login-Button-Box'>
                        <button type='submit' onClick={signup}>Sign Up</button>
                    </div>

                </div>
            </form>
        </motion.div>
    );
}


export default Signup;
