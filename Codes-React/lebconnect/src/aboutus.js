import React from 'react';
import ReactDOM from 'react-dom/client';
import './aboutus.css';

class aboutus extends React.Component {
    render() {
      return (
        <div>
          <header className="header">
            <div className="Logo">
              <a href="index.html">
                <h2>L<span>Connect</span></h2>
              </a>
            </div>
            <nav className="Navbar">
              <ul className="Navbar-links">
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Tourism</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </nav>
  
            <div className="Profile-Icon">
            <a href="login.html"><ion-icon name="person-outline"></ion-icon></a>
          </div>
        </header>

        <div className="container">
          <section className="about-section">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              feugiat egestas nisi, vitae scelerisque justo consectetur ut.
            </p>
          </section>
        </div>

        <footer>
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default aboutus;




