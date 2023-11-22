import React, { useState } from 'react';
import './contactus.css';
import axios from 'axios';

export default function Contactus() {
    const [issue,setIssue]=useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [query, setQuery] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:8000/contactus', {
            issue,
            email,
            phonenumber,
            query
        });
        if (response.data.status=== 'success') {
            setMessage('Your query has been submitted successfully');
        } else {
            setMessage('Something went wrong. Please try again later');
        }
    };
    
    return( 
        <div className="absolute mt-52 ml-48  
                        w-80 float-left border-2 p-2  
                        rounded-xl shadow-xl text-xl"> 
           <form action='POST' onSubmit={handleSubmit}>
                <p className="text-2xl">Contact us Now !</p> 
                <div> 
                
                    <label className="text-sm">Select Issue*</label> 
                    <br></br> 
                    <select className="bg-gray-50 border border-gray-300  
                                        text-gray-600 text-sm rounded-lg  
                                        focus:border-blue-500 w-full p-2.5"  onChange={(e) => setIssue(e.target.value)}
                                        value={issue}> 
        
                        <option value="Feedback" > 
                            Feedback 
                        </option> 
                        <option value="ReportAPlace"> 
                            Rate a Place 
                        </option> 
                        <option value="ReportAProblem"> 
                            Report a Problem 
                        </option> 
                        <option value="ReportAbuse"> 
                            Report an Abuse  
                        </option> 
  
                    </select> 
                    <br></br> 
                    <label className="text-sm">Email Address*</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300  
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5" 
                            type="email" 
                            placeholder="Insert email here"  onChange={(e) => { setEmail(e.target.value) }}/> 
                    <br></br> 
                    <label className="text-sm">Contact No.</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500  
                                        w-full p-2.5" 
                            type="phone" 
                            placeholder="Insert Phone number"  onChange={(e) => {setPhoneNumber(e.target.value) }}/> 
                    <br></br> 
                    <label className="text-sm"> 
                        Drop Your Query  
                    </label> 
                    <br></br> 
                    <textarea className="bg-gray-50 border border-gray-300  
                                            text-sm rounded-lg  
                                            focus:border-blue-500  
                                            w-full p-2.5" 
                                rows="4" 
                                cols="25" 
                                maxlength="300" 
                                placeholder="Max Allowed Characters: 300" onChange={(e) => {setQuery(e.target.value) }}>
                    </textarea> 
                    <br></br> 
                    <button className="bg-blue-500 hover:bg-blue-700  
                                        text-white font-bold  
                                        py-2 px-4 rounded" 
                            type="submit"> 
                        Submit 
                    </button> 
                </div> 
            </form> 
            {message && <p className='Feedback-Message'>{message}</p>}
        </div> 
    ) 
}