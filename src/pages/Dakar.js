import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import '../styles/Dakar.css';
import Dakar26 from '../assets/Dakar26.jpg';
import Jeux from '../assets/Jeux.jpg';
import Begins from '../assets/Begins.jpg';
import los_angeles from '../assets/los_angeles.jpg';
import { useState , useEffect } from "react";


function Dakar () {
    const olympicStartDate = new Date('2026-10-31T00:00:00Z'); 
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
        <div class="dakar">
              <div class="container_dakar">
                <div class="decann_dakar">
                    <div class="images_dakar_logo">
                        <img src={Dakar26} class="image_dakar"/>
                    </div>
                </div>
                <div class="text_dakar">
                    <div class="textss_dakar">
                        <p class="fw-light">DAKAR 2026</p>
                    </div>
                    <div class="textss_dakar">
                        <p class="fw-light">31 October - 14 November</p>
                    </div>
                    <div class="textss_dakar">
                        <p class="fw-light">{timeRemaining.days} days</p>
                    </div>
                    <div class="textss_dakar">
                        <p class="fw-light">Senegal</p>
                    </div>
                    <div class="textss_dakar">
                        <Link   style={{textDecoration : "none" , color : "white"}}>
                            <p class="clickk_dakar">Official Website</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div class="news_dakar">
                <div class="hot_new_dakar">
                    <div class="images_dakar ">
                        <img src={Jeux} style={{height : 389}} />
                    </div>
                    <div class="tile_dakar text-start">
                        <h5 class="dakar_tile">Dakar 2026 unveils plans for the second edition of Dakar en Jeux</h5>
                        <p style={{fontSize : 11, color : "grey"}}>Dakar 2026</p>
                    </div>
                </div>

                <div class="hot_new_dakar">
                    <div class="images_dakar">
                        <img src={Begins} style={{height : 280}} />
                    </div>
                    <div class="tile_dakar text-start">
                        <h5 class="dakar_tile">"A little insight into what we'll see in 2026" - Welcome
                        <br/> to the Dakar en Jeux festival ahead of the next
                        <br/> Youth Olympics</h5>
                        <p style={{fontSize : 11, color : "grey"}}>Dakar 2026</p>
                    </div>
                </div>
            </div>

            
            <div class="event_dakar">
            <div class="even_dakar">
                    <div class="images_dakar">
                        <img src={los_angeles}  />
                    </div>
                    <div class="tile_even text-start">
                       <h5 class="dakar_tile">
                       Dakar breakers see new 
                       <br/>opportunities with Olympic 
                       <br/>debut | Breaking Life
                       </h5>
                       <p style={{fontSize : 11, color : "grey"}}>
                       Dakar 2026
                       </p>
                      
                    </div>
                </div>

                <div class="even_dakar">
                    <div class="images_dakar">
                        <img src={los_angeles}  />
                    </div>
                    <div class="tile_even text-start">
                       <h5 class="dakar_tile">
                       Dakar En Jeux 2022: Introduce
                       <br/> Africa to the world through 
                       <br/>sports
                       </h5>
                       
                       <p style={{fontSize : 11 , color : "grey"}}>Dakar 2026</p>
                    </div>
                </div>

                <div class="even_dakar">
                    <div class="images_dakar">
                        <img src={los_angeles}  />
                    </div>
                    <div class="tile_even text-start">
                      <h5 class="dakar_tile">
                      11-year-old Kenyan table tennis 
                      <br/>prodigy aims for the top
                      </h5>
                      <p style={{fontSize : 11 , color : "grey"}}>
                      Dakar 2026
                      </p>
                    </div>
                </div>
            </div>

            <div class="main_dakar">
                <div class="cap_main_dakar">
                    <h1 class="text-start  fw-bold" style={{fontSize : 60}}>ABOUT THE
                        <br/>GAMES</h1>
                </div>
                <div class="cap_dakar ">
                    <p class="text-start fst-normal " style={{fontSize : 19}}>
                    The 4th Summer Youth Olympic Games will take place in Dakar, Senegal, the 
                    <br/>first country on the African continent to be awarded the honour of hosting an 
                    <br/>Olympic sports event. The Youth Olympic Games Dakar 2026 represent a 
                    <br/>catalyst for a sporting, social, cultural, educational and economic 
                    <br/>transformation that will create new hope, opportunities and confidence for 
                    <br/>young people.
                    <br/>
                    <br/>Dakar 2026 is born out of the desire to take the Youth Olympic Games to all 
                    <br/>parts of the world and to put the Games at the heart of Africa’s transformation. 
                    <br/>Senegal’s sporting culture and practice is rooted in history and in the 
                    <br/>population, especially young people. It aims to be synonymous with symbiosis, 
                    <br/>exchange, joy and pride, but also humility for young people worldwide, in Africa 
                    <br/>and Senegal. Sport is meant to be a celebration, a way of living together, a 
                    <br/>factor for peace, rapprochement and social cohesion.
                    <br/>
                    <br/>Postponement
                    <br/>
                    <br/>In a decision approved during the 136th Session of the IOC on 17 July 2020, 
                    <br/>Senegal and the International Olympic Committee (IOC) mutually agreed to 
                    <br/>postpone the Youth Olympic Games (YOG) in Dakar from 2022 to 2026.



                    </p>
                </div>
            </div>

        </div>
    );
}

export default Dakar;