import React from "react";
import ReactDOM from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import donovan from '../assets/donovan.jpg';
import loena from '../assets/leona.jpg';
import navajo from '../assets/navajo.png';
import alpine from '../assets/alpine.jpg';
import logo_figure from '../assets/logo_figure.jpg';
import { Link } from "react-router-dom";
import '../infomationcss/Leona_info.css';




function Loena_info ()  {

    return (
       

        <div class="loena">
            <div class="title_loena">
                <h1 class="text-start fw-normal" style={{fontSize : 55}}>
                ISU European Figure Skating Championships 
                <br/>2024: Loena Hendrickx leads Belgian one-two 
                <br/>in short program
                </h1>
            </div>
            <div class="new_loena">
                <h2 class='text-start text-secondary' style={{color : "GrayText"}}>Hendrickx takes an advantage of almost five points</h2>
                    <h2 class='text-start text-secondary' style={{marginTop : 15 , color : "GrayText"}}>into the free skate from compatriot Nina Pinzarrone </h2>
                    <h2 class='text-start text-secondary'  style={{marginTop : 15 , color : "GrayText"}}>with reigning champion Anastasiia Gubanova third. </h2> 

            </div>
            <div class='figure_skating'>
            <div class='figure'>
                <div class="logo_bat">
                <img src={logo_figure} style={{width : 70 , height : 70}}/>
                </div>
                <div class='title_bat'>
                    <p style={{fontSize : 30}}>Figure Skating</p>
                </div>
            </div>
            </div>
            <div class='image_loena'>
                <img src={loena} style={{width : 1200}}/>
            </div>

            <div class='donovan_new'>
                <div class='new_loena'>
                    <p class="text-start" style={{fontSize : 20}}>
                    <b>Loena Hendrickx</b> is on track to better her silver from 12 months ago 
                    <br/>after taking the short program at the <b>2024 ISU European</b> Figure 
                    <br/>Skating <b>Championships</b> in Kaunas, Lithuania on Thursday (11 
                    <br/>January).
                    <br/>
                    <br/>The two-time world medallist scored 74.66 inside the <b>Žalgiris Arena</b> 
                    <br/>after landing a triple flip, double Axel and triple Lutz-triple toeloop in 
                    <br/>her crowdpleasing skate which included a segment in front of the 
                    <br/>judges.
                    <br/>
                    <br/>Despite a quarter-call on the Lutz in her closing combination, she will 
                    <br/>take a comfortable lead into Saturday's free skate.
                    <br/>
                    <br/>Her closest challenger is fellow Belgian <b>Nina Pinzarrone</b> who had 
                    <br/>the short program of her life.
                    <br/>
                    <br/>The 17-year-old from Brussels bettered her effort from last month's 
                    <br/>Grand Prix Final as she landed a triple Lutz-triple toeloop, double 
                    <br/>Axel and triple loop for a new career-best score of 69.70 which held 
                    <br/>the lead until Hendrickx took over.
                    <br/>
                    <br/>The 36 skaters were split into six groups of six ending with the 
                    <br/>favourites. 
                    <br/>
                    <br/>Despite being the first skater in group four, former Swiss champion 
                    <br/><b>Livia Kaiser </b>scored a personal best 66.31 to take the lead which she 
                    <br/>would hold until the final group.
                    <br/>
                    <br/>After a disappointing season so far, reigning champion <b>Anastasiia 
                    <br/>Gubanova</b> returned to form as she landed a triple flip-triple toeloop 
                    <br/>combination, double Axel and triple Lutz in a clean routine.
                    <br/>
                    <br/>The Georgian scored 68.96 to end the day in third place behind the 
                    <br/>two Belgians.  
                    <br/>
                    <br/>Last year's surprise bronze medallist <b>Kimmy Repond</b> fell on her 
                    <br/>triple Lutz and finished the day down in eighth place on 60.34.
                    <br/>
                    <br/>Polish champion <b>Ekaterina Kurakova</b>, fourth 12 months ago, was 
                    <br/>last to skate but fell on her combination and exceeded the time limit 
                    <br/>for her routine.
                    <br/>
                    <br/>Her score of 49.57 was only good enough for 25th place meaning 
                    <br/>she missed out on the free skate by one spot.

                        
                    </p>
                </div>
                <div class='other_news'>
                        <div class='related_content'>
                            <h3 class='text-start'>Related content</h3>
                        </div>
                    <Link style={{textDecoration : "none", color : "black"}}><div class='news_loena_other'>
                       
                        <div class='other_image'>
                            <img src={donovan} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='title_other'>
                            <p class='textst_loena text-start'>
                            Donovan Mitchell resolute on 
                            <br/>competingfor Team USA at 
                            <br/>Paris 2024: “That’s the goal”
                            </p>
                        </div>
                    </div></Link>

                    <Link style={{textDecoration : "none", color : "black"}}> <div class='news_loena_other'>
                        <div class='other_image'>
                            <img src={navajo} style={{height : 90 , width : 90}}/>
                        </div>
                        <div class='textst_loena title_other'>
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
                        <div class='title_loena_other'>
                            <p class='textst_loena text-start'>
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

export default Loena_info;




