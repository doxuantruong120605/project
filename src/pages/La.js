import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import '../styles/La.css';
import Annual from '../assets/Annual.jpg';
import Begins from '../assets/Begins.jpg';
import gootoo from '../assets/gootoo.jpg';
import Sign from '../assets/Sign-up-here.jpg';
import Press from '../assets/Press.jpg';
import Pitch from '../assets/Pitch.jpg';
import la28 from '../assets/la28.jpg';
import social from '../assets/social.jpg'; 
import los_angeles from '../assets/los_angeles.jpg';
import { useState , useEffect } from "react";



function La () {
    const olympicStartDate = new Date('2028-07-14T00:00:00Z'); 
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = olympicStartDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
        <div class="la">
            <div class="container_la">
                <div class="decann_la">
                    <div class="images_la_logo">
                        <img src={la28} class="image_la"/>
                    </div>
                </div>
                <div class="text_la">
                    <div class="textss_la">
                        <p class="fw-light">LA 2028</p>
                    </div>
                    <div class="textss_la">
                        <p class="fw-light">14 July - 30 July</p>
                    </div>
                    <div class="textss_la">
                        <p class="fw-light">{timeRemaining.days} days</p>
                    </div>
                    <div class="textss_la">
                        <p class="fw-light">United States of America</p>
                    </div>
                    <div class="textss_la">
                        <Link   style={{textDecoration : "none" , color : "white"}}>
                            <p class="clickk_la ">Official Website</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div class="news_la">
                <div class="hot_new_la">
                    <div class="images_la ">
                        <img src={social} style={{height : 389}} />
                    </div>
                    <div class="tile_la text-start">
                        <h5 class="la_tile">Athletes, celebrities, artists: check out the LA28 logo creators!</h5>
                        <p>The logo for LA 2028 was unveiled on Tuesday (1 September) and, with it
                            <br/> a list of 26 "creators" who will represent the city and the Games . Fourteen
                            <br/>  of these are athletes including no fewer than six Olympic champions headed
                            <br/>   by nine-time athletics medallist  Allyson Felix who played an important
                            </p>
                        <p style={{fontSize : 11, color : "grey"}}>LA 2028 | Olympic Games</p>
                    </div>
                </div>

                <div class="hot_new_la">
                    <div class="images_la">
                        <img src={Begins} style={{height : 280}} />
                    </div>
                    <div class="tile_la text-start">
                        <h5 class="la_tile">The LA Coliseum cauldron is lit ahead of 2028!</h5>
                        <p>Thomas Bach joined gold medallists and the LA 2028 
                            <br/>organising  committee to fire up the LA Memorial 
                            <br/>Coliseum before an NFL  match.</p>
                        <p style={{fontSize : 11, color : "grey"}}>LA 2028 | Olympic Games</p>
                    </div>
                </div>
            </div>

            <div class="event_la">
            <div class="even_la">
                    <div class="images_la">
                        <img src={los_angeles}  />
                    </div>
                    <div class="tile_even text-start">
                       <h5 class="la_tile">
                       Los Angeles 1932: California welcomes
                       <br/> the world 
                       </h5>
                       <p>
                            “The time had truly come to bestow recognition 
                       <br/>upon the sporting youth of the United States for 
                       <br/>the effort they have made since Athens and for 
                       <br/>their ever-brilliant and numerous contributions 
                       <br/>to Games past,” wrote Pierre de Coubertin in his 
                       <br/>Olympic Memoirs. “It was for these three reasons 
                       <br/>that the
                       </p>

                       <p style={{fontSize : 11, color : "grey"}}>
                       LA 2028 | Olympic Games
                       </p>
                      
                    </div>
                </div>

                <div class="even_la">
                    <div class="images_la">
                        <img src={gootoo}  />
                    </div>
                    <div class="tile_even text-start">
                       <h5 class="la_tile">
                       Los Angeles 1984 Official Film | 16 Days
                       <br/> of Glory
                       </h5>
                       <p>
                        By any yardstick, the 1984 Summer Games were a 
                        <br/>triumph of organisational skill, under the 
                        <br/>leadership of Peter Ueberroth. Some of the 
                        <br/>greatest achievements in the history of the 
                        <br/>Olympics unfolded in Los Angeles: Carl Lewis's 
                        <br/>four gold medals, Joan Benoit winning the 
                        <br/>first-ever women's marathon, Michael Gross's 
                        <br/>two golds and two silvers in the swimming pool, 
                        <br/>and Sebastian Coe's second successive gold in the 
                        <br/>1,500 metres. The American TV producer Bud 
                        <br/>Greenspan would go on to make nine further 
                        <br/>Olympic documentaries, and introduced the in-depth  
                        <br/>study of individualcompetitors which would become  
                        <br/>the hallmarkof his work.
                       </p>

                       <h6>
                        <b>Bud Greenspan | 1986 | 284' |2013 IOC Restored 
                            <br/>version</b>
                       </h6>
                       <p style={{fontSize : 11 , color : "grey"}}>Official Films</p>
                    </div>
                </div>

                <div class="even_la">
                    <div class="images_la">
                        <img src={los_angeles}  />
                    </div>
                    <div class="tile_even text-start">
                      <h5 class="la_tile">
                      Paris 2024 & Los Angeles 2028 Host City
                      <br/> Election
                      </h5>
                      <p>
                      IOC president Thomas Bach presents Paris and Los
                      <br/> Angeles as host cities of the Olympic Games.
                      </p>
                    </div>
                </div>
            </div>

           
            <div class="main_la">
                <div class="cap_main_la">
                    <h1 class="text-start  fw-bold" style={{fontSize : 60}}>ABOUT THE
                        <br/>GAMES</h1>
                </div>
                <div class="cap_la ">
                    <h5 class=" text-start">LA 2028</h5>
                    <p class="text-start fst-normal " style={{fontSize : 19}}>
                    Discover how the Los Angeles Candidature Committee describes their vision 
                    <br/>for the Games and the legacy they plan to leave behind:
                    <br/>
                    <br/>For centuries, people have been following the sun to California – to a coastal 
                    <br/>paradise of beautiful weather, inspiring landscapes and an ocean of 
                    <br/>possibilities. Since it was first settled, LA – the City of Angels – has built a 
                    <br/>culture of progress by harnessing creativity and imagination for reinvention. 
                    <br/>Today, LA28 is inviting the world to follow the sun on a journey of sport and 
                    <br/>innovation destined to help transform the Games to:
                    <br/>
                    <p>
                    <br/>Deliver the ultimate personalised experience for the Athletes
                    <br/>Maximise our existing sports infrastructure to ensure a sustainable long-
                    <br/>term legacy
                    <br/>Produce a fresh blend of sport and entertainment to help refresh the 
                    <br/>Olympic brand worldwide and capture the imagination of youth
                    <br/>Reignite America’s passion for the Olympic Movement for generations to 
                    <br/>come
                    <br/>Embrace the principles of Olympic Agenda 2020 through fiscally prudent 
                    <br/>Games that deliver enduring benefits to the host city and the Olympic 
                    <br/>Movement
                    </p>
                    As a symbol of our vision, we will utilise LA’s brightest star, the sun. The sun not 
                    <br/>only shines on the thousands of athletes who live and train in Los Angeles, it 
                    <br/>serves as a powerful ally in the search for a more sustainable Games.
                    <br/>
                    <br></br>Today , the sun lights the Olympic flame. Tomorrow, it will ignite an energy 
                    <br/>revolution. By following the sun, LA 2028 will help reimagine a New Games 
                    <br></br>for a New Era.
                    <br/>
                    <br/>
                    <h5>Sustainability and legacy</h5>
                    
                    <br/>Situated on a wide hilly coastal plain, Los Angeles is one of the most 
                    <br/>geographically diverse cities in the world with picturesque mountains, vibrant 
                    <br/>canyons, verdant valleys and world-renowned beaches. Bounded by the Pacific 
                    <br/>Ocean to the south and west, LA stretches from the foothills of the Santa 
                    <br/>Monica Mountains to the north down to the San Gabriel Mountains to the east, 
                    <br/>with canyons and valleys that are home to a vast array of wildlife and natural 
                    <br/>wonders. LA is characterised by its consistent climate and cheerful sunshine 
                    <br/>that draw millions of people from around the world to pursue their dreams.
                    <br/>
                    <br/>The opportunity to host the 2028 Olympic Games has already catalysed LA’s 
                    <br/>community. Hundreds of partners are excited to promote the extraordinary 
                    <br/>values the Olympic Games stand for, and the values LA holds dear, including 
                    <br/>sustainability in all of its forms – social inclusion, economic benefit and 
                    <br/>environmental stewardship.
                    <br/>
                    <br/>LA 2028’s vision for the Games is to create a grand partnership among the 
                    <br/>city’s stakeholders that sets the standard for sustainable mega-events 
                    <br/>everywhere, and makes that knowledge universally accessible and applicable. 
                    <br/>The guiding principle behind this vision is to “work with what exists”. LA 2028’s 
                    <br/>Games concept uses 100 percent existing and temporary venues with plans to 
                    <br/>reuse or return all temporary and overlay materials to their natural state — a 
                    <br/>revolutionary concept that will extend beyond the Games.
                    <br/>
                    <br/>LA 2028 will work towards hosting the first “Energy Positive Games” by 
                    <br/>generating more energy through renewable sources and energy efficiency 
                    <br/>efforts than the energy needed to power the Games. The candidature has already 
                    <br/>commenced discussions with LA’s venue operators, regional utility 
                    <br/>partners, tech innovators and the region’s 18 million residents to meet this goal.
                    <br/>
                    <br/>Finally, LA 2028 will accelerate the city’s ambitious goal of achieving zero 
                    <br/>waste through its venue operations and overlay reuse strategy. This will be 
                    <br/>accomplished by partnering with venues to develop robust recycling 
                    <br/>programmes that apply best practices from LA’s existing stadiums, including 
                    <br/>the LA Memorial Coliseum – the largest National Football League stadium to 
                    <br/>achieve zero waste.
                    <br/>
                    <br/>
                    <h5>Athlete's View</h5>
                    
                    <br/>Q&A with Allyson Felix, athletics
                    <br/>
                    <br/>A native Angeleno, Allyson Felix is the most decorated female Olympian in track 
                    <br/>and field history, with a total of nine Olympic medals.
                    <br/>
                    <br/>How would the sustainable Games plan benefit the athletes of your 
                    <br/>community?
                    <br/>
                    <br/>“LA 2028’s Games plan was built with sustainability as a core pillar and this will 
                    <br/>translate to significant benefits for the thousands of Olympians and community 
                    <br/>sport organisations in Southern California. LA 2028’s guiding principle is 
                    <br/>responsibility: that means to work with what already exists, and this means 
                    <br/>everything from world-class venues to LA’s robust network of over 2,000 youth 
                    <br/>sports organisations, including the LA84 Foundation. Leading up to the Games, 
                    <br/>LA 2028 will form a Youth Sports Committee to work with these existing 
                    <br/>organisations, in a joint endeavour to bolster their own programming and 
                    <br/>curricula around sport and healthy living, with unique content provided by the 
                    <br/>organising committee in collaboration with the Olympic Education 
                    <br/>Commission. After the Games, a 2028 Legacy Foundation will continue this 
                    <br/>work by distributing sports assets including swimming pools, equipment and 
                    <br/>funding.”



                    </p>
                </div>
            </div>


        </div>
    );
}

export default La;