import React from "react";
import VisitorNavbar from "./Navbar/VisitorNavbar";
import UserNavBar from "./Navbar/UsersNavBarHeader";

import "./Header.css";

const Header = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return (
      <div>
        <UserNavBar />
      </div>
    );
  }
  else return(
    <div className="App-header h">
      <VisitorNavbar />
    </div>
  );
};

export default Header;
