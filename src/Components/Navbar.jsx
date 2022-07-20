import React, {useState} from "react";
import {NavLink} from "react-router-dom";


function Navbar(){
  const[hamBurger, setCLose] = useState(true); 

  function click(){
    setCLose((prevalue)=>!prevalue);
  }

    return(
        <div>
            <nav class="navbar navbar-expand-lg py-0 navbar-edit">
                <div class="container-fluid px-0">
                    <a class="navbar-brand ms-5" href="#">
                      <img src="./Space-project-react/assets/shared/logo.svg" alt="logo"/>
                    </a>
                    <button class="navbar-toggler" onClick = {click} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span className={hamBurger ? "navbar-toggler-icon ham" : "navbar-toggler-icon close"}></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav  ms-auto navbar-highlight">
                            <li class="nav-item navbar-text"> 
                              <NavLink to="/home">00 &nbsp; HOME</NavLink>
                            </li>
                            <li class="nav-item navbar-text">
                              <NavLink to="/destination">01 &nbsp; DESTINATION</NavLink>
                            </li>
                            <li class="nav-item navbar-text"> 
                              <NavLink to="/crew">02 &nbsp; CREW</NavLink>
                            </li>
                            <li class="nav-item navbar-text">
                              <NavLink to="/technology">03 &nbsp; TECHNOLOGY</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <hr class="horizontal-line"/>
        </div>
    )
}

export default Navbar;
