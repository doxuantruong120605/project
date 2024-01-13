import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opening_1 from '../assets/opening_1.jpg'
import Opening_2 from '../assets/opening_2.jpg';
import Opening_3 from '../assets/opening_3.jpg';

const Openings = {
  width: '100%',
  height: "600px",
  objectFit: 'cover',
};



function Opening() {
  return (
    <div id="carouselExampleIndicators" style={{marginLeft : '50px' , marginRight : '50px'}} className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Opening_1} style={Openings} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Opening_2} style={Openings} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Opening_3} style={Openings} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Opening;