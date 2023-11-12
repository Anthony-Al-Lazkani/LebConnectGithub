import React from "react";
import './home.css'


function Home() {
    return (

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
    );
}
          
export default Home;

  