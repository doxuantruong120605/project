import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import Opening from "../compound_code/Opening";
import donovan from '../assets/donovan.jpg';
import leona from '../assets/leona.jpg';
import ellis from '../assets/ellis.jpg';
import kilde from '../assets/kilde.jpg';
import the_gem from '../assets/the_gem.png';
import streetbmx from '../assets/streetbmx.mp4';
import alpine from '../assets/alpine.jpg';
import navajo from '../assets/navajo.png';
import introduce from '../assets/introduce.jpg';
import Originals1 from '../assets/Originals1.jpg';
import Originals2 from '../assets/Originals2.jpg';
import Originals3 from '../assets/Originals3.jpg';
import Originals4 from '../assets/Originals4.jpg';
import Originals5 from '../assets/Originals5.jpg';
import Originals6 from '../assets/Originals6.jpg';
import milano26 from '../assets/milano26.jp.jpg';
import la28 from '../assets/la28.jpg';
import brisbane32 from '../assets/brisbane32.jpg';
import CountdownTime from '../compound_code/CountdownTime';
import { Link } from "react-router-dom";



function Home () {
    return( 
      <div className="home">
            <div>
            <br/>
                <CountdownTime/>
          </div>
          <br></br>

          <div id="banner">
              <div class="box-left">
                <p style={{fontSize : 25}} >26Jul - 11Aug</p>
                  <h1 style={{fontSize : 100}} class="fw-bold fst-italic">
                      <span>PARIS</span>
                      <br/>
                      <span>2024</span>
                  </h1>
              </div>
          </div>

          <div class="contai">
            <img src={logo} alt="Your Image" class="image"/>
            <div class="text">
                <h2 style={{fontSize : 100}} class="fw-bold fst-italic">
                  NEXT
                  <br></br>
                  GAMES
                </h2>
          </div>
          </div>
          <hr></hr>

          <div class="">
          <h1 class="text-center">Olympic</h1>
            <div>
              <p class="text-center ">
                Competition in many sports between countries around the world.<br></br>
                The Olympics include the Summer Olympics and Winter Olympics held<br></br>
                alternately every 2 years (in even years). This is a sports festival<br></br>
                that is not only a physical competition but also symbolizes the spirit<br></br>
                of solidarity and peace of all humanity.<br></br>

                The Olympics originated from ancient Greek sports competitions from 776 BC<br></br> 
                until Roman Emperor Theodosius I banned them in 394.[4] And the modern Olympics<br></br>
                were first organized by French Baron Pierre Frèdy de Coubertin at the end of the<br></br>
                19th century. The International Olympic Committee (IOC) became the governing body<br></br>
                of the Olympic Movement, with the Olympic Charter determine its structure and authorities.<br></br>

                The Summer Olympics have been held every four years since 1896, except in years of world wars<br></br> 
                (such as World War II).<br></br>

                The Winter Olympics were established in 1924 for winter sports. Initially it was held in the<br></br>
                same year as the Summer Olympics, but since 1994, the Winter Olympics and Summer Olympics have <br></br>
                taken place alternately every two years.<br></br>
              </p>
          </div>
          </div>
              
          <div>
            <h1 class="caption text-start text-wrap fw-bold" style={{fontSize : 50}}># Opening Ceremony</h1>
          </div>
            <br/>
          <div>
            <Opening />
          </div>
          <br/>

          <div>
            <h1 class="caption text-start text-wrap  fw-bold " style={{fontSize : 50}}># Focus Point</h1>
          </div>
          <br/>

          <div class="focus_point">
           <div class="container1">
            
            <Link to="Donovan_info" style={{ textDecoration : "none"}}><div class="imagenew image1">
              <img src={donovan} class="" style={{width : 440 , height : 270 }}   />
              <div class="attention_title1">
                <br/>
                <h3 class="new text-sm-start fw-normal"  style={{color : "black" }}>Donovan Mitchell resolute on competing
                <br/>for Team USA at Paris 2024: “That’s the
                <br/> goal” 
                </h3>
              </div>
            </div></Link> 
            </div>

        <Link to="Leona_info" style={{ textDecoration : "none" }}>
            <div class="container1">
              <div class="imagenew ">
                <img src={leona} style={{width : 720}} />
                <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal" style={{color :'black'}}>ISU European Figure Skating Championships 2024: Loena 
                  <br/> Hendrickx leads Belgian one-two in short program
                  </h3>
                </div>
              </div>
            </div></Link>
          </div>

          <div class="focus_point2">
           <div class="container2">
            <div class="imagenew ">
              <img src={ellis} class="image2"/>
              <div class="attention_title1">
                <br/>
                <h3 class="new text-sm-start fw-normal" >Anatomy of a Badminton Player:
                <br/> Is Marcus Ellis One of the Fittest
                <br/> Olympians?
                </h3>
              </div>
            </div>
            </div>

            <div class="container2">
              <div class="imagenew ">
                <img src={kilde} class="image2"/>
                <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal">Aleksander Aamodt Kilde suffers
                   <br/> heavy Wengen downhill crash,
                   <br/>  airlifted to hospital
                  </h3>
                </div>
              </div>
            </div>

            <div class="container2">
              <div class="imagenew ">
                <img src={the_gem} class="image2"/>
                <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal">
                    Meet the players who are 
                    <br/>elevating the game
                    <br/> and inspiring Esports` new 
                     <br/>generation to level up
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div class="focus-point3">
              <div class="container3">
                <div class="imagenew">
                <video src={streetbmx} autoPlay loop muted class="image2"/>
                  <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal">
                    The great skill shows of a foreign
                    <br/>guy show us the class of a
                    <br/>cycling artist
                  </h3>
                </div>
                </div>
              </div>

              <Link to='Marco_info' style={{ textDecoration : "none" }}><div class="container3">
                <div class="imagenew">
                <img src={alpine} class="image2"/>
                  <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal" style={{color : 'black'}}>
                    Alpine ski World Cup 23/24:
                    <br/>Marco Odermatt wins Wengen
                    <br/>classic downhill as Kilde crashes
                    <br/>out - Results
                  </h3>
                </div>
                </div>
              </div></Link>


           <Link to='Mariah_info' style={{ textDecoration : "none" }}>
              <div class="container3">
                <div class="imagenew">
                  <img src={navajo} class="image2"/>
                  <div>
                  <br/>
                  <h3 class="new text-sm-start fw-normal" style={{color : "black"}}>
                   16-year-old Navajo boxer
                   <br/>Mariah Bahe í fighting against
                   <br/>all odds to become the first
                   <br/>female Native American
                   <br/>Olympic boxer
                  </h3>
                </div>
                </div>
              </div></Link>
          </div>

          <div class="information" >
            <div class="infor text-start ">
              <h1 class="text_infor" >
                     PARIS 2024 
                <br/>OFFICIAL 
                <br/>HOSPITALITY
              </h1>
              <p class="infor_text" style={{fontSize : 19.5}} >Attend the Olympic Games like never before with <b>Paris 
                <br/>2024 Official Hospitality Packages.</b> 
                <br/>Use your @Visa, the Official Way to Pay</p>
              <button type="button" class="buton btn btn-dark" >Learn More</button>
            </div>
            <div class="infor_image">
              <img src={introduce} />
            </div>
          </div>

          <div class="originals_spotlight">
            <h1 class="text text-start">Originals in the spotlight</h1>
          <div class="originals">
            <div class="spotlight">
              <img src={Originals1} class="image_originals"/>
            </div>
            <div class="spotlight">
              <img src={Originals2} class="image_originals"/>
            </div>
            <div class="spotlight">
              <img src={Originals3} class="image_originals"/>
            </div>
            <div class="spotlight">
              <img src={Originals4} class="image_originals"/>
            </div>
            <div class="spotlight">
              <img src={Originals5} class="image_originals"/>
            </div>
            <div class="spotlight">
              <img src={Originals6} class="image_originals"/>
            </div>
            </div>
          </div>

          <div class="decan">
            <div class="decan_image">
              <img src={milano26} />
            </div>
            <div  class="decan_image">
              <img src={la28} />
            </div>
            <div  class="decan_image">
              <img src={brisbane32} />
            </div>
          </div>


         

          

          

          




      </div>
    );
}

export default Home;

