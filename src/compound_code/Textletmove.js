import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Textletmove.css';
import smith from '../assets/smith.jpg'
import miharu from '../assets/miharu.jpg'
import streetbmx from '../assets/streetbmx.mp4'
import michael from '../assets/michael.jpg'
import neuner from '../assets/neuner.jpg'
import wolrdwide from '../assets/wolrdwide.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import streetshow from '../assets/streetshow.jpg'
import finaljudge from '../assets/finaljudge.jpg'


function Textletmove() {
    return (
      <div className="Text-moving">
      <div className='Information row'>
        <div className="col-md-6">
          <h1 className='Keepmoving' style={ { marginLeft : 70}}>#LET'S KEEP M0VING!</h1>
        </div>
        <div className="col-md-6">
          <div className='text-sm-start'  style={ { marginRight : 70}}>
            <p>We inspired over 15 million people from all corners of the world to move on Olympic Day!</p>
            <p>This is just the beginning. Let's Move is not one moment in time; it is our ongoing invitation to everyone, everywhere, every day to embrace the joy of movement and an active lifestyle.</p>
            <p><strong>Keep moving</strong> and join our next Let's Move activation - <strong>The Street Challenge</strong>
              - a global digital competition, inviting you to show your passion for urban sports and creativity for a chance to win amazing prizes.
            </p>
            <p>
              Show us your moves at Olympics.com/street-challenge and share on Social media with <strong>#streetchallenge</strong> <strong>#letsmoveMeet</strong> the winners
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }

function Meetwinners() {
  return (
    <div className='All-info'>
    <div className='text-left'>
      <h1 className='Meetwinner' style={{ marginBottom: '20px' }}>#MEET THE WINNERS</h1>
    </div>
      <div className='Profile' style={{ marginTop: '30px' }}>
        <div className='Smith'>
          <img src={smith} alt="profile" className="" />
          <p className='bxmsmith'>BMX</p>
          <div className="profilename-smith">
          <p className="profile-names mb-0" style={{marginLeft : 70}}>Melville Smith (USA)</p>
          <p className='text-secondary mt-0' style={{marginLeft : 70}}>Freestyle Park - Men</p>
          <p className="watch-video" style={{marginLeft : 70}}>Watch video </p>
          </div>
        </div> 
        <div className='Profile' style={{ marginTop: '-510px' }}>
      <div className='Miharu'>
        <img src={miharu} alt="profile" className="" />
          <p className='bxmmiharu'>BMX</p>
          <p className="profile-name mb-0" style={{marginRight : 420}}>Miharu Ozawa (JPN)</p>
          <div className='profilemiharu text-sm-start' style={{marginLeft : 762}}>
          <p className='text-secondary mt-0'>Freestyle Park Women</p>
          <p className="watch-video ">Watch video </p>
          </div>
      </div>
      </div>
      </div>
      <div className='profile2'>
        <div className='Michael'>
          <img src={michael} alt="profile" className="andrewimg" />
          <p className='bxmsmith'>BMX</p>
          <p className="profile-name mb-0" style={{marginLeft : 70}}>Michael Andrew (NZL)</p>
          <div className='profilename-michael'>
          <p className='text-secondary mt-0' style={{marginLeft : 70}}>Freestyle Park - Men</p>
          <div className='watchvideo'>
          <p className="watch-video" >Watch video </p>
          </div>
          </div>
        </div>
      </div>
      <div className='Profile' style={{ marginTop: '-510px' }}>
      <div className='Eleonora'>
        <img src={neuner} alt="profile" className="" />
          <p className='bxmmiharu'>BMX</p>
          <p className="profile-name mb-0" style={{ fontSize: '23px', marginRight : 425}}>Michelle Neuner (SUI)</p>
          <div className='profilemiharu text-sm-start' style={{marginLeft : 760}}>
          <p className='text-secondary mt-0'>Freestyle Park Women</p>
          <p className="watch-video ">Watch video </p>
          </div>
      </div>
      </div>




      <div className="black-square">
      <Container fluid>
        <Row>
          <Col md={6}>
            <img src={wolrdwide} alt="Your Image" className='wolrdimg' />
          </Col>
          <Col md={6} className="right-section">
            <div className="info" style={{}}>
              <div className='bigtext'>
                <p style={{ fontSize: '70px'}}>CHECK OUT All</p>
                <p className='text1' style={{ fontSize: '70px'}}>STREET</p>
                <p className='text2' style={{ fontSize: '70px'}}>CHALLENGE</p>
                <p className='text3' style={{ fontSize: '70px'}}>VIDEOS</p>
              </div>
              <div className='tinitext'>
                <p>
                The Street Challenge might be over, but you can still watch
                the thousands of videos submitted throughout the
                competition now. Get inspired to get moving through the
                three urban sports, creative categories, and insane tricks
                that are on display. It's now your turn to try one of these
                sports before watching the pros in Paris 2024!
                </p>
              </div>
              <div>
              <a href='https://olympics.com/en/lets-move/street-challenge/gallery/watch-and-vote'>
              <button class="custom-buttons">Watch Now  ↗</button>
              </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='startnow'>
        <p>START NOW #LETSMOVE</p>
      </div>
      <div className='arrowdown'>
        <p> ⇩ </p>
      </div>
    </div>
     <div className="video-container">
        <video src={streetbmx} autoPlay loop muted >
        </video>
     </div>
     <div className='somenews'> 
     <p>WATCH SOME #NEWS</p>
     </div>
     <div className='newsinfo'>
      <div className='image-container'>
        <img src={streetshow} alt="Your Image" className='streetshow' />
        </div>
        <div className='somenewstext'>
        <p className='showinfo'>
        Let's Move Street Challenge Awards Show: 21 winners in 
        <br></br>
        BMX freestyle, breaking and skateboarding announced
        </p>
        </div>
        <div className='dual-container'>
          <div className='images-container'>
           <img src={finaljudge} alt="Your Other Image" className='finaljudge' />
          </div>
          <div className='somenewstext'>
            <p className='showinfos'>
            Let's Move, let's watch, let's vote: Final
            <br />
            chance to judge the BMX, skate, and
            <br></br>
            breaking entries in the Let's Move Street
            <br></br>
            Challenge
            </p>
          </div>
        </div>
     </div>
   </div>
  );
}


export { Textletmove, Meetwinners };