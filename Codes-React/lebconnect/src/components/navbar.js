import './navbar.css';
import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import home from './home';


function Navbar(){
    const [click, setClick] = useState(false);

    const hadleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 

    return(
        <> <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap"
          rel="stylesheet"
        />
            <nav className='Navbar'>
                <header className='header-navbar'>
                    <div class='Logo'>
            
                <Link to='/' className='navbar-logo'>
               <h2> L<span>Connect</span></h2>
                </Link>
                <div className='menu-icon' onClick={hadleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li class='Navbar-links'>
                        <Link to='/' className='Navbar-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li class='Navbar-links'>
                        <Link to='/test' className='Navbar-links' onClick={closeMobileMenu}>
                         News
                        </Link>
                    </li>
                    <li class=' Navbar-links'>
                        <Link to='/tourism' className='Navbar-links' onClick={closeMobileMenu}>
                           Tourism
                        </Link>
                    </li>
                    <li class='Navbar-links'>
                        <Link to='/aboutus' className='Navbar-links' onClick={closeMobileMenu}>
                           About us
                        </Link>
                    </li>
                    <li class='Navbar-links'>
                        <Link to='/LoginSignup' className='Navbar-links' onClick={closeMobileMenu}>
                          Login
                        </Link>
                    </li>
                    
                    
                </ul>
                </header>
                <div class="Profile-Icon">
                    <a href="#" class="active">
                    <ion-icon name="person-outline"></ion-icon></a>
      </div>
            </nav>
        
        </>

    );


}

export default Navbar;