import React, { Component } from "react";
import { getOneUserA } from "../../../apidata/api";
import Logo from '../../../asset/img/logo.png'

import { userProfile } from "../../../apidata/api";
import { Link } from "react-router-dom";


let id = "ok";

export default class UsersNavBarHeader extends Component {
  constructor() {
    super();
    this.state = {
      logOut: "",
      usertoken: "",
      id: ""
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  async componentWillMount() {
    const id = await JSON.parse(localStorage.getItem("userId"));
    if (id) {
      this.setState({ id: id });
    }
  }
  async handleLogout() {
    await localStorage.removeItem("token");
    await window.localStorage.clear();
    await this.setState({ usertoken: null });
  }

  render() {
    const { id } = this.state;
    const style = {
      backgroundColor: "#fff",
      padding: "0px",
      zIndex: "1",
      width: "100%",
      marginTop: "0px",
      position: "fixed",
      borderWidth: "0px  0px 2px 0px",
      borderStyle: "inset",
      borderColor: "#1b1f5c"

      // "#1b1f5c
    };
    const linkcolor = {
      color: "#000"
    };
    const dropdown = {
      color: "black"
    };

    return (
      <div className="navbar navbar-expand-sm  mb-5" style={style}>
        <a
          className="navbar-brand ml-5  primary"
          href="/"
          style={{
            fontSize: "1.5em",
            color: "",
            fontWeight: "bold"
          }}
        >
        <img src={Logo} alt=""/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ color: "blue", backgroundColor: "#f2f2f2" }}
          >
            {" "}
            &#9776;
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className=" nav-link" style={linkcolor} to="/dashboard">
                Home
              </Link>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link className=" nav-link" style={linkcolor} to="/projects">
                Project feed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={linkcolor} to="/userdash">
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={linkcolor}
              >
                <i className="fa fa-user" /> Profile{" "}
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-info"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <Link
                  to={`/profile/${id}`}
                  className="dropdown-item list-link"
                  href="#"
                  style={dropdown}
                >
                  My account
                </Link>
                <hr style={{ padding: "0px", margin: "0px" }} />
                <Link
                  to="/"
                  className=" dropdown-item list-link "
                  onClick={this.handleLogout}
                >
                  &nbsp;Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="clearfix"></div> */}
      </div>
    );
  }
}
