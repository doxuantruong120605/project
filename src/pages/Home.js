import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import Opening from "../compoments/Opening";


function Home () {
    return( 
      <div className="home">
            <div>
            
            <h3 class="text-center">Olympic Games Paris 2024

          <p style={{fontSize : 16}}> 26 July - 11 August, 2024</p></h3>
          </div>
          <br></br>

          <div id="banner">
              <div class="box-left">
                <p>26Jul - 11Aug</p>
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

          <div class="contai-text">
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
            <h1 class="text-start text-wrap  fw-bold " style={{fontSize : 50}}># Olympic Opening Ceremony</h1>
          </div>
            <br/>
          <div>
            <Opening />
          </div>
          <br/>




      </div>
    );
}

export default Home;

