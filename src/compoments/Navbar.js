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
                      <li><Link class="dropdown-item" to="Brisbane">Brisbane 2032</Link></li>
                      <li><Link class="dropdown-item" to="La">LA 2028</Link></li>
                      <li><Link class="dropdown-item" to="Dakar">Dakar 2026</Link></li>
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
                    <Link to="History" class="nav-link active" >History</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="Statistics" class="nav-link active" >Statistics</Link>
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