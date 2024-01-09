import React, { useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Athletes.css';
import Athletes_json from '../styles/Athletes.json';


function Athletes () {
    return (
        <div className="Athletes">
            <br></br>
            <div class="Athletes-text">
                <h1>ATHLETES</h1>
            </div>
           

          {
            Athletes_json && Athletes_json.map( Athletes_json  => {
                return (

                <div>    
                    <div class>
                    <div class>
                        <img src={Athletes_json.image} alt="" class="image_youfrom" />
                        <div class="">
                            <br/>
                            <h5>{Athletes_json.name}</h5>
                            <br/>
                            <p>{Athletes_json.subject_country}</p>
                        </div>
                    </div>
                    </div>
                </div>
                )
            } )
          }

        </div>
    );
}

export default Athletes;
