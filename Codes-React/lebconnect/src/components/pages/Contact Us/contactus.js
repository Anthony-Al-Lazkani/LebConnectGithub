import React, { useState } from 'react';
import './contactus.css';

export default function Contactus() { 
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thank you, your review is sent!');
  };
    return( 
        <div className="absolute mt-52 ml-48  
                        w-80 float-left border-2 p-2  
                        rounded-xl shadow-xl text-xl"> 
           <form onSubmit={handleSubmit}>
                <p className="text-2xl">Contact us Now !</p> 
                <div> 
                    <label className="text-sm">Select Issue*</label> 
                    <br></br> 
                    <select className="bg-gray-50 border border-gray-300  
                                        text-gray-600 text-sm rounded-lg  
                                        focus:border-blue-500 w-full p-2.5"> 
        
                        <option value="Feedback" > 
                            Feedback 
                        </option> 
                        <option value="Feedback"> 
                            Rate a Place 
                        </option> 
                        <option value="Feedback"> 
                            Report a Problem 
                        </option> 
                        <option value="Feedback"> 
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
                            placeholder="Insert email here"/> 
                    <br></br> 
                    <label className="text-sm">Contact No.</label> 
                    <br></br> 
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500  
                                        w-full p-2.5" 
                            type="phone" 
                            placeholder="Insert Phone number"/> 
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
                                placeholder="Max Allowed Characters: 300"> 
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