import React, { Component } from "react";
import Logo from '../../asset/img/logo.png'
import { Link } from "react-router-dom";

export class header extends Component {
  render() {
    return (
      <div>
        {/* Header section */}
        <header id="header">
          <div className="container main-menu">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <a href="index.html">
                  <img src={Logo} alt="" title />
                </a>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="/register">SignUp</a>
                  </li>
                  <li>
                    <a href="/signin">SignIn</a>
                  </li>
                
                 
                  
                </ul>
              </nav>
              {/* #nav-menu-container */}
            </div>
          </div>
        </header>
        {/* #header */}
      </div>
    );
  }
}

export default header;
