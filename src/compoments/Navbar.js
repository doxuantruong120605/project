import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';
import Home from "../pages/Home";
import logo from '../assets/logo.png';
import sign_in from '../assets/sign_in.png';
import search from '../assets/search.png';


function Navbar () {
    return (
        <div className="navbar">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <Link class="navbar-brand" to="/">
              <img src={logo} alt="logo" width="87" height="40"  />
              </Link>

              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <Link class="nav-link active dropdown-toggle" to="Olympic_game" id="navbarDropdownMenuLink" role="button"  aria-expanded="false">
                      Olympic Games 
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link to='Athletes' class="nav-link active">Athletes</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Sports" class="nav-link active" >Sports</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="News" class="nav-link active" >News</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Olympic_channel" class="nav-link active" >Olympic Channel</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Let_Move" class="nav-link active" >Let`s Move</Link>
                  </li>
                </ul>
             </div>
             <Link class="navbar-brand" to="#">
                <img src={search} alt="logo" width="30" height="30"/>
              </Link>

              <Link class="navbar-brand" to="#" style={{fontSize : 16}}>
                 <img src={sign_in} width="35" height="35" class="d-inline-block align-top" alt="" />
                  
              </Link> 
            </div>
          </nav>

        </div>
    );
}

export default Navbar;