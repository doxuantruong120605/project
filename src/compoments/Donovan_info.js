import React from "react";
import ReactDOM from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../infomationcss/Donovan_info.css';
import donovan from '../assets/donovan.jpg';
import loena from '../assets/leona.jpg';
import navajo from '../assets/navajo.png';
import alpine from '../assets/alpine.jpg';
import logo_batketball from '../assets/logo_batketball.jpg';
import { Link } from "react-router-dom";




function Donovan_info ()  {

    return (
       

        <div class="donovan">
            <div class="title_donovan">
                <h1 class="text-start fw-normal" style={{fontSize : 55}}>Donovan Mitchell resolute on competing for 
                    <br/>Team USA at Paris2024: “That’s the goal”</h1>
            </div>
            <div class="new_donovan">
                <h2 class='text-start text-secondary' style={{color : "GrayText"}}>Ahead of the NBA Paris Game 2024, the four-time</h2>
                    <h2 class='text-start text-secondary' style={{marginTop : 15 , color : "GrayText"}}>NBA All-Star made clear his ambition to compete at </h2>
                    <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>the Paris Olympics for USA Basketball: “We’ve got</h2> 
                    <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>to go out there and defend our gold”. </h2>
            </div>
            <div class='batketball'>
            <div class='batket'>
                <div class="logo_bat">
                <img src={logo_batketball} style={{width : 70 , height : 70}}/>
                </div>
                <div class='title_bat'>
                    <p style={{fontSize : 30}}>Batketball</p>
                </div>
            </div>
            </div>
            <div class='image_donovan'>
                <img src={donovan} style={{width : 1200}}/>
            </div>

            <div class='donovan_new'>
                <div class='new_donovan'>
                    <p class="text-start" style={{fontSize : 20}}>Cleveland Cavalier <b>Donovan Mitchell</b> is ready to commit to Team 
                        <br/>USA for the <b>Paris 2024 Olympics</b>.
                        <br/>
                        <br/>In France's City of Light for the <b>NBA Paris Game 2024</b> where the 
                        <br/>Cavs take on the Brooklyn Nets in a regular season matchup, the 27-
                        <br/>year-old four-time NBA All-Star reiterated his hopes to return to 
                        <br/>compete for <b>USA Basketball</b> the Olympics later this year:
                        <br/>
                        <br/>“That’s the goal,” Mitchell told media on Wednesday. “That’s the goal: 
                        <br/>come back here and be here this summer for sure.”
                        <br/>
                        <br/>The Cavs star was on the list of 'finalists' for selection to the US 
                        <br/>Olympic Men’s Basketball team for <b>Tokyo 2020</b>, in 2021, but was 
                        <br/>ultimately not a part of the group that claimed gold in Japan.
                        <br/>
                        <br/>He had previously represented USA at the <b>2019 FIBA World Cup </b>
                        <br/>where the team recorded their worst-ever finish at the global 
                        <br/>showpiece, concluding the tournament in seventh place.
                        <br/>
                        <br/>“It means the world to play for Team USA. You know, to be 
                        <br/>able to be a part of that, to represent your country.
                        <br/>
                        <br/>“The memory I have is losing; we lost. We lost to France and Serbia, 
                        <br/>so I would love to find a way to bounce back and get the gold."
                        <br/>
                        <br/>Just as with the Tokyo campaign, USA will be on another redemption 
                        <br/>mission come Paris having once again missed out on the medals at 
                        <br/>the <b>2023 FIBA World Cup</b>.
                        <br/>
                        <br/>Under Coach Steve Kerr, the Americans were <b>defeated by 
                        <br/>Germany</b> in the semi-finals before, being <b>beaten to bronze by 
                        <br/>Canada</b> in the third-place play-off.
                        <br/>
                        <br/>With rumours swirling that <b>LeBron James</b> is assembling a crop of 
                        <br/>NBA stars to restore USA Basketball’s image and defend their 
                        <br/>Olympic gold in Paris, the speculation surrounding the team is 
                        <br/>already high.
                        <br/>
                        <br/>But even with the highest calibre of player on board, there is a feeling 
                        <br/>the task for the US at the Games won’t be so simple. Mitchell 
                        <br/>highlighted the challenge but also his, and Team USA’s willingness, 
                        <br/>to embrace it:
                        <br/>
                        <br/>“You’ve got Spain, Serbia, you’ve got Canada really playing well, you 
                        <br/>know, so it's going to be tough. It's not going to be easy. But you 
                        <br/>know I think we're up for the challenge. We’ve got to go out there and 
                        <br/>defend our gold.”

                        
                    </p>
                </div>
                <div class='other_news'>
                        <div class='related_content'>
                            <h3 class='text-start'>Related content</h3>
                        </div>
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

                    <Link style={{textDecoration : "none", color : "black"}}> <div class='news_other'>
                        <div class='other_image'>
                            <img src={navajo} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='textst title_other'>
                            <p class='text-start'>
                            16-year-old Native 
                            <br/>American boxer MariahBahe: 
                            <br/>"My biggest dream is to win
                            <br/>  at the Olympics"
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
                </div>
            </div>

        </div>
    );
}

export default Donovan_info;




