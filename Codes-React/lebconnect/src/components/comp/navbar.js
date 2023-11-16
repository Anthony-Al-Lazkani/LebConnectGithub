import './navbar.css';
import React, {useState} from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import home from '../comp/home';
import {FaBars, FaTimes} from 'react-icons/fa';


function Navbar(){
    const NavRef = useRef();
    const ShowNavBar = () => {
        NavRef.current.classList.toggle("Responsive_Nav");
    }
 

    return(
        <> <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <header className='Navbar-Header'>
            <div className='Logo'><Link to='/'><h2>L<span>Connect</span></h2></Link></div>
            <nav className='Navbar' ref={NavRef}>
                <Link to='/' data-text = 'Home'>HOME</Link>
                <Link to='/test'>NEWS</Link>
                <Link to='/tourism'>TOURISM</Link>
                <Link to='/aboutus'>ABOUT US</Link>
                <Link to='/Login'>LOGIN</Link>
                <button className = 'Nav-Button Nav-Close-Button' onClick={ShowNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className = 'Nav-Button'  onClick={ShowNavBar}>
                <FaBars />
            </button>
        </header>
        
        </>

    );


}

export default Navbar;