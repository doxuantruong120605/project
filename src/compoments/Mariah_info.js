import React from "react";
import ReactDOM from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import donovan from '../assets/donovan.jpg';
import loena from '../assets/leona.jpg';
import Mariah from '../assets/Mariah.jpg';
import alpine from '../assets/alpine.jpg';
import logo_boxing from '../assets/logo_boxing.jpg';
import { Link } from "react-router-dom";
import '../infomationcss/Mariah_info.css';




function Mariah_info ()  {

    return (
       

        <div class="mariah">
            <div class="title_mariah">
                <h1 class="text-start fw-normal" style={{fontSize : 55}}>
                16-year-old Native American boxer Mariah 
                <br/>Bahe: "My biggest dream is to win at the 
                <br/>Olympics"
                </h1>
            </div>
            <div class="new_mariah">
                <h2 class='text-start text-secondary' style={{color : "GrayText"}}>Olympic Channel's original film 'Mariah: A Boxer's</h2>
                <h2 class='text-start text-secondary' style={{marginTop : 15 , color : "GrayText"}}>Dream' focuses on the teenager’s Olympic mission </h2>
                <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>to become the first boxer from Navajo Nation to win</h2> 
                <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>a medal at the Games.</h2> 
            </div>
            <div class='alpine_skiing'>
            <div class='alpine'>
                <div class="logo_bat">
                <img src={logo_boxing} style={{width : 70 , height : 70}}/>
                </div>
                <div class='title_bat'>
                    <p style={{fontSize : 30}}>Boxing</p>
                </div>
            </div>
            </div>
            <div class='image_mariah'>
                <img src={Mariah} style={{width : 1200}}/>
            </div>

            <div class='mariah_new'>
                <div class='new_mariah'>
                    <p class="text-start" style={{fontSize : 20}}>
                    <b>Mariah Bahe</b> knows what it takes to have an entire community on 
                    <br/>her back.
                    <br/>
                    <br/>Born and raised in a small town of the Navajo Nation, the largest 
                    <br/>Indian reservation in the United States, the teenager started boxing 
                    <br/>competitively when she was only eight.
                    <br/>
                    <br/>Now she wants to become the first female Native American to 
                    <br/>compete in the Olympic Games at <b>Paris 2024.</b>
                    <br/>“My dream is to be there and compete there and say I've been there,” 
                    <br/>she told the Olympic Channel. “But my biggest dream is to win at the 
                    <br/>Olympics.”
                    <br/>
                    <br/>Bahe, the youngest of five children, inherited the boxing genes.
                    <br/>
                    <br/>Her four brothers boxed at the Damon-Bahe Boxing Gym following a 
                    <br/>long boxing tradition that began with their great grandfather.
                    <br/>
                    <br/>When she was five, she convinced her father and trainer- <b>John 
                    <br/>Calvin</b> Bahe Jr.- to let her train at the family gym, one of the few 
                    <br/>boxing clubs in the vast reservation located across Arizona, Utah and 
                    <br/>New Mexico.

                        
                    </p>
                </div>
                <div class='other_news'>
                        <div class='related_content'>
                            <h3 class='text-start'>Related content</h3>
                        </div>
                    <Link style={{textDecoration : "none", color : "black"}}><div class='news_mariah_other'>
                       
                        <div class='other_image'>
                            <img src={donovan} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='title_other'>
                            <p class='textst_mariah text-start'>
                            Donovan Mitchell resolute on 
                            <br/>competingfor Team USA at 
                            <br/>Paris 2024: “That’s the goal”
                            </p>
                        </div>
                    </div></Link>

                    <Link style={{textDecoration : "none", color : "black"}}> <div class='news_other'>
                        <div class='other_image'>
                            <img src={alpine} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='title_other'>
                            <p class='textst text-start'>
                            Alpine ski World Cup 23/24: 
                            <br/>Marco Odermatt wins Wengen 
                            <br/>classic downhill as Kilde 
                            <br/>crashes out - Results
                            </p>
                        </div>
                    </div></Link>

                    <Link  to="Leona_info" style={{textDecoration : "none", color : "black"}}><div class='news_other'>
                       
                       <div class='other_image'>
                           <img src={loena} style={{height : 90 , width : 90}}/>
                       </div>
                       <div class='title_other'>
                           <p class='textst_mariah text-start'>
                           ISU European Figure Skating 
                           <br/>Championships 2024: Loena 
                           <br/>Hendrickx leads Belgian 
                           <br/>one-two in short program
                           </p>
                       </div>
                   </div></Link>
                </div>
            </div>

        </div>
    );
}

export default Mariah_info;




