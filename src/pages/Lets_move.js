import React from 'react';
import '../styles/lets_move.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logochallenge from '../assets/logochallenge.jpg'
import { Meetwinners, Textletmove } from '../compound_code/Textletmove';


function Letsmove() {
  return (
    <div className="App">
      <div className="background-image">
        <img src={logochallenge} alt="logo" className="" />
        <div>
        <h1 className='font-text '  style={{ marginBottom: '60px' }}>STREET CHALLENGE</h1>
        </div>
        <div>
        <h1 className='font-text'  style={{ marginTop: '75px' }}>AWARDS SHOW</h1>
        </div>
        <div className='winners-text'>
        <p>Who are the winners of the Street Challenge? (re)watch the show to find out!</p>
        <a href='https://olympics.com/en/video/street-challenge-awards-show'>
        <button className="custom-button" >Watch Show Replay ⇨ </button>
        </a>
       </div>
      </div>
      <div>
        <Textletmove/>
      </div>
      <div>
        <Meetwinners/>
      </div>
    </div>
  );
}



export default Letsmove;