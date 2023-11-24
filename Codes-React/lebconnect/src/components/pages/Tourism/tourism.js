
import React from 'react';
import './Tourism.css';
import SearchBar from '../../comp/SearchBar'
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
import { motion } from 'framer-motion';



function Tourism() {
  return (
    <>
      <motion.div initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}>

        <h1> WHERE TO GO?</h1>
        <div className="SearchBar-Style">
          <SearchBar placeholder='Search for place..' data={BookData} />
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
              <a href="https://www.pizzeriamargherita.com/" className="tour__link" target="_blank"></a>
            </div>
            <div class="tour__card">
              <img src={pic8} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title">Sud</h5>
                <span class="tour__data-subtitle">Dbayeh</span>
              </div>
              <a href="https://qrstuff.s3.eu-west-1.amazonaws.com/file/20231121/224720/0c00a9ba12e567f3/SUD%20Menu%2023.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIE5CBLNMAXNAMVJA%2F20231123%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231123T195635Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1200&X-Amz-Signature=c44bddfebb4625b38bf61657be27ed6b4e636b70f3f90d4dc541a527d0047bf8" className="tour__link" target="_blank"></a>
            </div>
            <div class="tour__card">
              <img src={pic7} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title">Mario e Mario</h5>
                <span class="tour__data-subtitle">Hamra</span>
              </div>
              <a href="https://cdn.qr-code-generator.com/account11511789/41471065_1.pdf?Expires=1700855957&Signature=LPDOgqcr8-YbGRA6YXdlwLkzvz88HYeqxBtoATx6Vk6aq6hmEfwOZQGYyL1WSPWvoqP7TezplC7THezu6CTzvHVU6q6S3dt-yk2gp9dvUVEdumZWxh-j1R6FqRH-xci-e-O0R2MeLNI117~O0eryUQdPamDPI-yo90jJdlnFFI1oAOkAyRldNF7q4Y8u86EIEX6Tbjy0sOm88DOGapSh6OvafygAlBzPvMMtHYXE7TKc1D-gM1he2Eg5XR1jGg6vCpB2CNS6FpaA~2gE1ocrIwVyBRlIGRyuexVjEOp~jifQK2DYLlK5SXwCpPzl4jW8TBzOr5BxjUv7~NO3SMWXAA__&Key-Pair-Id=KKMPOJU8AYATR" class="tour__link"></a>
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
              <a href="https://www.google.com/maps?q=SALUD,+st,+Beirut&ftid=0x151f174995bc9c47:0xfd3dc3b12998d11f&hl=en-LB&gl=lb&entry=gps&lucs=karto&g_ep=CAISBjYuNDYuMRgAINeCAyoFa2FydG8%3D&g_st=ic" className="tour__link" target="_blank"></a>
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
          <h2> TOP LEBANESE FOOD RESTAURANTS IN LEBANON</h2>
          <div class="tour__container">
            <div class="tour__card">
              <img src={pic17} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title"> Liza</h5>
                <span class="tour__data-subtitle">Achrafieh</span>
              </div>
              <a href="https://lizabeirut.com/" class="tour__link"></a>
            </div>
            <div class="tour__card">
              <img src={pic18} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title">Em sherif</h5>
                <span class="tour__data-subtitle">Verdun</span>
              </div>
              <a href="https://www.emsherif.com/" class="tour__link"></a>
            </div>
            <div class="tour__card">
              <img src={pic19} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title">Leila </h5>
                <span class="tour__data-subtitle">Verdun</span>
              </div>
              <a href="https://www.google.com/search?q=leila+dbayeh&rlz=1C1GCEA_enLB1027LB1027&oq=leila+dbayeh&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQwODhqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8" class="tour__link"></a>
            </div>
            <div class="tour__card">
              <img src={pic20} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title">Al Mokhtar</h5>
                <span class="tour__data-subtitle">Jenesnaya, South Lebanon</span>
              </div>
              <a href="https://www.instagram.com/almokhtar/?hl=en" class="tour__link"></a>
            </div>
            <div class="tour__card">
              <img src={pic21} alt="" class="tour__card-img" />
              <div class="tour__data">
                <h5 class="tour__data-title"> Le Phénicien</h5>
                <span class="tour__data-subtitle">Tyre, South Lebanon</span>
              </div>
              <a href="https://www.instagram.com/lephenicienlb" class="tour__link"></a>
            </div>
          </div>
          <div class="card">
            <div class="card-side front">
              <div>Front Side</div>
            </div>
            <div class="card-side back">
              <div>Back Side</div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
export default Tourism;
