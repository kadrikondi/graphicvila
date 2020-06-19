import React, { Component } from "react";
import Logo from "../../../asset/img/logo.png";
import { Link } from "react-router-dom";

export class VisitorNavbar extends Component {
  render() {
    return (
      <div>
        {/* Header section */}
        <header id="header">
          <div className="container main-menu">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <Link to="/">
                  <img src={Logo} alt="graphicvila" title />
                </Link>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                  <li>
                    <Link to="/signin">SignIn</Link>
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

export default VisitorNavbar;
