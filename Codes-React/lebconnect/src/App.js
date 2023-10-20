import React from 'react';
import ReactDOM from 'react-dom/client';
import './Project.css';

class App extends React.Component {
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

        <section className="Front-Page">
          <h1 className="Front-Page-Header">Welcome to <br /></h1>
          <h2>Leb<span>Connect</span></h2>
          <p>Your Ultimate Guide Through Lebanon!</p>
        </section>
      </div>
    );
  }
}

export default App;
