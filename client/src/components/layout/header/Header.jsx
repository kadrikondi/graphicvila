import React, { Component } from "react";
import VisitorNavbar from "./Navbar/VisitorNavbar";
import UserNavBar from "./Navbar/UsersNavBarHeader";

import "./Header.css";


export default class Header extends Component {

  componentWillMount(){
    

  const token = window.localStorage.getItem("token");
  if (token) {
    return (
      <div>
        <UserNavBar />
      </div>
    );
  }else{
    return (
      <div className="App-header h">
        <VisitorNavbar />
      </div>
    );
  }
  
}
async componentWillUpdate(){
  
  const token =  await window.localStorage.getItem("token");
  if (token) {
    return (
      <div>
        <UserNavBar />
      </div>
    );
  } else {
    return (
      <div className="App-header h">
        <VisitorNavbar />
      </div>
    );
  }
}
  render() {
    const token = window.localStorage.getItem("token");
    if (token) {
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

  



