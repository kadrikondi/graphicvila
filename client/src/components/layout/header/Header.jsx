import React, { Component } from "react";
import VisitorNavbar from "./Navbar/VisitorNavbar";
import UserNavBar from "./Navbar/UsersNavBarHeader";
import { Link } from "react-router-dom";
import "./Header.css";


export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      token: false
    }
  }

componentWillMount(){
  const token = window.localStorage.getItem("token");
  if(token) {
    this.setState({ token: true})
  }
  // if (token) {
  //   return (
  //     <div>
  //       <UserNavBar />
  //     </div>
  //   );
  // }else{
  //   return (
  //     <div className="App-header h">
  //       <VisitorNavbar />
  //     </div>
  //   );
  // }
  
}

  render() {
    if (this.state.token === true) {
      return (
        <div>
          <UserNavBar />
        </div>
      );
    }
    return (
      <div className="App-header h">
        <VisitorNavbar />
      </div> 
      
    )
  }
}

  



