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
    const ProfRef = useRef();
    const ShowProfile = () => {
        ProfRef.current.classList.toggle("Profile_Screen");
    }



    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
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
            <button className='Profile-Button' onClick={ShowProfile}>
                < CgProfile />
            </button>
            <div className='Profile' ref={ProfRef}>
                <div className='Profile-Div'>
                    <div className='Profile-Photo' onClick={handleImageClick}>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt=''/>
                        ): (

                            <img src={User} alt=''/>
                        )}
                        <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>
                    </div>
                </div>
                <div className='Info'>
                    <h2>Personal Information</h2>
                    <div className='NAME'>
                        <h3>Name</h3>
                        <h3>Last Name</h3>
                    </div>
                </div>
                <button className='Profile-Button-Close' onClick={ShowProfile}>
                < FaTimes />
                </button>
            </div>
        </header>
        
        </>

    );


}

export default Navbar;