import React, { useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Athletes.css';
import Athletes_json from '../styles/Athletes.json';
import search from '../assets/search.png'
import { Link } from "react-router-dom";


function Athletes () {
    return (
        <div className="Athletes">
            <br></br>
            <div class="Athletes-text">
                <h1 class="fw-bold">ATHLETES</h1>
            </div>
            <br/>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search for an athlete " aria-label="Search" id="search"/>
                <button class="btn" type="submit"><img src={search} class="click"/></button>
             </form>

           
             <div class="row">
                    {
                        Athletes_json && Athletes_json.map( Athletes_json  => {
                            return (

                            
                                <div class="col-sm-3 mb-3 mb-sm-0">
                                    <div class="" >
                                     <div class="" style={{marginBottom:70}}>
                                            <Link to={Athletes_json.links}>  <img src={Athletes_json.image} alt="" class="image_youfrom" /> </Link>
                                            <div className="">
                                                <br/>
                                                <h5 class="card-title ">{Athletes_json.name}</h5>
                                                <br/>
                                                <p class="card-text">{Athletes_json.subject_country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            )
                        } )
                    }
          </div>

        </div>
    );
}

export default Athletes;
