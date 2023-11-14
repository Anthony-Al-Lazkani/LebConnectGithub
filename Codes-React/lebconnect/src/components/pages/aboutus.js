import React from 'react';
import './aboutus.css'; // Import your CSS file
 
function AboutUs() {
 
    return (
      <>
 
        <section className="about-us">
          <div className="image">
            <img src={process.env.PUBLIC_URL + '/images/R.jpg'} alt="" />
          </div>
          <div className="text">
            <h1>About Us</h1>
            <hr />
            <p>
              Welcome to LebConnect, the online home for the vibrant Lebanese community! We are delighted to have you here as a part of our growing online family. Our website was born out of a deep love and appreciation for the Lebanese culture, heritage, and the incredible individuals who make up this diverse community.
            </p>
            <div className="last-text">
              <div className="text1">
                <h3>100+</h3>
                <h5> Members </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container1">
            <div className="container-wrapper">
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <h3>HISTORY</h3>
                  <div className="team-info">
                    <p>
                      Lebanese students have formed a community</p><p> to inspire  others
                    to discover Lebanon's beauty and connect with its people.
                  Through shared experiences and cultural events,
                      they aim to break barriers,
                      dispel misconceptions,and create a global network
                       of unity.</p>
                       <p> This community invites everyone to experience the warmth of Lebanese hospitality </p>
 
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <h3>OUR VALUES</h3>
                  <div className="team-info">
                 <p> Rooted in rich heritage, the values of our Lebanese community echo unity, diversity,
                  and deep cultural pride.We embrace inclusivity, fostering a close-knit family where every member's story
                  is respected.We</p> <p>share the beauty of our history and traditions, while our commitment
                   to hospitality creates a welcoming space for all. </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <h3>WHY JOIN US?</h3>
                  <div className="team-info">
                  <p>By becoming a member, you immerse yourself in the heart of Lebanese heritage,participating in cultural events and forging meaningful
                     connections with like-minded individuals.
This community offers a</p><p> platform to break down barriers, dispel misconceptions,
                  and create a global network of unity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
 
export default AboutUs;

