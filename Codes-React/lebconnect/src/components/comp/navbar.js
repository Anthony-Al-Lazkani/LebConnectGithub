import './navbar.css';
import React, { useState, useRef } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import User from '../../components/images/user.png';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const history=useNavigate();
    const NavRef = useRef();
    const ProfRef = useRef();
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const location = useLocation();
    const { state } = location;
    const isLoggedIn = state ? state : false;
    let token=localStorage.getItem('token');
    function handlesignout(){
        console.log("signing out")
        localStorage.removeItem('token');
        token = null;
        history('/');
      } 

    const ShowNavBar = () => {
        NavRef.current.classList.toggle("Responsive_Nav");
    };

    const ShowProfile = () => {
        ProfRef.current.classList.toggle("Profile_Screen");
    };

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    };
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap"
                rel="stylesheet"
            />
            <header className='Navbar-Header'>
                <div className='Logo'><Link to='/'><h2>L<span>Connect</span></h2></Link></div>
                <nav className='Navbar' ref={NavRef}>
                    <Link to='/' data-text='Home'>HOME</Link>
                    <Link to='/news'>NEWS</Link>
                    <Link to='/tourism'>TOURISM</Link>
                    <Link to='/aboutus'>ABOUT US</Link>
                    {token ? (
                        <>
                            <button className='Nav-Button Nav-Close-Button' onClick={ShowNavBar}>
                                <FaTimes />
                            </button>
                            <button className='Profile-Button' onClick={ShowProfile}>
                                <CgProfile />
                            </button>
                        </>
                    ) : (
                        <Link to='/Login'>LOGIN</Link>
                    )}
                </nav>
                <button className='Nav-Button' onClick={ShowNavBar}>
                    <FaBars />
                </button>
                <div className='Profile' ref={ProfRef}>
                    <div className='Profile-Div'>
                        <div className='Profile-Photo' onClick={handleImageClick}>
                            {image ? (
                                <img src={URL.createObjectURL(image)} alt='' />
                            ) : (
                                <img src={User} alt='' />
                            )}
                            <input type='file' ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className='Info'>
                        <h2>n</h2>
                        <div className='NAME'>
                            <h3>first name</h3>
                            <h3>lat name</h3>
                        </div>
                    </div>
                    <button className='Profile-Button-Close' onClick={ShowProfile}>
                    <button className='SignOut-Button' onClick={handlesignout}>
  Sign Out
</button>
                    
                        
                        <FaTimes />

                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
