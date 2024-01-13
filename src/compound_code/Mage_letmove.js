import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logochallenge from '../assets/logochallenge.jpg';


function image_letmove() {
  return (
    <div className="App">
      <div className="background-image">
        <img src={logochallenge} alt="logo" className="" />
        <div>
        <h1 className='font-text '  style={{ marginBottom: '60px' }}>STREET CHALLENGE</h1>
        </div>
        <div>
        <h1 className='font-text '  style={{ marginTop: '75px' }}>AWARDS SHOW</h1>
        </div>
        <div className='winners-text'>
        <p>Who are the winners of the Street Challenge? (re)watch the show to find out!</p>
        <a href='https://olympics.com/en/video/street-challenge-awards-show'>
        <button className="custom-button" >Watch Show Replay ⇨ </button>
        </a>
       </div>
      </div>
    </div>
  );
}



export default image_letmove;