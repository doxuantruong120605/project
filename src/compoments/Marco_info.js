import React from "react";
import ReactDOM from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import donovan from '../assets/donovan.jpg';
import loena from '../assets/leona.jpg';
import navajo from '../assets/navajo.png';
import alpine from '../assets/alpine.jpg';
import logo_alpine from '../assets/logo_alpine.jpg';
import { Link } from "react-router-dom";
import '../infomationcss/Marco_info.css';




function Marco_info ()  {

    return (
       

        <div class="marco">
            <div class="title_marco">
                <h1 class="text-start fw-normal" style={{fontSize : 55}}>
                Alpine ski World Cup 23/24: Marco Odermatt 
                <br/>wins Wengen classic downhill as Kilde 
                <br/>crashes out - Results
                </h1>
            </div>
            <div class="new_marco">
                <h2 class='text-start text-secondary' style={{color : "GrayText"}}>The Olympic giant slalom champion secured back-</h2>
                    <h2 class='text-start text-secondary' style={{marginTop : 15 , color : "GrayText"}}>to-back downhill wins on the Lauberhorn to further </h2>
                    <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>extend his overall World Cup lead. </h2> 

            </div>
            <div class='alpine_skiing'>
            <div class='alpine'>
                <div class="logo_bat">
                <img src={logo_alpine} style={{width : 70 , height : 70}}/>
                </div>
                <div class='title_bat'>
                    <p style={{fontSize : 30}}>Alpine Skiing</p>
                </div>
            </div>
            </div>
            <div class='image_marco'>
                <img src={alpine} style={{width : 1200}}/>
            </div>

            <div class='marco_new'>
                <div class='new_marco'>
                    <p class="text-start" style={{fontSize : 20}}>
                    Two days after claiming his first Alpine Skiing World Cup downhill 
                    <br/>win, <b>Marco Odermatt</b> won again at Wengen on Saturday (13 
                    <br/>January) to delight a feverish home crowd.
                    <br/>
                    <br/>Unlike Thursday's shortened course, this was the <b>classic 
                    <br/>Lauberhorn downhill</b> - the longest race on the World Cup circuit – 
                    <br/>with the Swiss sensation expertly navigating his way down one of ski 
                    <br/>racing's stiffest tests.
                    <br/>
                    <br/>Odermatt - wearing start bib number eight - was the epitome of 
                    <br/>poise, stopping the clock in 2:25.64 to go into the lead by more than 
                    <br/>two seconds.
                    <br/>
                    <br/>Next up was Cyprien Sarrazin who won Friday's Super G after his 
                    <br/>Thursday downhill second behind Odermatt.
                    <br/>
                    <br/>The Frenchman gave it a good go but was 0.59 off the pace and had 
                    <br/>to settle for second again.
                    <br/>
                    <br/>Last year's winner and reigning World Cup downhill champion 
                    <br/>Aleksander Aamodt Kilde crashed in sight of the finish line after 
                    <br/>getting out of shape on the fast turns in the bottom section.
                    <br/>
                    <br/>The Norwegian just about managed to sit up shortly after the fall. He 
                    <br/>had his right knee strapped before being airlifted to hospital.
                    <br/>
                    <br/>After a delay of around 20 minutes, Dominik Paris of Italy moved into 
                    <br/>third place to take the final spot on the podium but was well over a 
                    <br/>second behind the front two.
                    <br/>
                    <br/>Odermatt, 26, has confirmed his status as the world's best male 
                    <br/>alpine skier with his first two World Cup downhill triumphs coming 
                    <br/>after he won the World Championship downhill in Courchevel last 
                    <br/>year.
                    <br/>
                    <br/>"From my side, it was the perfect performance and a dream come 
                    <br/>true winning the 'real' Lauberhorn downhill. It was my biggest goal of 
                    <br/>the season," Odermatt told the FIS afterwards.
                    <br/>
                    <br/>"But to see Aleks (Kilde) like this makes me sad and not enjoy the 
                    <br/>victory that much. So it is a bittersweet day."
                    <br/>
                    <br/>He now tops the World Cup standings in downhill, giant slalom and 
                    <br/>Super G. His overall World Cup lead is now a massive 552 points 
                    <br/>with nearest rival <b>Marco Schwarz</b> ruled out for the season after 
                    <br/>injuring his knee in last month's Bormio downhill. Sarrazin is now just 
                    <br/>four points behind the Austrian in third place.
                    <br/>
                    <br/>The extended four-race weekend at Wengen – after two downhill 
                    <br/>races and a Super G – will come to an end on Sunday with the men’s 
                    <br/>slalom.

                        
                    </p>
                </div>
                <div class='other_news'>
                        <div class='related_content'>
                            <h3 class='text-start'>Related content</h3>
                        </div>
                    <Link style={{textDecoration : "none", color : "black"}}><div class='news_marco_other'>
                       
                        <div class='other_image'>
                            <img src={donovan} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='title_other'>
                            <p class='textst_marco text-start'>
                            Donovan Mitchell resolute on 
                            <br/>competingfor Team USA at 
                            <br/>Paris 2024: “That’s the goal”
                            </p>
                        </div>
                    </div></Link>

                    <Link style={{textDecoration : "none", color : "black"}}> <div class='news_marco_other'>
                        <div class='other_image'>
                            <img src={navajo} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='textst_marco title_other'>
                            <p class='text-start'>
                            16-year-old Native 
                            <br/>American boxer MariahBahe: 
                            <br/>"My biggest dream is to win
                            <br/>  at the Olympics"
                            </p>
                        </div>
                    </div></Link>

                    <Link  to="Leona_info" style={{textDecoration : "none", color : "black"}}><div class='news_other'>
                       
                       <div class='other_image'>
                           <img src={loena} style={{height : 90 , width : 90}}/>
                       </div>
                       <div class='title_other'>
                           <p class='textst text-start'>
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

export default Marco_info;




