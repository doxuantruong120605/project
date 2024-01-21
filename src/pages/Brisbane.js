import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Brisbane.css';
import brisbane32 from '../assets/brisbane32.jpg';
import { Link } from "react-router-dom";
import Annual from '../assets/Annual.jpg';
import Begins from '../assets/Begins.jpg';
import gootoo from '../assets/gootoo.jpg';
import Sign from '../assets/Sign-up-here.jpg';
import Press from '../assets/Press.jpg';
import Pitch from '../assets/Pitch.jpg';
import { useState , useEffect } from "react";





function Brisbane () {
    const olympicStartDate = new Date('2032-07-23T00:00:00Z'); 
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
        <div class="brisbane">
            <div class="containerr">
                <div class="decann">
                    <div class="bri-imagess">
                        <img src={brisbane32} class="image-bri"/>
                    </div>
                </div>
                <div class="contai-text">
                    <div class="textss">
                        <p class="fw-light">BRISBANE 2032</p>
                    </div>
                    <div class="textss">
                        <p class="fw-light">23 July - 8 August</p>
                    </div>
                    <div class="textss">
                        <p class="fw-light">{timeRemaining.days} days</p>
                    </div>
                    <div class="textss">
                        <p class="fw-light">Australia</p>
                    </div>
                    <div class="textss">
                        <Link   style={{textDecoration : "none" , color : "white"}}>
                            <p class="clickk">Official Website</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div class="new-hot">
                <div class="hot-new">
                    <div class="image-newss ">
                        <img src={Annual} style={{height : 389}} />
                    </div>
                    <div class="tile-new2 text-start">
                        <h5>Brisbane 2032 Annual Report 2022-23</h5>
                        <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>

                <div class="hot-new">
                    <div class="image-newss image-new2">
                        <img src={Begins} style={{height : 280}} />
                    </div>
                    <div class="tile-new2 text-start">
                       <h5>Countdown Begins: Brisbane Celebrates Nine-Year 
                        <br/>Mark to 2032 Summer Olympics</h5>
                        <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>
            </div>

            <div class="new-hot2">
            <div class="hot-new">
                    <div class="image-newss">
                        <img src={gootoo}  />
                    </div>
                    <div class="tile-new2 text-start">
                      <h6>Brisbane 2032 Olympics Marks Nine-Year Milestone
                        <br/> with Grand Celebrations</h6>
                    </div>
                </div>

                <div class="hot-new">
                    <div class="image-newss">
                        <img src={gootoo}  />
                    </div>
                    <div class="tile-new2 text-start">
                       <h6>9 years to go to Brisbane 2032</h6>
                       <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>

                <div class="hot-new">
                    <div class="image-newss">
                        <img src={Sign}  />
                    </div>
                    <div class="tile-new2 text-start">
                        <h6>Sign up here to be the first to know Brisbane 2032
                            <br/> news</h6>
                        <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>
            </div>

            <div class="new-hot2">
            <div class="hot-new">
                    <div class="image-newss">
                        <img src={gootoo}  />
                    </div>
                    <div class="tile-new2 text-start">
                        
                    </div>
                </div>

                <div class="hot-new">
                    <div class="image-newss">
                        <img src={Press}  />
                    </div>
                    <div class="tile-new2 text-start">
                        <h6>Press release: Brisbane 2032 Legacy Planning 
                            <br/>Consultation Begins</h6>
                            <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>

                <div class="hot-new">
                    <div class="image-newss">
                        <img src={Pitch} />
                    </div>
                    <div class="tile-new2 text-start">
                        <h6>Australia's Victoria to host 2026 Commonwealth 
                            <br/>Games </h6>
                            <p>Brisbane 2032 | Olympic Games</p>
                    </div>
                </div>
            </div>

            <div class="main-information">
                <div class="captionnn">
                    <h1 class="text-start  fw-bold" style={{fontSize : 60}}>ABOUT THE
                        <br/>GAMES</h1>
                </div>
                <div class="main_content ">
                    <p class="text-start fst-normal " style={{fontSize : 19}}>
                    Brisbane and Queensland are ready to welcome the world in 2032.
                    <br/>
                <br/>Australia has a love affair with the Olympic Games, reflected in the fact that we
                <br/>have sent athletes to every modern Olympic Games. Now we have Australia’s
                <br/>third opportunity to host the world’s greatest sporting event and we intend to
                <br/>build on the innovation and successes of Sydney 2000 and Melbourne 1956.
                    <br/>
                <br/>What really excites Australians is the opportunity for our children, for sport, and
                <br/>of course to show off our beautiful country. Fans can expect unbeatable sports
                <br/>experiences in 37 world-class venues, set against a backdrop of iconic
                <br/>beachfronts, breath-taking rural hinterland and exciting cities rich in culture and
                <br/>entertainment.
                    <br/>
                <br/>And Australia has a decade of major international sporting events coming here
                <br/>in the lead-up to the Brisbane 2032 Olympic and Paralympic Games. Whether
                <br/>it’s the FIBA Women’s World Cup in basketball (2022), UCI Road World
                <br/>Championships in cycling (2022) or the FIFA Women’s World Cup in football in
                <br/>2023, Australia knows how to put on a great show in a way that puts athletes
                <br/>first and gives fans the experience of a lifetime.
                    <br/>
                <br/>Our Olympic family of sports, with more than nine million participants, can now
                <br/>plan ahead and take advantage of this ten-year “green and gold” runway that
                <br/>precedes the Brisbane 2032 Olympic Games. And for our First Nations people,
                <br/>there will be possibilities for a new generation of kids leading into 2032 and the
                <br/>positive impact of empowering young people now and in the period beyond. A
                <br/>new generation of Cathy Freemans awaits.
                    <br/>
                <br/>Brisbane is a special place. It will host a memorable and exciting Games and
                <br/>the world will be welcome.
                    <br/>
                <br/>We thank the Members of the International Olympic Committee for entrusting
                <br/>us with this great responsibility.
                    <br/>
                <br/>The Brisbane 2032 Olympic and Paralympic Games. History beckons.
                    <br/>
                <br/><h3>Dates</h3>
                <br/>Olympic Games 23 July to 8 August 2032
                    <br/>
                <br/>Paralympic Games 24 August to 5 September 2032
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Brisbane;