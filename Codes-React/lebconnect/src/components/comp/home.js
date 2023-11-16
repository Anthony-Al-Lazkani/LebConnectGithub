import React from "react";
import './home.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Home() {
    return (
        <>
        <section className="Front-Page">
            <div className="Front-Page-Content">
                <h1>WELCOME TO LEBANON</h1>
                <p>Enrich your vacation with tours full of delicious food, places, and elegent hotels,
                    <br></br>Press the bell icon to learn more.
                </p>
                <div>
                    <button type="button"><span></span>LEARN MORE</button>
                    <button type="button"><span></span>SUBSCRIBE</button>
                </div>
            </div>
        </section>

        <section className="Services">
            <h1>Services We Offer</h1>
            <p>We offer services that are bla blalalalalalalal.</p>

            <div className="Row">
                <div className="Services-Col">
                    <h3>Restaurants</h3>
                    <p>We provide the best restaurents based on the place, view, quality of the food and the experience of your life
                        in different culture throughout lebanon to make you come to lebanon again.
                    </p>
                </div>
                <div className="Services-Col">
                    <h3>Hotels</h3>
                    <p>We provide the best restaurents based on the place, view, quality of the food and the experience of your life
                        in different culture throughout lebanon to make you come to lebanon again.
                    </p>
                </div>
                <div className="Services-Col">
                    <h3>Resorts</h3>
                    <p>We provide the best restaurents based on the place, view, quality of the food and the experience of your life
                        in different culture throughout lebanon to make you come to lebanon again.
                    </p>
                </div>
            </div>
        </section>

        <section className="Facilities">
            <h1>Our Facilities</h1>

            <div className="Row">
                <div className="Facilities-Col">
                    <div className="Food-Image"></div>
                    <h3>Top Tier Food</h3>
                    <p>Restaurents with the best food bla bla bla bla.</p>
                </div>
                <div className="Facilities-Col">
                    <div className="Hotel-Image"></div>
                    <h3>Most Luxirious Hotels</h3>
                    <p>Restaurents with the best food bla bla bla bla.</p>
                </div>
                <div className="Facilities-Col">
                    <div className="Beach-Image"></div>
                    <h3>Beaches In Lebanon</h3>
                    <p>Restaurents with the best food bla bla bla bla.</p>
                </div>
            </div>
        </section>


        <section className="cta">
            <h1>For more information about LConnect I encourage you to Contact Us <br />by pressing the button below !</h1>
           <Link to="/ContactUs"><button>CONTACT US</button></Link>
        </section>


        </>
        
    );
}
          
export default Home;

  