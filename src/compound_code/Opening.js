import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Opening_1 from '../assets/opening_1.jpg';
import Opening_2 from '../assets/Opening_2.jpg';
import Opening_3 from '../assets/Opening_3.jpg';

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
      <div style={{marginTop : 15}}>
        <p style={{fontSize : 20}} ><b>DESCRIPTION</b>: The images above are some of the most beautiful images that show us the excitement and beauty of the Olympics here. The Olympics are not only a place for competition between national players but also a place to bond the friendship of countries around the world, promote friendly global cooperation and develop together...
​</p>
      </div>
    </div>
  );
}

export default Opening;