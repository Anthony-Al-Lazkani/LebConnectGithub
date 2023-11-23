
import React from 'react';
import './Tourism.css';
import SearchBar from '/home/lazkani/Desktop/LebConnect/LebConnectGithub/Codes-React/lebconnect/src/components/comp/SearchBar.js';
import BookData from './Data.json';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/hotel2.jpg'
import pic6 from '../../images/italian.jpg'
import pic from '../../images/piccccc.jpg'
import pic7 from '../../images/marioemario.jpg'
import pic8 from '../../images/sud.jpg'
import pic9 from '../../images/viaroma.jpg'
import pic10 from '../../images/piazza.jpg'
import pic11 from '../../images/salud.jpg'
import pic12 from '../../images/copass.jpg'
import pic13 from '../../images/pierre.jpg'
import pic14 from '../../images/taco.jpg'
import pic15 from '../../images/molino.jpg'
import pic16 from '../../images/smallville.jpg'
import pic17 from '../../images/lizaa.jpg'
import pic18 from '../../images/emsherif.jpg'
import pic19 from '../../images/layla.jpg'
import pic20 from '../../images/mokhtar.jpg'
import pic21 from '../../images/ph.jpg'
import pic22 from '../../images/rotana.jpg'
function Tourism() {
  return (
    <>
  <h1> WHERE TO GO?</h1>
  <div className="SearchBar-Style">
      <SearchBar placeholder='Search for place..' data={BookData}/>
  </div>
  <section class="section_tour_container">
  
    <div class="tour__container">
      <div class="tour__card">
        <img src={pic} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Lady Of Lebanon </h5>
          <span class="tour__data-subtitle">Harissa</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic2} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Baalbeck</h5>
          <span class="tour__data-subtitle">Capital of Baalbeck-Hermel</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic3} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Al Naqoura</h5>
          <span class="tour__data-subtitle">South Lebanon</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic4} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Tyre</h5>
          <span class="tour__data-subtitle">South Lebanon</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
    </div>
  </section>
  <section className='Hotels'>
    <h1>Hotels</h1>
    <div class="tour__container">
      <div class="tour__card">
        <img src={pic5} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Grand Hilton Habtour</h5>
          <span class="tour__data-subtitle">Beirut</span>
        </div>
        <a href="https://www.hilton.com/en/hotels/beyhghi-hilton-beirut-habtoor-grand/" class="tour__link" target="_blank"></a>
      </div>
      <div class="tour__card">
        <img src={pic6} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Radisson Hotel</h5>
          <span class="tour__data-subtitle">Beirut</span>
        </div>
        <a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-beirut?cid=a:se+b:bng+c:emea+i:local+e:rdb+d:mea+h:LBBEYMRT" class="tour__link" target="_blank"></a>
      </div>
      <div class="tour__card">
        <img src={pic16} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title"> The SmallVille Hotel</h5>
          <span class="tour__data-subtitle">Beirut</span>
        </div>
        <a href="https://thesmallville.com/" class="tour__link" target="_blank"></a>
      </div>
      <div class="tour__card">
        <img src={pic22} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Gefinor Rotana </h5>
          <span class="tour__data-subtitle">Beirut</span>
        </div>
        <a href="https://www.rotana.com/rotanahotelandresorts/lebanon/beirut/gefinorrotana" class="tour__link" target="_blank"></a>
      </div>
      </div>

    </section>
    <section className='Hotels'>
    <h1>WHAT TO EAT</h1>
    <h2> TOP ITALIAN RESTAURANTS IN BEIRUT</h2>
    <div class="tour__container">
      <div class="tour__card">
        <img src={pic6} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title"> Margherita Pizzeria</h5>
          <span class="tour__data-subtitle">Gemmayze</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic8} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Sud</h5>
          <span class="tour__data-subtitle">Dbayeh</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic7} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Mario e Mario</h5>
          <span class="tour__data-subtitle">Hamra</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic9} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Via Roma</h5>
          <span class="tour__data-subtitle">Naccache</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic10} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Piazza 1140</h5>
          <span class="tour__data-subtitle">Hammana</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      </div>
      </section>
      <section className='Mexican'>
      <h2> TOP MEXICAN RESTAURANTS IN LEBANON</h2>
    <div class="tour__container">
      <div class="tour__card">
        <img src={pic11} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title"> Salud</h5>
          <span class="tour__data-subtitle">Gemmayze</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic12} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Copas</h5>
          <span class="tour__data-subtitle">Broumana</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic13} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Pierre Y Amigos </h5>
          <span class="tour__data-subtitle">Batroun</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic14} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Taco De Madre</h5>
          <span class="tour__data-subtitle">Mar Mikhael & Jounieh</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic15} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">El Molino</h5>
          <span class="tour__data-subtitle">Byblos</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      </div>
    </section>
    <section className='Mexican'>
      <h2> TOP LEBBANESE FOOD RESTAURANTS IN LEBANON</h2>
    <div class="tour__container">
      <div class="tour__card">
        <img src={pic17} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title"> Liza</h5>
          <span class="tour__data-subtitle">Achrafieh</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic18} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Em sherif</h5>
          <span class="tour__data-subtitle">Verdun</span>
        </div>
      </div>
      <div class="tour__card">
        <img src={pic19} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Leila </h5>
          <span class="tour__data-subtitle">Verdun</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic20} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title">Al Mokhtar</h5>
          <span class="tour__data-subtitle">Jenesnaya, South Lebanon</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      <div class="tour__card">
        <img src={pic21} alt="" class="tour__card-img" />
        <div class="tour__data">
          <h5 class="tour__data-title"> Le Phénicien</h5>
          <span class="tour__data-subtitle">Tyre, South Lebanon</span>
        </div>
        <a href="#" class="tour__link"></a>
      </div>
      </div>
    </section>
  </>
  )
}
export default Tourism;
