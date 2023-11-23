import './navbar.css';
import React, { useState, useRef,useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import User from '../../components/images/user.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const history=useNavigate();
    const NavRef = useRef();
    const ProfRef = useRef();
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const location = useLocation();
    const { state } = location;
    const isLoggedIn = state ? state : false;
    let token=localStorage.getItem('token');
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function reverseDateFormat(dateofbirth) {
        // Assuming originalDate is in the format "yyyy/mm/dd"
        const parts = dateofbirth.split('-');
          return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    function handlesignout(){
        console.log("signing out")
        localStorage.removeItem('token');
        token = null;
        setFirstName('');
        setLastName('');
        setAge('');
        setDateOfBirth('/');
        setPhoneNumber('');
        setEmail('');
        history('/');
      }
      const getUser = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAge(response.data.age);
            setDateOfBirth(response.data.dateofbirth);
            setPhoneNumber(response.data.phonenumber);
            setEmail(response.data.email);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (token){
            getUser();

        }
    }, [token]);

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
                                {image ? (
                                                <img src={URL.createObjectURL(image)} alt='' />
                                            ) : (
                                                <img src={User} alt='' />
                                )}
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
                                    <h2>Welcome {capitalizeFirstLetter(firstName)} !</h2>
                                    <div className='Profile-Underline'></div>
                                    <div className='Personal-Information'>
                                        <h3>Personal Information</h3>
                                        <div className='Infos'>
                                            <div className='Infos-Col'>
                                                <h5 className='Italic'>First Name </h5>
                                                <div><h5>{capitalizeFirstLetter(firstName)}</h5></div>
                                            </div>
                                            <div className='Infos-Col'>
                                                <h5 className='Italic'>Last Name </h5>
                                                <div><h5>{capitalizeFirstLetter(lastName)}</h5></div>
                                            </div>
                                            <div className='Infos-Col'>
                                                <h5 className='Italic'>Age </h5>
                                                <div><h5>{age}</h5></div>
                                            </div>
                                            <div className='Infos-Col'>
                                                <h5 className='Italic'>Phone Number </h5>
                                                <div><h5>{phonenumber}</h5></div>
                                            </div>
                                            <div className='Infos-Col'>
                                                <h5 className='Italic'>Email </h5>
                                                <div><h5>{email}</h5></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='Profile-Button-Close' onClick={ShowProfile}>
                                    <FaTimes />
                                </button>

                                <button className='SignOut-Button' onClick={handlesignout}>
                                    Sign Out
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link to='/Login'>LOGIN</Link>
                    )}
                </nav>
                <button className='Nav-Button' onClick={ShowNavBar}>
                    <FaBars />
                </button>

            </header>
        </>
    );
}

export default Navbar;
