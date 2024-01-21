import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Statisstic.css'
import quanlify from '../assets/quanlify.jpg'
import wayde from '../assets/weydevan.jpg'
import shericka from '../assets/shericka.jpg'
import shacarri from '../assets/shacarri.jpg'
import panams from '../assets/panams.jpg'
import kipegon from '../assets/kipegon.jpg'

function Statistic () {
    return (
        <div className="table-container">
            <div className='world-record'>
              <br/>
                <p>#OLYMPICS STATISTICS WORLD RECORD IN RUNNING</p>
            </div>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Perf</th>
              <th>Wind</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Venue</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
           <tr>
            <td>100 Metres</td>
            <td>10.61</td>
            <td>-0.6</td>
            <td>Elaine THOMPSON-HERAH</td>
            <td>28 JUN 1992</td>
            <td>Women</td>
            <td>Jamaica (JAM)</td>
            <td>National Stadium, Tokyo (JPN)</td>
            <td>31 JUL 2021</td>
           </tr>

           <tr className='bg'>
            <td>200 Metres</td>
            <td>21.34</td>
            <td>+1.3</td>
            <td>Florence GRIFFITH-JOYNER</td>
            <td>21 DEC 1959</td>
            <td>Women</td>
            <td>United States (USA)</td>
            <td>Olympic Stadium, Jamsil, Seoul (KOR)</td>
            <td>29 SEP 1988</td>
           </tr>

           <tr>
            <td>400 Metres</td>
            <td>48.25</td>
            <td></td>
            <td>Marie-José PÉREC</td>
            <td>09 MAY 1968</td>
            <td>Women</td>
            <td>France (FRA)</td>
            <td>Olympic Stadium, Atlanta, GA (USA)</td>
            <td>29 JUL 1996</td>
           </tr>

           <tr className='bg'>
            <td>100 Metres</td>
            <td>9.63</td>
            <td>+1.5</td>
            <td>Usain BOLT</td>
            <td>21 AUG 1986</td>
            <td>Men</td>
            <td>Jamaica (JAM)</td>
            <td>Olympic Stadium, London (GBR)</td>
            <td>05 AUG 2012</td>
           </tr>

           <tr>
            <td>400 Metres</td>
            <td>43.03</td>
            <td></td>
            <td>Wayde VAN NIEKERK</td>
            <td>15 JUL 1992</td>
            <td>Men</td>
            <td>South Africa (RSA)</td>
            <td>Estádio Olímpico, Rio de Janeiro (BRA)</td>
            <td>14 AUG 2016</td>
           </tr>
           
           <tr className='bg'>
            <td>800 Metres</td>
            <td>1:53.43</td>
            <td></td>
            <td>Nadezhda OLIZARENKO</td>
            <td>28 NOV 1953</td>
            <td>Women</td>
            <td>Moscow (URS)</td>
            <td>Lenin Stadium, Moskva (URS)</td>
            <td>27 JUL 1980</td>
           </tr>

           <tr>
            <td>800 Metres</td>
            <td>1:40.91</td>
            <td></td>
            <td>David RUDISHA</td>
            <td>17 DEC 1988</td>
            <td>Men</td>
            <td>Kenya (KEN)</td>
            <td>Olympic Stadium, London (GBR)</td>
            <td>09 AUG 2012</td>
           </tr>

           <tr className='bg'>
            <td>1500 Metres</td>
            <td>3:28.32</td>
            <td></td>
            <td>Jakob INGEBRIGTSEN</td>
            <td>19 SEP 2000</td>
            <td>Men</td>
            <td>Norway (NOR)</td>
            <td>National Stadium, Tokyo (JPN)</td>
            <td>07 AUG 2021</td>
           </tr>

           <tr>
            <td>1500 Metres</td>
            <td>3:53.11	</td>
            <td></td>
            <td>Faith KIPYEGON</td>
            <td>10 JAN 1994</td>
            <td>Women</td>
            <td>Kenya (KEN)</td>
            <td>National Stadium, Tokyo (JPN)</td>
            <td>06 AUG 2021</td>
           </tr>

           <tr className='bg'>
            <td>3000 Metres</td>
            <td>8:26.53</td>
            <td></td>
            <td>Tatyana SAMOLENKO</td>
            <td>12 AUG 1961</td>
            <td>Women</td>
            <td>Moscow (URS)</td>
            <td>Olympic Stadium, Jamsil, Seoul (KOR)</td>
            <td>25 SEP 1988</td>
           </tr>

           <tr>
            <td>5000 Metres</td>
            <td>14:26.17</td>
            <td></td>
            <td>Vivian Jepkemei CHERUIYOT</td>
            <td>11 SEP 1983</td>
            <td>Women</td>
            <td>Kenya (KEN)</td>
            <td>Estádio Olímpico, Rio de Janeiro (BRA)</td>
            <td>19 AUG 2016</td>
           </tr>

           <tr className='bg'>
            <td>5000 Metres</td>
            <td>12:57.82</td>
            <td></td>
            <td>Kenenisa BEKELE</td>
            <td>13 JUN 1982</td>
            <td>Men</td>
            <td>Switzerland (ETH)</td>
            <td>National Stadium, Beijing (CHN)</td>
            <td>23 AUG 2008</td>
           </tr>

           <tr>
            <td>10,000 Metres</td>
            <td>27:01.17</td>
            <td></td>
            <td>Kenenisa BEKELE</td>
            <td>13 JUN 1982</td>
            <td>Men</td>
            <td>Switzerland (ETH)</td>
            <td>National Stadium, Beijing (CHN)</td>
            <td>17 AUG 2008</td>
           </tr>

           <tr className='bg'>
            <td>100 Metres Hurdles</td>
            <td>12.26</td>
            <td>-0.2</td>
            <td>Jasmine CAMACHO-QUINN</td>
            <td>21 AUG 1996</td>
            <td>Women</td>
            <td>Puerto Rico (PUR)</td>
            <td>National Stadium, Tokyo (JPN)</td>
            <td>01 AUG 2021</td>
           </tr>

           <tr>
            <td>3000 Metres Steeplechase</td>
            <td>8:58.81</td>
            <td></td>
            <td>Gulnara SAMITOVA-GALKINA</td>
            <td>09 JUL 1978</td>
            <td>Women</td>
            <td>Russian (RUS)</td>
            <td>Olympic Stadium, Athina (GRE)</td>
            <td>28 AUG 2004</td>
           </tr>

           <tr className='bg'>
            <td>High Jump</td>
            <td>2.39</td>
            <td></td>
            <td>Charles AUSTIN</td>
            <td>19 DEC 1967</td>
            <td>Men</td>
            <td>United States (USA)</td>
            <td>Olympic Stadium, Atlanta, GA (USA)</td>
            <td>28 JUL 1996</td>
           </tr>

           <tr>
            <td>Pole Vault</td>
            <td>6.03</td>
            <td></td>
            <td>Thiago BRAZ</td>
            <td>16 DEC 1993</td>
            <td>Men</td>
            <td>Brazil (BRA)</td>
            <td>Estádio Olímpico, Rio de Janeiro (BRA)</td>
            <td>15 AUG 2016</td>
           </tr>

           <tr className='bg'>
            <td>Long Jump</td>
            <td>8.90</td>
            <td>+2.0</td>
            <td>Bob BEAMON</td>
            <td>29 AUG 1946</td>
            <td>Men</td>
            <td>United States (USA)</td>
            <td>Estadio Olímpico, Ciudad de México (MEX)</td>
            <td>18 OCT 1968</td>
           </tr>

           <tr>
            <td>Triple Jump</td>
            <td>18.09</td>
            <td>-0.4</td>
            <td>Kenny HARRISON</td>
            <td>13 FEB 1965</td>
            <td>Men</td>
            <td>United States (USA)</td>
            <td>Olympic Stadium, Atlanta, GA (USA)</td>
            <td>27 JUL 1996</td>
           </tr>

           <tr className='bg'>
            <td>Shot Put</td>
            <td>22.41</td>
            <td></td>
            <td>Ilona SLUPIANEK</td>
            <td>24 SEP 1956</td>
            <td>Women</td>
            <td>German Democratic Republic (GDR)</td>
            <td>Lenin Stadium, Moskva (URS)</td>
            <td>24 JUL 1980</td>
           </tr>

           <tr>
            <td>Discus Throw</td>
            <td>72.30</td>
            <td></td>
            <td>Martina HELLMANN</td>
            <td>12 DEC 1960</td>
            <td>Women</td>
            <td>German Democratic Republic (GDR)</td>
            <td>Olympic Stadium, Jamsil, Seoul (KOR)</td>
            <td>29 SEP 1988</td>
           </tr>

           <tr className='bg'>
            <td>20 Kilometres Race Walk</td>
            <td>1:25:16</td>
            <td></td>
            <td>Shijie QIEYANG</td>
            <td>11 NOV 1990</td>
            <td>Women</td>
            <td>China (CHN)</td>
            <td>Olympic Stadium, London (GBR)</td>
            <td>11 AUG 2012</td>
           </tr>

           <tr>
            <td>Heptathlon</td>
            <td>7291</td>
            <td></td>
            <td>Jackie JOYNER-KERSEE</td>
            <td>03 MAR 1962</td>
            <td>Women</td>
            <td>United States (USA)</td>
            <td>Olympic Stadium, Jamsil, Seoul (KOR)</td>
            <td>24 SEP 1988</td>
           </tr>
          </tbody>
        </table>
            <div class="sta_images">
              <div class="images_sta">
                <div class="sta_image">
                  <img src={quanlify} style={{height : 370 , width : 750 , borderRadius : "2%"}}/>
                </div>
                <div class="sta_image">
                <img src={wayde} style={{height : 370 , width : 400 , borderRadius : "2%"}}/>
                </div>
              </div>

              <div class="images_sta">
                <div class="sta_image">
                <img src={shericka} style={{height : 370 , width : 400 , borderRadius : "2%"}}/>
                </div>
                <div class="sta_image">
                <img src={shacarri} style={{height : 370 , width : 750 , borderRadius : "2%"}}/>
                </div>
              </div>

              <div class="images_sta">
                <div class="sta_image">
                  <img src={panams} style={{height : 370 , width : 750 , borderRadius : "2%"}}/>
                </div>
                <div class="sta_image">
                <img src={kipegon} style={{height : 370 , width : 400 , borderRadius : "2%"}}/>
                </div>
              </div>
               
            </div>
        
      </div>
    )
}

export default Statistic;