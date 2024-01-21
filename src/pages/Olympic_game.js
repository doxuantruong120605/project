import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Olympic_game.css';
import paris24 from '../assets/paris24.jpg';
import milano26 from '../assets/milano26.jp.jpg';
import la28 from '../assets/la28.jpg';
import brisbane32 from '../assets/brisbane32.jpg';
import youth from '../assets/youth.jpg';
import para from '../assets/para.jpg';





function Olympic_game () {
    return (
        <div class="olympic-game">
        <div class="olympic_game">

            <div class="tille">
                <h1 style={{fontSize : 75}} class=" fw-bold text-start">OLYMPIC
                    <br/>
                    GAMES
                </h1>
            </div>
            <div class="text-contain">
                <p style={{fontSize : 28}} class="fw-bold text-start">
                The Olympic Games are the world's only truly
                <br/>global, multi-sport, celebratory athletics
                <br/>competition. With more than 200 countries
                <br/>participating in over 400 events across the
                <br/>Summer and Winter Games, the Olympics are
                <br/>where the world comes to compete, feel inspired,
                <br/>and be together.
                </p>
            </div>
        </div>

            <div>
                <h1 class="fw-bold text-start" style={{paddingLeft : 50 , marginBottom : 30}} >Future Games</h1>
            </div>

            <div id="banner">
              <div class="box-left">
                <p style={{fontSize : 25}} >26Jul - 11Aug</p>
                  <h1 style={{fontSize : 100}} class="fw-bold fst-italic">
                      <span>PARIS</span>
                      <br/>
                      <span>2024</span>
                  </h1>
              </div>
              <div class="box-reight">
                <img src={paris24}  class="images"/>
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

          <div>
            <h1 class="text-start font-monospace fw-bold" style={ {fontSize : 75 , marginLeft : 38}} >
             AROUND GAMES
            </h1>
          </div>

            <div class="around-games">
            <div class="around" >
            <div class="around-1">
                <h1 class="text text-start fw-bold">RESULTS</h1>
            </div>
            <div class="around-2">
                <h1 class="text text-start fw-bold">REPLAYS</h1>
            </div>
          </div>

          <div class="around" >
            <div class="around-3">
                <h1 class="text text-start fw-bold">TORCHES</h1>
            </div>
            <div class="around-4">
                <h1 class="text text-start fw-bold">ANCIENT GAMES</h1>
            </div>
          </div>

          <div class="around" >
            <div class="around-5">
                <h1 class="text text-start fw-bold">MASCOTS</h1>
            </div>
            <div class="around-6">
                <h1 class="text text-start fw-bold">MEDAL
                    <br/>DESIGN
                </h1>
            </div>
          </div>
            </div>

          <div class="introduce" >
            <div class="introdution text-start ">
              <h1 class="text_intro" >
              YOUTH OLYMPIC
              <br/>GAMES
              </h1>
              <br/>
              <p class="intro_text" style={{fontSize : 18}} >
              The Youth Olympic Games are an international sports,
              cultural, and educational event for talented young 
              athletes.
              </p>
              <br/>
              <button type="button" class="butonn btn btn-dark text-start" >Learn more about Youth Olympic</button>
            </div>
            <div class="indotruction_image">
              <img src={youth} style={{width : 680 , height : 395}}/>
            </div>
          </div>

          <div class="newspaper">
            <div class="para-image">
              <img src={para} style={{width : 680 , height : 395}} />
            </div>
            <div class="para-text text-start ">
              <h1 class="text_intro" >
              PARALYMPIC GAMES
              </h1>
              <br/>
              <p class="intro_text" style={{fontSize : 18}} >
              The Paralympic Games provide a platform for Para
              <br/>athletes with a diverse range of impairments to
              <br/>showcase their outstanding abilities to millions of
              <br/>spectators and billions of TV viewers.
              </p>
              <br/>
              <button type="button" class="butonn btn btn-dark text-start" >Learn more at Parelympic.Org</button>
            </div>

          </div>



      
        </div>
    );
}

export default Olympic_game;